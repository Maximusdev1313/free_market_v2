import axios from 'axios'
import { defineStore } from 'pinia'

import router from '@/router'

export const adminStore = defineStore('adminStore', {
    state: () => ({
        api: 'http://localhost:3000/api',
        token: localStorage.getItem('token') || null,
        user: null,
        company: null,
       user: localStorage.getItem('user') || null,
        
    }),

    actions: {
        async getCompany(userId) {
            
            try {
                const user = JSON.parse(this.user)
                console.log(user.id, 'user');
                const res = await axios.post(this.api + '/companies/companybyid', user)

                this.company = res.data
                console.log(this.company);
                
            }
            catch(error){
                console.log(error);
                
            }
        }
    }
})
