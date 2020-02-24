<template>
	<span v-if="statusData" class="like-counter d-flex align-items-center" :class="{'liked' : statusData.likes.isLiked}">
		<i class="icon fa-heart animate" @click="toggleLike($event)" :class="statusData.likes.isLiked ? 'fa' : 'far'"></i>
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
                alert('حسام لسا ما خلص الاندبوينت!!!!')
		            return false;

                event.toElement.disabled = true;
                this.$axios.$post('events/' + this.event.id + '/attend')
                    .then(response => {
                        this.eventData = response.data.event;
                    })
                    .catch(error => {
                        console.log("error");
                        console.log(error);
                    }).finally(() => {
                    event.toElement.disabled = false
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