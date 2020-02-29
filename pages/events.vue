<template>
	<div>
		<b-card class="mb-3">
			<SectionTitle class="mt-0">الفعاليات القادمة</SectionTitle>
			<div class="text-center row">
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" @click="happening = 'today'; startDate = endDate = null"
					     :class="happening === 'today' ? 'bg-primary' : 'bg-info'">
						اليوم
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" @click="happening = 'tomorrow'; startDate = endDate = null"
					     :class="happening === 'tomorrow' ? 'bg-primary' : 'bg-info'">
						غداً
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" @click="happening = 'thisweek'; startDate = endDate = null"
					     :class="happening === 'thisweek' ? 'bg-primary' : 'bg-info'">
						هذا الأسبوع
					</div>
				</div>
				<div class="col-6 col-sm-3 p-2">
					<div class="rounded text-white p-2" @click="openDatesSection = true" :class="happening ? 'bg-info' : 'bg-primary'">
						اختر التاريخ
					</div>
				</div>
			</div>
			<div class="row mt-2" v-show="openDatesSection">
				<div class="col-sm-4">
					<SectionTitle class="mt-0">من التاريخ</SectionTitle>
					<div class="form-group">
						<datetime input-class="form-control" v-model="startDate"/>
					</div>
				</div>
				<div class="col-sm-4">
					<SectionTitle class="mt-0">إلى التاريخ</SectionTitle>
					<div class="form-group">
						<datetime input-class="form-control" v-model="endDate"/>
					</div>
				</div>
				<div class="col-sm-4">
					<SectionTitle class="mt-0">فلتر</SectionTitle>
					<b-button class="mt-1" block variant="success"
					          @click="happening = null;" rounded>فلتر
					</b-button>
				</div>
			</div>
		</b-card>

		<template v-if="events" v-for="event in events">
			<event :event="event"/>
		</template>
		<infinite-loading ref="infinite" @infinite="infiniteScroll">
			<div slot="spinner">
				<LazyLoadEvent/>
			</div>
			<div slot="no-more">
				<b-card class="mb-3 text-center">
					<p class="text-muted">هنا تكون نهاية المطاف للمزيد قم بـ</p>
					<div class="buttons">
						<B-button class="m-2" rounded variant="outline-secondary">تغيير الموقع الجغرافي</B-button>
						<b-button class="m-2" rounded variant="outline-secondary">متابعة محتوى ناشر</b-button>
					</div>
				</b-card>
			</div>
			<div slot="no-results">
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
    import SectionTitle from "../components/SectionTitle";
    import Event from "../components/Event";
    import LazyLoadEvent from "../components/LazyLoadEvent";
    import DateTime from "../components/DateTime";

    export default {
        layout: 'app',
        loading: false,
        components: {
            DateTime,
            Event,
            SectionTitle,
            LazyLoadEvent,
        },
        data: function () {
            return {
                events: [],
                page: 0,
                happening: 'thisweek',
                startDate: null,
                endDate: null,
                openDatesSection : false
            }
        },
        watch: {
            'happening': function () {
                this.events = [];
                this.page = 0;
                this.$refs.infinite.stateChanger.reset();
            },
        },
        methods: {
            infiniteScroll($state) {
                this.page++
                this.$axios.get('events', {
                    params: {
                        page: this.page,
                        order_by: 'happening_at',
                        happening: this.happening,
                        [`between[start]`]: this.startDate,
                        [`between[end]`]: this.endDate,
                    }
                })
                    .then((response) => {
                        if (response.data.data.length) {
                            const newEvents = [...this.events, ...response.data.data];
                            this.events = newEvents
                            $state.loaded()
                        } else {
                            $state.complete()
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style>

</style>
