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
							<NavbarLinks>
								<NavbarLink classes="active" link="link" icon="fa fa-home">حائط النشر</NavbarLink>
								<NavbarLink link="link" icon="fa fa-calendar-alt">الفعاليات</NavbarLink>
								<NavbarLink link="link" icon="fa fa-map-marker-alt">الجهات المحلية</NavbarLink>
								<NavbarLink link="link" icon="fa fa-map">استكشف</NavbarLink>
							</NavbarLinks>
							<NavbarSection classes="px-3">الناشر</NavbarSection>
							<NavbarLinks>
								<NavbarLink link="link" icon="fa fa-cog">إعدادات الحساب</NavbarLink>
							</NavbarLinks>
							<NavbarSection classes="px-3">
								<slot>جهاتي</slot>
								<template v-slot:link="">
									<a href=""> أضف جهة جديدة<i class="fa fa-plus"></i></a>
								</template>
							</NavbarSection>
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
							<NavbarSection>
								<slot>موقعك الجغرافي الآن</slot>
								<template v-slot:link="">
									<a href="">تعديل</a>
								</template>
							</NavbarSection>
							<Map :center="{lat: 24.7255553,lng: 46.5423382}"/>
							<NavbarSection>يحدث قريباً منك</NavbarSection>
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
    import NavbarSection from "../components/NavbarSection";
    import WeatherWidget from "../components/WeatherWidget";
    import Map from "../components/Map";

    export default {
        components: {
            Map,
            WeatherWidget,
            NavbarSection,
            NavbarLink,
            NavbarLinks,
            Header, Sidebar
        },
        head() {
            return {
                htmlAttrs: {
                    dir: 'rtl'
                }
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/app";

	#main-app {
		background-color: $app-background-color;
		overflow: hidden;
		#wrapper {
			#header-container {
				background-color: $header-background-color;
				border-bottom: 1px $header-border-color solid;
			}
			#sidebars-container {
				margin-top: 30px;
				#nav-sidebar {
					border-left: 1px $page-content-border-color solid;
				}
				#widgets-sidebar {
					border-right: 1px $page-content-border-color solid;
				}
			}
		}

		#view {
			margin-top: 100px;
			#page-content {

			}
		}
	}

	.nav {
		.nav-item {
			position: relative;
			.nav-link{
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
			&:last-child:after{
				display: none;
			}
		}
	}
	.copyrights{
		color: #767676;
		font-size: 13px;
	}
</style>

