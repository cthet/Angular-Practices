import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit { 
  _vName!: string | null;

  get vName() {
    return this._vName;
  }

  @Input() set vName(name: string | null) {
    if (!name) return;
    if (!this._vName) {
      this.logs.push(`initial version is ${name.trim()}`);
    } else {
      this.logs.push(`version changed to ${name.trim()}`);
    }
    this._vName = name;
  }

  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
