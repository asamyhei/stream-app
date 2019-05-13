import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './services/user.service';
import {HlFormInputComponent} from './stateless/hl-form/hl-form-input/hl-form-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardComponent} from './stateless/card/card.component';

@NgModule({
  declarations: [HlFormInputComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HlFormInputComponent,
    CardComponent
  ],
  providers: [
    UserService
  ]
})
export class SharedModule {
}
