<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="profile-page">
		<b-card
				:img-src="cover"
				:img-alt="userName"
				img-top
				class="mb-3"
				no-body
		>
			<b-card-body class="pt-0">
				<b-media class="position-relative">
					<template v-slot:aside>
						<div class="aside">
							<b-img class="rounded-circle border-white avatar" :src="avatar" :alt="userName"></b-img>
						</div>
					</template>
					<b-dropdown class="options" no-caret variant="link">
						<template slot="button-content">
							<span class="dots">•••</span>
						</template>
						<b-dropdown-item href="#">•••</b-dropdown-item>
						<b-dropdown-item href="#">•••</b-dropdown-item>
					</b-dropdown>
					<div class="name">{{ userName }}</div>
					<div class="description pb-3">
						<span v-text="description"></span>
					</div>
				</b-media>
				<div class="bio pb-3">
					<p v-html="bio"></p>
				</div>
				<div class="links d-flex">
					<div class="location d-flex align-items-center mr-3">
						<i class="far fa-map-marker-alt mr-2"></i>
						<span v-text="location"></span>
					</div>
					<div class="link d-flex align-items-center">
						<i class="far fa-link mr-2"></i>
						<span>
							<a :href="link" target="_blank" v-text="link"></a>
						</span>
					</div>
				</div>
			</b-card-body>
		</b-card>
		<b-card class="mt-3">
			<section-title>متابع لهذه الجهات</section-title>
			<div class="row">
				<div v-for="destination in destinations" class="col-md-3 mb-3 destination">
					<b-card no-body>
						<b-card-body class="pt-2 pb-2 text-center">
							<b-img class="avatar rounded" :src="destination.avatar"></b-img>
							<span class="title" v-text="destination.title"></span>
							<b-button class="follow-btn mt-3" rounded variant="outline-secondary">تابع +</b-button>
						</b-card-body>
					</b-card>
				</div>
			</div>
		</b-card>
	</div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle";

    export default {
        components: {SectionTitle},
        props: {
            cover: {
                default: 'https://picsum.photos/630/210'
            },
            userName: {
                default: 'حسام عبد'
            },
            avatar: {
                default: 'https://picsum.photos/102/102'
            },
            description: {
                default: 'مصمم واجهات مستخدم'
            },
            bio: {
                default: 'تصميم واجهات المستخدم وتجربة المستخدم هي حلٌّ لجميع المشاكل اليومية <br> UI/UX Designer who solves everyday problems.'
            },
            location: {
                default: 'الرياض، السعودية'
            },
            link: {
                default: 'linkati.co/hussam3bd'
            },
            destinations:{
                default: [
		                {
		                    avatar : 'https://picsum.photos/87/87/?image=1',
                        title : 'المتحف الوطني السعودي',
		                },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=2',
                        title : 'المركز الثقافي البريطاني',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=3',
                        title : 'الهيئة العامة للسياحة والتراث',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=4',
                        title : 'الهيئة العامة للترفيه',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=5',
                        title : 'الهيئة العامة للسياحة والتراث',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=6',
                        title : 'المتحف الوطني السعودي',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=7',
                        title : 'الهيئة العامة للترفيه',
                    },
                    {
                        avatar : 'https://picsum.photos/87/87/?image=8',
                        title : 'المتحف الوطني السعودي',
                    },
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
	.profile-page {
		.destination {
			padding-left: 10px;
			padding-right: 10px;
			.avatar {

			}
			.title {
				font-size: 16px;
				font-weight: bold;
				color: #030f09;

			}
			.follow-btn {
				padding: 0px 19px 4px 19px;
				font-size: 14px;
			}
		}
		.aside {
			width: 110px;
			.avatar {
				position: absolute;
				top: -30px;
				border: 5px solid;
				width: 107px;
				height: 107px;
			}
		}
		.name {
			font-size: 28px;
			font-weight: 500;
			color: #030f09;
		}
		.description {
			font-size: 18px;
			color: #767676;
		}
		.bio {
			font-size: 16px;
			color: #767676;
		}
		.links {
			color: #3e3f42;
			i {
				font-size: 20px;
			}
		}
		.options {
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
</style>
