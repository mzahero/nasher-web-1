<template>
	<section id="header">
		<div class="row align-items-center">
			<div class="col-5 col-md-3 d-flex align-items-center pr-0">
				<b-button variant="link" class="text-muted d-md-none pr-0 show-navbar">
					<i class="far fa-align-justify fa-lg"></i>
				</b-button>
				<Logo id="logo" class="pl-3" />
			</div>
			<div class="col-6 d-md-block search-input fixed-md">
				<Input :placeholder="searchInputPlaceholder" class="bg-light" icon="far fa-search" left-icon="far fa-times hide-search-input" />
			</div>
			<div class="col-7 col-md-3 text-left">
				<b-button variant="link" class="text-muted d-md-none show-search-input">
					<i class="icon far fa-search fa-lg"></i>
				</b-button>
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
		    },
		    mounted:() => {
            $('.show-search-input').click(function () {
		          $('.search-input').addClass('right-0');
            });
            $('.hide-search-input').click(function () {
                $('.search-input').removeClass('right-0');
            });
            $('.show-navbar').click(function () {
                $('#nav-sidebar').addClass('right-0');
            });
            $('a, .hide-navbar').click(function () {
                $('#nav-sidebar').removeClass('right-0');
            });

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
			max-width: 200px;
		}
	}
</style>