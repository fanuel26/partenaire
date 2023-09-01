import { AngularFileUploaderModule } from 'angular-file-uploader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFileUploaderModule
  ]
})
export class AuthModule { }
