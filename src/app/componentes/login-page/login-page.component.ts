import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  public flashMensaje: FlashMessagesService

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then ( (res) => {
      this.flashMensaje.show('Usuario Logeado Correctamente.', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
    }).catch((err) =>{
      this.flashMensaje.show(err.message, 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin(){
   this.authService.loginGoogle()
   .then((res) => {
     this.router.navigate(['/privado']);
   }).catch (err => console.log(err.message));
  }

 onClickFacebookLogin(){
   this.authService.loginFacebook()
   .then((res) => {
     this.router.navigate(['/privado']);
   }).catch (err => console.log (err.message));
 }
 onClickTwitterLogin(){
   this.authService.logintwitter()
   .then((res) => {
     this.router.navigate(['/privado']);
   }).catch (err => console.log(err.message));
 }

}
