<template>
	<div class="navbar-section">
		<div class="d-flex align-items-center" :class="classes">
			<div class="icon-wrap align-content-center align-items-center d-flex caption">
				<slot></slot>
			</div>
			<div class="px-2 ml-auto">
				<span class="link">
					<slot name="link"></slot>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            icon: {
                default: 'fa fa-home'
            },
            classes: {
                default: ''
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	div.navbar-section {
		margin: 10px 0;
		.caption{
			font-size: 14px;
			font-weight: 500;
		}
		span.link {
			color: #30be76;
			font-size: 14px;
			a{
				color: #30be76;
			}
			i {
				vertical-align: middle;
				display: inline-block;
				text-align: center;
				width: 30px;
			}
		}
	}
</style>