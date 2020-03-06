<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<NuxtChild v-if="$route.params.status" :key="$route.params.status" ></NuxtChild>
	<NuxtChild v-else-if="$route.params.event" :key="$route.params.event" ></NuxtChild>
	<NuxtChild v-else-if="$route.name === 'locales-username-edit'" key="locales-username-edit"></NuxtChild>
	<div v-else class="community-page">
		<div v-if="!locale">
			<lazyLoadProfile/>
		</div>
		<div v-else>
			<b-card
					:img-src="locale.cover ? locale.cover : 'https://dummyimage.com/700x250/eff0f2/eff0f2.gif'"
					:img-alt="locale.name"
					img-top
					class="mb-3"
					no-body
			>
				<b-card-body class="pt-0">
					<b-media class="position-relative">
						<template v-slot:aside>
							<div class="aside">
								<b-img class="rounded-circle avatar" :src="locale.avatar" :alt="locale.name"></b-img>
							</div>
						</template>

						<div class="d-flex align-items-center">
							<div class="name">{{ locale.name }}</div>

							<div class="ml-auto d-flex align-items-center pt-2">
								<b-dropdown no-caret variant="link">
									<template slot="button-content">
										<span class="text-dark dots">•••</span>
									</template>
									<b-dropdown-item>
										<nuxt-link class="d-block text-dark" :to="'/locales/edit/' + $route.params.username" v-if="locale.isAdmin">
											تعديل الجهة
										</nuxt-link>
									</b-dropdown-item>
								</b-dropdown>
								<div class="follow-btn" v-if="!locale.isAdmin">
									<b-button @click="toggleFollow($event)" rounded
									          :variant="locale.followers.isFollowed ? 'success' : 'outline-secondary'"
									          v-text="locale.followers.isFollowed ? 'متابع' : 'تابع +' "></b-button>
								</div>
							</div>
						</div>

						<div class="description pb-3">
							<span v-text="'----'"></span>
						</div>
					</b-media>
					<div class="bio pb-3">
						<p v-html="locale.bio"></p>
					</div>
					<div class="links d-flex">
						<div class="location d-flex align-items-center mr-2">
							<i class="far fa-map-marker-alt mr-2"></i>
							<span v-text="locale.address.region.name + ' ' + locale.address.country.name"></span>
						</div>
						<div class="link d-flex align-items-center mr-2">
							<i class="far fa-link mr-2"></i>
							<span>
							<a :href="locale.website.formatted" target="_blank" v-text="locale.website.raw"></a>
						</span>
						</div>
						<div class="followers d-flex align-items-center">
							<i class="far fa-user mr-2"></i>
							<span v-text="'----'"></span>
						</div>
					</div>
				</b-card-body>
			</b-card>
			<create-active v-if="locale.isAdmin" class="bg-white rounded" :locale-id="locale.id"/>
			<template v-if="closestEvent">
				<section-title>أقرب فعالية</section-title>
				<event v-if="activity.type === 'event_created'" :event="activity.subject"/>
				<hr>
			</template>
		</div>
		<template v-if="activities" v-for="activity in activities">
			<event v-if="activity.type === 'event_created'" :event="activity.subject"/>
			<status v-if="activity.type === 'status_created'" :status="activity.subject"/>
		</template>
		<infinite-loading @infinite="infiniteScroll">
			<div slot="spinner">
				<LazyLoadStatus/>
			</div>
			<div slot="no-more"></div>
			<div slot="no-results"></div>
		</infinite-loading>
	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import Event from "../../components/Event";
    import CreateActive from "../../components/CreateActive";
    import LazyLoadProfile from "../../components/LazyLoadProfile";
    import LazyLoadStatus from "../../components/LazyLoadStatus";
    import Status from "../../components/Status";

    export default {
        layout: 'app',
        components: {Status, CreateActive, Event, SectionTitle, LazyLoadProfile, LazyLoadStatus},
        data: function () {
            return {
                locale: null,
                activities: [],
                page: 0
            }
        },
        created() {
            this.$axios.$get('locales/' + this.$route.params.username)
                .then(response => {
                    this.locale = response.data;
                })
                .catch(error => {
                    console.log("error");
                    console.log(error);
                });
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
            },
            infiniteScroll($state) {
                this.page++
                this.$axios.get(this.url)
                    .then((response) => {
                        if (response.data.data.length > 1) {
                            const newActivities = [...this.activities, ...response.data.data];
                            this.activities = newActivities
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        },
        computed: {
            url() {
                return 'activities/' + this.$route.params.username + '/timeline?page=' + this.page
            }
        },
        props: {
            followers: {
                default: '86 ألف متابع'
            },
            followed: {
                default: true
            },
            closestEvent: {
                default: false
            }
        }
    }
</script>

<style lang="scss">
	.community-page {
		.community {
			padding-left: 10px;
			padding-right: 10px;
			.avatar {

			}
			.title {
				font-size: 16px;
				font-weight: 600;
				color: #030f09;

			}
			.follow-btn {
				padding: 0px 19px 4px 19px;
				font-size: 14px;
			}
		}
		.aside {
			width: 110px;
			.avatar {
				position: absolute;
				top: -30px;
				border: 5px solid #e6e6e6;
				width: 107px;
				height: 107px;
			}
		}
		.name {
			font-size: 28px;
			font-weight: 500;
			color: #030f09;
		}
		.description {
			font-size: 18px;
			color: #767676;
		}
		.bio {
			font-size: 16px;
			color: #767676;
		}
		.links {
			color: #3e3f42;
			i {
				font-size: 20px;
			}
		}
		.options {
			position: absolute;
			top: 0;
			left: 0;
			* {
				text-decoration: none !important;
			}
			.dots {
				color: #767676;
			}
		}
		.no-click {
			position: relative;
			&:after {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				content: '';
				display: block;
			}
		}
	}
</style>
