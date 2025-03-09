<template>
  <div>
   <section class="about-race">
    <p>Добро пожаловать на ежегодную велогонку «ВелоЮжа» в городе Южа!

15 сентября 2024 года любителей велоспорта ждут захватывающие трассы: от семейных маршрутов через сосновые леса и берега озера Вазаль до экстремальных 40 км с подъемами для профессионалов. Юные участники преодолеют 5 км в парковой зоне, а все гонщики получат стартовые пакеты, доступ к зонам отдыха и поддержку медиков на дистанции. После заезда вас ждет фестиваль с музыкой, мастер-классами и ярмаркой ремесел, где можно отпраздновать финиш в кругу единомышленников.

Успейте зарегистрироваться до 1 сентября со скидкой 20% — участников ждут спецноминации, розыгрыш велосипеда и экскурсии по историческому центру Южи. Для иногородних гостей действуют скидки на проживание, а часть средств от гонки пойдет на озеленение города. Присоединяйтесь к традиции, которая объединяет спорт, природу и добрые дела!

Крутите педали к новым впечатлениям — ваше приключение начинается здесь!</p>
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