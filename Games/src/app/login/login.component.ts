import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private socialAuthService: SocialAuthService) {
}

loginWithGoogle(): void {
this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
.then(() => this.router.navigate(['games']));
}


  ngOnInit(): void {
  }

}
