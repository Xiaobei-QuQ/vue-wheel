<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        name:'wheel-icon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>