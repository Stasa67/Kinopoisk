<template>
    <li class="menu-item">
        <unicon 
            name="home"
            class="menu-item_icon"
        >
        </unicon>
        <div class="menu-item_text">
            {{ menu.title }}
        </div>
    </li>
</template>

<script>
export default {
    name:"MenuItem",
    props: {
        menu: {
            type: Object,
            requared: true
        }
    }
}
</script>

<style scoped lang="less">
.menu-item {
    display: flex;
    align-items: center;
    margin: 6px;

    &:hover {
        color: #000000;
        transition: 0.2s;
    }

    &_icon {
        margin-right: 20px;
    }
}
</style>
