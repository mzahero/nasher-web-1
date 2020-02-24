<template>
	<div class="event-sub-detail d-flex p-4 bg-light" v-if="dataEvent">
		<b-button class="event-joining-button mr-auto" @click="toggleAttend()" :variant="dataEvent.isComing ? 'secondary' : 'success'">{{ dataEvent.isComing ? 'قررت الحضور' : 'انوي الحضور' }}</b-button>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-map icon"></i>
			<span class="content" v-text="location"></span>
		</span>
		<span class="detail d-flex align-items-center mr-2">
			<i class="far fa-clock icon"></i>
			<span class="content" v-text="$moment(event.happeningAt.timestamp).format('hh:mmA')"></span>
		</span>
	</div>
</template>

<script>
    export default {
        props: {
            event : null
        },
		    data: function(){
				    return {
                dataEvent : event
				    }
		    },
		    computed: {
            location: function () {
		            return this.event.address.region.name + ', ' + this.event.address.city.name
            }
		    },
        methods: {
            toggleAttend(){
                this.$axios.$post('events/' + this.event.id + '/attend')
                    .then(response => {
                        this.dataEvent = response.data.event;
                    })
                    .catch(error => {
                        console.log("error");
                        console.log(error);
                    });
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.event-sub-detail {
		.detail {
			color: #030f09;
			.icon {
				font-size: 22px;
				margin: 0 6px;
			}
			.content {
				font-size: 16px;
			}
		}
	}

	.event-joining-button {
		font-size: 16px;
		font-weight: 600;
	}
</style>