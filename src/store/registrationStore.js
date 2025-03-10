import { defineStore } from "pinia";
import { ref } from "vue";
import router from '@/router'

export const useRegistrationStore = defineStore('registration', () => {
    const participants = ref([])
    const currentUser = ref(null)
    const loading = ref(false)
    const error = ref(null)
    let lastId = 0

    function generateUserId() {
        return Date.now() + lastId++
    }

    async function registrUser(userData) {
        try{
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 1000))
            const newUser  = {
                ...userData, 
                id:generateUserId(),
                registrationDate: new Date().toISOString()
            }

            currentUser.value = newUser
            participants.value.push(newUser)
            router.push('/registration-success')

        } catch(err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
        
    }

    return {participants, currentUser, loading, error, registrUser}
})