<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="attendances-component">
		<div v-b-modal="'attendance-modal' + rand"
		     class="attendances d-flex align-items-center ">
			<div class="users">
				<img v-for="attendance in attendances" :src="attendance.user.avatar" :alt="attendance.user.name"
				     class="rounded-circle profile-image border border-white">
			</div>
			<div class="others ml-2" v-if="others">
				و{{ others }} آخرون
			</div>
		</div>
		<b-modal :static="true" :lazy="true" size="sm" scrollable body-class="p-0" :id="'attendance-modal' + rand"
		         hide-footer>
			<template slot="modal-title">
				{{ attendancesCount }} مشترك
				<small class="text-muted pl-2"> ينون الحضور</small>
			</template>
			<b-list-group class="p-0 overflow-y-scroll" flush>
				<b-list-group-item class="p-2" v-for="attendance in allAttendances">
					<b-media class="p-0" vertical-align="center" no-body>
						<b-media-aside vertical-align="center">
							<b-img class="attendance_avatar rounded-circle" :src="attendance.user.avatar"
							       :alt="attendance.user.name"></b-img>
						</b-media-aside>
						<b-media-body class="align-self-center ml-2 mb-2">
							<h6 class="m-0" v-text="attendance.user.name"></h6>
						</b-media-body>
					</b-media>
				</b-list-group-item>
				<infinite-loading @infinite="infiniteScroll">
					<div slot="spinner">
						<LazyLoadAttendance/><LazyLoadAttendance/>
						<LazyLoadAttendance/><LazyLoadAttendance/>
						<LazyLoadAttendance/><LazyLoadAttendance/>
					</div>
					<div slot="no-more"></div>
					<div slot="no-results"></div>
				</infinite-loading>
			</b-list-group>
		</b-modal>
	</div>
</template>

<script>
    import LazyLoadAttendance from './LazyLoadAttendance';

    export default {
        components: {
            LazyLoadAttendance
        },
        props: {
            attendances: {
                default: []
            },
            attendancesCount: {
                default: 21
            },
            eventId: {
                default: null,
                required: true
            }
        },
        computed: {
            others() {
                return this.attendancesCount - this.attendances.length;
            },
            rand() {
                return Math.random().toString(36).substr(2, 9);
            },
            url() {
                return 'events/' + this.eventId + '/attendances?page=' + this.page
            }
        },
        data: function () {
            return {
                allAttendances: [],
                page: 0
            }
        },
        methods: {
            infiniteScroll($state) {
                this.page++
                this.$axios.get(this.url)
                    .then((response) => {
                        if (response.data.data.length > 1) {
                            const newAtt = [...this.allAttendances, ...response.data.data];
                            this.allAttendances = newAtt
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.attendances-component {
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

	}

	.attendance_avatar {
		width: 40px;
		height: 40px;
	}
</style>