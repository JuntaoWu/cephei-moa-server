import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() position = 'normal';

  private subscription: Subscription;
  private menuSubscription: Subscription;

  user: any;

  userMenu = [{ title: 'Profile', data: { id: 'Profile' } }, { title: 'Log out', data: { id: 'Logout' } }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private authService: NbAuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
        }
      });

    this.menuSubscription = this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'userMenuTag'),
      )
      .subscribe((res: NbMenuBag) => {
        switch (res.item.data.id) {
          case 'Logout':
            this.logout();
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
    this.menuSubscription && this.menuSubscription.unsubscribe();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout() {
    this.subscription = this.authService.logout('email').subscribe(() => {
      this.subscription && this.subscription.unsubscribe();
      this.router.navigateByUrl('/auth/login');
    });
  }
}
