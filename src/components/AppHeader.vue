<template>
  <div>

  </div>
</template>



<script setup>
import {ref} from 'vue'

const isMobileMenuOpen = ref(false)

const links = [
{path: '/', title: 'Главная'},
{path: '/dashboard', title: 'Личный кабинет'},
{path: '/registration', title: 'Регистрация'},
{path: '/map', title: 'Карта Гонки'},
]

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>




<style scoped>

</style>