import { defineStore } from "pinia";
import { ref } from "vue";
import router from '@/router'

export const useRegistrationStore = defineStore('registration', () => {
    const participants = ref([])
    const currentUser = ref(null)
    const loading = ref(false)
    const error = ref(null)

    async function registrUser(userData) {
        try{
            loading.value = true
            await new Promise(resolve => setTimeout(resolve, 1500))
            currentUser.value = {...userData, id:Date.now()}
            participants.value.push(currentUser.value)
            console.log(participants.value)
            alert('Регистрация пройдена успешно')
            router.push('/')
        } catch(err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
        
    }

    return {participants, currentUser, loading, error, registrUser}
})