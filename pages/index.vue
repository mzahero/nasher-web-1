<template>
	<div class="container">
		<b-card class="mb-3">
			<NavbarSection class="mt-0">بماذا انت مهتم؟</NavbarSection>
			<carousel :pagination-enabled="false" :per-page="4" dir="ltr">
				<slide>
					<Interest img="https://picsum.photos/130/110" title="التاريخ والفلسفة"></Interest>
				</slide>
				<slide>
					<Interest img="https://picsum.photos/130/110" title="التاريخ والفلسفة"></Interest>
				</slide>
				<slide>
					<Interest img="https://picsum.photos/130/110" title="التاريخ والفلسفة"></Interest>
				</slide>
				<slide>
					<Interest img="https://picsum.photos/130/110" title="التاريخ والفلسفة"></Interest>
				</slide>
			</carousel>
		</b-card>
		<post/>
	</div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import Interest from "../components/Interest";
    import NavbarSection from "../components/NavbarSection";
    import Post from "../components/Post";

    export default {
        components: {
            Interest,
            Carousel,
            Slide,
            NavbarSection,
            Post,
        }
    }
</script>

<style>

</style>
