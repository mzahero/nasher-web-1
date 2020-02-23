<template>
	<nuxt-link :to="'/locales/' + locale.username">
		<b-card class="mb-2 mt-5" no-body>
			<b-card-body class="pt-5 text-center position-relative">
				<b-img class="position-absolute avatar rounded-circle" :src="locale.avatar"></b-img>
				<span class="title text-dark mt-2 d-block" v-text="locale.name"></span>
				<span class="followers text-muted d-block" v-if="locale.followersCount" v-text="locale.followersCount + ' شخص متابع'"></span>
			</b-card-body>
		</b-card>
	</nuxt-link>
</template>

<script>
    export default {
        props: {
            locale : {
                default : null
            }
        }
    }
</script>

<style lang="scss" scoped>
	.title{
		font-weight: 500;
	}
	.followers{
		font-size: 14px;
	}
	.avatar{
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 100px;
	}
</style>