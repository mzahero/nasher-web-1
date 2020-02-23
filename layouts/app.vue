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
							<nuxt-link class="d-flex align-items-center px-3 mb-3 profile-link" :to="'/users/' + user.username">
								<div class="icon-wrap align-content-center align-items-center d-flex">
									<img class="rounded-circle" :src="user.avatar" :alt="user.name">
								</div>
								<div class="px-2">
									<span class="title">
										{{ user.name }}
									</span>
								</div>
							</nuxt-link>
							<NavbarLinks>
								<NavbarLink link="/" icon="far fa-home">حائط النشر</NavbarLink>
								<NavbarLink link="/events" icon="far fa-calendar-alt">الفعاليات</NavbarLink>
								<NavbarLink link="/locales" icon="far fa-map-marker-alt">الجهات المحلية</NavbarLink>
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
								<NavbarLink v-for="locale in user.locales" :link="'/locales/' + locale.username" :image="locale.avatar">{{ locale.name }}</NavbarLink>
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
					<div class="col-6">
					</div>
					<div class="col-3 d-none d-md-block" id="widgets-sidebar">
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
							<gmap-map :center="map.center" :map-type-id="map.mapTypeId" :zoom="map.zoom" :options="map.options">
								<gmap-marker :position="map.center"/>
							</gmap-map>
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
			<div class="container-xl">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-md-6" id="page-content">
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

    export default {
        middleware: 'auth',
        components: {
            WeatherWidget,
            SectionTitle,
            NavbarLink,
            NavbarLinks,
            Header, Sidebar
        },
        data: () => {
            return {
                map: {
                    mapTypeId: "terrain",
                    options: {
                        zoomControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: false,
                        disableDefaultUi: false,
                        styles: [
                            {
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#616161"
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#468481"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#bdbdbd"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#eeeeee"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#757575"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e5e5e5"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#fdfdfd"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ededed"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#eccca7"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.line",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e5e5e5"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit.station",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#eeeeee"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#c9c9c9"
                                    }
                                ]
                            },
                        ]
                    },
                    center: {lat: 24.7255553, lng: 46.5423382},
                    zoom: 10,
                }
            }
        },
        computed: {
            user: function () {
                return this.$store.state.user.user
            }
        },
        created() {
            this.$store.commit('user/set', this.$auth.user)
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
					.profile-link {
						img {
							width: 42px;
							height: 42px;
						}
						.title {
							font-size: 20px;
							font-weight: 500;
							color: #3e3f42;
						}
					}
				}
				#widgets-sidebar {
					pointer-events: auto;
					border-right: 1px $page-content-border-color solid;
					.vue-map-container {
						min-height: 200px;
						border: none;
					}
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

