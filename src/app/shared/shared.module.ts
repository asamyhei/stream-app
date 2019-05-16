import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardComponent} from './stateful/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CardComponent
  ],
  providers: [
    UserService
  ]
})
export class SharedModule {
}
