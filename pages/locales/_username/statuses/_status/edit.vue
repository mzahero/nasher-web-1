<template>
	<div class="bg-white">
		<b-card>
			<statusForm :is-edit="true"></statusForm>
		</b-card>
	</div>
</template>

<script>
    import StatusForm from "../../../../../components/StatusForm";
    export default {
        components: {StatusForm}
    }
</script>

<style lang="scss">
</style>
