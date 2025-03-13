<template>
    <div>
      <div> 
        <AppHeader />
        <RaceBanner @register="goToRegistration" class="banner"/>
        <AboutRace />
        <TimerToStart :targetDate="new Date(2025, 7, 15)" />
        <AppFooter />
      </div>
    </div>
  </template>
  
  
  
  <script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import RaceBanner from '@/components/RaceBanner.vue'
  import AboutRace from '@/components/AboutRace.vue'
  import TimerToStart from '@/components/TimerToStart.vue';
  import router from '@/router';
import AppFooter from '@/components/AppFooter.vue';

  

const goToRegistration = () => {
  router.push('/registration');
};
  </script>
  
  
  
  
  <style scoped>
.banner {
  margin-top: 70px;
}


  </style>