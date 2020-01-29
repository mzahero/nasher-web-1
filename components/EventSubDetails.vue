<template>
	<div class="event-sub-detail d-flex p-4 bg-light">
		<event-joining-button class="mr-auto"/>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-map icon"></i>
			<span class="content">جدة، السعودية</span>
		</span>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-clock icon"></i>
			<span class="content">12:30PM</span>
		</span>
	</div>
</template>

<script>
    import LikeCounter from "./LikeCounter";
    import CommentCounter from "./CommentCounter";
    import ShareButton from "./ShareButton";
    import EventJoiningButton from "./EventJoiningButton";
    export default {
        components: {EventJoiningButton, ShareButton, CommentCounter, LikeCounter},
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.event-sub-detail {
		.detail{
			color: #030f09;
			.icon{
				font-size: 22px;
				margin: 0 6px;
			}
			.content{
				font-size: 16px;
			}
		}
	}
</style>