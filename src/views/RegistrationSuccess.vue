<template>
  <div class="container">
    <div class="success-message">
        <h2>Регистрация успешна!</h2>
        <p>Ваш стартовый номер: <strong>#{{ registrationStore.currentUser?.id }}</strong></p>
        <router-link :to="{name: 'dashboard'}"
        class="dashboard-button"
        >
        Перейти в личный кабинет
    </router-link>
    </div>
  </div>
</template>



<script setup>
import { useRegistrationStore } from '@/store/registrationStore';
import router from '@/router'

const registrationStore = useRegistrationStore()


</script>




<style scoped>
.success-message{
    text-align: center;
    padding:40px;
    background: #ecf5ff;
    border-radius: 10px;
    margin-top: 40px;
}

.dashboard-button {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 30px;
    background: #076b52;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

.dashboard-button:hover {
    background: #26af5f;
}
</style>