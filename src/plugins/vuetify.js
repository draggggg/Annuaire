import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import fr from 'vuetify/src/locale/fr.ts'

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'fr'
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { fr },
    current: 'fr',
  },
})
