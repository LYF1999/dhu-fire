import { WebWorkerService } from './web-worker.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model';
import * as qs from 'qs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  user: User = { name: '', username: '123' };

  constructor(private $http: HttpClient, private webWorker: WebWorkerService) { }

  login(username: string, password: string) {
    return this.$http.post(
      'http://jwdep.dhu.edu.cn/dhu/login_wz.jsp',
      qs.stringify({ userName: username, userPwd: password }),
      { observe: 'response', responseType: 'text', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    ).pipe(
      tap(res => {
        if (res.url === 'http://jwdep.dhu.edu.cn/dhu/student/') {
          this.user = {
            username,
            name: /<td>(.*?)同学/g.exec(res.body)[1],
          };
          this.webWorker.worker.postMessage(['init', this.user]);
        }
      })
    );
  }
}
