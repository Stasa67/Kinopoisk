<template>
  <div id="app">
    <HeaderComponent />
    <BigAd />
    <MainMenu 
      v-bind:menus="menus"
    />
    <FocusComponent 
      v-bind:focuses="focuses"
    />
  </div>
</template>

<script>
 import HeaderComponent from './components/header.vue'
 import BigAd from './components/BigAd.vue'
 import MainMenu from './components/MainMenu.vue'
 import FocusComponent from './components/Focus.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BigAd,
    MainMenu,
    FocusComponent
  },
  data() {
    return {
      menus: [
        { title: "Главная"},
        { title: "Онлайн-кинотеатры"},
        { title: "Фильмы"},
        { title: "Сериалы"},
        { title: "Телеканалы"},
        { title: "Спорт"},
        { title: "Игры"},
        { title: "Билеты в кино"},
        { title: "Медиа"}
      ],
      // focuses: [
      //   {src: ./assets/Vensday.jpg}
      // ]
    }
  }
}
</script>

<style>
#app {
  margin: 0;
  
}
body {
  margin: 0;
}
</style>
