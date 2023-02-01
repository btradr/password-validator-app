import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './components/login/login.component';

// Modules
import { ValidationModule } from '../validation/validation.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
