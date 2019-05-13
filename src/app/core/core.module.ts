import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {httpInterceptorProviders} from './interceptors/interceptors';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ForbiddenComponent, NotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
})
export class CoreModule {
}
