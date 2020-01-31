<template>
	<div class="event-sub-detail d-flex p-4 bg-light">
		<b-button class="event-joining-button mr-auto" variant="success">انوي الحضور</b-button>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-map icon"></i>
			<span class="content" v-text="location"></span>
		</span>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-clock icon"></i>
			<span class="content" v-text="time"></span>
		</span>
	</div>
</template>

<script>
    export default {
        props: {
            location: {
                default: 'جدة، السعودية'
            },
            time: {
                default: '12:30PM'
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.event-sub-detail {
		.detail {
			color: #030f09;
			.icon {
				font-size: 22px;
				margin: 0 6px;
			}
			.content {
				font-size: 16px;
			}
		}
	}

	.event-joining-button {
		font-size: 16px;
		font-weight: 600;
	}
</style>