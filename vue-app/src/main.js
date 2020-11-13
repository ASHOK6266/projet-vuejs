import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

createApp(App).mount('#app')

export default new VueRouter({
    routes:[
        {
            path: '/routes',
            name: 'route',
            component: Routing
        }
    ]
})