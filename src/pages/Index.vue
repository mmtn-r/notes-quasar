<template>
  <q-page class="flex flex-center">
    <addNote :note="notes"/>
  </q-page>
</template>

<script>
import addNote from 'components/addNote'
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    addNote
  },
  computed: {
    ...mapGetters('notes', ['notes'])
  }
}
</script>
