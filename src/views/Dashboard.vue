<template>
    <AppHeader />
  <div class="container">
    <div class="dashboard">
        <h2>Личный кабинет участника #{{ user?.id }}</h2>
        <div class="user-info">
            <div class="user-block">
                <h3>Основная информация</h3>
                <p>Имя: {{ user?.name }}</p>
                <p>Фамилия: {{ user?.surname }}</p>
                <p>Email: {{ user?.email }}</p>
                <p>Велосипедный шлем: {{user?.helmetAv === true ? 'Есть' : 'Нет' }}</p>
            </div>

        <div class="race-info">
            <h3> Информация о гонке</h3>
            <p>Стартовый номер: #{{ user?.id }}</p>
            <p>Дата гонки: {{ raceStore.date}}</p>
            <p>Место проведения: {{ raceStore.location }}</p>
        </div>
        </div>
    </div>
  </div>
  <AppFooter />
</template>



<script setup>
import {computed} from 'vue';
import { useRegistrationStore } from '@/store/registrationStore';
import { useRaceStore } from '@/store/raceStore';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

const registrationStore = useRegistrationStore()
const raceStore = useRaceStore()

const user = computed(() => registrationStore.currentUser)
const formattedDate = computed(() => {
    new Date(user.value?.registrationDate).toLocaleDateString('ru-RU')
})

</script>




<style scoped>
.container {
    margin: 300px 0;
}
.dashboard {
    background: rgb(214, 255, 252);
    padding: 30px;
    margin: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.3);
}
.user-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top:30px;
}
.user-block, .race-info {
    padding: 20px;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 8px;
}
h3 {
    color: #2d3436;
    margin-bottom: 15px;
}

</style>