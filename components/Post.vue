<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="post">
		<b-card class="mb-3" :class="{'overflow-hidden' : images.length > 1}" no-body :header="header ? header : ''">
			<b-card-body>
				<b-media>
					<template v-slot:aside="">
						<b-img class="rounded avatar" :src="avatar" :alt="name"></b-img>
					</template>

					<b-dropdown class="post-options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>

					<div class="post-owner" v-text="name"></div>
					<div class="details pb-3">
						<time class="timestamp" v-text="timestamp"></time>
						<span v-if="postedBy" v-text="' - ' + postedBy"></span>
					</div>
					<div class="post-content" v-html="content"></div>
					<div :class="{'owl-carousel owl-one-item no-overflow' : images.length > 1}" class="mt-2" dir="ltr">
						<b-img v-for="image in images" class="rounded" :src="image" :alt="title"></b-img>
					</div>
					<div class="post-actions d-flex mt-3">
						<like-counter :likes-count="likesCount" :is-liked="isLiked" class="mr-3"/>
						<comment-counter :comments-count="comments.length"/>
						<share-button :dropup="images.length > 1" class="ml-auto"/>
					</div>
				</b-media>
			</b-card-body>
			<template v-if="commentable && comments.length">
				<hr class="mt-0">
				<b-card-body class="py-0">
					<comment v-for="comment in comments" :avatar="comment.avatar" :liked-by-official="comment.likedByOfficial" :name="comment.name" :content="comment.content" :is-liked="comment.isLiked" :timestamp="comment.timestamp"/>
				</b-card-body>
			</template>
			<b-card-footer v-if="commentable">
				<b-media vertical-align="center">
					<template v-slot:aside>
						<img src="https://picsum.photos/200/200" alt="user image" class="rounded-circle profile-image">
					</template>
					<Input placeholder="اكتب تعليق جديد…" class="bg-white"/>
				</b-media>
			</b-card-footer>
		</b-card>
	</div>
</template>

<script>
    import ShareButton from "./ShareButton";
    import CommentCounter from "./CommentCounter";
    import LikeCounter from "./LikeCounter";
    import Input from "./Input";
    import Comment from "./Comment";

    export default {
        components: {Comment, Input, ShareButton, CommentCounter, LikeCounter},
        props: {
            'commentable' : {
                default: true
            },
            'header': {
                default: ''
            },
            'avatar': {
                default: 'https://picsum.photos/200/200'
            },
            'name': {
                default: 'Name'
            },
            'postedBy': {
                default: 'postedBy'
            },
            'timestamp': {
                default: 'Timestamp'
            },
            'content': {
                default: '<h3>عنوان المنشور</h3><p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>'
            },
            'images': {
                default: [
                    'https://picsum.photos/800/350',
                    'https://picsum.photos/800/350',
                    'https://picsum.photos/800/350'
                ]
            },
            'comments': {
                default: [
		                {
                        avatar : 'https://picsum.photos/800/350',
                        likedByOfficial : false,
                        name : 'صاحب التعليق',
                        content : 'إن هذا هو نص التعليق الافتراضي',
				                isLiked: false,
                        timestamp: 'منذ 35 دقيقة'
		                },
                    {
                        avatar : 'https://picsum.photos/800/350',
                        likedByOfficial : false,
                        name : 'صاحب التعليق',
                        content : 'إن هذا هو نص التعليق الافتراضي',
                        isLiked: true,
                        timestamp: 'منذ 20 دقيقة'
                    },
                ]
            },
            'title': {
                default: 'Post Title'
            },
		        likesCount:{
                default: 4
		        },
            isLiked:{
                default: false
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.post {
		img.avatar {
			width: 42px;
			height: 42px;
		}
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