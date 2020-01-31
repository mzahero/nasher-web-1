<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="communities">
		<b-card class="mb-3">
			<SectionTitle class="mt-0">بماذا انت مهتم؟</SectionTitle>
			<div class="owl-carousel owl-four-items">
				<Interest v-for="interest in interests" :img="interest.img" :title="interest.title"
				          :selectable="true"></Interest>
			</div>
		</b-card>

		<b-card v-for="community in communities" class="mb-3 community">
			<b-media>
				<template v-slot:aside="">
					<b-img class="rounded avatar" :src="community.avatar" :alt="community.name"></b-img>
				</template>

				<div class="follow-btn position-absolute">
					<b-button v-if="!community.followed" class="" rounded variant="outline-secondary">تابع +</b-button>
					<b-button v-else class="" rounded variant="success">متابع <i class="fas fa-check"></i></b-button>
				</div>

				<div class="name" v-text="community.name"></div>
				<div class="location pb-3">
					<span v-if="community.location" v-text="community.location"></span>
				</div>
				<div class="description" v-html="community.description"></div>
			</b-media>
		</b-card>

		<!--End posts-->
		<b-card class="mb-3 text-center">
			<p class="text-muted">هنا تكون نهاية المطاف للمزيد قم بـ</p>
			<div class="buttons">
				<B-button class="m-2" rounded variant="outline-secondary">تغيير الموقع الجغرافي</B-button>
				<b-button class="m-2" rounded variant="outline-secondary">متابعة محتوى ناشر</b-button>
			</div>
		</b-card>

	</div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle";
    import Interest from "../components/Interest";

    export default {
        components: {SectionTitle, Interest},
        props: {
            interests: {
                default: [
                    {img: 'https://picsum.photos/130/110', title: 'التاريخ والفلسفة'},
                    {img: 'https://picsum.photos/130/110', title: 'العلوم الإنسانية'},
                    {img: 'https://picsum.photos/130/110', title: 'الرياضة'},
                    {img: 'https://picsum.photos/130/110', title: 'السياسة'},
                    {img: 'https://picsum.photos/130/110', title: 'آخرى'}
                ]
            },
            communities: {
                default: [
                    {
                        avatar: 'https://picsum.photos/135/135?image=54',
                        name: 'المتحف الوطني السعودي',
                        location: 'الرياض , السعودية',
                        description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
                        followed: true
                    },
                    {
                        avatar: 'https://picsum.photos/135/135?image=12',
                        name: 'المتحف الوطني السعودي',
                        location: 'الرياض , السعودية',
                        description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
                        followed: true
                    },
                    {
                        avatar: 'https://picsum.photos/135/135?image=25',
                        name: 'المتحف الوطني السعودي',
                        location: 'الرياض , السعودية',
                        description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
                        followed: true
                    },
                    {
                        avatar: 'https://picsum.photos/135/135?image=31',
                        name: 'المتحف الوطني السعودي',
                        location: 'الرياض , السعودية',
                        description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد',
                        followed: true
                    }
                ]
            }
        },
        mounted() {
            $('.owl-four-items').owlCarousel({
                items: 4,
                dots: false,
                rtl: true,
                margin: 10
            });
        }
    }
</script>

<style lang="scss">
	.communities {
		.community {
			.media-body {
				position: relative;
				.avatar {
				}
				.follow-btn {
					top: 0;
					left: 0;
				}
				.name {
					font-size: 24px;
					font-weight: 600;
					color: #030f09;
				}
				.location {
					color: #7a7b80;
					font-size: 16px;
				}
				.description {
					color: #030f09;
					font-size: 16px;
				}
			}
		}
	}
</style>
