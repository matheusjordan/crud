import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DelUserComponent } from './del-user/del-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    AddUserComponent,
    DelUserComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
