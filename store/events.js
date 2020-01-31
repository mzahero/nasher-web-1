export const state = () => ({
    events: [
        'Lorem ipsum',
        'dolor sit amet',
        'consetetur sadipscing elitr'
    ]
})

export const mutations = {
    add (state, title) {
        state.events.push(title)
    }
}

export const getters = {
    get (state) {
        return state.events
    }
}
