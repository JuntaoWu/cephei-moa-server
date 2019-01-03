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
        title: 'Calendar',
        link: '/extra-components/calendar',
      },
      {
        title: 'Stepper',
        link: '/extra-components/stepper',
      },
      {
        title: 'List',
        link: '/extra-components/list',
      },
      {
        title: 'Infinite List',
        link: '/extra-components/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/extra-components/accordion',
      },
      {
        title: 'Progress Bar',
        link: '/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/extra-components/alert',
      },
      {
        title: 'Tree',
        link: '/extra-components/tree',
      },
      {
        title: 'Tabs',
        link: '/extra-components/tabs',
      },
      {
        title: 'Calendar Kit',
        link: '/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/extra-components/chat',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
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
    title: 'Bootstrap',
    icon: 'nb-gear',
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
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/miscellaneous/404',
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
