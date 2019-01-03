import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'Cephei-Moa-Server';

  constructor(private authService: NbAuthService, private router: Router) {

  }

  ngOnInit() {
    // this.authService.isAuthenticated().subscribe(isAuthenticated => {
    //   if (!this.router.isActive('/auth/login', true) && !isAuthenticated) {
    //     let subscription = this.authService.logout('email').subscribe(res => {
    //       subscription && subscription.unsubscribe();
    //       this.router.navigateByUrl('/auth/login');
    //     });
    //   }
    // });
  }

}
