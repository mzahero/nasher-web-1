<template>
	<div class="widget box">
		<div class="row align-items-center ">
			<div class="col-3">
				<img class="rounded-circle profile-image" src="https://picsum.photos/200/200" alt="user image">
			</div>
			<div class="col-9">
				<div class="profile-name h3">حسام عبد</div>
				<LocationOptions />
			</div>
		</div>
	</div>
</template>

<script>
    import LocationOptions from "./LocationOptions";
    export default {
        components: {LocationOptions},
        props: {

        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

</style>