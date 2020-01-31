<template>
	<div>
		<div class="interest-card rounded">
			<div class="image">
				<b-img :src="img" :alt="title"></b-img>
			</div>
			<div class="title text-center text-white" v-text="title"></div>
		</div>
		<div class="follow-btn text-center pt-2">
			<b-button class="" rounded variant="outline-secondary">تابع +</b-button>
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            img: {
                default: null
            },
            title: {
                default: null
            },
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.interest-card {
		overflow: hidden;
		.image{
			position: relative;
			&:after{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content:'';
				background: rgb(0,0,0);
				background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 50%);
			}
		}
		.title{
			background-color: #000000;
			font-size: 16px !important;
			padding: 0 15px 15px 15px;
		}
	}
	.follow-btn{
		.btn{
			font-weight: 500;
			font-size: 14px;
			padding: 0 15px 5px 15px;
		}
	}
</style>