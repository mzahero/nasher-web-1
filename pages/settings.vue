<template>
	<div>
		<form v-on:submit.prevent>
			<h2>
				إعدادات الحساب
			</h2>
			<p class="w-50 text-muted">
				هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص.
			</p>
			<b-card class="mb-3 avatar-card">
				<b-media vertical-align="center" no-body>
					<b-media-aside vertical-align="center">
						<b-img class="rounded-circle avatar" :src="user.avatar" :alt="user.name"></b-img>
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
					<input type="text" class="border-0 w-100" v-model="user.name">
				</span>
				</b-list-group-item>
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">الموقع</span>
					<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="user.website">
				</span>
				</b-list-group-item>
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">الهاتف</span>
					<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="user.phone">
				</span>
				</b-list-group-item>
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">الإيميل</span>
					<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="user.email">
				</span>
				</b-list-group-item>
			</b-list-group>

			<section-title class="mt-3">الموقع الجغرافي</section-title>
			<b-list-group class="p-0">
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">المدينة</span>
					<span class="option-value w-100">
					<multiselect dir="rtl" class="w-50" :options="cities" v-model="user.city" track-by="title" label="title"
					             :allow-empty="false"
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
					<vue-slider :max="50" :min="5" :interval="5" v-model="user.range" direction="rtl"
					            :process-style="{ backgroundColor: '#6bda75' }" :tooltip-style="{ backgroundColor: '#6bda75' }"/>
				</span>
					<span class="option-value w-50 mx-3 text-muted">
					{{ user.range }} كم
				</span>
				</b-list-group-item>
			</b-list-group>

			<section-title class="mt-3">بيانات الحساب</section-title>
			<b-list-group class="p-0">
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">اسم المستخدم</span>
					<span class="option-value w-100">
					<input type="text" class="border-0 w-100" v-model="user.username">
				</span>
				</b-list-group-item>
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">كلمة السر</span>
					<span class="option-value w-100">
					<input type="password" class="border-0 w-100" v-model="user.password">
				</span>
				</b-list-group-item>
			</b-list-group>

			<section-title class="mt-3">الإشعارات</section-title>
			<b-list-group class="p-0">
				<b-list-group-item class="position-relative d-flex">
					<span class="option-title fixed-width">الإشعارات</span>
					<span class="option-value w-100">
					<toggle-button class="mb-0" v-model="user.notifications"/>
				</span>
				</b-list-group-item>
			</b-list-group>

			<section-title class="mt-3">وصف قصير</section-title>
			<b-list-group class="p-0">
				<b-list-group-item class="position-relative d-flex">
				<span class="option-value w-100">
					<textarea rows="4" class="border-0 w-100" v-model="user.bio.raw"></textarea>
				</span>
				</b-list-group-item>
			</b-list-group>

			<div class="my-4">
				<b-button class="btn-padding" type="submit" rounded @click="save()" variant="success">حفظ</b-button>
				<b-button class="pr-3 pl-3 text-muted" @click="cancel()" rounded variant="link">إلغاء</b-button>
			</div>
		</form>
	</div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle";
    import _ from 'lodash';

    export default {
        layout: 'app',
        components: {
            SectionTitle
        },
        data: function () {
            return {
                user: null,
                cities: [
                    {title: 'City 1', id: 1}
                ]
            }
        },
        created() {
            this.user = _.cloneDeep(this.$store.state.user.user, true);
        },
        methods: {
            async save() {
                await this.$axios.$put('users/' + this.user.id, this.user)
                    .then(response => {
                        this.$store.commit('user/set', response.data)
                        this.user = _.cloneDeep(this.$store.state.user.user, true);
                        this.$toast.success('تمت العملية بنجاح')
                    })
                    .catch(error => {
                        let errors = Object.values(error.response.data.errors);
                        let toast = this.$toast;
                        errors.flat().forEach(function (e) {
                            toast.error(e)
                        })
                    });
            },
            cancel() {
                this.user = _.cloneDeep(this.$store.state.user.user, true);
                this.$toast.success('تم إلغاء التغيرات')
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

	.btn-padding {
		padding: 5px 20px;
	}
</style>
