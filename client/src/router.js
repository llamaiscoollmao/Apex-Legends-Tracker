import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Profile from './components/Profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {title: 'Apex Legends Tracker'},
      name: 'search',
      component: Search
    },
    {
      path: '/profile/:platform/:gamertag',
      name: 'profile',
      meta: {title: 'Apex Legends Tracker'},
      component: Profile
    }
  ]
});
