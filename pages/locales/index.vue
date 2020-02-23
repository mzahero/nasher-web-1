<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="communities">
		<b-card class="mb-3">
			<SectionTitle class="mt-0">بماذا انت مهتم؟</SectionTitle>
			<div class="owl-carousel owl-four-items">
				<Interest v-for="interest in interests" :img="interest.img" :title="interest.title"
				          :selectable="true"></Interest>
			</div>
		</b-card>

		<div class="row" v-if="!locales">
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
		</div>

		<div v-else class="row">
			<div v-for="locale in locales" class="col-6 col-lg-4 mb-3 community">
				<LocaleCard :locale="locale"/>
			</div>
		</div>

		<infinite-loading @infinite="infiniteScroll">
			<div slot="spinner" class="row">
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			</div>
			<div slot="no-more">
				<!--End posts-->
				<b-card class="mb-3 text-center">
					<p class="text-muted">هنا تكون نهاية المطاف للمزيد قم بـ</p>
					<div class="buttons">
						<B-button class="m-2" rounded variant="outline-secondary">تغيير الموقع الجغرافي</B-button>
						<b-button class="m-2" rounded variant="outline-secondary">متابعة محتوى ناشر</b-button>
					</div>
				</b-card>
			</div>
		</infinite-loading>

	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import Interest from "../../components/Interest";
    import LazyLoadLocale from "../../components/LazyLoadLocale";
    import LocaleCard from "../../components/LocaleCard";

    export default {
        layout: 'app',

        components: {SectionTitle, Interest, LazyLoadLocale, LocaleCard},
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
        },
        data: function () {
            return {
                locales: [],
                page: 0,
            }
        },
        computed: {
            url() {
                return 'locales?page=' + this.page
            }
        },
        methods: {
            infiniteScroll($state) {
                this.page++
                this.$axios.get(this.url)
                    .then((response) => {
                        if (response.data.data.length > 1) {
                            const newLocales = [...this.locales, ...response.data.data];
                            this.locales = newLocales
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
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
