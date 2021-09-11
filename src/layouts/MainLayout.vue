<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black-ops">
          jonShirts Store
        </q-toolbar-title>

        <div>
          <q-item clickable tag="a" target="_blank" to="#/cart">
           <q-item-section avatar>
              <q-icon name="shopping_cart" to="#/cart"/>
            </q-item-section>
          </q-item>
        </div>

        <!-- Figure out how to use the array for this -->
        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.Cart"
          v-bind="link"
        /> -->

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          jonShirts
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'src/components/EssentialLink.vue'

const linksList = [
  {
    title: 'Cart',
    caption: 'my cart',
    icon: 'shopping_cart',
    link: '/cart'
  },
  {
    title: 'Home',
    caption: 'go to our home page',
    icon: 'home',
    link: '/pagehome'
  },
  {
    title: 'Account',
    caption: 'go to my account',
    icon: 'account_box',
    link: '/account'
  },
  {
    title: 'Contact Us',
    caption: 'let us know if you need something',
    icon: 'chat',
    link: '/contactus'
  },
  {
    title: 'Facebook',
    caption: 'find us on Facebook',
    icon: 'facebook',
    link: 'https://facebook.com'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
