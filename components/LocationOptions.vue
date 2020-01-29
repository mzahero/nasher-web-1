<template>
	<div class="location">
		<i class="far fa-location-arrow"></i>
		<span>الرياض</span>
		<b-dropdown no-caret variant="link">
			<template slot="button-content">
				<i class="icon far fa-caret-down"></i>
			</template>
			<b-dropdown-item href="#">An item</b-dropdown-item>
			<b-dropdown-item href="#">Another item</b-dropdown-item>
		</b-dropdown>
	</div>
</template>

<script>
    export default {
        props: {

        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";


</style>