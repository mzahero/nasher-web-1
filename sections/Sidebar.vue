<template>
	<section class="nav-sidebar">
		<slot/>
	</section>
</template>

<style scoped lang="scss">
	.nav-sidebar{
		min-height: 300px;
		height: 100vh;
		overflow-y: scroll;
	}
</style>