import { Injectable } from '@angular/core';


const bootstrapClasses = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light bg-dark',
  DARK: 'dark',
  MUTED: 'muted',
  WHITE: 'white bg-dark',
};
@Injectable({
  providedIn: 'root'
})
export class ClassSelectorService {

  constructor() { }

  private getValue(selector: string, prefix: string): string {
    const value = selector ? prefix + bootstrapClasses[selector.toUpperCase()] : prefix + 'primary';
    return value;

  }
  public getBootstrapTextClass(selector: string): string {
    const prefix = 'text-';
    return this.getValue(selector, prefix);
  }
  public getBootstrapButtonClass(selector: string): string {
    const prefix = 'btn btn-';
    return this.getValue(selector, prefix);
  }
}
