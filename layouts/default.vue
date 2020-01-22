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
								<NavbarSection>الناشر</NavbarSection>
								<NavbarLink link="link" icon="fa fa-cog">إعدادات الحساب</NavbarLink>
								<NavbarSection>
									<slot>جهاتي</slot>
									<template v-slot:link="">
										<a href=""> أضف جهة جديدة<i class="fa fa-plus"></i></a>
									</template>
								</NavbarSection>
								<NavbarLink link="link" image="https://picsum.photos/200/200">هيئة الترفيه</NavbarLink>
							</NavbarLinks>
						</Sidebar>
					</div>
					<div class="col-6">
					</div>
					<div class="col-3 d-none d-sm-block" id="widgets-sidebar">
						<Sidebar/>
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

    export default {
        components: {
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
		background-color: $app-background-color; overflow: hidden;
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
</style>

