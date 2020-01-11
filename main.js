import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';

import App from './components/App.vue';

let list_routes = [
  { 
    path: '/',
    name: 'home',
    component: Home,
  },
  { 
    path: '/#resume',
    name: 'resume',
    component: Resume,
  },
  { 
    path: '/#portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  { 
    path: '/#contact',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: list_routes
});
var vm = new Vue({
  data() {
    return {
      component_name : 'home',
      component : Home
    }
  },
  router,
  render(h){
    return h(App, {
      props: {
        component_name : this.component_name,
        component : this.component
      }
    })
  },
  methods : {
    check_route(url_name){
      let route = list_routes.find((item)=>{
        // console.log(item)
        return item.name == url_name;
      })
      if(route){
        this.component_name = route.name
        this.component = route.component
      }else{
        this.component_name = list_routes[0].name
        this.component = list_routes[0].component
      }
    }
  },
  watch: {
      '$route' (to, from) {
          let url_name = to.hash.replace("#", "");
          this.check_route(url_name)
      } 
  },
  created() {
    let url_name = window.location.hash.replace("#", "");
    this.check_route(url_name)
  },
}).$mount('#app');

