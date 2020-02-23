<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<b-list-group-item class="p-2">
		<b-media class="p-0" vertical-align="center" no-body>
			<b-media-aside vertical-align="center">
				<span style="width: 40px; height: 40px;" class="animation rounded-circle"></span>
			</b-media-aside>
			<b-media-body class="align-self-center ml-2 mb-2">
				<h6 class="mb-0 mt-2 animation" style="height: 30px;" :style="'width: ' + rand + '%;'"></h6>
			</b-media-body>
		</b-media>
	</b-list-group-item>
</template>

<script>
	export default {
	    computed: {
	        rand : function () {
              return Math.floor(Math.random() * (+100 - +50)) + +50;
          }
	    }
	}
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