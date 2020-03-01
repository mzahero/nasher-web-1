<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="profile-page" v-if="user">
		<b-card
				:img-src="user.cover ? user.cover : 'https://dummyimage.com/700x250/eff0f2/eff0f2.gif'"
				:img-alt="user.name"
				img-top
				class="mb-3"
				no-body
		>
			<b-card-body class="pt-0">
				<b-media class="position-relative">
					<template v-slot:aside>
						<div class="aside">
							<b-img class="rounded-circle border-white avatar" :src="user.avatar" :alt="user.name"></b-img>
						</div>
					</template>
					<b-dropdown class="options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>
					<div class="name">{{ user.name }}</div>
					<div class="description pb-3">
						<span v-html="user.bio.formatted"></span>
					</div>
				</b-media>
				<div class="bio pb-3">
					<p v-html="user.bio.formatted"></p>
				</div>
				<div class="links d-flex">
					<div class="location d-flex align-items-center mr-3">
						<i class="far fa-map-marker-alt mr-2"></i>
						<span v-text="user.location"></span>
					</div>
					<div class="link d-flex align-items-center">
						<i class="far fa-link mr-2"></i>
						<span>
							<a :href="user.link" target="_blank" v-text="user.link"></a>
						</span>
					</div>
				</div>
			</b-card-body>
		</b-card>
		<section-title>متابع لهذه الجهات</section-title>
		<div class="row pt-2">
			<div v-for="locale in followings" class="col-6 col-lg-4 mb-3">
				<LocaleCard :locale="locale"/>
			</div>
		</div>
		<infinite-loading @infinite="infiniteScroll">
			<div slot="spinner">
				<div class="row">
					<div class="col-6 col-lg-4 mb-3">
						<lazyLoadLocale/>
					</div>
					<div class="col-6 col-lg-4 mb-3">
						<lazyLoadLocale/>
					</div>
					<div class="col-6 col-lg-4 mb-3">
						<lazyLoadLocale/>
					</div>
				</div>
			</div>
			<div slot="no-more"></div>
			<div slot="no-results"></div>
		</infinite-loading>
	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import LocaleCard from "../../components/LocaleCard";
    import LazyLoadLocale from "../../components/LazyLoadLocale";

    export default {
        layout: 'app',
        components: {LazyLoadLocale, LocaleCard, SectionTitle},
        props: {},
        data() {
            return {
                user: null,
                followings: [],
                followingsPage: 0
            }
        },
        methods: {
            infiniteScroll($state) {
                this.followingsPage++
                this.$axios.get('users/' + this.$route.params.id + '/followings', {
                    params : {
                        page : this.followingsPage,
                        per_page : 9,
                    }
                })
                    .then((response) => {
                        if (response.data.data.length > 1) {
                            const newFollowings = [...this.followings, ...response.data.data];
                            this.followings = newFollowings
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        },
        async created() {
            await this.$axios.$get('users/' + this.$route.params.id)
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    console.log("error");
                    console.log(error);
                });
        }
    }
</script>

<style lang="scss">
	.profile-page {
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
				border: 5px solid;
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
	}
</style>
