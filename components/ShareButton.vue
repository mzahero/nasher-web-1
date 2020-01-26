<template>
	<span class="share-button d-flex align-items-center">
		<i class="fa fa-share-alt icon"></i>
		<span class="content">شارك</span>
	</span>
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
		color: #030f09;
		.icon{
			font-size: 22px;
			margin: 0 6px;
		}
		.content{
			font-size: 16px;
		}
	}
</style>