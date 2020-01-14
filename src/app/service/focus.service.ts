import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FocusService {

  private _keyboardFocus: boolean = false;
  constructor() { }

  set keyboardFocus(value: boolean) {
    this._keyboardFocus = value;
  }

  get keyboardFocus() {
    return this._keyboardFocus;
  }

}
