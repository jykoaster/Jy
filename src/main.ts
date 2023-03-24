import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faNpm, faGithub, faXmark, faUpRightAndDownLeftFromCenter)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
