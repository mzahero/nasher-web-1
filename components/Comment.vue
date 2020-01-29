<template>
	<b-media class="comment mb-3">
		<template v-slot:aside >
			<img :src="avatar" alt="user image" class="rounded-circle profile-image">
		</template>
		<div class="content d-flex align-items-start">
			<div class="box rounded">
				<div class="liked-by-official text-success" v-if="likedByOfficial">
					<i class="fa fa-heart mr-1"></i>
					تم الاعجاب بواسطة الجهة المحلية
				</div>
				<span class="user-name" v-text="name"></span>
				<span class="comment-text" v-text="content"></span>
			</div>
			<b-dropdown class="comment-options" no-caret variant="link">
				<template slot="button-content">
					<span class="dots">•••</span>
				</template>
				<b-dropdown-item href="#">•••</b-dropdown-item>
				<b-dropdown-item href="#">•••</b-dropdown-item>
			</b-dropdown>
		</div>
		<div class="comment-actions pt-2">
			<a :class="{'text-success' : likedByOfficial || isLiked}" href="" v-text="isLiked ? 'أعجبني' : 'إعجاب'"></a>
			<span class="ml-2" v-text="timestamp"></span>
		</div>
	</b-media>
</template>

<script>
    export default {
        props: {
            name : {
                required : true,
		            default: 'صاحب التعليق'
            },
            avatar : {
                required : true,
                default: 'https://picsum.photos/32/32'
            },
            likedByOfficial:{
                default: false
            },
            isLiked:{
                default: false
            },
            timestamp :{
                default: 'timestamp'
            },
            content :{
                default: 'نص التعليق'
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	.comment{
		.content{
			.box{
				.liked-by-official{
					font-size: 10px;
					font-weight: 500;
				}
				padding: 15px;
				background-color: #eff0f2;
				font-size: 14px;
				.user-name{
					font-size: 16px;
					font-weight: 500;
				}
				.comment-text{
					color: #767676;
				}
			}
		}
		.comment-actions{
			padding-right: 15px;
			font-size: 12px;
			font-weight: 500;
			color: #767676;
			a{
				color: #767676;
			}

			.like{

			}
		}
		.comment-options {
			* {
				text-decoration: none !important;
			}
			.dots {
				color: #767676;
				opacity: 0.5;
			}
			&:hover .dots{opacity: 1;}
		}
	}
</style>