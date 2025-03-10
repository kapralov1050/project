<template>
  <div>
   <section class="about-race">
    <p>Добро пожаловать на ежегодную велогонку «ВелоЮжа» в городе Южа!

15 сентября 2024 года любителей велоспорта ждут захватывающие трассы: от семейных маршрутов через сосновые леса и берега озера Вазаль до экстремальных 40 км с подъемами для профессионалов. Юные участники преодолеют 5 км в парковой зоне, а все гонщики получат стартовые пакеты, доступ к зонам отдыха и поддержку медиков на дистанции. После заезда вас ждет фестиваль с музыкой, мастер-классами и ярмаркой ремесел, где можно отпраздновать финиш в кругу единомышленников.

Успейте зарегистрироваться до 1 сентября со скидкой 20% — участников ждут спецноминации, розыгрыш велосипеда и экскурсии по историческому центру Южи. Для иногородних гостей действуют скидки на проживание, а часть средств от гонки пойдет на озеленение города. Присоединяйтесь к традиции, которая объединяет спорт, природу и добрые дела!

Крутите педали к новым впечатлениям — ваше приключение начинается здесь!</p>
    <div class="race-info">
        <p>Дата: {{ raceStore.date }}</p>
        <p>Место: {{ raceStore.location }}</p>
        <p>Дистанция: {{ raceStore.distance }} км</p>
    </div>

    <div class="features">
        <div v-for="(feature, index) in raceStore.feature" :key="index" class="feature-item">
            <img :src="feature.icon" :alt="feature.title"/>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
        </div>
    </div>
</section>
  </div>
</template>



<script setup>
import { useRaceStore } from '@/store/raceStore';

const raceStore = useRaceStore()

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