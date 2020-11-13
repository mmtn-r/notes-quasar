<template>
  <div class="q-ma-md" id="div-my-card">
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-card class="my-card" flat bordered>
        <CardNoteText :text.sync="noteToSubmit.text"/>
        <q-separator />
        <CardNoteActions :creation="noteToSubmit.creation"/>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { date, Notify } from 'quasar'
import CardNoteText from './cardNoteText'
import CardNoteActions from './cardNoteActions'

export default {
  name: 'AddNote',
  props: ['note', 'id'],
  data () {
    return {
      confirm: false,
      noteToSubmit: {
        text: '',
        creation: date.formatDate(Date.now(), 'dddd D MMMM HH:mm'),
        editOn: true
      }
    }
  },
  components: {
    CardNoteText,
    CardNoteActions
  },
  methods: {
    ...mapActions('notes', ['addNote']),
    submitForm () {
      if (this.noteToSubmit.text.length === 0) {
        Notify.create({
          icon: 'cancel',
          color: 'red-4',
          timeout: 1000,
          message: 'Vous n\'avez rien écrit'
        })
      } else {
        Notify.create({
          icon: 'cloud_done',
          color: 'green-4',
          timeout: 1000,
          message: 'Note enregistrée'
        })
        this.submitNote()
      }
    },
    submitNote () {
      this.addNote(this.noteToSubmit)
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass" scoped>
#div-my-card
  width: 350px
.my-card
  width: 100%
  max-width: 350px
</style>
