import { PrincipalService } from './../../shared/principal.service';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() username = '150120116';
  @Input() password = '421181199906201911';
  constructor(private principal: PrincipalService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['main']);
    this.principal.login(this.username, this.password)
      .subscribe(res => {
        if (res.url !== 'http://jwdep.dhu.edu.cn/dhu/student/') {
          this.snackBar.open('登录失败，账户名或者密码错误');
        } else {
          this.router.navigate(['main']);
        }
      });
  }
}
