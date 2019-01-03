import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbAuthSimpleToken, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './interceptors/my-http-interceptor';

const socialLinks = [
  // {
  //   url: 'https://github.com/akveo/nebular',
  //   target: '_blank',
  //   icon: 'socicon-github',
  // },
  // {
  //   url: 'https://www.facebook.com/akveo/',
  //   target: '_blank',
  //   icon: 'socicon-facebook',
  // },
  // {
  //   url: 'https://twitter.com/akveo_inc',
  //   target: '_blank',
  //   icon: 'socicon-twitter',
  // },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,

  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: '',
        token: {
          class: NbAuthJWTToken,
          key: 'data.token',  // note that server return { code: 0, message: 'OK', data: { token: 'some-jwt-token' } }
        },
        login: {
          endpoint: '/api/auth/login',
        },
        register: {
          endpoint: '/api/auth/register',
        },
        logout: {
          endpoint: '/api/auth/logout',
        }
      }),
    ],
    forms: {},
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
      ],
    };
  }
}
