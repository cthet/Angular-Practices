import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Validating if a DOM element is visible on the view';
  isCounterVisible = false;
  constructor() {}

  ngOnInit() {}

  toggleCounterVisibility() {
    this.isCounterVisible = !this.isCounterVisible;
  }
}
