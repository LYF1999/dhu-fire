import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrincipalService } from '../shared/principal.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {

  curTitle: string;

  constructor(public principal: PrincipalService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.firstChild.data.subscribe(data => {
      this.curTitle = data.title;
    });
  }
}
