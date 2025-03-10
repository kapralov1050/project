import {defineStore} from 'pinia'
import {ref} from 'vue'

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

return {date, location, distance, feature}

})