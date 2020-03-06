<template>
	<div v-if="(isEdit && status.id) || !isEdit">
		<b-media no-body>
			<b-media-aside>
				<b-img class="profile-image rounded-circle" :src="$store.state.user.user.avatar"></b-img>
			</b-media-aside>
			<b-media-body class="ml-3">
				<div class="input-box">
					<textarea class="rounded w-100 border-0" rows="4" v-model="status.content.raw"
					          placeholder="قل شيئاً ما!"></textarea>
				</div>
			</b-media-body>
		</b-media>
		<div class="row pb-3 text-center">
			<div class="col-md-4 p-1" v-for="(image, index) in status.images" v-if="!image.isDeleted">
				<div class="rounded bg-light position-relative">
					<b-button class="position-absolute" style="left: 5px; top: 5px; z-index: 10; line-height: 1;" variant="danger"
					          size="sm"
					          @click="removeImage(index)"
					><i class="fa fa-times"></i></b-button>
					<img :src="image.url">
				</div>
			</div>
		</div>
		<hr class="m-0">
		<div class="d-flex align-items-center pt-3">
			<label for="images" class="btn rounded-0 text-muted btn-link m-0 border-left">
				<input type="file"
				       class="invisible position-absolute"
				       accept="image/*"
				       id="images"
				       multiple
				       @change="addImages"/>
				<i class="far fa-image"></i> اختيار الصورة
			</label>

			<b-button v-b-modal.video-modal class="rounded-0 text-muted" variant="link"><i class="far fa-video"></i> إضافة
			                                                                                                         فيديو
			</b-button>

			<b-modal ref="video-modal" id="video-modal" hide-header hide-footer>
				<div class="padding">
					<img src="/youtube.png" class="pt-2 pb-2 m-auto d-block" alt="youtube logo">
					<p>
						قم بلصق رابط الفيدي الذي تريد عرضة على موقعك.
					</p>
					<div class="input-box">
						<label>
							<input dir="ltr" v-model="status.embed_url" placeholder="https://www.youtube.com/"/>
						</label>
					</div>
					<div class="buttons pt-3 text-center">
						<div>
							<b-button class="rounded button-padding" @click="$refs['video-modal'].hide()" variant="success">تضمين
							</b-button>
						</div>
						<div>
							<b-button class="text-muted" variant="link">كيف اقوم بذلك؟</b-button>
						</div>
					</div>
				</div>
			</b-modal>

			<div class="ml-auto">
				<toggle-button class="mb-0 pr-2" v-model="status.isCommentable"/>
				<span class="text-muted pr-2">تفعيل التعليقات</span>
				<b-button rounded variant="success" @click="isEdit ? update() : save()">حفظ</b-button>
			</div>
		</div>
	</div>
</template>

<script>
    import Base64 from "./Base64";

    export default {
        components: {Base64},
        props: {
            localId: {},
            isEdit: {}
        },
        methods: {
            async addImages(event) {
                this.status.images = [];
                const toBase64 = file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });

                if (event.target.files) {
                    for (let i = 0; i <= 3; i++) {
                        if(event.target.files[i]){
                            const file = event.target.files[i];
                            const base64 = await toBase64(file);
                            this.status.images.push({
                                id: this.$uuid.v1(),
                                isNew: true,
                                url: base64,
                            })
                        }
                    }
                }
            },
            removeImage(index) {
                if (this.status.images[index].isNew) {
                    this.status.images.splice(index, 1)
                } else {
                    this.status.images[index].isDeleted = true;
                    this.$forceUpdate()
                }

            },
            async save() {
                await this.$axios.$request({
                    url: '/statuses',
                    method: 'POST',
                    data: {
                        user_id: this.$store.state.user.user.id,
                        locale_id: this.localId,
                        content: this.status.content.raw,
                        commentable: this.status.isCommentable,
                        embed_url: this.status.embed_url,
                        images: this.status.images
                    }
                })
                    .then(response => {
                        this.$toast.success('تمت العملية بنجاح');
                        this.$router.push({
                            path: '/locales/' + response.data.locale.username + '/statuses/' + response.data.id,
                        })
                    })
                    .catch(error => {
                        let errors = Object.values(error.response.data.errors);
                        let toast = this.$toast;
                        errors.flat().forEach(function (e) {
                            toast.error(e)
                        })
                    });
            },
            async update() {
                await this.$axios.$request({
                    url: '/statuses/' + this.status.id,
                    method: 'PUT',
                    data: {
                        locale_id: this.status.locale.id,
                        content: this.status.content.raw,
                        commentable: this.status.isCommentable,
                        embed_url: this.status.embed_url,
                        images: this.status.images
                    }
                })
                    .then(response => {
                        this.$toast.success('تمت العملية بنجاح');
                        this.$router.push({
                            path: '/locales/' + response.data.locale.username + '/statuses/' + response.data.id,
                        })
                        this.$router.push({
                            path: '/locales/' + response.data.locale.username,
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
        async created() {
            if (this.$route.params.status) {
                await this.$axios.$request({
                    url: '/statuses/' + this.$route.params.status,
                    method: 'GET'
                })
                    .then(response => {
                        if (response.data.locale.isAdmin) {
                            this.status = response.data;
                        }
                    })
                    .catch(error => {
                        let toast = this.$toast;
                        toast.error(error)
                    });
            }
        },
        data: () => {
            return {
                status: {
                    images: [],
                    content: {
                        raw: ''
                    },
                    isCommentable: true,
                    embed_url: ''
                }
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

	#video-modal {
		.padding {
			padding: 10px 40px;
		}
		img {
			width: 115px;
		}
	}

</style>