<template>
  <div>
    <section class="race-banner">
      <img :src="titleImage" alt="Велосипедная гонка" class="banner-image">
      <div class="banner-content">
        <h1>Гонка в Юже 2025</h1>
        <button @click="$emit('register')"> Зарегистрироваться</button>
      </div>
    </section>
  </div>
</template>



<script setup>
import {ref} from 'vue'

const titleImage = ref('https://preview2.photoxpress.ru/preview/photoxpress_ru/news_info2/3217743459.jpg')
</script>




<style scoped>
.banner-image {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
}
.race-banner {
  position: relative;
  text-align: center;
  color: white;
}
.banner-content {
position:absolute;
top: 50%;
left: 50%;
object-fit: cover;
transform: translate(-50%,-50%);
}

button {
  padding: 20px 35px;
  font-size: 2em;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  transition: box-shadow 0.3s;

}

button:hover {
  background-color: #ff6b81;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 2) ;
}

</style>