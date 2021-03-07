
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>

      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Metronomo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="statics/metronomo.jpg" class="header-image absolute-top"/>
    </q-header>

<q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item exact to="/" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-metronome" />
              </q-item-section>

              <q-item-section>
                Metronomo
              </q-item-section>
            </q-item>

            <q-item exact to="/help" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item exact to="/audioBuffer" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-waveform" />
              </q-item-section>

              <q-item-section>
                AudioBuffer
              </q-item-section>
            </q-item>

            <q-item exact to="/metronomoTest01" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-metronome" />
              </q-item-section>

              <q-item-section>
                Metronomo Test 01
              </q-item-section>
            </q-item>

            <q-item exact to="/player" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-waveform" />
              </q-item-section>

              <q-item-section>
                Player
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" style="height:130px">
          <div class="absolute-bottom">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics\metronomo.jpg">
            </q-avatar>
            <div>Stefano Lazzari</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-page-container>

  </q-layout>
</template>

<script>

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%)
  }
</style>ty
