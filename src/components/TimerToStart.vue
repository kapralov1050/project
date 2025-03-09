<template>
  <div class="countdown-timer">
    <h2>До старта осталось:</h2>
    <div class="timer">
      <div class="time-block">
        <span>{{ days }}</span>
        <div class="label">Дней</div>
      </div>
      <div class="time-block">
        <span>{{ hours }}</span>
        <div class="label">Часов</div>
      </div>
      <div class="time-block">
        <span>{{ minutes }}</span>
        <div class="label">Минут</div>
      </div>
      <div class="time-block">
        <span>{{ seconds }}</span>
        <div class="label">Секунд</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  targetDate: {
    type: Date,
    required: true
  }
})

const timeLeft = ref(0)
let timer = null

const updateTimer = () => {
  const now = new Date().getTime()
  const difference = props.targetDate.getTime() - now
  
  timeLeft.value = difference > 0 ? difference : 0
}

const days = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
const minutes = computed(() => Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)))
const seconds = computed(() => Math.floor((timeLeft.value % (1000 * 60)) / 1000))

onMounted(() => {
  updateTimer()
  timer = setInterval(updateTimer, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.countdown-timer {
  text-align: center;
  padding: 30px;
  margin: 50px 0;
  background-color: #f5f6fa;
  border-radius: 10px;
}

.timer {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.time-block {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  min-width: 100px;
}

.time-block span {
  font-size: 2em;
  font-weight: bold;
  color: #2d3436;
}

.label {
  color: #636e72;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>