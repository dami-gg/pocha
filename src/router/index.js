import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import Players from '@/components/players/Players';
import Setup from '@/components/setup/Setup';
import Game from '@/components/game/Game';
import Round from '@/components/round/Round';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/players',
      name: 'players',
      component: Players,
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/round/:number/type',
      props: true,
      name: 'round',
      component: Round
    }
  ],
});
