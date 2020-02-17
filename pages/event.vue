<template>
	<div>
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
    import Interest from "../components/Interest";
    import SectionTitle from "../components/SectionTitle";
    import Post from "../components/Post";
    import Event from "../components/Event";
    import LazyLoadPost from "../components/LazyLoadPost";
    import {mapGetters} from 'vuex'

    export default {
        layout: 'app',

        components: {
            Event,
        },
        props: {

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
