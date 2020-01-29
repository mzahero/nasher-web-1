<template>
	<div class="attendances d-flex align-items-center">
		<div class="users">
			<img v-for="attendance in attendances" :src="attendance.img" :alt="attendance.name"
			     class="rounded-circle profile-image border border-white">
		</div>
		<div class="others ml-2" v-if="others">
			و{{ others }} آخرون
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            attendances : {
                default: [
		                {
		                    img : 'https://picsum.photos/38/38',
				                name : 'Hussam'
		                },
                    {
                        img : 'https://picsum.photos/38/38',
                        name : 'Hussam'
                    },
                    {
                        img : 'https://picsum.photos/38/38',
                        name : 'Hussam'
                    }
                ]
            },
            attendancesCount: {
                default: 21
            }
        },
		    computed: {
            others() {
                return this.attendancesCount - this.attendances.length;
            }
		    }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.attendances {
		.users {
			img {
				margin-right: -15px;
				&:first-child {
					margin-right: 0;
				}
			}
		}
	}
</style>