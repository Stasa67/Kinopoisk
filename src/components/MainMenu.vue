<template>
    <ul class="menu">
       <MenuItem 
        v-for="menu of menus"
        v-bind:menu="menu"
        :key="menu"
       />
    </ul>
</template>

<script>
import MenuItem from "./MenuItem.vue"

export default {
  name: 'MainMenu',
  components: {
    MenuItem
  },
  props: ['menus']
}
</script>

<style scoped lang="less">
.menu {   
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
    color: #666666;
    line-height: 18px;
    cursor: pointer;
    text-decoration: none;
}

</style>
