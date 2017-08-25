import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SignUp from '@/components/SignUp';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
  ],
});
