import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: object;
  obervableUser;
  formName: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    // check if value changed
    this.obervableUser = this.userService.currentUser$.subscribe(user => {
      this.user = user;
      console.log('updated user:', user);
    });


    this.formName = this.fb.group({
      emailInput: ['', [Validators.required, Validators.email]],
      passwordInput: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {
    this.obervableUser.unsubscribe();
  }

  submit(formName) {
    this.userService.changeUser({email: formName.value.emailInput});
  }
}
