<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div class="communities">
		<b-card class="mb-3">
			<SectionTitle class="mt-0">بماذا انت مهتم؟</SectionTitle>
			<div class="">
				<multiselect dir="rtl" :options="categories" v-model="selectedCategories" track-by="id" label="title"
				             group-values="children" group-label="title" :group-select="true" :multiple="true">
					<template slot="singleLabel" slot-scope="props">
						<div class="text-right">{{ props.option.title }}</div>
					</template>
					<template slot="noResult">لا يوجد نتائج!</template>
				</multiselect>
				<b-button class="mt-2" @click="locales = []; page = 0; infiniteScroll()" variant="success" rounded>فلتر</b-button>
			</div>
		</b-card>

		<div class="row" v-if="!locales">
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
		</div>

		<div v-else class="row">
			<div v-for="locale in locales" class="col-6 col-lg-4 mb-3 community">
				<LocaleCard :locale="locale"/>
			</div>
		</div>

		<infinite-loading @infinite="infiniteScroll">
			<div slot="spinner" class="row">
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
				<LazyLoadLocale class="col-6 col-lg-4 mb-3"/>
			</div>
			<div slot="no-more">
				<!--End posts-->
				<b-card class="mb-3 text-center">
					<p class="text-muted">هنا تكون نهاية المطاف للمزيد قم بـ</p>
					<div class="buttons">
						<B-button class="m-2" rounded variant="outline-secondary">تغيير الموقع الجغرافي</B-button>
						<b-button class="m-2" rounded variant="outline-secondary">متابعة محتوى ناشر</b-button>
					</div>
				</b-card>
			</div>
		</infinite-loading>

	</div>
</template>

<script>
    import SectionTitle from "../../components/SectionTitle";
    import Interest from "../../components/Interest";
    import LazyLoadLocale from "../../components/LazyLoadLocale";
    import LocaleCard from "../../components/LocaleCard";

    export default {
        layout: 'app',

        components: {SectionTitle, Interest, LazyLoadLocale, LocaleCard},
        data: function () {
            return {
                locales: [],
                page: 0,
                selectedCategories: [],
                categories: [
                    {
                        title: 'Main Cat 1',
                        id: 11,
                        children: [
                            {title: 'Sub Cat 1', id: 22},
                            {title: 'Sub Cat 2', id: 23},
                            {title: 'Sub Cat 3', id: 24},
                        ],
                    },
                    {
                        title: 'Main Cat 2',
                        id: 14,
                        children: [
                            {title: 'Sub Cat 1', id: 25},
                            {title: 'Sub Cat 2', id: 26},
                            {title: 'Sub Cat 3', id: 27},
                        ],
                    },
                    {
                        title: 'Main Cat 1',
                        id: 15,
                        children: [
                            {title: 'Sub Cat 1', id: 21},
                            {title: 'Sub Cat 2', id: 22},
                            {title: 'Sub Cat 3', id: 25},
                        ],
                    },
                ]
            }
        },
        computed: {
		        selectedCategoriesIds(){
                return this.selectedCategories.map(function (el) {
		                return el.id
                })
		        }
        },
        methods: {
            infiniteScroll($state) {
                this.page++
                this.$axios.get('locales',{
                    params : {
                        page : this.page,
		                    subcategories : this.selectedCategoriesIds
                    }
                })
                    .then((response) => {
                        if (response.data.data.length > 1) {
                            const newLocales = [...this.locales, ...response.data.data];
                            this.locales = newLocales
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
	.communities {
		.community {
			.media-body {
				position: relative;
				.avatar {
				}
				.follow-btn {
					top: 0;
					left: 0;
				}
				.name {
					font-size: 24px;
					font-weight: 600;
					color: #030f09;
				}
				.location {
					color: #7a7b80;
					font-size: 16px;
				}
				.description {
					color: #030f09;
					font-size: 16px;
				}
			}
		}
	}
</style>
