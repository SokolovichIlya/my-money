import { GetterTree, MutationTree, ActionTree } from 'vuex'

class State {
    token: string | null = localStorage.getItem('token') || null
}

const getters = <GetterTree<State, any>> {
    isAuth(state: State): boolean {
        return !!state.token
    },
}

const mutations = <MutationTree<State>>{
}

const actions = <ActionTree<State, any>>{
}

const AuthModule = {
    namespaced: true,
    state: new State(),
    getters,
    mutations,
    actions,
}

export default AuthModule