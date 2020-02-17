<template>
	<div>
		<h2>
			إعدادات الحساب
		</h2>
		<p class="w-50 text-muted">
			هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص.
		</p>
		<b-card class="mb-3 avatar-card">
			<b-media vertical-align="center" no-body>
				<b-media-aside vertical-align="center">
					<b-img class="rounded-circle avatar" :src="avatar" :alt="fullname"></b-img>
				</b-media-aside>
				<b-media-body class="align-self-center ml-4">
					<div class="option-title mb-2">
						اختيار الصورة الشخصية
					</div>
					<div class="select-image">
						<b-button rounded variant="outline-secondary">اختيار</b-button>
					</div>
				</b-media-body>
			</b-media>
		</b-card>


		<section-title class="mt-3">البيانات الشخصية</section-title>
		<b-list-group class="p-0">
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">الاسم كاملاً</span>
				<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="fullname">
				</span>
			</b-list-group-item>
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">الموقع</span>
				<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="website">
				</span>
			</b-list-group-item>
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">الهاتف</span>
				<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="phone">
				</span>
			</b-list-group-item>
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">الإيميل</span>
				<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="email">
				</span>
			</b-list-group-item>
		</b-list-group>

		<section-title class="mt-3">الموقع الجغرافي</section-title>
		<b-list-group class="p-0">
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">المدينة</span>
				<span class="option-value w-100">
					<multiselect dir="rtl" class="w-50" :options="cities" v-model="city" track-by="title" label="title" :allow-empty="false"
					             select-label="" selected-label="" deselect-label="" placeholder="">
						<template slot="singleLabel" slot-scope="props">
							<div class="text-right">{{ props.option.title }}</div>
						</template>
						<template slot="noResult">لا يوجد نتائج!</template>
					</multiselect>
				</span>
			</b-list-group-item>
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">النطاق</span>
				<span class="option-value w-50 py-1">
					<vue-slider :max="50" :min="5" :interval="5" v-model="range" direction="rtl"
					            :process-style="{ backgroundColor: '#6bda75' }" :tooltip-style="{ backgroundColor: '#6bda75' }"/>
				</span>
				<span class="option-value w-50 mx-3 text-muted">
					{{ range }} كم
				</span>
			</b-list-group-item>
		</b-list-group>

		<section-title class="mt-3">بيانات الحساب</section-title>
		<b-list-group class="p-0">
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">اسم المستخدم</span>
				<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="username">
				</span>
			</b-list-group-item>
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">كلمة السر</span>
				<span class="option-value w-100">
					<input type="password" class="border-0 w-100" v-model="password">
				</span>
			</b-list-group-item>
		</b-list-group>

		<section-title class="mt-3">الإشعارات</section-title>
		<b-list-group class="p-0">
			<b-list-group-item class="position-relative d-flex">
				<span class="option-title fixed-width">الإشعارات</span>
				<span class="option-value w-100">
					<toggle-button class="mb-0" v-model="notifications"/>
				</span>
			</b-list-group-item>
		</b-list-group>

		<section-title class="mt-3">وصف قصير</section-title>
		<b-list-group class="p-0">
			<b-list-group-item class="position-relative d-flex">
				<span class="option-value w-100">
					<textarea rows="4" class="border-0 w-100" v-model="bio"></textarea>
				</span>
			</b-list-group-item>
		</b-list-group>

		<div class="my-4">
			<b-button class="btn-padding" rounded variant="success">حفظ</b-button>
			<b-button class="pr-3 pl-3 text-muted" rounded variant="link">إلغاء</b-button>
		</div>

	</div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle";

    export default {
        layout: 'app',

        components: {SectionTitle},
        props: {},
        data: function () {
            return {
                avatar: 'https://picsum.photos/100/100',
                fullname: 'حسام عبد',
                website: 'linkati.me/hussam3bd',
                phone: '905535850390',
                email: 'hussam@linkati.me',
                city: {title: 'الرياض'},
                range: 10,
                username: 'hussam3bd',
                password: '12345',
                notifications: true,
                bio: 'لا يوجد شرح قصير',
                cities: [
                    {title: 'الرياض'},
                    {title: 'جدة'},
                    {title: 'المدينة'},
                    {title: 'مكة'},
                ]
            }
        },
        mounted() {

        },
        methods: {
            alert(event) {
                console.log("event");
                console.log(event);
            }
        }
    }
</script>

<style lang="scss">
	.option-title {
		font-size: 18px;
		color: #030f09;
	}

	.fixed-width {
		width: 150px;
	}

	.option-value {
		input, textarea {
			-webkit-appearance: none;
			outline: none;
			color: #767676;
			font-size: 18px;
		}
	}

	.avatar-card {
		img.avatar {
			width: 100px;
			height: 100px;
		}
	}

	.btn-padding{
		padding: 5px 20px;
	}
</style>
