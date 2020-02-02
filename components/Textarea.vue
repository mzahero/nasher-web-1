<template>
	<div class="input-box">
		<label class="mb-0 w-100">
			<textarea class="rounded w-100" :class="classes" :rows="rows" :placeholder="placeholder"></textarea>
		</label>
	</div>
</template>

<script>
    export default {
        props: {
            rows: {
                default: 3
            },
            classes: {
                default: ''
            },
            placeholder: {
                default: ''
            }
        }
    }
</script>

<style lang="scss">
	@import "../assets/scss/variables";

	.input-box {
		label {
			textarea {
				border: 1px $search-input-border-color solid;
				background-color: transparent;
				color: $search-input-color;
			}
		}
	}
</style>