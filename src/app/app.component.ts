import { Component } from '@angular/core';
import { UserService } from './state/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  
  ) {
    
  }

  ngOnInit() {
    this.userService.getUserProfile();

    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
    });

    const currentPath = this.activatedRoute.snapshot.routeConfig
    console.log('Current path:', currentPath);

    console.log(this.activatedRoute.toString(),"router ----- ",this.router.routerState.snapshot)
  }
}
