import { HeaderData } from './header-data-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// HeaderData --> Model 
export class HeaderService {

private _headerData = new BehaviorSubject<HeaderData>({
    title: '',
    icon: '',
    routeUrl: ''
  })
  
  constructor() { }
  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
