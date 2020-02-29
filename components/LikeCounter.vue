<template>
	<span v-if="statusData" @click="toggleLike($event)" class="like-counter d-flex align-items-center" :class="{'liked' : statusData.likes.isLiked}">
		<i class="icon fa-heart animate" :class="statusData.likes.isLiked ? 'fa' : 'far'"></i>
		<span class="content" v-text="statusData.likes.count"></span>
	</span>
</template>

<script>
    export default {
        props: {
            status: {
                required: true
            }
        },
        data() {
            return {
                statusData: null
            }
        },
        created() {
            this.statusData = this.status;
        },
        methods: {
            toggleLike(event) {
                this.statusData.likes = (this.statusData.likes.isLiked) ? {
                    isLiked: false,
                    count : (parseInt(this.statusData.likes.count) - 1)
                } : {
                    isLiked: true,
                    count : (parseInt(this.statusData.likes.count) + 1)
                };
                this.$axios.$post('interactions/like',{
                    target_type: 'status',
                    target_id: this.statusData.id
                })
                    .then(response => {
                        this.statusData.likes = response.data;
                    })
                    .catch(error => {
                        console.log("error");
                        console.log(error);
                    }).finally(() => {
                });
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.like-counter {
		.icon {
			font-size: 22px;
			margin: 0 6px;
		}
		.content {
			font-size: 16px;
		}
		&.liked {
			color: #f84949;
		}
	}
</style>