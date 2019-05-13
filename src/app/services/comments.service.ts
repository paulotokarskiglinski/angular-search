import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(
      map((res: any[]) => {
        return res;
      })
    );
  }

}
