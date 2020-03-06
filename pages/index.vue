<template>
	<div>
		<b-card class="mb-3">
			<SectionTitle class="mt-0">بماذا انت مهتم؟</SectionTitle>
			<div class="owl-carousel owl-four-items">
				<Interest v-for="(interest, index) in interests" :key="index" :img="interest.img" :title="interest.title"></Interest>
			</div>
		</b-card>
		<!--Start posts-->
		<template v-if="activities" v-for="activity in activities">
			<event v-if="activity.type === 'event_created'" :event="activity.subject"/>
			<status v-if="activity.type === 'status_created'" :status="activity.subject"/>
		</template>
		<infinite-loading @infinite="infiniteScroll">
			<div slot="spinner">
				<LazyLoadStatus/>
			</div>
			<div slot="no-more">
				<b-card class="mb-3 text-center">
					<p class="text-muted">هنا تكون نهاية المطاف للمزيد قم بـ</p>
					<div class="buttons">
						<B-button class="m-2" rounded variant="outline-secondary">تغيير الموقع الجغرافي</B-button>
						<b-button class="m-2" rounded variant="outline-secondary">متابعة محتوى ناشر</b-button>
					</div>
				</b-card>
			</div>
			<div slot="no-results"></div>
		</infinite-loading>
	</div>
</template>

<script>
    import Interest from "../components/Interest";
    import SectionTitle from "../components/SectionTitle";
    import Status from "../components/Status";
    import Event from "../components/Event";
    import LazyLoadStatus from "../components/LazyLoadStatus";

    export default {
        layout: 'app',
        loading: false,
        components: {
            Event,
            Interest,
            SectionTitle,
            Status,
            LazyLoadStatus,
        },
        data: function () {
            return {
                activities: [],
                page: 0
            }
        },
        methods: {
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
                return 'activities/timeline?page=' + this.page
            }
        },
        props: {
            interests: {
                default: [
                    {img: 'https://picsum.photos/130/110', title: 'التاريخ والفلسفة'},
                    {img: 'https://picsum.photos/130/110', title: 'العلوم الإنسانية'},
                    {img: 'https://picsum.photos/130/110', title: 'الرياضة'},
                    {img: 'https://picsum.photos/130/110', title: 'السياسة'},
                    {img: 'https://picsum.photos/130/110', title: 'آخرى'}
                ]
            }
        },
        mounted() {
            $('.owl-one-item').owlCarousel({
                items: 1,
                margin: 10
            });
            $('.owl-four-items').owlCarousel({
                items: 4,
                dots: false,
                rtl: true,
                margin: 10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    360:{
                        items:2,
                    },
                    500:{
                        items:3,
                    },
                    1200:{
                        items:4,
                    },
                }
            });
        }
    }
</script>

<style>

</style>
