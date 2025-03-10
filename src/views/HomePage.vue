<template>
    <div>
      <div> 
        <RaceBanner @register="goToRegistration" />
        <AboutRace />
        <TimerToStart :targetDate="new Date(2025, 7, 15)" />
      </div>
    </div>
  </template>
  
  
  
  <script setup>
  import RaceBanner from '@/components/RaceBanner.vue'
  import AboutRace from '@/components/AboutRace.vue'
  import TimerToStart from '@/components/TimerToStart.vue';
  import router from '@/router';
  

const goToRegistration = () => {
  router.push('/registration');
};
  </script>
  
  
  
  
  <style scoped>
  
  </style>