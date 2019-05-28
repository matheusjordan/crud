import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-del-user',
  templateUrl: './del-user.component.html',
  styleUrls: ['./del-user.component.css']
})
export class DelUserComponent implements OnInit {
  id: number;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSearch(): void {
    this.user = this.userService.readUser(this.id);
  }

  onDelete(): void {
    this.userService.deleteUser(this.id);
    this.user = undefined;
  }
}
