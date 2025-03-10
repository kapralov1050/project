<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="registration-form">
        <div class="form-group">
            <label>Имя:</label>
            <input v-model="formData.name" type="text" required>
        </div>
        
        <div class="form-group">
            <label>Фамилия:</label>
            <input v-model="formData.surname" type="text" required>
        </div>

        <div class="form-group">
            <label>Email:</label>
            <input v-model="formData.email" type="email" required>
        </div>

        <div class="form-group">
        <label> У тебя есть шлем?</label> 
        <input type="checkbox" v-model="formData.helmetAv">
        </div>

        <button type="submit" class="submit-button" @click="RegistrationStore.registrUser(formData)" >Завершить регистрацию</button>
        <div class="spinner"></div> 
    </form>
  </div>
</template>



<script setup>
import router from '@/router'
import {ref} from 'vue'
import { useRegistrationStore } from '@/store/registrationStore'

const RegistrationStore = useRegistrationStore()




const formData = ref({
    name: '',
    surname: '',
    email: '',
    helmetAv: false
})

</script>




<style scoped>

.registration-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f5f6fa;
    border-radius: 10px;
    
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {

    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.submit-button {
    background-color: #2ed573;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

.submit-button:hover {
  background-color: #26af5f;
}
</style>