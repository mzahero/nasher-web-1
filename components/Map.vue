<template>
	<div>
		<gmap-map :center="center" :map-type-id="mapTypeId" :zoom="zoom" :options="options">
			<gmap-marker :position="center"/>
		</gmap-map>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                mapTypeId: "terrain",
                options: {
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    disableDefaultUi: false
                }
            };
        },
        props: {
            center: {
                default: {lat: -3.350235, lng: 111.995865}
            },
            zoom: {
                default: 10
            }
        }
    };
</script>

<style lang="scss" scoped>
	.vue-map-container {
		border-radius: 4px;
		border: solid 1px #767676;
		overflow: hidden;
		min-height: 190px;
		max-width: 992px;
		width: 100%;
	}
</style>