<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div id="main-app">
		<div id="wrapper" class="fixed-top">
			<div class="container-fluid" id="header-container">
				<div class="container">
					<Header/>
				</div>
			</div>
			<div class="container" id="sidebars-container">
				<div class="row">
					<div class="col-3 d-none d-sm-block" id="nav-sidebar">
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
								<NavbarLink link="/link" icon="far fa-map">استكشف</NavbarLink>
							</NavbarLinks>
							<SectionTitle classes="px-3">الناشر</SectionTitle>
							<NavbarLinks>
								<NavbarLink link="link" icon="far fa-cog">إعدادات الحساب</NavbarLink>
							</NavbarLinks>
							<SectionTitle classes="px-3">
								<slot>جهاتي</slot>
								<template v-slot:link="">
									<a href=""> أضف جهة جديدة<i class="far fa-plus"></i></a>
								</template>
							</SectionTitle>
							<NavbarLinks>
								<NavbarLink link="link" image="https://picsum.photos/200/200">هيئة الترفيه</NavbarLink>
							</NavbarLinks>
						</Sidebar>
					</div>
					<div class="col-6">
					</div>
					<div class="col-3 d-none d-sm-block" id="widgets-sidebar">
						<Sidebar>
							<WeatherWidget bg="https://picsum.photos/284/190">
								<template slot="location">المملكة العربية السعودية - الرياض</template>
								<template slot="temperature">32</template>
								<template slot="status">غائم جزئياً</template>
							</WeatherWidget>
							<SectionTitle>
								<slot>موقعك الجغرافي الآن</slot>
								<template v-slot:link="">
									<a href="">تعديل</a>
								</template>
							</SectionTitle>
							<Map :center="{lat: 24.7255553,lng: 46.5423382}"/>
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
						</Sidebar>
					</div>
				</div>
			</div>
		</div>
		<section id="view">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-sm-6" id="page-content">
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
    import WeatherWidget from "../components/WeatherWidget";
    import Map from "../components/Map";

    export default {
        components: {
            Map,
            WeatherWidget,
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

