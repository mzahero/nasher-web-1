<template>
	<div>
		<b-card class="mb-3">
			<SectionTitle class="mt-0">بماذا انت مهتم؟</SectionTitle>
			<div class="owl-carousel owl-four-items">
				<Interest v-for="interest in interests" :img="interest.img" :title="interest.title"></Interest>
			</div>
		</b-card>
		<!--Start posts-->

		<lazyLoadPost v-if="loading"/>

		<post avatar="https://picsum.photos/100/100"
		      name="محمد العربي"
		      posted-by="أحمد دهيان"
		      timestamp="منذ 10 دقائق"
		      title="مرحباً للجمع"
		      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
		      :images="['https://picsum.photos/800/350', 'https://picsum.photos/400/175', 'https://picsum.photos/1200/525']"
		      :commentable="false"
		      :is-liked="true"
		      likes-count="6"
		/>
		<event
				:commentable="true"
				avatar="https://picsum.photos/90/90"
				name="الهيئة العامة للترفيه"
				posted-by="تم النشر بواسطة أحمد علي"
				timestamp="منذ 20 دقيقة مضت"
				month="فبراير"
				day="11"
				content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
				image="https://picsum.photos/1000/437"
				:comments="[]"
				title="عنوان الحدث"
				attendances-count="0"
				:attendances="[]"
		/>

		<post avatar="https://picsum.photos/50/50"
		      name="محمد الدهمان"
		      posted-by="أحمد دهيان"
		      timestamp="منذ 50 دقيقة"
		      title="مرحباً للجمع"
		      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
		      :images="['https://picsum.photos/1200/600']"
		      :commentable="true"
		      :comments="[
		                {
                        avatar : 'https://picsum.photos/140/140',
                        likedByOfficial : false,
                        name : 'علي العمري',
                        content : 'إن هذا هو نص التعليق الافتراضي',
                        isLiked: true,
                        timestamp: 'منذ 25 دقيقة'
		                }
                ]"
		      :is-liked="false"
		      likes-count="2"
		/>

		<post avatar="https://picsum.photos/70/70"
		      name="محمد الحبوب"
		      posted-by="تم النشر بواسطة محمد الحبوب"
		      timestamp="منذ 14 دقيقة"
		      title="مرحباً للجمع"
		      content="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى."
		      :images="['https://picsum.photos/1600/800']"
		      :commentable="false"
		      :comments="[
		                {
                        avatar : 'https://picsum.photos/140/140',
                        likedByOfficial : false,
                        name : 'علي العمري',
                        content : 'إن هذا هو نص التعليق الافتراضي',
                        isLiked: true,
                        timestamp: 'منذ 25 دقيقة'
		                }
                ]"
		      :is-liked="false"
		      likes-count="2"
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
    import Interest from "../components/Interest";
    import SectionTitle from "../components/SectionTitle";
    import Post from "../components/Post";
    import Event from "../components/Event";
    import LazyLoadPost from "../components/LazyLoadPost";

    export default {
        loading: false,
        components: {
            Event,
            Interest,
            SectionTitle,
            Post,
            LazyLoadPost,
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
                margin: 10
            });
        }
    }
</script>

<style>

</style>
