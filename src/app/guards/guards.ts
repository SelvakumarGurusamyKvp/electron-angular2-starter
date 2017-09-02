import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { KickstarterService } from '../services/kickstarter.service';
import { HardwareClubService } from '../services/hardwareclub.service';
import { IndiegogoService } from '../services/indiegogo.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuards implements CanActivate {

  constructor(
    public kickstarterService: KickstarterService,
    public hardwareclubService: HardwareClubService,
    public indiegogoService: IndiegogoService,
    private storageService: StorageService) {}

  public canActivate() {
    // return this.authService.isLoggedIn();
    return true;
  }
}
