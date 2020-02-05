<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-8">
				<div class="text-center">
					<h2>إنشاء جهة جديدة</h2>
					<p class="text-muted pt-2 w-50 m-auto">قم بالتعريف عن جهتك لإستهداف العملاء المحليين, ومشاركتهم الفعاليات و
					                                       منشوراتكم.</p>
				</div>
				<div>
					<b-card class="mt-3">
						<div class="row justify-content-center">
							<div class="col-md-10">
								<b-tabs v-model="tabIndex" content-class="pt-3 pb-3 align-items-center"
								        nav-class="steps d-flex justify-content-between"
								        active-nav-item-class="active" justified>
									<b-tab title="التصنيف" active>
										<div class="row justify-content-center">
											<div class="col-8">
												<section-title>قم بتحديد التصنيف</section-title>
												<div>
													<multiselect dir="rtl" :options="cities" v-model="city" track-by="title" label="title"
													             :allow-empty="false"
													             select-label="" selected-label="" deselect-label="" placeholder="">
														<template slot="singleLabel" slot-scope="props">
															<div class="text-right">{{ props.option.title }}</div>
														</template>
														<template slot="noResult">لا يوجد نتائج!</template>
													</multiselect>
												</div>

												<section-title>قم بتحديد التصنيف الفرعي</section-title>

												<div>
													<multiselect dir="rtl" :options="cities" v-model="city" track-by="title" label="title"
													             :allow-empty="false"
													             select-label="" selected-label="" deselect-label="" placeholder="">
														<template slot="singleLabel" slot-scope="props">
															<div class="text-right">{{ props.option.title }}</div>
														</template>
														<template slot="noResult">لا يوجد نتائج!</template>
													</multiselect>
												</div>
											</div>
										</div>
									</b-tab>
									<b-tab title-item-class="px-3" title="الموقع">
										<div class="row justify-content-center">
											<div class="col-8">
												<section-title>المنطقة</section-title>
												<div>
													<multiselect dir="rtl" :options="cities" v-model="city" track-by="title" label="title"
													             :allow-empty="false"
													             select-label="" selected-label="" deselect-label="" placeholder="">
														<template slot="singleLabel" slot-scope="props">
															<div class="text-right">{{ props.option.title }}</div>
														</template>
														<template slot="noResult">لا يوجد نتائج!</template>
													</multiselect>
												</div>

												<div class="mt-3">
													<multiselect dir="rtl" :options="cities" v-model="city" track-by="title" label="title"
													             :allow-empty="false"
													             select-label="" selected-label="" deselect-label="" placeholder="">
														<template slot="singleLabel" slot-scope="props">
															<div class="text-right">{{ props.option.title }}</div>
														</template>
														<template slot="noResult">لا يوجد نتائج!</template>
													</multiselect>
												</div>
											</div>
										</div>
									</b-tab>
									<b-tab title="معلومات الجهة">
										<b-media class="pt-3 pb-3" vertical-align="center" no-body>
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

										<div class="pt-2">
											<lebel>
												<section-title>اسم الجهة</section-title>
												<Input placeholder="مثال: الهيئة العامة للترفية"/>
											</lebel>
										</div>

										<div class="pt-2">
											<lebel>
												<section-title>ايميل الجهة</section-title>
												<Input placeholder="info@gea.gov.sa"/>
											</lebel>
										</div>

										<div class="pt-2">
											<lebel>
												<section-title>رقم الهاتف</section-title>
												<Input placeholder="مثال:05213423444 "/>
											</lebel>
										</div>

										<div class="pt-2">
											<lebel>
												<section-title>موقع الويب</section-title>
												<Input placeholder="gea.gov.sa"/>
											</lebel>
										</div>

										<div class="pt-2">
											<lebel>
												<section-title>وصف قصير</section-title>
												<Textarea classes="p-2" placeholder="صف الجهة بما لا يتجاوز 30 كلمة"></Textarea>
											</lebel>
										</div>
									</b-tab>
								</b-tabs>
								<div class="w-25 mt-3 mx-auto">
									<b-button @click="tabIndex++" rounded block variant="success"
									          v-text="tabIndex === 2 ? 'إنشاء' : 'التالي'"></b-button>
									<b-button @click="tabIndex--" class="text-muted" block rounded variant="link"
									          v-text="tabIndex === 0 ? 'إلغاء' : 'السابق'"></b-button>
								</div>
							</div>
						</div>
					</b-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import SectionTitle from "../components/SectionTitle";
    import Input from "../components/Input";
    import Textarea from "../components/Textarea";

    export default {
        components: {Textarea, Input, SectionTitle},
        layout: 'blank',
        props: {
            cities: {
                default: [
                    {title: 'الرياض'},
                    {title: 'جدة'},
                    {title: 'دمشق'},
                ]
            },
            city: {
                default: {title: 'جدة'}
            },
            avatar: {
                default: 'https://picsum.photos/100/100'
            },
            fullname: {
                default: 'name'
            }
        },
        data: () => {
            return {
                tabIndex: 0
            }
        }
    }
</script>

<style lang="scss">
	ul.steps {
		border: 0;
		.px-3 {
			padding: 0 20px !important;
		}
		li {
			a {
				border-width: 0 0 5px 0 !important;
				border-style: solid;
				border-color: #7a7b80 !important;
			}
			.active {
				border-color: #30be76 !important;
			}
		}
	}
</style>
