import { Component, OnInit, Input } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  id: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSearch(): void {
    this.user = this.userService.readUser(this.id);
  }

  onEdit(): void {
    this.userService.updateUser(this.id, this.user);
    this.user = undefined;
  }

}
