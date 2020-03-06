<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="post">
		<b-card class="mb-3" :class="{'overflow-hidden' : status.images.length > 1}" no-body :header="header ? header : ''">
			<b-card-body>
				<b-media>
					<template v-slot:aside="">
						<b-img class="rounded avatar" :src="status.locale.avatar" :alt="status.locale.name"></b-img>
					</template>

					<b-dropdown class="post-options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>

					<div class="post-owner" v-text="status.locale.name"></div>
					<div class="details pb-3">
						<time class="timestamp" v-text="status.createdAt.diffForHumans"></time>
						<span v-if="status.locale.isAdmin" v-text="' - تم النشر بواسطة ' + status.user.name"></span>
					</div>
					<div class="post-content" v-html="status.content.formatted"></div>
					<div :class="{'owl-carousel owl-one-item no-overflow' : status.images.length > 1}" class="mt-2" dir="ltr">
						<b-img v-for="(image, index) in status.images" :key="index" class="rounded" :src="image.url" :alt="status.locale.name"></b-img>
					</div>
					<div class="overflow-hidden iframe-container" v-if="status.embed" v-html="status.embed.code"></div>
					<div class="post-actions d-flex mt-3">
						<like-counter :status="status" class="mr-3"/>
						<span class=" d-flex align-items-center" @click.once="getComments()">
							<comment-counter :comments-count="status.comments.count"/>
						</span>
						<share-button :dropup="status.images.length > 1" class="ml-auto"/>
					</div>
				</b-media>
			</b-card-body>
			<template v-if="comments.length">
				<hr class="mt-0">
				<b-card-body class="py-0">
					<comment v-for="(comment, index) in comments" :key="index" :comment-prop="comment"/>
					<div v-if="commentNextPage">
						<b-button @click="getComments()" class="pl-5 margin-auto text-muted" variant="">أظهر المزيد</b-button>
					</div>
				</b-card-body>
			</template>
			<b-card-footer v-if="status.isCommentable">
				<b-media vertical-align="center">
					<template v-slot:aside>
						<img :src="$store.state.user.user.avatar" alt="user image" class="rounded-circle profile-image">
					</template>
					<Input placeholder="اكتب تعليق جديد…" @keyup.enter.native="addComment($event)" class="bg-white"/>
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
        data() {
            return {
                comments: [],
                commentsPage: 1,
                commentNextPage: null,
		            pageCreatedTime : this.$moment().format('YYYY-MM-DD HH:mm:ss')
            }
        },
        methods: {
            getComments() {
                if(this.status.comments.count > 0){
                    this.$axios.$get('comments', {
                        params: {
                            per_page: 3,
                            commentable_type: 'status',
                            commentable_id: this.status.id,
                            page: this.commentsPage,
                            before: this.pageCreatedTime
                        }
                    })
                        .then(response => {
                            const newComments = [...this.comments, ...response.data];
                            this.comments = newComments
                            this.commentNextPage = response.links.next
                            this.commentsPage++
                        })
                        .catch(error => {
                            console.log("error");
                            console.log(error);
                        }).finally(() => {
                    });
                }
            },
            addComment(event) {
                event.target.disabled = true;
                this.$axios.$post('comments',
                    {
                        commentable_type: 'status',
                        commentable_id: this.status.id,
                        content: event.target.value
                    })
                    .then(response => {
                        this.comments.push(response.data);
                        this.status.comments.count = parseInt(this.status.comments.count) + 1
                    })
                    .catch(error => {
                        console.log("error");
                        console.log(error);
                    }).finally(() => {
                    event.target.disabled = false;
                    event.target.value = ''
                });
            }
        },
        props: {
            status: {
                default: null,
            },
            'header': {
                default: ''
            }
        },
        mounted() {
            $('.owl-one-item').owlCarousel({
                items: 1,
                margin: 10
            });
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.post {
		.iframe-container > iframe {
			width: 100%;
			border-radius: 0.25rem;
		}
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