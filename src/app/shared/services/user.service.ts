import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject({});
  currentUser$ = this.user.asObservable();

  constructor() {
  }

  changeUser(message: object) {
    this.user.next(message);
  }
}
