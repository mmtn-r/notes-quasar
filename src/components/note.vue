<template>
  <div class="q-ma-md" id="div-my-card">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-md">
          <div class="text-caption text-body1">{{ note.text }}</div>
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions class="justify-between">
        <div class="text-caption">{{ note.creation }}</div>
        <div>
          <q-btn
              flat
              round
              icon="create"
              @click.stop="showEditNote = true"
          />
          <!-- @click="updateNote({ id: id, updates: { editOn: !note.editOn } })" -->
          <q-btn
              flat
              round
              icon="delete_forever"
              color="red-4"
              @click="confirm = true"
          />
        </div>
        <!-- Boite de dialoque du bouton "supprimer" -->
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="delete_forever" color="red-4" text-color="white" />
              <span class="q-ml-sm">Voulez-vous vraiment supprimer cette note ?</span>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Non" color="primary" v-close-popup />
              <q-btn
                  flat
                  label="Oui"
                  color="primary"
                  v-close-popup
                  @click="deleteNote(id)"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card-actions>
    </q-card>

    <q-dialog v-model="showEditNote" persistent>
      <editNote
        @close="showEditNote = false"
        :note="note"
        :id="id"
      />
    </q-dialog>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import editNote from './editNote'

export default {
  name: 'Note',
  data () {
    return {
      confirm: false,
      showEditNote: false
    }
  },
  props: ['note', 'id'],
  methods: {
    ...mapActions('notes', ['updateNote', 'deleteNote'])
  },
  components: {
    editNote
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
