<template>
	<section id="header">
		<div class="row">
			<div class="col-3">
				<Logo id="logo" />
			</div>
			<div class="col-6">
				<Input/>
			</div>
			<div class="col-3">s</div>
		</div>
	</section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import Input from '~/components/Input.vue'

    export default {
        components: {
            Logo, Input
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	#header {
		padding: 12px 0;
		#logo{
			width: 200px;
			display: block;
		}
	}
</style>