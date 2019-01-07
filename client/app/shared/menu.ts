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
        title: '用户详细列表',
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
    ],
  },
  {
    title: '开局管理',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Dialog',
        link: '/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: '周期统计',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Form Inputs',
        link: '/bootstrap/inputs',
      },
      {
        title: 'Buttons',
        link: '/bootstrap/buttons',
      },
      {
        title: 'Modal',
        link: '/bootstrap/modal',
      },
    ],
  },
  {
    title: '地理统计',
    icon: 'nb-location',
    children: [
      {
        title: '地理用户列表',
        link: '/maps/list',
      },
      {
        title: '省级地理视图',
        link: '/maps/province',
      },
      {
        title: '城市地理视图',
        link: '/maps/city',
      }
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
