import { Component, OnInit } from '@angular/core';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit {
  releaseLogs: IReleaseLog[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewReleaseLog(log: IReleaseLog) {
    this.releaseLogs.unshift(log);
  }


}
