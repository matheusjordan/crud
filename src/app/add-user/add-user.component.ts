import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  onCreate(): void {
    this.userService.createUser(this.user);
    this.user = new User();
  }

}
