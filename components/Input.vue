<template>
	<div>
		<input type="text" class="text-input" v-if="search">
		<Fas/>
	</div>
</template>

<script>
    import Fas from '~/components/Fas.vue'

    export default {
        props: {
            search: {
                default: true
            }
        },
        components: {
            Fas
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	.text-input {
		border-radius: 4px;
		border: 1px $search-input-border-color solid;
		background-color: $search-input-background-color;
		display: block;
		width: 100%;
		padding: 8px 40px 9px 9px;
	}
</style>