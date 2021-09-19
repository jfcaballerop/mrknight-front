import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { interval, Subscription } from 'rxjs';
import { ChuckyService } from 'src/app/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
    public translate: TranslateService,
    private chuckyS: ChuckyService) { }

  ngOnInit(): void {
    const source = interval(5000);
    this.subscription = source.subscribe(data => this.chuckyS.getNewFraseRandom());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
