import { Component } from '@angular/core';
import { GoogleApiService, UserInfo } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInfo?: UserInfo;
  title = 'googlelogin';
  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean{
    return this.googleApi.isLoggedIn()
  }
  logout() {
    this.googleApi.signOut()
  }
}
