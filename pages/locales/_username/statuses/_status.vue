<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<NuxtChild v-if="$route.name === 'locales-username-statuses-status-edit'" key="locales-username-statuses-status-edit"></NuxtChild>
		<div v-else>
			<div v-if="!status">
				<LazyLoadStatus/>
			</div>
			<div v-else>
				<Status :status="status"/>
			</div>
		</div>
	</div>
</template>

<script>
    import LazyLoadStatus from "../../../../components/LazyLoadStatus";
    import Status from "../../../../components/Status";

    export default {
        layout: 'app',
        components: {Status, LazyLoadStatus},
        data: function () {
            return {
                status: null
            }
        },
        created() {
            this.$axios.$get('statuses/' + this.$route.params.status)
                .then(response => {
                    this.status = response.data;
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
