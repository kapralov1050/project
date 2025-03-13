<template>
  <AppHeader />
  <div class="main">
  <h2>Карта гонки</h2>
  <p>Описание маршрута: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam animi ut similique impedit rem necessitatibus laboriosam reprehenderit facilis, itaque dignissimos, quas alias culpa tempora. Harum placeat tenetur nemo, a rem voluptatem praesentium. Fugiat sequi deleniti consequatur eius odit nobis sapiente vero laudantium, cupiditate eaque distinctio enim unde dolor? Dolorum?</p>
    <div class="map-area">
      <div class="map-container">
        <div ref="mapElement" class="race-map"></div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>



<script setup>
import "leaflet/dist/leaflet.css"
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import { useRaceStore } from "@/store/raceStore"
import AppHeader from "./AppHeader.vue"
import AppFooter from "./AppFooter.vue"

const mapElement = ref(null)
let map = null

const raceStore = useRaceStore()


const startIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/5518/5518039.png',
  iconSize: [40, 40],
  popupAnchor: [0, -20]
})

const finishIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2553/2553273.png',
  iconSize: [40, 40],
  popupAnchor: [0, -20]
})

onMounted(() => {
  // Инициализация карты
  map = L.map(mapElement.value).setView([56.58731, 42.01178], 13) // Координаты Южи
  
  // Добавление тайлов OpenStreetMap
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker1 = L.marker([56.579706275200664, 42.012430014960756], {icon: startIcon}).addTo(map).bindPopup('<b>Старт гонки</b><br>Центр города');

let marker2 = L.marker([56.522473041575495, 42.04972897862447], {icon: finishIcon}).addTo(map).bindPopup('<b>Финиш гонки</b><br>Южский район');

L.geoJSON(raceStore.routeGeoJSON).addTo(map)
})





onBeforeUnmount(() => {
  if (map) map.remove()
})


</script>




<style scoped>
.main {
  margin: 100px 0;
}
.map-area{
  display: flex;
  justify-content: center;
}
.map-container {
  height: 600px;
  width: 80%;
}

.race-map {
  height: 100%;
  border-radius: 10px;
  z-index: 0; /* Важно для корректного отображения */
}

.leaflet-control-attribution {
  display: none; /* Скрыть стандартный attribution */
}
</style>