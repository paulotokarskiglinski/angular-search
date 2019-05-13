import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {CommentsService} from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public searchTextUsers = '';
  public searchTextComments = '';
  public users: any[] = [];
  public comments: any[] = [];
  public commentsSearchFields = ['name', 'email', 'body'];

  constructor(private usersService: UsersService, private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getComments();
  }

  getUsers(): void {
    this.usersService.get().subscribe((res: any[]) => {
      this.users = res;
    });
  }

  getComments(): void {
    this.commentsService.get().subscribe((res: any[]) => {
      this.comments = res;
    });
  }
}
