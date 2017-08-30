import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { KickstarterService } from '../../services/kickstarter.service';
import { StorageService } from '../../services/storage.service';

import { Credential } from '../../class/credential';

@Component({
  selector: 'login',
  providers: [KickstarterService, StorageService],
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public localState = { value: '' };
  public kickstarter = {
    email: '',
    password: '',
    remember: true,
    connected: false
  };
  public indiegogo = {
    email: '',
    password: '',
    remember: true,
    connected: false
  };

  constructor(
    public kickstarterService: KickstarterService,
    private storageService: StorageService) {
    this.loadCredential();
  }

  public ngOnInit() {
    //
  }

  // ————— KICKSTARTER —————
  // Login
  public kickstarterLogin(email: string, password: string) {
   this.kickstarterService.signin(email, password).then((res) => {
      let credential = new Credential(
        res.user.id,
        res.user.name,
        this.kickstarter.email,
        this.kickstarter.password,
        res.user.avatar.large,
        res.access_token);
      this.kickstarter.connected = true;
      if (this.kickstarter.remember) {
        this.saveCredential('kickstarter', credential);
      } else {
        this.saveCredential('kickstarter', null);
      }
      this.checkLogin();
    }).catch((error) => {
      console.log('Error: ', error.message);
    });
  }

  // ————— KICKSTARTER —————
  // login
  public indiegogoLogin(email: string, password: string) {
   // this.indiegogoService.signin(email, password).then((res) => {
   //    console.log(res);
   //    let credential = new Credential(
   //      res.user.id,
   //      res.user.name,
   //      this.indiegogo.email,
   //      this.indiegogo.password,
   //      res.user.avatar.large,
   //      res.access_token);
   //    if (this.indiegogo.remember) {
   //      this.saveCredential('indiegogo', credential);
   //    } else {
   //      this.saveCredential('indiegogo', {});
   //    }
   //    this.indiegogo.connected = true;
   //    this.checkLogin();
   //  }).catch((error) => {
   //    console.log('Error: ', error.message);
   //  });
  }

  /* Double login checking
   * @var platform : string = Name of the platform you wish to be disconnected from
   */
  public checkLogin(): void {
    if (this.kickstarter.connected && this.indiegogo.connected) {
      // this.router.navigate(['']);
      // console.log(this.router);
    }
  }

  /* Logout
   * @var platform : string = Name of the platform you wish to be disconnected from
   */
  public logout(platform: string) {
    let credentials = this.storageService.get('credentials');
    this[platform].connected = false;
    credentials[platform].autoconnect = false;
    this.saveCredential(platform, credentials[platform]);
  }

  /* Load all credentials
   */
  private loadCredential(): void {
    let credentials = this.storageService.get('credentials');

    // Kickstarter
    if (credentials.kickstarter !== undefined) {
      this.kickstarter.email = credentials.kickstarter.email;
      this.kickstarter.password = credentials.kickstarter.password;

      // Auto Connect
      if (credentials.kickstarter.autoconnect) {
        this.kickstarterLogin(this.kickstarter.email, this.kickstarter.password);
      }
    }
  }

  /* Save all credentials
   * @var platform: string = Name of the platform to save credentials in
   */
  private saveCredential(platform: string, credential: Credential): void {
    let credentials = this.storageService.get('credentials');
    if (credentials == null) {
      credentials = {};
    }
    credentials[platform] = credential;
    this.storageService.set('credentials', credentials);
  }
}
