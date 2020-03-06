export const state = () => ({
    user: null,
});

export const getters = {
    get() {
        return this.state.user
    }
}

export const mutations = {
    set(state, user) {
        state.user = user
    },
    async refreshUser(state) {
        await this.$axios.$request({
            url: '/users/me',
            method: 'GET'
        })
            .then(response => {
                state.user = response.data;
            })
            .catch(error => {
                let toast = this.$toast;
                toast.error(error)
            });

    }
}