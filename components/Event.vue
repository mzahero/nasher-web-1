<template>
	<div class="event">
		<b-card
				:img-src="image"
				:img-alt="title"
				img-top
				class="mb-3"
				no-body
		>
			<event-sub-details/>
			<b-card-body>
				<b-media>
					<template v-slot:aside>
						<b-img class="rounded avatar" :src="avatar" :alt="name"></b-img>
					</template>

					<b-dropdown class="post-options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>

					<div class="post-owner" v-text="name"></div>
					<div class="details pb-3">
						<time class="timestamp" v-text="timestamp"></time>
						<span v-if="postedBy" v-text="' - ' + postedBy"></span>
					</div>
				</b-media>
				<b-media class="event-details">
					<template v-slot:aside>
						<div class="date-box rounded text-primary text-center">
							<div class="month" v-text="month"></div>
							<div class="day" v-text="day">21</div>
						</div>
					</template>
					<div class="post-content" v-html="content"></div>
				</b-media>

				<div class="post-actions d-flex mt-3">
					<attendances :attendances="attendances" :attendances-count="attendancesCount"/>
					<share-button class="ml-auto" />
				</div>
			</b-card-body>
			<template v-if="comments.length">
				<hr class="mt-0">
				<b-card-body class="py-0">
					<comment v-for="comment in comments" :avatar="comment.avatar" :liked-by-official="comment.likedByOfficial" :name="comment.name" :content="comment.content"/>
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
    import Attendances from "./Attendances";
    import Input from "./Input";
    import EventSubDetails from "./EventSubDetails";
    import Comment from "./Comment";

    export default {
        components: {EventSubDetails, Input, ShareButton, Attendances, Comment},
        props: {
            'commentable': {
                default: true
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
            'month': {
                default: 'اكتوبر'
            },
            'day' : {
                default: '21'
            },
            'content': {
                default: '<h3>عنوان المنشور</h3><p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>'
            },
            'image': {
                default: 'https://picsum.photos/800/350'
            },
            'comments': {
                default: [
                    {
                        avatar: 'https://picsum.photos/800/350',
                        likedByOfficial: false,
                        name: 'صاحب التعليق',
                        content: 'إن هذا هو نص التعليق الافتراضي'
                    },
                    {
                        avatar: 'https://picsum.photos/800/350',
                        likedByOfficial: false,
                        name: 'صاحب التعليق',
                        content: 'إن هذا هو نص التعليق الافتراضي'
                    },
                ]
            },
            'title': {
                default: 'Post Title'
            },
            'attendancesCount':{
                default: 2
            },
            'attendances' : {
                default: [
                    {
                        img : 'https://picsum.photos/38/38',
                        name : 'Hussam'
                    },
                    {
                        img : 'https://picsum.photos/38/38',
                        name : 'Hussam'
                    },
                    {
                        img : 'https://picsum.photos/38/38',
                        name : 'Hussam'
                    }
                ]
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