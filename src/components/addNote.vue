<template>
  <div class="q-ma-md" id="div-my-card">
    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-card class="my-card" flat bordered>
        <div class="q-pa-md" style="width: 100%">
          <q-input
            ref="text"
            v-model="noteToSubmit.text"
            autogrow
            borderless
            placeholder="Commencez à écrire ici"
            autofocus
            clearable
          />
        </div>
        <q-separator />
        <q-card-actions class="justify-between">
          <div class="text-subtitle2">{{ noteToSubmit.creation }}</div>
          <div>
            <q-btn
              type="submit"
              flat
              round
              icon="check_circle"
              color="primary"
            />
            <q-btn
              flat
              round
              icon="cancel"
              color="red-4"
              v-close-popup/>
          </div>
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { date, Notify } from 'quasar'

const dateNow = date.formatDate(Date.now(), 'dddd D MMMM HH:mm')

export default {
  name: 'AddNote',
  props: ['note', 'id'],
  data () {
    return {
      confirm: false,
      noteToSubmit: {
        text: '',
        creation: dateNow,
        editOn: true
      }
    }
  },
  methods: {
    ...mapActions('notes', ['addNote']),
    submitForm () {
      this.$refs.text.validate()
      console.log(this.$refs.key)
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
