import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useRaceStore = defineStore('store', () => {

const date = ref('2024-07-15')
const location = ref('Южа')
const distance = ref(20)
const feature = ref([
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

const routeCoordinates = ref([
  [
    42.012430014960756,
    56.579706275200664
  ],
  [
    42.020736462798936,
    56.56983696658065
  ],
  [
    42.0179018541651,
    56.564907783867284
  ],
  [
    42.023964116453584,
    56.563504409547534
  ],
  [
    42.02517291074031,
    56.55715032463712
  ],
  [
    42.03307377704695,
    56.54704865883906
  ],
  [
    42.04538965324281,
    56.52808593115043
  ],
  [
    42.04928036602746,
    56.525939989800634
  ],
  [
    42.04972897862447,
    56.522473041575495
  ], // Финиш
])

const routeGeoJSON = computed(() => ({
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: routeCoordinates.value
    }
  }]
}))
//Хранилище маршрута



return {date, location, distance, feature, routeGeoJSON, routeCoordinates}

})