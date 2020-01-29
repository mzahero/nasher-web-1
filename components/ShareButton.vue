<template>
	<b-dropdown no-caret variant="link" class="share-button d-flex align-items-center">
		<template slot="button-content">
			<i class="far fa-share-alt icon"></i>
			<span class="content">شارك</span>
		</template>
		<b-dropdown-item href="#">•••</b-dropdown-item>
		<b-dropdown-item href="#">•••</b-dropdown-item>
		<b-dropdown-item href="#">•••</b-dropdown-item>
	</b-dropdown>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.share-button {
		.icon {
			color: #030f09;
			font-size: 22px;
			margin: 0 6px;
		}
		.content {
			color: #030f09;
			font-size: 16px;
		}
	}
</style>