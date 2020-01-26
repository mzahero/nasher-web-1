<template>
	<div class="post">
		<b-card class="mb-3" no-body>
			<b-card-body>
			<b-media>
				<template v-slot:aside>
					<b-img class="rounded" src="https://picsum.photos/42/42" width="42" alt="placeholder"></b-img>
				</template>

				<b-dropdown class="post-options" no-caret variant="link">
					<template slot="button-content">
						<span class="dots">•••</span>
					</template>
					<b-dropdown-item href="#">عربي</b-dropdown-item>
					<b-dropdown-item href="#">Another item</b-dropdown-item>
				</b-dropdown>

				<div class="post-owner">هيئة الترفيه</div>
				<div class="details pb-3">منذ 8 دقائق - تم النشر بواسطة خالد الرفاعي</div>

				<p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.</p>
				<b-img class="rounded" src="https://picsum.photos/550/250" alt="placeholder"></b-img>
				<post-actions/>
			</b-media>
			</b-card-body>
			<hr class="mt-0">
			<b-card-body class="pt-0">
				Comments<br>Comments<br>Comments<br>
			</b-card-body>
			<b-card-footer>
				<b-media vertical-align="center">
					<template v-slot:aside >
						<img src="https://picsum.photos/200/200" alt="user image" class="rounded-circle profile-image">
					</template>
					<Input placeholder="اكتب تعليق جديد…" class="bg-white"/>
				</b-media>
			</b-card-footer>
		</b-card>
	</div>
</template>

<script>
    import PostActions from "./PostActions";
    import Input from "./Input";
    export default {
        components: {Input, PostActions},
        props: {}
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.post {
		.media-body {
			position: relative;
			.post-owner {
				font-size: 16px;
				font-weight: 500;
			}
			.details {
				font-size: 14px;
				color: #767676;
			}

			.post-options {
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

	}

</style>