<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div id="main-app">
		<div id="wrapper" class="fixed-top">
			<div class="container-fluid" id="header-container">
				<div class="container-xl">
					<Header/>
				</div>
			</div>
			<div class="container-xl" id="sidebars-container">
				<div class="row">
					<div class="col-3 d-md-block fixed-md" id="nav-sidebar">
						<i class="far fa-times fa-lg text-muted invisible hide-navbar position-absolute"></i>
						<Sidebar>
							<nuxt-link class="d-flex align-items-center px-3 mb-3 profile-link" to="profile">
								<div class="icon-wrap align-content-center align-items-center d-flex">
									<img class="rounded-circle" src="https://picsum.photos/42/42" alt="user image">
								</div>
								<div class="px-2">
									<span class="title">
										حسام عبد
									</span>
								</div>
							</nuxt-link>
							<NavbarLinks>
								<NavbarLink link="/" icon="far fa-home">حائط النشر</NavbarLink>
								<NavbarLink link="/events" icon="far fa-calendar-alt">الفعاليات</NavbarLink>
								<NavbarLink link="/communities" icon="far fa-map-marker-alt">الجهات المحلية</NavbarLink>
								<NavbarLink link="/discover" icon="far fa-map">استكشف</NavbarLink>
							</NavbarLinks>
							<SectionTitle classes="px-3">الناشر</SectionTitle>
							<NavbarLinks>
								<NavbarLink link="/settings" icon="far fa-cog">إعدادات الحساب</NavbarLink>
							</NavbarLinks>
							<SectionTitle classes="px-3">
								<slot>جهاتي</slot>
								<template v-slot:link="">
									<nuxt-link to="/new-community">
										أضف جهة جديدة<i class="far fa-plus"></i>
									</nuxt-link>
								</template>
							</SectionTitle>
							<NavbarLinks>
								<NavbarLink link="/community" image="https://picsum.photos/200/200">هيئة الترفيه</NavbarLink>
							</NavbarLinks>
							<div class="d-md-none">
								<ul class="nav p-0 row">
									<li class="nav-item">
										<a class="nav-link" href="">عن ناشر</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="">عن ناشر</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="">عن ناشر</a>
									</li>
								</ul>
								<div class="copyrights">
									© 2020 كافة الحقوق محفوظة لناشر
								</div>
							</div>
						</Sidebar>
					</div>
					<div class="col-9">
					</div>
				</div>
			</div>
		</div>
		<section id="view">
			<div class="container-xl">
				<div class="row">
					<div class="d-none d-md-block col-md-3"></div>
					<div class="col-12 col-md-9" id="page-content">
						<nuxt/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
    import Header from '../sections/Header'
    import Sidebar from '../sections/Sidebar'
    import NavbarLinks from "../components/NavbarLinks";
    import NavbarLink from "../components/NavbarLink";
    import SectionTitle from "../components/SectionTitle";

    export default {
        middleware: 'auth',
        components: {
            SectionTitle,
            NavbarLink,
            NavbarLinks,
            Header, Sidebar
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/app";

	#main-app {
		background-color: $app-background-color;
		overflow: hidden;
		#wrapper {
			pointer-events: none;
			#header-container {
				pointer-events: auto;
				background-color: $header-background-color;
				border-bottom: 1px $header-border-color solid;
			}
			#sidebars-container {
				margin-top: 30px;
				#nav-sidebar {
					pointer-events: auto;
					border-left: 1px $page-content-border-color solid;
					.profile-link{
						img{
							width: 42px;
							height: 42px;
						}
						.title{
							font-size: 20px;
							font-weight: 500;
							color: #3e3f42;
						}
					}
				}
				#widgets-sidebar {
					pointer-events: auto;
					border-right: 1px $page-content-border-color solid;
				}
			}
		}

		#view {
			min-height: 800px;
			margin-top: 100px;
			#page-content {

			}
		}
	}

	.nav {
		.nav-item {
			position: relative;
			.nav-link {
				font-size: 14px;
				font-weight: 500;
				color: #767676;
			}
			&:after {
				content: '•';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: -5px;
				color: #767676;
			}
			&:last-child:after {
				display: none;
			}
		}
	}

	.copyrights {
		color: #767676;
		font-size: 13px;
	}
</style>

