<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div v-if="event" class="event mt-3">
		<b-card
				:img-src="image"
				:img-alt="event.title"
				img-top
				class="mb-3"
				no-body
		>
			<event-sub-details :event="event" v-if="image"/>
			<b-card-body>
				<b-media>
					<template v-slot:aside>
						<nuxt-link :to="'/locales/' + event.locale.username">
							<b-img class="rounded avatar" :src="event.locale.avatar" :alt="event.locale.name"></b-img>
						</nuxt-link>
					</template>

					<b-dropdown class="post-options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>


					<div class="post-owner">
						<nuxt-link class="text-dark" :to="'/locales/' + event.locale.username" v-text="event.locale.name">
						</nuxt-link>
					</div>

					<div class="details pb-3">
						<time class="timestamp" v-text="event.createdAt.diffForHumans"></time>
						<span v-if="event.locale.isAdmin" v-text="' - تم النشر بواسطة ' + event.user.name"></span>
					</div>
				</b-media>
				<b-media class="event-details">
					<template v-slot:aside>
						<div class="date-box rounded text-primary text-center">
							<div class="month" v-text="$moment(event.happeningAt.timestamp).locale('ar').format('MMMM')"></div>
							<div class="day" v-text="$moment(event.happeningAt.timestamp).format('DD')"></div>
						</div>
					</template>
					<div class="post-content" v-html="event.content.formatted"></div>
				</b-media>
				<div class="post-actions mt-3 d-flex">
					<attendances :event-id="event.id" :attendances="event.attendances.attendances"
					             :attendances-count="event.attendances.count"/>
					<span class=" d-flex align-items-center" @click.once="getComments()">
						<comment-counter :comments-count="event.comments.count"/>
					</span>
					<share-button class="ml-auto"/>
				</div>
			</b-card-body>
			<event-sub-details :event="event" v-if="!image"/>
			<template v-if="showCommentSection">
				<template v-if="comments.length">
					<hr class="mt-0">
					<b-card-body class="py-0">
						<comment v-for="comment in comments" :comment-prop="comment"/>
						<div v-if="commentNextPage">
							<b-button @click="getComments()" class="pl-5 margin-auto text-muted" variant="">أظهر المزيد</b-button>
						</div>
					</b-card-body>
				</template>
				<b-card-footer v-if="event.isCommentable">
					<b-media vertical-align="center">
						<template v-slot:aside>
							<img :src="$store.state.user.user.avatar" alt="user image" class="rounded-circle profile-image">
						</template>
						<Input placeholder="اكتب تعليق جديد…" @keyup.enter.native="addComment($event)" class="bg-white"/>
					</b-media>
				</b-card-footer>
			</template>
		</b-card>
	</div>
</template>

<script>
    import ShareButton from "./ShareButton";
    import Attendances from "./Attendances";
    import Input from "./Input";
    import EventSubDetails from "./EventSubDetails";
    import Comment from "./Comment";
    import CommentCounter from "./CommentCounter";

    export default {
        components: {CommentCounter, EventSubDetails, Input, ShareButton, Attendances, Comment},
        computed: {
            image: function () {
                return (this.event.images.length) ? this.event.images[0] : ''
            }
        },
        data() {
            return {
                comments: [],
                commentsPage: 1,
                commentNextPage: null,
                pageCreatedTime: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
                showCommentSection : false
            }
        },
        methods: {
            getComments() {
                this.showCommentSection = true;
                if (this.event.comments.count > 0) {
                    this.$axios.$get('comments', {
                        params: {
                            per_page: 3,
                            commentable_type: 'event',
                            commentable_id: this.event.id,
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
                        commentable_type: 'event',
                        commentable_id: this.event.id,
                        content: event.target.value
                    })
                    .then(response => {
                        this.comments.push(response.data);
                        this.event.comments.count = parseInt(this.event.comments.count) + 1
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
            event: {
                default: null
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.event {
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
		.event-details {
			.date-box {
				padding: 9px 20px;
				box-shadow: 0 6px 20px 0 rgba(13, 51, 32, 0.1);
				.month {
					font-weight: 500;
					font-size: 16px;
				}
				.day {
					line-height: 1;
					font-weight: bold;
					font-size: 32px;
				}
			}
		}

	}

</style>