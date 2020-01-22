<template>
	<ul class="navbar-links p-0 m-0">
		<slot></slot>
	</ul>
</template>

<script>
    export default {
        props: {

        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	ul.navbar-links{
		list-style: none;
	}
</style>