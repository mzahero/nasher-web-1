<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<NuxtChild v-if="$route.params.status" :key="$route.params.status" ></NuxtChild>
	<NuxtChild v-else-if="$route.params.event" :key="$route.params.event" ></NuxtChild>
	<div v-else class="community-page">
		<div v-if="!locale">
			<lazyLoadProfile/>
			<LazyLoadStatus/>
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
										<span class="dots">•••</span>
									</template>
									<b-dropdown-item href="#">•••</b-dropdown-item>
									<b-dropdown-item href="#">•••</b-dropdown-item>
								</b-dropdown>
								<div class="follow-btn" v-if="!locale.isAdmin">
									<b-button v-if="!followed" class="" rounded variant="outline-secondary">تابع +</b-button>
									<b-button v-else class="" rounded variant="success">متابع <i class="fas fa-check"></i></b-button>
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

			<create-active v-if="locale.isAdmin" class="bg-white rounded"/>

			<template v-if="closestEvent">

				<section-title>أقرب فعالية</section-title>

				<event
						:commentable="true"
						avatar="https://picsum.photos/110/110"
						name="الهيئة العامة للترفيه"
						posted-by="تم النشر بواسطة أحمد باشا"
						timestamp="منذ 45 دقيقة مضت"
						month="اكتوبر"
						day="23"
						content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
						image="https://picsum.photos/700/350"
						:comments="[]"
						title="عنوان الحدث"
						attendances-count="10"
						:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
				/>

				<hr>

			</template>

			<event
					:commentable="true"
					avatar="https://picsum.photos/110/110"
					name="الهيئة العامة للترفيه"
					posted-by="تم النشر بواسطة أحمد باشا"
					timestamp="منذ 45 دقيقة مضت"
					month="اكتوبر"
					day="23"
					content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
					image="https://picsum.photos/700/350"
					:comments="[]"
					title="عنوان الحدث"
					attendances-count="10"
					:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
			/>
			<event
					:commentable="true"
					avatar="https://picsum.photos/110/110"
					name="الهيئة العامة للترفيه"
					posted-by="تم النشر بواسطة أحمد باشا"
					timestamp="منذ 45 دقيقة مضت"
					month="اكتوبر"
					day="23"
					content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
					image="https://picsum.photos/700/350"
					:comments="[]"
					title="عنوان الحدث"
					attendances-count="10"
					:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
			/>
			<event
					:commentable="true"
					avatar="https://picsum.photos/110/110"
					name="الهيئة العامة للترفيه"
					posted-by="تم النشر بواسطة أحمد باشا"
					timestamp="منذ 45 دقيقة مضت"
					month="اكتوبر"
					day="23"
					content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
					image="https://picsum.photos/700/350"
					:comments="[]"
					title="عنوان الحدث"
					attendances-count="10"
					:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
			/>

			<event
					:commentable="true"
					avatar="https://picsum.photos/110/110"
					name="الهيئة العامة للترفيه"
					posted-by="تم النشر بواسطة أحمد باشا"
					timestamp="منذ 45 دقيقة مضت"
					month="اكتوبر"
					day="23"
					content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
					image="https://picsum.photos/700/350"
					:comments="[]"
					title="عنوان الحدث"
					attendances-count="10"
					:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
			/>

			<event
					:commentable="true"
					avatar="https://picsum.photos/110/110"
					name="الهيئة العامة للترفيه"
					posted-by="تم النشر بواسطة أحمد باشا"
					timestamp="منذ 45 دقيقة مضت"
					month="اكتوبر"
					day="23"
					content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
					image="https://picsum.photos/700/350"
					:comments="[]"
					title="عنوان الحدث"
					attendances-count="10"
					:attendances="[
					{img : 'https://picsum.photos/50/50', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/60/60', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/70/70', title: 'أحمد باشا'},
					{img : 'https://picsum.photos/80/80', title: 'أحمد باشا'}
				]"
			/>
		</div>
	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import Event from "../../components/Event";
    import CreateActive from "../../components/CreateActive";
    import LazyLoadProfile from "../../components/LazyLoadProfile";
    import LazyLoadStatus from "../../components/LazyLoadStatus";

    export default {
        layout: 'app',
        components: {CreateActive, Event, SectionTitle, LazyLoadProfile, LazyLoadStatus},
        data: function () {
            return {
                locale: null
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
        computed: {},
        props: {
            followers: {
                default: '86 ألف متابع'
            },
            followed: {
                default: true
            },
            closestEvent: {
                default: true
            }
        },
        mounted() {
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
