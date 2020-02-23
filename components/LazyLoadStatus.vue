<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<b-card class="mb-3 text-center" no-body>
		<b-card-body>
			<b-media>
				<template v-slot:aside="">
					<div class="animation rounded" style="width: 50px; height: 50px"></div>
				</template>

				<div class="post-owner">
					<div class="animation" style="width: 100px; height: 20px"></div>
				</div>
				<div class="details mt-1">
					<div class="animation" style="max-width: 200px; height: 20px"></div>
				</div>
				<div class="post-content mt-4">
					<div class="animation mb-1" style="height: 20px"></div>
					<div class="animation mb-1" style="height: 20px"></div>
					<div class="animation mb-1" style="width: 50%; height: 20px"></div>
				</div>

				<div class="post-image mt-4">
					<div class="animation rounded" style="height: 200px"></div>
				</div>
			</b-media>
		</b-card-body>
	</b-card>
</template>

<script>

</script>

<style lang="scss">
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