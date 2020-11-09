<template>
  <q-page class="flex flex-center column">

    <q-btn label="Créer une nouvelle note" color="primary" @click="card = true" />

    <q-dialog v-model="card" persistent>
      <addNote
        :note="notes"
        @close="card = false"
      />
    </q-dialog>

    <note
        v-for="(note, key) in notes"
        :key="key"
        :note="note"
        :id="key"
    />
  </q-page>
</template>

<script>
import note from 'components/note'
import addNote from 'components/addNote'

import { mapGetters } from 'vuex'

export default {
  name: 'Notes',
  components: {
    note,
    addNote
  },
  computed: {
    ...mapGetters('notes', ['notes'])
  },
  data () {
    return {
      card: false
    }
  }
}
</script>

<style>

</style>
