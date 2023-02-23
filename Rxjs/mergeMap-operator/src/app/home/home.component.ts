import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../core/interfaces/user.interface';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$!: Observable<IUser[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getSimilarUsers(null);
  }

}
