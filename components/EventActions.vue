<template>
	<div class="post-actions d-flex mt-3">
		<attendances/>
		<share-button class="ml-auto" />
	</div>
</template>

<script>
    import Attendances from "./Attendances";
    import ShareButton from "./ShareButton";
    export default {
        components: {ShareButton, Attendances},
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.post-actions {

	}
</style>