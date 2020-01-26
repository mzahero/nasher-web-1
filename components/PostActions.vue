<template>
	<div class="post-actions d-flex mt-3">
		<like-counter class="mr-3"/>
		<comment-counter/>
		<share-button class="ml-auto" />
	</div>
</template>

<script>
    import LikeCounter from "./LikeCounter";
    import CommentCounter from "./CommentCounter";
    import ShareButton from "./ShareButton";
    export default {
        components: {ShareButton, CommentCounter, LikeCounter},
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.post-actions {

	}
</style>