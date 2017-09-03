import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KickstarterService {

  public token: string = '';
  private baseUrl = 'https://api.kickstarter.com';
  private headers = new Headers();
  private options: RequestOptions;

  constructor (
    private http: Http) {
  }

  // ————— CRUD —————
  public signin(email: string, password: string): Promise<any> {
    const body = { email, password };

    body.email = email;
    body.password = password;

    return this.cURL('https://api.kickstarter.com/xauth/access_token', body);
  }

  public cURL(url: string, body: any): Promise<any> {

    const args = [
      '-X POST',
      "'" + url + "?client_id=2II5GGBZLOOZAA5XBU1U0Y44BU57Q58L8KOGM7H0E0YFHP3KTG'",
      "-H 'cache-control: no-cache'",
      "-H 'content-type: application/json'",
      "-d '" + JSON.stringify(body) + "'"
    ].join(' ');

    console.log('curl ' + args);

    let promise = new Promise((resolve, reject) => {
      childProcess.exec('curl ' + args, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(stdout));
      });
    });
    return promise;
  }
}
