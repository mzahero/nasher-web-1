<template>
	<span class="comment-counter">
		<i class="far fa-comment icon"></i>
		<span class="content" v-text="commentsCount">20</span>
	</span>
</template>

<script>
    export default {
        props: {
            commentsCount: {
                default : 0
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.comment-counter {
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