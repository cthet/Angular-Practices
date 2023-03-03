import { Component, Input, OnInit } from '@angular/core';
import { ReleaseLog } from 'src/app/classes/release-log';

@Component({
  selector: 'app-release-logs',
  templateUrl: './release-logs.component.html',
  styleUrls: ['./release-logs.component.scss']
})
export class ReleaseLogsComponent implements OnInit {
  newReleaseLog(newReleaseLog: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
  @Input() logs!: ReleaseLog[];
  apps: any;
  releaseForm: any;
  constructor() { }

  ngOnInit(): void {
  }

}
