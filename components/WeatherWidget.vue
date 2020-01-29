<template>
	<div class="weather-widget">
		<div class="bg" :style="'background-image: url('+ bg +');'">
			<div class="location-title text-center">
				<span class="location">
					<slot name="location"></slot>
				</span>
				<span class="icon">
					<i class="far fa-map-marker-alt align-middle d-inline-block"></i>
				</span>
			</div>

			<div class="weather-status">
				<div class="temperature">
					<slot name="temperature"></slot>°
				</div>
				<div class="status-title text-left">
					<slot name="status"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            bg: {
                default: ''
            },
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	div.weather-widget {
		margin-bottom: 20px;
		.bg {
			border-radius: 4px;
			min-height: 190px;
			background-size: cover;
			position: relative;
			color: #ffffff;
			font-weight: 500;
			.location-title {
				padding: 15px 0;
				.location {
					font-size: 16px;
					margin: 5px;
				}
				.icon i{
					font-size: 25px;
					margin: 5px;
				}
			}
			.weather-status {
				position: absolute;
				left: 20px;
				bottom: 20px;
				.temperature {
					text-align: left;
					direction: ltr;
					font-size: 71px;
					line-height: 1;
				}
				.status-title {
					font-size: 21px;
				}
			}
		}
	}
</style>