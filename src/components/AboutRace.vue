<template>
  <div>
   <section class="about-race">
    <h2> О гонке</h2>
    <div class="race-info">
        <p>Дата: {{ raceDate }}</p>
        <p>Место: {{ location }}</p>
        <p>Дистанция: {{ distance }} км</p>
    </div>

    <div class="features">
        <div v-for="feature in features" :key="index" class="feature-item">
            <img :src="feature.icon" :alt="feature.title"/>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
        </div>
    </div>
</section>
  </div>
</template>



<script setup>
import {ref} from 'vue'

const raceDate = ref('15 июля 2025')
const location = ref('г. Южа')
const distance = ref(20)

const features = ref([
    {title: 'Призы',
     icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqHoedbsBxo4rclfAGsGh5n-sKBqcH1DjTw&s',
     description: 'Ценные призы для победителей'
  },
  {
    title: 'Профессиональный хронометраж',
    icon: 'https://cdn-icons-png.flaticon.com/512/2786/2786746.png',
    description: 'Точное измерение результатов'
  },
  {
    title: 'Карта трассы',
    icon: 'https://i.pinimg.com/736x/86/57/e5/8657e5077a7a746124744f119f937141.jpg',
    description: 'Подробная карта маршрута'
  }
])
</script>




<style scoped>
.race-info {
    display: flex;
    justify-content: space-around;
    color: red;
    
}

p {
    font-size: 1.5em;
}

.about-race {
    padding:50px 20px;
    text-align: center;
}

.features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
}

.feature-item {
    width: 300px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.feature-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}
</style>