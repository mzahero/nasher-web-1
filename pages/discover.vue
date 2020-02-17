<template>
	<div class="container-xl">
		<div class="row justify-content-center">
			<div class="col-12">
				<gmap-map :center="center" :map-type-id="mapTypeId" :zoom="zoom" :options="options">
					<gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen"
					                  @closeclick="infoWinOpen=false">
						<div class="info-box">
							<nuxt-link :to="infoWindowLink" v-if="infoWindowType === 'community'">
								<b-card body-class="p-1" class="text-center community">
									<b-img :src="infoWindowImage" :alt="infoWindowTitle"></b-img>
									<h5 class="text-dark mt-2" v-text="infoWindowTitle"></h5>
								</b-card>
							</nuxt-link>
							<nuxt-link :to="infoWindowLink" v-else >
							<b-card body-class="p-2 position-relative" class="event" :img-src="infoWindowImage"
							        :img-alt="infoWindowTitle" img-top>

									<h6 class="text-dark" v-text="infoWindowTitle"></h6>
								<span class="text-dark" v-text="infoWindowTime"></span>
								<span class="date-box p-2 text-center text-muted rounded bg-white position-absolute"
								      v-html="infoWindowDate"></span>
							</b-card>
							</nuxt-link>
						</div>
					</gmap-info-window>
					<gmap-marker :key="i" v-for="(m,i) in markers"
					             :icon="m.type === 'community' ? '/community.png' : '/event.png'" :position="m.position"
					             :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>
				</gmap-map>
			</div>
		</div>
	</div>
</template>

<script>
    import CommunitySmallCard from "../components/CommunitySmallCard";

    export default {

        components: {CommunitySmallCard},
        layout: 'blankWithNavbar',
        data() {
            return {
                mapTypeId: "terrain",
                options: {
                    clickableIcons: false,
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
                center: {lat: 24.7255553, lng: 46.7023382},
                zoom: 11,
                infoWindowPos: null,
                infoWinOpen: false,
                currentMidx: null,

                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -60
                    }
                },
                markers: [
                    {
                        position: {
                            lat: 24.7255553,
                            lng: 46.7023382
                        },
                        type: 'community',
                        image: 'https://picsum.photos/100/100',
                        title: 'المتحف الوطي  السعودي',
                        link: '/community'
                    },
                    {
                        position: {
                            lat: 24.7555553,
                            lng: 46.7523382
                        },
                        type: 'event',
                        image: 'https://picsum.photos/255/114',
                        title: 'المتحف الوطي  السعودي',
                        link: '/event',
                        date: '<b>23</b><br>أكتوبر',
                        time: '08:30PM'
                    },
                    {
                        position: {
                            lat: 24.7955553,
                            lng: 46.7323382
                        },
                        type: 'event',
                        image: 'https://picsum.photos/255/115',
                        title: 'عيد ميلاد زاهر',
                        link: '/event',
                        date: '<b>11</b><br>فبراير',
                        time: '09:30PM'
                    }],
                infoWindowImage: 'https://picsum.photos/100/100',
                infoWindowTitle: 'المتحف الوطي  السعودي',
                infoWindowType: 'community',
                infoWindowLink: '/community',
                infoWindowDate: '<b>23</b><br>أوكتوبر',
                infoWindowTime: '08:30PM'
            };
        },
        props: {},
        methods: {
            toggleInfoWindow: function (marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoWindowType = marker.type;
                this.infoWindowImage = marker.image;
                this.infoWindowTitle = marker.title;
                this.infoWindowLink = marker.link;
                this.infoWindowDate = marker.date;
                this.infoWindowTime = marker.time;

                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;

                }
            }
        }
    }
</script>

<style lang="scss">
	.vue-map-container {
		min-height: 700px;
		border: none;
	}

	.info-box {
		font-family: DINNextLTW23, serif !important;
		div.community {
			max-width: 200px;
			img {
				max-width: 100px;
			}
		}
		div.event {
			.date-box {
				top: 0;
				left: 15px;
				transform: translateY(-50%);
				line-height: 1.3;
				border: 1px solid #d8dce6;
				font-size: 17px;
				b {
					font-size: 24px;
					font-weight: 600;
				}
			}
		}
	}

	.gm-style-iw-c {
		padding: 0 !important;
	}

	.gm-style-iw-d {
		overflow: hidden !important;
	}
</style>
