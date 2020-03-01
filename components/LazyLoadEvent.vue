<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<b-card class="mb-3 text-center" no-body>
		<b-card-body class="p-0">
			<div class="animation rounded" style="height: 250px"></div>

			<div class="p-3">
				<b-media class="position-relative mb-3">
					<template v-slot:aside>
						<div class="aside">
							<div class="animation rounded"
							     style="width: 50px; height: 50px;"></div>
						</div>
					</template>

					<div class="">
						<div class="animation mb-2" style="height: 20px; max-width: 300px;"></div>
						<div class="animation" style="height: 20px; max-width: 200px;"></div>
					</div>
				</b-media>
				<b-media class="position-relative">
					<template v-slot:aside>
						<div class="aside">
							<div class="animation rounded"
							     style="width: 100px; height: 100px;"></div>
						</div>
					</template>

					<div class="">
						<div class="animation mb-2" style="height: 20px; max-width: 300px;"></div>
						<div class="animation mb-2" style="height: 20px; max-width: 300px;"></div>
						<div class="animation" style="height: 20px; max-width: 200px;"></div>
					</div>
				</b-media>
			</div>

		</b-card-body>
	</b-card>
</template>

<script>

</script>

<style scoped lang="scss">
	.animation {
		animation-duration: 1s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: placeHolderShimmer;
		animation-timing-function: linear;
		background: #f6f7f9;
		background-image: linear-gradient(to right, #f6f7f9 0%, #f1f1f1 20%, #f6f7f9 40%, #f6f7f9 100%);
		background-repeat: no-repeat;
		background-size: 800px 250px;
		height: 250px;
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