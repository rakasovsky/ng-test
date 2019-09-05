import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './models/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserDialogComponent} from './user-dialog/user-dialog.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userId: string;
  public user: User;
  public users: User[];
  private userService: UserService;
  constructor(private serv: UserService, public dialog: MatDialog) {
    this.userService = serv;
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.loadUsers();
  }
  private loadUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
  openDialog() {
    this.dialog.open(UserDialogComponent);
  }
  // public addUser() {
  //   let user = new User();
  //   // user.id = 'jsuuyss';
  //   this.userService.addUser(user);
  // }
}

