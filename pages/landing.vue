<template>
	<div class="container">
		<h1>Please login to see the secret content</h1>
		<form v-if="!$store.state.authUser" @submit.prevent="login">
			<p v-if="formError" class="error">
				{{ formError }}
			</p>
			<p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
			<p>Username: <input v-model="formLogin" type="text" name="formLogin"></p>
			<p>Password: <input v-model="formPassword" type="password" name="formPassword"></p>
			<button type="submit">
				Login
			</button>
		</form>
		<div v-else>
			Hello {{ $store.state.authUser.username }}!
		</div>
	</div>
</template>

<script>
    export default {
        middleware ({ store, redirect }) {
            if (store.state.authUser) {
                return redirect('/')
            }
        },
        data () {
            return {
                formError: null,
                formLogin: '',
                formPassword: ''
            }
        },
        methods: {
            async login () {
                try {
                    this.$auth.loginWith('local', {
                        data: {
                            login: this.formLogin,
                            password: this.formPassword
                        }
                    })
                    // await this.$store.dispatch('login', {
                    //     login: this.formLogin,
                    //     password: this.formPassword
                    // })
                    // this.formLogin = ''
                    // this.formPassword = ''
                    // this.formError = null
                } catch (e) {
                    this.formError = e.message
                }
            }
        }
    }
</script>

<style>
	.container {
		padding: 100px;
	}
	.error {
		color: red;
	}
</style>
