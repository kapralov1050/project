<template>
  <div class="map-container">
    <div ref="mapElement" class="race-map"></div>
  </div>
</template>



<script setup>
import "leaflet/dist/leaflet.css"
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import { useRaceStore } from "@/store/raceStore"

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

let marker1 = L.marker([56.58731, 42.01178], {icon: startIcon}).addTo(map).bindPopup('<b>Старт гонки</b><br>Центр города');

let marker2 = L.marker([56.52235, 42.04995], {icon: finishIcon}).addTo(map).bindPopup('<b>Финиш гонки</b><br>Южский район');


})





onBeforeUnmount(() => {
  if (map) map.remove()
})


</script>




<style scoped>
.map-container {
  height: 400px;
  margin: 20px 0;
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