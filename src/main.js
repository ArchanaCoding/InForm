
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // change correctly
import router from './router'; // change correctly

const app = createApp(App);


app.use(store);
app.use(router);

app.mount('#app');



















// import Vue from 'vue';
// import App from './App.vue';
// import store from './store'; // Make sure the path is correct
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   store,
//   router,
// }).$mount('#app');
