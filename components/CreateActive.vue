<template>
	<div>
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
						<date-time class="left" icon="far fa-clock left" />
					</div>
					<div class="w-50 pl-2">
						<date-time icon="far fa-clock left" />
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
				<b-button class="border-left rounded-0 text-muted" variant="link"><i class="far fa-image"></i> اختيار الصورة
				</b-button>
				<b-button class="rounded-0 text-muted" variant="link"><i class="far fa-video"></i> إضافة فيديو</b-button>

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

    export default {
        components: {DateTime, Textarea, Input},
        props: {
            cities: {
                default : [
		                {title : 'الرياض'},
                    {title : 'جدة'},
                    {title : 'المدينة'},
                    {title : 'مكة'},
                ]
            }
        },
		    data: () => {
            return {
                date: '',
                time: '',
		            city: {title : 'جدة'},
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

</style>