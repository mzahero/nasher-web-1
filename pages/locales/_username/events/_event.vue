<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<div v-if="!event">
			<LazyLoadEvent />
		</div>
		<div v-else>
			<event :event="event" />
		</div>
	</div>
</template>

<script>
    import LazyLoadEvent from "../../../../components/LazyLoadEvent";
    import Event from "../../../../components/Event";

    export default {
        layout: 'app',
        components: {Event, LazyLoadEvent},
        data: function () {
            return {
                event: null
            }
        },
        created() {
            this.$axios.$get('events/' + this.$route.params.event)
                .then(response => {
                    this.event = response.data;
                })
                .catch(error => {
                    console.log("error");
                    console.log(error);
                });
        }
    }
</script>

<style lang="scss">
</style>
