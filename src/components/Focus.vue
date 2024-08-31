<template>
    <div class="focus">
        <div class="focus-caption">
            В фокусе
        </div>
        <div class="focus-news">
            <FocusItem />
        </div>
    </div>
</template>

<script>
import FocusItem from "./FocusItem.vue"

export default {
    name: "FocusComponent",
    components: {
        FocusItem
    },
    props: ["focuses"]
}
</script>

<style lang="less">
.focus {
    
    &-caption {
        font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px;
    }
}

</style>
