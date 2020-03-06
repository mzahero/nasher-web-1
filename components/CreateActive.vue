<template>
	<div class="mb-3">
		<b-tabs content-class="p-3" nav-class="custom-nav" active-nav-item-class="bg-white" fill>
			<b-tab title="إنشاء منشور" active>
				<status-form :local-id="localeId"/>
			</b-tab>
			<b-tab title="إنشاء فعالية">
				<event-form :local-id="localeId"/>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
    import StatusForm from "./StatusForm";
    import EventForm from "./EventForm";

    export default {
        components: {StatusForm, EventForm},
        props: {
            localeId : {
                required : true
            }
        },
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