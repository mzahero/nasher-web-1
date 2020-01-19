<template>
	<div id="main-app">
		<div id="wrapper" class="fixed-top">
			<div class="container-fluid" id="header-container">
				<div class="container">
					<Header/>
				</div>
			</div>
			<div class="container" id="sidebars-container">
				<div class="row">
					<div class="col-3 d-none d-sm-block" id="nav-sidebar">
						<Sidebar/>
					</div>
					<div class="col-6">
					</div>
					<div class="col-3 d-none d-sm-block" id="widgets-sidebar">
						<Sidebar/>
					</div>
				</div>
			</div>
		</div>
		<section id="view">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-sm-6" id="page-content">
						<nuxt/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
    import Header from '../sections/Header'
    import Sidebar from '../sections/Sidebar'

    export default {
        components: {
            Header, Sidebar
        },
        head() {
            return {
                htmlAttrs: {
                    dir: 'rtl'
                }
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/app";

	#main-app {
		background-color: $app-background-color; overflow: hidden;
		#wrapper {
			#header-container {
				background-color: $header-background-color;
				border-bottom: 1px $header-border-color solid;
			}
			#sidebars-container {
				margin-top: 30px;
				#nav-sidebar {
					border-left: 1px $page-content-border-color solid;
				}
				#widgets-sidebar {
					border-right: 1px $page-content-border-color solid;
				}
			}
		}

		#view {
			margin-top: 100px;
			#page-content {

			}
		}
	}
</style>

