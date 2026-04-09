import { defineStore } from 'pinia'
import axios from 'axios'

export const mainStore = defineStore('mainStore', {
    state: () => ({
        api: 'http://localhost:3000/api',
        token: localStorage.getItem('token') || null,
        user: null
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
                
            } catch (error) {
                console.log(error.response.data.error)
                if (error.response.data.error = 'Email is repeated') {
                    alert('Ushbu Email mavjud!')
                }
            }
        },

        async login(data) {
            try {
                const res = await axios.post(this.api + '/auth/login', data)

                this.token = res.data.token
                this.user = res.data.user

                localStorage.setItem('token', this.token)

                this.setAuthHeader()
                
                console.log(res.data);
                
            } catch (error) {
                console.log(error.response?.data)
            }
        },

        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        },

        setAuthHeader() {
            if (this.token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            }
        },
        
    }
})