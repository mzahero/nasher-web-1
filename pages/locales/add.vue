<template>
	<div class="container-xl pb-5">
		<div class="row justify-content-center">
			<div class="col-12 col-md-8">
				<div class="text-center">
					<h2>إنشاء جهة جديدة</h2>
					<p class="text-muted pt-2 w-50 m-auto">قم بالتعريف عن جهتك لإستهداف العملاء المحليين, ومشاركتهم الفعاليات و
					                                       منشوراتكم.</p>
				</div>
				<div>
					<form v-on:submit.prevent>
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
														<multiselect dir="rtl" :options="categories" v-model="locale.category" track-by="id"
														             label="title"
														             :allow-empty="false"
														             :loading="asyncCategoriesLoading"
														             @search-change="asyncCategories($event)"
														             @select="getSubCategories($event)"
														             select-label="" selected-label="" deselect-label="" placeholder="">
															<template slot="singleLabel" slot-scope="props">
																<div class="text-right">{{ props.option.title }}</div>
															</template>
															<template slot="noResult">لا يوجد نتائج!</template>
														</multiselect>
													</div>

													<template v-if="locale.category">
														<section-title>قم بتحديد التصنيف الفرعي</section-title>
														<div>
															<multiselect dir="rtl" :options="subcategories" v-model="locale.subcategory"
															             track-by="id"
															             label="title"
															             :allow-empty="false"
															             :loading="asyncSubcategoriesLoading"
															             @search-change="asyncSubcategories($event)"
															             select-label="" selected-label="" deselect-label="" placeholder="">
																<template slot="singleLabel" slot-scope="props">
																	<div class="text-right">{{ props.option.title }}</div>
																</template>
																<template slot="noResult">لا يوجد نتائج!</template>
															</multiselect>
														</div>
													</template>
												</div>
											</div>
											<div class="w-25 mt-3 mx-auto">
												<b-button @click="tabIndex++" rounded block variant="success">التالي</b-button>
												<b-button @click="$router.back()" class="text-muted" block rounded variant="link">إلغاء
												</b-button>
											</div>
										</b-tab>
										<b-tab title-item-class="px-3" title="الموقع">
											<div class="row justify-content-center">
												<div class="col-8">
													<section-title>المنطقة</section-title>
													<div>
														<multiselect dir="rtl" :options="regions" v-model="locale.address.region" track-by="id"
														             label="name"
														             :allow-empty="false"
														             :loading="asyncRegionsLoading"
														             @search-change="asyncRegions($event)"
														             @select="getCities($event)"
														             select-label="" selected-label="" deselect-label="" placeholder="">
															<template slot="singleLabel" slot-scope="props">
																<div class="text-right">{{ props.option.name }}</div>
															</template>
															<template slot="noResult">لا يوجد نتائج!</template>
														</multiselect>
													</div>

													<div v-if="locale.address.region" class="mt-3">
														<section-title>المدينة</section-title>
														<multiselect dir="rtl" :options="cities" v-model="locale.address.city" track-by="id"
														             label="name"
														             :allow-empty="false"
														             :loading="asyncCitiesLoading"
														             @search-change="asyncCities($event)"
														             select-label="" selected-label="" deselect-label="" placeholder="">
															<template slot="singleLabel" slot-scope="props">
																<div class="text-right">{{ props.option.name }}</div>
															</template>
															<template slot="noResult">لا يوجد نتائج!</template>
														</multiselect>
													</div>
												</div>
											</div>
											<div class="w-25 mt-3 mx-auto">
												<b-button @click="tabIndex++" rounded block variant="success">التالي</b-button>
												<b-button @click="tabIndex--" class="text-muted" block rounded variant="link">السابق</b-button>
											</div>
										</b-tab>
										<b-tab title="معلومات الجهة">
											<section-title>اختر صورة الجهة وصورة الغطاء</section-title>
											<b-card
													class="mb-3 border-0 pb-5"
													no-body
											>
												<b-card-body class="p-0">
													<Base64 ref="localeCover" image-classes="rounded" image-style="max-height:230px;"
													        :imageSrc="locale.cover ? locale.cover : 'https://dummyimage.com/600x210/eff0f2/.gif'" @change="setImage($event, 'requestedCover')"></base64>
												</b-card-body>
												<b-card-body class="pt-0">
													<b-media class="position-relative">
														<template v-slot:aside>
															<div class="aside">
																<Base64 ref="localeAvatar" image-classes="rounded-circle border-white avatar" style="position: absolute;top: -30px;border: 5px solid;width: 107px;height: 107px;" class="rounded-circle border-white"
																        :imageSrc="locale.avatar ? locale.avatar : 'https://dummyimage.com/100x100/eff0f2/.gif'" @change="setImage($event, 'requestedAvatar')"></base64>
															</div>
														</template>
													</b-media>
												</b-card-body>
											</b-card>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>اسم الجهة</section-title>
													<input v-model="locale.name" placeholder="مثال: الهيئة العامة للترفية"/>
												</label>
											</div>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>ايميل الجهة</section-title>
													<input v-model="locale.email" placeholder="info@gea.gov.sa"/>
												</label>
											</div>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>اسم المستخدم</section-title>
													<input v-model="locale.username" placeholder="geagovsa"/>
												</label>
											</div>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>رقم الهاتف</section-title>
													<input v-model="locale.phone" placeholder="مثال:05213423444 "/>
												</label>
											</div>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>موقع الويب</section-title>
													<input v-model="locale.website.raw" placeholder="gea.gov.sa"/>
												</label>
											</div>

											<div class="input-box pt-2">
												<label class="d-block">
													<section-title>وصف قصير</section-title>
													<textarea v-model="locale.bio" class="p-2"
													          placeholder="صف الجهة بما لا يتجاوز 30 كلمة"></textarea>
												</label>
											</div>

											<div class="w-25 mt-3 mx-auto">
												<b-button @click="save()" type="submit" rounded block variant="success">إنشاء</b-button>
												<b-button @click="tabIndex--" class="text-muted" block rounded variant="link">السابق</b-button>
											</div>
										</b-tab>
									</b-tabs>
								</div>
							</div>
						</b-card>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import Base64 from "../../components/Base64";

    export default {
        components: {Base64, SectionTitle},
        layout: 'blank',
        methods: {
            getCategories(query, callback = () => '') {
                this.$axios.$get('/taxonomies', {
                    params: {
                        q: query,
                        term: 'locales-categories',
                        only: 'only',
                    }
                })
                    .then(response => {
                        this.categories = response.data;
                    })
                    .finally(() => {
                        callback();
                    })
            },
            getSubCategories(category, query = null, callback = () => '') {
                this.$axios.$get('/taxonomies', {
                    params: {
                        q: query,
                        term: 'locales-categories',
                        parent_id: category.id
                    }
                })
                    .then(response => {
                        this.subcategories = response.data;
                    })
                    .finally(() => {
                        callback();
                    })
            },
            getRegions(query = null, callback = () => '') {
                this.$axios.$get('/regions', {
                    params: {
                        q: query,
                    }
                })
                    .then(response => {
                        this.regions = response.data;
                    })
                    .finally(() => {
                        callback();
                    })
            },
            getCities(region, query = null, callback = () => '') {
                this.$axios.$get('/cities', {
                    params: {
                        q: query,
                        regions: [region.id]
                    }
                })
                    .then(response => {
                        this.cities = response.data;
                    })
                    .finally(() => {
                        callback();
                    })
            },
            asyncCategories(query) {
                if (query.match(/^\s*$/)) {
                    return
                }
                this.asyncCategoriesLoading = true;
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.getCategories(query, () => {
                        this.asyncCategoriesLoading = false;
                    });
                }, 500);
            },
            asyncSubcategories(query) {
                if (query.match(/^\s*$/)) {
                    return
                }
                this.asyncSubcategoriesLoading = true;
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.getSubCategories(this.locale.category, query, () => {
                        this.asyncSubcategoriesLoading = false;
                    })
                });
            },
            asyncRegions(query) {
                if (query.match(/^\s*$/)) {
                    return
                }
                this.asyncRegionsLoading = true;
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.getRegions(query, () => {
                        this.asyncRegionsLoading = false;
                    })
                }, 500);
            },
            asyncCities(query) {
                if (query.match(/^\s*$/)) {
                    return
                }
                this.asyncCitiesLoading = true;
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.getCities(this.locale.address.region, query, () => {
                        this.asyncCitiesLoading = false;
                    })
                }, 500);
            },
            setImage(file, prop) {
                this[prop] = file.base64
            },
            async save() {
                await this.$axios.$request({
                    url: '/locales',
                    method: 'POST',
                    data: {
                        avatar: this.requestedAvatar,
                        cover: this.requestedCover,
                        category_id: this.locale.category.id,
                        subcategory_id: this.locale.subcategory.id,
                        email: this.locale.email,
                        name: this.locale.name,
                        username: this.locale.username,
                        bio: this.locale.bio,
                        phone: this.locale.phone,
                        website: this.locale.website.raw,
                        address: {
                            region_id: this.locale.address.region.id,
                            city_id: this.locale.address.city.id,
                            latitude: '123435',
                            longitude: '123435'
                        }
                    }
                })
                    .then(response => {
                        this.$store.commit('user/refreshUser');
                        this.$toast.success('تمت العملية بنجاح');
                        this.$router.push({
                            path: '/locales/' + response.data.username
                        })
                    })
                    .catch(error => {
                        let errors = Object.values(error.response.data.errors);
                        let toast = this.$toast;
                        errors.flat().forEach(function (e) {
                            toast.error(e)
                        })
                    });
            }
        },
        created() {
            this.getCategories();
            this.getRegions();
        },
        data: () => {
            return {
                locale: {
                    avatar: '',
                    cover: '',
                    email: '',
                    name: '',
                    bio: '',
                    phone: '',
                    website: {
                        raw: ''
                    },
                    category: {
                        id: null
                    },
                    subcategory: {
                        id: null
                    },
                    address: {
                        region: {
                            id: null
                        },
                        city: {
                            id: null
                        },
                    }
                },
                requestedAvatar: null,
                requestedCover: null,
                tabIndex: 0,
                categories: [],
                subcategories: [],
                regions: [],
                cities: [],
                asyncCategoriesLoading: false,
                asyncSubcategoriesLoading: false,
                asyncRegionsLoading: false,
                asyncCitiesLoading: false,
                debounceTimer: 0,
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
