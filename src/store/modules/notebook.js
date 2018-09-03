import Notebooks from '@/apis/notebooks'
import { Message } from 'element-ui'

const state = {
    notebooks: []
}

const getters = {
    notebooks: state => state.notebooks
}

const mutations = {
    setNotebooks(state, { notebooks }) {
        state.notebooks = notebooks
    },

    addNotebook(state, { notebook }) {
        state.notebooks.unshift(notebook)
    },

    updateNotebook(state, { notebookId, title }) {
        const notebook = state.notebooks.find(notebook =>
            notebook.id === notebookId) || {}
        notebook.title = title
    },

    deleteNotebook(state, { notebookId }) {
        state.notebooks = state.notebooks.filter(notebook => notebook.id !== notebookId)
    }
}

const actions = {
    getNotebooks({ commit }) {
        Notebooks.getAll().then(res => {
            commit('setNotebooks', { notebooks: res.data })
        })
    },

    addNotebook({ commit }, { title }) {
        Notebooks.addNotebook({ title })
            .then(res => {
                commit('addNotebook', { notebook: res.data })
                Message.success(res.msg)
            })
    },

    updateNotebook({ commit }, { notebookId, title }) {
        Notebooks.updateNotebook(notebookId, { title })
            .then(res => {
                commit('updateNotebook', { notebookId, title })
                Message.success(res.msg)
            })
    },

    deleteNotebook({ commit }, { notebookId }) {
        Notebooks.deleteNotebook(notebookId)
            .then(res => {
                commit('deleteNotebook', { notebookId })
                Message.success(res.msg)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
