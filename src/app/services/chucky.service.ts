import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CommonsUrls } from '../commons/config/URLs';
import { IChucky } from '../commons/model';

@Injectable({
  providedIn: 'root'
})
export class ChuckyService {
  private chuckySentence$ = new Subject<IChucky>();

  constructor(private http: HttpClient) { }

  public getNewFraseRandom() {
    this.http.get<IChucky>(CommonsUrls.API_CHUCKY)
      .subscribe(data => {
        this.chuckySentence$.next(data);
      });

  }
  public getChuckySentence$(): Observable<IChucky> {
    return this.chuckySentence$.asObservable();
  }
}
