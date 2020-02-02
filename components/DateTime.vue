<template>
	<div class="input-box" :class="{'with-icon' : icon}">
		<label class="mb-0">
			<datetime v-model="date"/>
			<i class="icon" :class="icon" v-if="icon"></i>
		</label>
	</div>
</template>

<script>
    export default {
        props: {
            icon: {
                default: ''
            },
            placeholder: {
                default: ''
            }
        },
        data: () => {
            return {
                date : ''
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	.input-box {
		label {
			position: relative;
			display: block;
			width: 100%;
			input {
				border-radius: 4px;
				border: 1px $search-input-border-color solid;
				background-color: transparent;
				//background-color: $search-input-background-color;
				display: block;
				width: 100%;
				padding: 9px;
				color: $search-input-color;
			}
		}
		&.left{
			input {
				padding: 9px 9px 9px 40px !important;
			}
		}
		&.with-icon {
			position: relative;
			input {
				padding: 9px 40px 9px 9px;
			}
			.icon {
				position: absolute;
				top: 50%;
				right: 15px;
				transform: translateY(-50%);
				color: $search-input-color;
				&.left {
					right: auto;
					left: 15px;
				}
			}

		}
	}

	.vdatetime-overlay {
		z-index: 1050;
	}

	.vdatetime-popup {
		z-index: 1051;
	}
</style>