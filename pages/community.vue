<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="community-page">
		<b-card
				:img-src="cover"
				:img-alt="communiryName"
				img-top
				class="mb-3"
				no-body
		>
			<b-card-body class="pt-0">
				<b-media class="position-relative">
					<template v-slot:aside>
						<div class="aside">
							<b-img class="rounded-circle avatar" :src="avatar" :alt="communiryName"></b-img>
						</div>
					</template>

					<div class="d-flex align-items-center">
						<div class="name">{{ communiryName }}</div>

						<div class="ml-auto d-flex align-items-center pt-2">
							<b-dropdown no-caret variant="link">
								<template slot="button-content">
									<span class="dots">•••</span>
								</template>
								<b-dropdown-item href="#">•••</b-dropdown-item>
								<b-dropdown-item href="#">•••</b-dropdown-item>
							</b-dropdown>
							<div class="follow-btn">
								<b-button v-if="!followed" class="" rounded variant="outline-secondary">تابع +</b-button>
								<b-button v-else class="" rounded variant="success">متابع <i class="fas fa-check"></i></b-button>
							</div>
						</div>
					</div>

					<div class="description pb-3">
						<span v-text="description"></span>
					</div>
				</b-media>
				<div class="bio pb-3">
					<p v-html="bio"></p>
				</div>
				<div class="links d-flex">
					<div class="location d-flex align-items-center mr-2">
						<i class="far fa-map-marker-alt mr-2"></i>
						<span v-text="location"></span>
					</div>
					<div class="link d-flex align-items-center mr-2">
						<i class="far fa-link mr-2"></i>
						<span>
							<a :href="link" target="_blank" v-text="link"></a>
						</span>
					</div>
					<div class="followers d-flex align-items-center">
						<i class="far fa-user mr-2"></i>
						<span v-text="followers"></span>
					</div>
				</div>
			</b-card-body>
		</b-card>

		<div class="no-click" v-b-modal.modal-1="true">
			<create-active class="bg-white rounded" />
		</div>

		<b-modal body-class="p-0" size="lg" hide-footer hide-header centered id="modal-1" title="BootstrapVue">
			<create-active/>
		</b-modal>

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
</template>

<script>
    import SectionTitle from "../components/SectionTitle";
    import Event from "../components/Event";
    import CreateActive from "../components/CreateActive";

    export default {
        components: {CreateActive, Event, SectionTitle},
        props: {
            cover: {
                default: 'https://picsum.photos/630/210'
            },
            communiryName: {
                default: 'حسام عبد'
            },
            avatar: {
                default: 'https://picsum.photos/102/102'
            },
            description: {
                default: 'لجنة تنيمة'
            },
            bio: {
                default: 'الحساب الرسمي للهيئة العامة للترفيه بالمملكة العربية السعودية <br> The Official Account of the General Entertainment Authority in Saudi Arabia.'
            },
            location: {
                default: 'الرياض، السعودية'
            },
            link: {
                default: 'linkati.co/hussam3bd'
            },
            followers: {
                default: '86 ألف متابع'
            },
            followed: {
                default: true
            },
            closestEvent: {
                default : true
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
		.no-click{
			position: relative;
			&:after{
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
