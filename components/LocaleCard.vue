<template>
	<b-card class="mb-2 mt-5" no-body>
		<b-card-body class="pt-5 text-center position-relative">
			<nuxt-link :to="'/locales/' + locale.username">
				<b-img class="position-absolute avatar rounded-circle" :src="locale.avatar"></b-img>
				<span class="title text-dark mt-2 d-block" v-text="locale.name"></span>
			</nuxt-link>
			<span class="followers text-muted d-block" v-if="locale.followers.count"
			      v-text="locale.followers.count + ' شخص متابع'"></span>
			<div class="follow-btn text-center pt-2">
				<b-button @click="toggleFollow($event)" rounded
				          :variant="locale.followers.isFollowed ? 'success' : 'outline-secondary'"
				          v-text="locale.followers.isFollowed ? 'متابع' : 'تابع +' "></b-button>
			</div>
		</b-card-body>
	</b-card>

</template>

<script>
    export default {
        props: {
            locale: {
                default: null
            }
        },
        methods: {
            toggleFollow(event) {
                event.target.disabled = true;
                this.$axios.$post('interactions/follow',
                    {
                        target_type: 'locale',
                        target_id: this.locale.id,
                    })
                    .then(response => {
                        this.locale.followers = response.data;
                    })
                    .catch(error => {
                        console.log("error");
                        console.log(error);
                    }).finally(() => {
                    event.target.disabled = false;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
	.title {
		font-weight: 500;
	}

	.followers {
		font-size: 14px;
	}

	.avatar {
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 100px;
	}
</style>