import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '首页',
    icon: 'nb-home',
    link: '/',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: '用户管理',
    icon: 'nb-star',
    children: [
      {
        title: '用户详细',
        link: '/user',
      },
      {
        title: '日增用户',
        link: '/user/day',
      },
      {
        title: '周增用户',
        link: '/user/week',
      },
      {
        title: '用户局数',
        link: '/user/games',
      },
      {
        title: '地理统计',
        link: '/user/map'
      }
    ],
  },
  {
    title: '开局管理',
    icon: 'nb-layout-default',
    children: [
      {
        title: '开局详情',
        link: '/room',
      },
      {
        title: '日增开局',
        link: '/room/day',
      },
      {
        title: '周增开局',
        link: '/room/week',
      },
    ],
  },
  {
    title: '周期统计',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '单日同比数据',
        link: '/cycle/days',
      },
      {
        title: '单周同比数据',
        link: '/cycle/weeks',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
