<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div id="main-app">
		<div id="wrapper" class="fixed-top">
			<div class="container-fluid" id="header-container">
				<div class="container-xl">
					<Header/>
				</div>
			</div>
		</div>
		<section id="view">
			<nuxt/>
		</section>
	</div>
</template>
<script>
    import Header from '../sections/Header'

    export default {
        middleware: 'auth',
        components: {
            Header
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/app";

	#main-app {
		background-color: $app-background-color;
		overflow: hidden;
		#wrapper {
			pointer-events: none;
			#header-container {
				pointer-events: auto;
				background-color: $header-background-color;
				border-bottom: 1px $header-border-color solid;
			}
		}

		#view {
			min-height: 800px;
			margin-top: 100px;
			#page-content {

			}
		}
	}
</style>

