<template>
    <img class="img" src="../assets/Vensday.jpg">
</template>

<script>
export default {
    name: "FocusItem"
}
</script>

<style lang="less">
.img {
    opacity: 1;
    transition: 00.2s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}
</style>
