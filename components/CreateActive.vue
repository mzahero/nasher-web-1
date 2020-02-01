<template>
	<b-tabs content-class="p-3" nav-class="custom-nav" active-nav-item-class="bg-white" fill>
		<b-tab title="إنشاء منشور" active><p>I'm the first tab</p></b-tab>
		<b-tab title="إنشاء فعالية"><p>I'm the second tab</p></b-tab>
	</b-tabs>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	ul.custom-nav {
		padding: 0;
		li {
			a {
				background-color: #e0e0e0;
				border: none !important;
				border-radius: 0 !important;
			}
			&:after {
				display: none;
			}
		}
	}

</style>