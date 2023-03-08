import { Component, Input, OnInit } from '@angular/core';
import { IReleaseLog, ReleaseLog } from 'src/app/classes/release-log';

@Component({
  selector: 'app-release-logs',
  templateUrl: './release-logs.component.html',
  styleUrls: ['./release-logs.component.scss']
})
export class ReleaseLogsComponent implements OnInit {
  @Input() logs!: ReleaseLog[];
  constructor() { }

  ngOnInit(): void {
  }

}
