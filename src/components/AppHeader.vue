<template>
  <div>
  <header class="app-header">
    <div class="header-content container">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.svg" alt="Гонка 2025" />
      </router-link>

      <nav class="desktop-nav">
        <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="nav-link">
        {{ link.title }}
      </RouterLink>
      </nav>

      <button
      class="hamburger"
      @click="toggleMobileMenu"
      :class="{ 'is-active': isMobileMenuOpen}"
      >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    </div>


    <!--мобильное меню -->

    <nav
    class="mobile-nav"
    :class="{ 'active': isMobileMenuOpen}"
    @click="toggleMobileMenu"
    >
      <router-link
      v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="nav-link"
        >
        {{ link.title }}
      </router-link>
   </nav>
  </header>
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
.app-header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-right:30px ;
}
  .logo img{
    height: 40px;
  }
  
  .desktop-nav {
    display: flex;
    gap: 30px;
  }

  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-link:hover,
  .router-link-active {
    color: #ff4757;
  }

  /* styles for gamburger */

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: #333;
    transition: all 0.3 ease;
  }

  .hamburger.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.is-active .bar:nth-child(2) {
    opacity:0;
  }

  .hamburger.is-active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Мобильное меню */

.mobile-nav {
  position: fixed;
  top: 70px;
  left: -100%;
  width: 100%;
  height: calc(100vh - 70px);
  background: rgba(255,255,255,0.98);
  transition: left 0.3s;
  display: flex;
  flex-direction: column;
  align-items: end;
}


.mobile-nav.active {
  left:0;
}

.mobile-nav-link {
  margin: 0 20px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
}



  @media(max-width:768px) {
    .desktop-nav {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
</style>