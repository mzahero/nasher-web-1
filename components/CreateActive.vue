<template>
	<div class="mb-3">
		<b-tabs content-class="p-3" nav-class="custom-nav" active-nav-item-class="bg-white" fill>
			<b-tab title="إنشاء منشور" active>
				<b-media no-body>
					<b-media-aside>
						<b-img class="profile-image rounded-circle" src="https://picsum.photos/36/36"></b-img>
					</b-media-aside>
					<b-media-body class="ml-3">
						<Textarea classes="border-0" placeholder="قل شيئاً ما!"></Textarea>
					</b-media-body>
				</b-media>
			</b-tab>
			<b-tab title="إنشاء فعالية">
				<div class="d-flex align-items-center pb-3">
					<div class="title fixed-width">
						عنوان اللقاء
					</div>
					<div class="w-100">
						<Input/>
					</div>
				</div>
				<div class="d-flex align-items-center pb-3">
					<div class="title fixed-width">
						التاريخ والوقت
					</div>
					<div class="w-50 pr-2">
						<date-time class="left" icon="far fa-clock left"/>
					</div>
					<div class="w-50 pl-2">
						<date-time icon="far fa-clock left"/>
					</div>
				</div>
				<div class="d-flex align-items-center pb-3">
					<div class="title fixed-width">
						مدينة اللقاء
					</div>
					<div class="w-50 pr-2">
						<multiselect dir="rtl" :options="cities" v-model="city" track-by="title" label="title" :allow-empty="false"
						             select-label="" selected-label="" deselect-label="" placeholder="">
							<template slot="singleLabel" slot-scope="props">
								<div class="text-right">{{ props.option.title }}</div>
							</template>
							<template slot="noResult">لا يوجد نتائج!</template>
						</multiselect>
					</div>
					<div class="w-50 pl-2">

					</div>
				</div>
				<div>
					<Textarea classes="p-3" placeholder="قل شيئاً يشرح ما تحتويه الفعالية"></Textarea>
				</div>
			</b-tab>
		</b-tabs>

		<div class="p-3">
			<hr class="m-0">
			<div class="d-flex align-items-center pt-3">
				<b-button class="rounded-0 text-muted border-left" variant="link"><i class="far fa-image"></i> اختيار الصورة</b-button>
				<b-button v-b-modal.video-modal class="rounded-0 text-muted" variant="link"><i class="far fa-video"></i> إضافة فيديو</b-button>

				<b-modal id="video-modal" hide-header hide-footer>
					<div class="padding">
						<img src="/youtube.png" class="pt-2 pb-2 m-auto d-block" alt="youtube logo">
						<p>
							قم بلصق رابط الفيدي الذي تريد عرضة على موقعك.
						</p>
						<Input dir="ltr" placeholder="https://www.youtube.com/"/>
						<div class="buttons pt-3 text-center">
							<div>
								<b-button class="rounded button-padding" variant="success">تضمين</b-button>
							</div>
							<div>
								<b-button class="text-muted" variant="link">كيف اقوم بذلك؟</b-button>
							</div>
						</div>
					</div>
				</b-modal>

				<div class="ml-auto">
					<toggle-button class="mb-0 pr-2" v-model="notifications"/>
					<span class="text-muted pr-2">تفعيل التعليقات</span>
					<b-button rounded variant="success">حفظ</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import Input from "./Input";
    import Textarea from "./Textarea";
    import DateTime from "./DateTime";
    import PostImageUplouder from "./PostImageUplouder";

    export default {
        components: {PostImageUplouder, DateTime, Textarea, Input},
        props: {
            cities: {
                default: [
                    {title: 'الرياض'},
                    {title: 'جدة'},
                    {title: 'المدينة'},
                    {title: 'مكة'},
                ]
            }
        },
        data: () => {
            return {
                date: '',
                time: '',
                city: {title: 'جدة'},
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	ul.custom-nav {
		padding: 0;
		li {
			a {
				background-color: #e0e0e0;
				border: none !important;
				padding: 11px 0;
			}
			&:after {
				display: none;
			}
		}
	}

	input, textarea {
		-webkit-appearance: none;
		outline: none;
		color: #767676;
		font-size: 18px;
	}

	#video-modal{
		.padding{
			padding: 10px 40px;
		}
		img{
			width: 115px;
		}
	}

</style>