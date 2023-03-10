import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { DataService } from './core/data.service';


const NUMBER_OF_USERS = 10000;
const LOADER_TIMEOUT = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cdk-virtual-scroll';
  $listItemsData!: Observable<Partial<AppUserCard>[]>;
  showLoader!: boolean;
  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.$listItemsData = this.dataService.getUsers();
    }, LOADER_TIMEOUT)
  }
}
