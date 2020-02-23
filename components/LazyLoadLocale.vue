<template>
	<div>
		<b-card class="mb-2 mt-5" no-body>
			<b-card-body class="pt-5 text-center position-relative">
				<span class="position-absolute avatar rounded-circle animation" style="width: 100px; height: 100px;"></span>
				<span class="title text-dark mx-auto mt-2 d-block animation" style="height: 20px; width: 100px;"></span>
				<span class="followers mx-auto mt-2 text-muted d-block animation" style="height: 15px; width: 50px;"></span>
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
    export default {
        props: {
            locale: {
                default: null
            }
        }
    }
</script>

<style lang="scss" scoped>
	.title {
		font-weight: 500;
	}

	.followers {
		font-size: 14px;
	}

	.avatar {
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 100px;
	}

	.animation {
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: placeHolderShimmer;
		animation-timing-function: linear;
		background: #f6f7f9;
		background-image: linear-gradient(to right, #f6f7f9 0%, #f1f1f1 20%, #f6f7f9 40%, #f6f7f9 100%);
		background-repeat: no-repeat;
		background-size: 800px 200px;
		height: 200px;
		position: relative;
	}

	@-webkit-keyframes placeHolderShimmer {
		0% {
			background-position: 468px 0;
		}
		100% {
			background-position: -468px 0;
		}
	}
</style>