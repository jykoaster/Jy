import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faNpm, faGithub, faXmark, faUpRightAndDownLeftFromCenter)

const app = createApp(App).use(router).use(LoadingPlugin).component('font-awesome-icon', FontAwesomeIcon)
router.isReady().then(() => app.mount('#app'))
