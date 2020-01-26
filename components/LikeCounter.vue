<template>
	<span class="like-counter d-flex align-items-center">
		<i class="fa fa-heart icon"></i>
		<span class="content">20</span>
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

	.like-counter {
		color: #f84949;
		.icon{
			font-size: 22px;
			margin: 0 6px;
		}
		.content{
			font-size: 16px;
		}
	}
</style>