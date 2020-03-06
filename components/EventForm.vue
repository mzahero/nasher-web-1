<template>
	<div v-if="(isEdit && event.id) || !isEdit">
		<div class="d-flex align-items-center pb-3">
			<div class="title fixed-width">
				عنوان اللقاء
			</div>
			<div class="w-100 input-box">
				<label>
					<input type="text" v-model="event.title"/>
				</label>
			</div>
		</div>
		<div class="d-flex align-items-center pb-3">
			<div class="title fixed-width">
				التاريخ والوقت
			</div>
			<div class="w-100 pr-2">
				<datetime type="datetime" input-class="form-control" v-model="event.happening_at"/>
			</div>
		</div>
		<div class="d-flex align-items-center pb-3">
			<div class="title fixed-width">
				مدينة اللقاء
			</div>
			<div class="w-50 pr-2">
				<multiselect dir="rtl" :options="cities" v-model="event.address.city" track-by="id"
				             label="name"
				             :allow-empty="false"
				             :loading="asyncCitiesLoading"
				             @search-change="asyncCities($event)"
				             select-label="" selected-label="" deselect-label="" placeholder="">
					<template slot="singleLabel" slot-scope="props">
						<div class="text-right">{{ props.option.name }}</div>
					</template>
					<template slot="noResult">لا يوجد نتائج!</template>
				</multiselect>

			</div>
			<div class="w-50 pl-2">
				<b-button :variant="event.address.latitude ? 'success' : 'info'" block v-b-modal.event-location>
					الموقع على الخريطة
					<i class="fa mr-1 ml-1" :class="event.address.latitude ? 'fa-check' : 'fa-location'"></i>
				</b-button>
				<b-modal size="xl" ref="event-location" id="event-location" hide-header hide-footer>
					<gmap-map :center="mapCenter" :map-type-id="map.mapTypeId" :zoom="map.zoom" :options="map.options">
						<gmap-marker :position="mapCenter" :draggable="true" @dragend="getPosition($event)"/>
					</gmap-map>
				</b-modal>
			</div>
		</div>
		<div class="input-box">
			<textarea class="p-3 form-control" v-model="event.description"
			          placeholder="قل شيئاً يشرح ما تحتويه الفعالية"></textarea>
		</div>
		<div class="row p-3 text-center">
			<div class="col-md-4 p-1" v-for="(image, index) in event.images" v-if="!image.isDeleted">
				<div class="rounded bg-light position-relative">
					<b-button class="position-absolute" style="left: 5px; top: 5px; z-index: 10; line-height: 1;" variant="danger"
					          size="sm"
					          @click="removeImage(index)"
					><i class="fa fa-times"></i></b-button>
					<img :src="image.url">
				</div>
			</div>
		</div>
		<hr class="m-0">
		<div class="d-flex align-items-center pt-3">
			<label for="event-images" class="btn rounded-0 text-muted btn-link m-0">
				<input type="file"
				       class="invisible position-absolute"
				       accept="image/*"
				       id="event-images"
				       @change="addImages"/>
				<i class="far fa-image"></i> اختيار الصورة
			</label>

			<div class="ml-auto">
				<toggle-button class="mb-0 pr-2" v-model="event.isCommentable"/>
				<span class="text-muted pr-2">تفعيل التعليقات</span>
				<b-button rounded variant="success" @click="isEdit ? update() : save()">حفظ</b-button>
			</div>
		</div>
	</div>
</template>

<script>
    import DateTime from "./DateTime";

    export default {
        components: {
            DateTime
        },
        props: {
            localId: {},
            isEdit: {}
        },
        methods: {
            async addImages(event) {
                const toBase64 = file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });

                if (event.target.files && event.target.files[0]) {
                    for (let i = 0; i < event.target.files.length; i++) {
                        const file = event.target.files[i];
                        const base64 = await toBase64(file);
                        this.event.images.push({
                            id: this.$uuid.v1(),
                            url: base64,
                            isNew: true,
                        })
                    }
                }
            },
            removeImage(index) {
                if (this.event.images[index].isNew) {
                    this.event.images.splice(index, 1)
                } else {
                    this.event.images[index].isDeleted = true;
                    this.$forceUpdate()
                }
            },
            asyncCities(query) {
                if (query.match(/^\s*$/)) {
                    return
                }
                this.asyncCitiesLoading = true;
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.$axios.$get('/cities', {params: {q: query}}).then(response => this.cities = response.data).finally(() => this.asyncCitiesLoading = false)
                }, 500);
            },
            getPosition(event){
                this.event.address.latitude = event.latLng.lat()
                this.event.address.longitude = event.latLng.lng()
            },
            async save() {
                await this.$axios.$request({
                    url: '/events',
                    method: 'POST',
                    data: {
                        user_id: this.$store.state.user.user.id,
                        locale_id: this.localId,
                        title: this.event.title,
                        description: this.event.description,
                        commentable: this.event.isCommentable,
                        happening_at: this.$moment(this.event.happening_at).format('YYYY-MM-DD HH:mm:ss'),
                        images: this.event.images,
                        address: {
                            city_id: this.event.address.city.id,
                            latitude: this.event.address.latitude,
                            longitude: this.event.address.longitude
                        }
                    }
                })
                    .then(response => {
                        this.$toast.success('تمت العملية بنجاح');
                        this.$router.push({
                            path: '/locales/' + response.data.locale.username + '/statuses/' + response.data.id,
                        })
                    })
                    .catch(error => {
                        let errors = Object.values(error.response.data.errors);
                        let toast = this.$toast;
                        errors.flat().forEach(function (e) {
                            toast.error(e)
                        })
                    });
            },
            async update() {
                await this.$axios.$request({
                    url: '/statuses/' + this.status.id,
                    method: 'PUT',
                    data: {
                        locale_id: this.status.locale.id,
                        content: this.status.content.raw,
                        commentable: this.status.isCommentable,
                        embed_url: this.status.embed_url,
                        images: this.status.images
                    }
                })
                    .then(response => {
                        this.$toast.success('تمت العملية بنجاح');
                        this.$router.push({
                            path: '/locales/' + response.data.locale.username + '/statuses/' + response.data.id,
                        })
                    })
                    .catch(error => {
                        let errors = Object.values(error.response.data.errors);
                        let toast = this.$toast;
                        errors.flat().forEach(function (e) {
                            toast.error(e)
                        })
                    });
            }
        },
        created() {
            this.$axios.$get('/cities').then(response => this.cities = response.data)
        },
        computed: {
            mapCenter() {
                if (this.event.address.latitude){
                    return {
                        lat : this.event.address.latitude,
                        lng : this.event.address.longitude
                    }
                }
                let coords = this.map.center;
                window.navigator && window.navigator.geolocation.getCurrentPosition(position => {
                    coords.lat = position.coords.latitude;
                    coords.lng = position.coords.longitude;
                });

                return coords
            }
        },
        data: () => {
            return {
                event: {
                    images: [],
                    address: {
                        city: null,
		                    latitude: null,
                        longitude: null,
                    },
		                title: null,
		                description: null,
                    isCommentable: true
                },
                cities: [],
                asyncCitiesLoading: false,
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
                    center: {lat: 24.7255553, lng: 46.7423382},
                    zoom: 11,
                }
            }
        }
    }
</script>

<style lang="scss">

</style>