<template>
	<div>
		<b-card class="mb-3">
			<SectionTitle class="mt-0">الفعاليات القادمة</SectionTitle>
			<div class="text-center row">
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" style="background-color: #2aa5a1;">
						اليوم
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" style="background-color: #2aa5a1;">
						غداً
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2 bg-primary">
						هذا الأسبوع
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" style="background-color: #2aa5a1;">
						اختر التاريخ
					</div>
				</div>
			</div>
		</b-card>
		<!--Start posts-->

		<LazyLoadLocale v-if="loading"/>

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
    import Post from "../components/Status";
    import Event from "../components/Event";
    import LazyLoadLocale from "../components/LazyLoadLocale";
    import {mapGetters} from 'vuex'

    export default {
        layout: 'app',

        components: {
            Event,
            Interest,
            SectionTitle,
            Post,
            LazyLoadLocale
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
        computed: mapGetters({
            events: 'events/get',
        }),
        mounted() {

        }
    }
</script>

<style>

</style>
