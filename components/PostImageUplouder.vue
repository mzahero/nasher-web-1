<template>
	<div class="">
		<file-upload
				extensions="gif,jpg,jpeg,png,webp"
				accept="image/png,image/gif,image/jpeg,image/webp"
				name="avatar"
				class="btn btn-primary"
				post-action="/upload/post"
				:drop="!edit"
				v-model="files"
				@input-filter="inputFilter"
				@input-file="inputFile"
				ref="upload">
			Upload avatar
		</file-upload>
	</div>
</template>

<script>
    export default {
        components: {},
        props: {

        },
		    data: () => {
            return {
            }
		    }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

</style>