<template>
	<section id="header">
		<div class="row align-items-center">
			<div class="col-3">
				<Logo id="logo" />
			</div>
			<div class="col-6">
				<Input :placeholder="searchInputPlaceholder" class="bg-light" icon="far fa-search" />
			</div>
			<div class="col-3 text-left">
				<b-dropdown no-caret variant="link">
					<template slot="button-content">
						<i id="notification-icon" class="icon far fa-bell fa-lg"></i>
					</template>
					<b-dropdown-item href="#">عربي</b-dropdown-item>
					<b-dropdown-item href="#">Another item</b-dropdown-item>
				</b-dropdown>
				<b-dropdown no-caret variant="link">
					<template slot="button-content">
						<img class="rounded-circle profile-image" src="https://picsum.photos/200/200" alt="user image">
					</template>
					<b-dropdown-item href="#">An item</b-dropdown-item>
					<b-dropdown-item href="#">Another item</b-dropdown-item>
				</b-dropdown>
			</div>
		</div>
	</section>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import Input from '~/components/Input.vue'

    export default {
        components: {
            Logo, Input
        },
		    props: {
            searchInputPlaceholder : {
                default : 'ابحث في ناشر'
            }
		    }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	#header {
		padding: 12px 0;
		#notification-icon{
			color: $header-notification-icon-color;
		}
		#logo{
			width: 200px;
			display: block;
		}
	}
</style>