import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './components/login/login.component';

// Modules
import { ValidationModule } from '../validation/validation.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ValidationModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
