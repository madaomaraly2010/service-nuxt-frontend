import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import icons (Solid, Regular, Brands)
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(fas, far, fab);
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
