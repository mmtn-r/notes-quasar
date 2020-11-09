<template>
  <q-page class="flex flex-center">
    <q-list>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Thème sombre</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="darkTheme" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      darkTheme: false
    }
  }
}
</script>
