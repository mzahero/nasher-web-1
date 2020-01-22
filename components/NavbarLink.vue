<template>
	<li class="navbar-link">
		<a class="d-flex align-items-center px-3" :class="classes" :href="link">
			<div class="icon-wrap align-content-center align-items-center d-flex" style="width: 32px; height: 32px;">
				<img v-if="image" width="28px" class="rounded-circle profile-image" :src="image" alt="user image">
				<i v-if="icon" :class="icon" class="m-auto"></i>
			</div>
			<div class="px-2">
				<span class="title">
					<slot></slot>
				</span>
			</div>
		</a>
	</li>
</template>

<script>
    export default {
        props: {
            icon: {
                default: null
            },
            image: {
                default: null
            },
            link: {
                default: ''
            },
            classes: {
                default: ''
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";
	@import "../assets/scss/helpers";

	li.navbar-link {
		margin: 6px 0;
		a {
			border-radius: 4px;
			padding: 6px 0;
			border: 1px transparent solid;
			&.active, &:hover {
				border-color: #e6e6e6;
				background-color: #ffffff;
				span.title, i {
					color: #96c751;
				}
			}
			.profile-image{
				width: 28px;
				height: 28px;
			}
		}
		span.title, i {
			color: #767676;
		}
		span.title {
			font-size: 18px;
		}
		i {
			font-size: 20px;
		}

	}
</style>