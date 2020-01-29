<template>
	<span class="like-counter d-flex align-items-center" :class="{'liked' : isLiked}">
		<i class="icon fa-heart" :class="isLiked ? 'fa' : 'far'"></i>
		<span class="content" v-text="likesCount"></span>
	</span>
</template>

<script>
    export default {
        props: {
            likesCount: {
                default : 20
            },
		        isLiked : {
                default: true
		        }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.like-counter {
		.icon{
			font-size: 22px;
			margin: 0 6px;
		}
		.content{
			font-size: 16px;
		}
		&.liked{
			color: #f84949;
		}
	}
</style>