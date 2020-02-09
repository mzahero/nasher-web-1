<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<div v-b-modal="'attendance-modal' + rand" class="attendances d-flex align-items-center ">
			<div class="users">
				<img v-for="attendance in attendances" :src="attendance.img" :alt="attendance.name"
				     class="rounded-circle profile-image border border-white">
			</div>
			<div class="others ml-2" v-if="others">
				و{{ others }} آخرون
			</div>
		</div>
		<b-modal size="sm" scrollable body-class="p-0" :id="'attendance-modal' + rand" hide-footer>
			<template slot="modal-title">
				117 مشترك <small class="text-muted pl-2"> ينون الحضور</small>
			</template>
			<b-list-group class="p-0 overflow-y-scroll" flush>
				<b-list-group-item class="p-2" v-for="attendance in allAttendances">
					<b-media class="p-0" vertical-align="center" no-body>
						<b-media-aside vertical-align="center">
							<b-img class="rounded-circle" width="42" height="42" :src="attendance.img" :alt="attendance.name"></b-img>
						</b-media-aside>
						<b-media-body class="align-self-center ml-2 mb-2">
							<h6 class="m-0" v-text="attendance.name"></h6>
						</b-media-body>
					</b-media>
				</b-list-group-item>
			</b-list-group>
		</b-modal>
	</div>
</template>

<script>
    export default {
        props: {
            attendances: {
                default: [
                    {
                        img: 'https://picsum.photos/38/38',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/38/38',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/38/38',
                        name: 'Hussam'
                    }
                ]
            },
            attendancesCount: {
                default: 21
            },
            allAttendances: {
                default: [
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },
                    {
                        img: 'https://picsum.photos/42/42',
                        name: 'Hussam'
                    },

                ]
            },
        },
        computed: {
            others() {
                return this.attendancesCount - this.attendances.length;
            },
		        rand(){
                return Math.random().toString(36).substr(2, 9);
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