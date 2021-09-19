import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChuckyService } from 'src/app/services';
import { IChucky } from '../model';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-chucky-norris',
  templateUrl: './chucky-norris.component.html',
  styleUrls: ['./chucky-norris.component.scss']
})
export class ChuckyNorrisComponent implements OnInit, OnDestroy {
  fraseChucky: IChucky;
  destroy$ = new Subject();
  chucky$: Observable<IChucky>;

  constructor(protected chuckyS: ChuckyService) { }

  ngOnDestroy(): void {
    this.destroy$.next();  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }

  ngOnInit(): void {
    this.chucky$ = this.chuckyS.getChuckySentence$();
    this.chucky$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.fraseChucky = data;
      });

  }

}
