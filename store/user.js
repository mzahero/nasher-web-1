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
    }
}