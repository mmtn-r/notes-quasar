import Vue from 'vue'
import { Notify, uid } from 'quasar'

const state = {
  notes: {
    ID1: {
      title: 'Note 1',
      text: 'Texte 1',
      creation: '10/01/2020',
      editOn: false
    },
    ID2: {
      title: 'Note 2',
      text: 'Texte 2',
      creation: '10/01/2020',
      editOn: false
    },
    ID3: {
      title: 'Note 3',
      text: 'Texte 3',
      creation: '10/01/2020',
      editOn: false
    }
  }
}

const mutations = {
  updateNote (state, payload) {
    Object.assign(state.notes[payload.id], payload.updates)
  },
  deleteNote (state, id) {
    Vue.delete(state.notes, id)
    Notify.create({
      icon: 'delete_forever',
      color: 'red-4',
      timeout: 500,
      message: 'Note supprimée'
    })
  },
  addNote (state, payload) {
    Vue.set(state.notes, payload.id, payload.note)
  }
}

const actions = {
  updateNote ({ commit }, payload) {
    commit('updateNote', payload)
  },
  deleteNote ({ commit }, id) {
    commit('deleteNote', id)
  },
  addNote ({ commit }, note) {
    const noteId = uid()
    const payload = {
      id: noteId,
      note: note
    }
    commit('addNote', payload)
  }
}

const getters = {
  notes: (state) => {
    return state.notes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
