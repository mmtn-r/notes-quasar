<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/> -->

        <q-toolbar-title class="absolute-center">
          Notes App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Notes App
        </q-item-label>

        <q-item
          v-for="item in navs"
          :key="item.to"
          clickable
          exact
          :to="item.to">
          <q-item-section v-if="item.icon" avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="q-footer bg-primary text-white">
      <q-tabs
        dense
        class="bg-primary text-white shadow-2"
      >
        <q-route-tab
          v-for="item in navs"
          :key="item.to"
          :icon="item.icon"
          :to="item.to"
          :label="item.label"
          exact
        />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Accueil',
          icon: 'create',
          to: '/'
        },
        {
          label: 'Notes',
          icon: 'sticky_note_2',
          to: '/notes'
        },
        {
          label: 'Paramètres',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
@media screen and (min-width: 768px )
  .q-footer
    display: none
</style>
