import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.scss'],
})
export class MultiplicationTableComponent implements OnInit {
  @Input() digit: number | null = null;
  @Input() limit: number = 0;
  table: null = null;

  constructor() {}

  ngOnInit(): void {}
}
