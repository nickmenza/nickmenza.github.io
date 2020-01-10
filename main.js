import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import App from './components/App.vue';



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/',
      name: 'home',
      component: About,
    },
  ]
});

// console.log(router)



new Vue({
  data() {
    return {
      component : Home
    }
  },
  router,
  render(h){
    // return h(this.App_)
    return h(App, {
      props: {
        route_use : { 
          path: '/',
          name: 'home',
          component: this.component,
        },
      }
    })
  },
  watch: {
      '$route' (to, from) {
        // router.routes[0].component = About
        console.log(router.fullPath)
          console.log('change route')
          // this.component = About
      } 
  },
}).$mount('#app');

// router.beforeEach((to, from, next) => {
//   console.log('TEST',next)
//   next()
// });
