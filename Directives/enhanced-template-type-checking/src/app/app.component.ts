import { Component } from '@angular/core';
import { HighlightColor } from './directives/hightlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText = '';
  hColor: HighlightColor = HighlightColor.LightCoral;
}
