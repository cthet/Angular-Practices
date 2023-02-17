import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor() {}
  
  info(val: any) {
    this.saveLog(val, 'info');
  }
  error(val: any) {
    this.saveLog(val, 'error');
  }
  log(val: string) {
    this.saveLog(val, 'log');
  }
  warn(val: any) {
    this.saveLog(val, 'warn');
  }

  saveLog(val: any, type: string) {
    const key = `log_${type}`;
    const logs = JSON.parse(localStorage.getItem(key) || '[]');
    logs.push(val);
    localStorage.setItem(key, JSON.stringify(logs));
  }
}
