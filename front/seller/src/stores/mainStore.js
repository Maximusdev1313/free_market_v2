import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export const mainStore = defineStore('mainStore', {
    state: () => ({
        api: 'http://localhost:3000/api',
        token: localStorage.getItem('token') || null,
        user: null,
        isLogin: true,
        notifications: [],
        notificationTimeouts: {}
    }),

    actions: {
        async register(data) {
            try {
                const res = await axios.post(this.api + '/auth/register', data)

                this.token = res.data.accessToken
                this.user = res.data.user

                localStorage.setItem('token', this.token)

                this.setAuthHeader()
                console.log(res.data);
                this.setNotification('Hisob yaratildi', 'success')
                this.isLogin = true
            } catch (error) {
                console.log(error.response.data.error)
                this.setNotification(error.response?.data.error, 'error')
            }
        },

        async login(data) {
            try {
                const res = await axios.post(this.api + '/auth/login', data)

                this.token = res.data.token
                this.user = res.data.user

                localStorage.setItem('token', this.token)
                localStorage.setItem('user', JSON.stringify(this.user))

                this.setAuthHeader()
                router.push('/')
                console.log(res.data);
                
            } catch (error) {
                console.log(error.response?.data)
                this.setNotification(error.response?.data.error, 'error', 5000)
            }
        },

        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            location.reload()
        },

        setAuthHeader() {
            if (this.token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                return true
            }
        },
        
        // set notification
        setNotification(message, type = 'info', duration = 3000) {
            const id = Date.now() + Math.random()
            
            const notification = {
                id,
                message,
                type
            }
            if (this.notifications.some(n => n.message === message)) return

      this.notifications.push(notification)

      // auto remove
      if (duration !== 0) {
        const timeout = setTimeout(() => {
          this.removeNotification(id)
        }, duration)

        this.notificationTimeouts[id] = timeout
      }
      if (this.notifications.length > 2) {
        this.notifications.shift()
        }

      return id
    },

    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)

      // clear timeout if still exists
      if (this.notificationTimeouts[id]) {
        clearTimeout(this.notificationTimeouts[id])
        delete this.notificationTimeouts[id]
      }
    },

    clearAllNotifications() {
      // clear all timers
      Object.values(this.notificationTimeouts).forEach(clearTimeout)

      this.notificationTimeouts = {}
      this.notifications = []
    }
        
    }
})