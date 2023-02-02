import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { simplePattern, mediumPattern, strongPattern } from '../../../shared/variables';
import { PasswordStrengthType } from '../../../shared/interfaces/password-strength.type';
import { ControlErrorType } from '../../../shared/interfaces/control-error.type';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit, OnDestroy {

  @Input() public control: AbstractControl;

  public controlError: ControlErrorType = null;
  public passwordStrength: PasswordStrengthType = null;

  private destroy$: Subject<null> = new Subject<null>();

  public ngOnInit(): void {
    this.controlError = this.control.errors;
    this.checkMatches();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private checkMatches(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((inputValue: string) => {
        if (inputValue.match(simplePattern)) {
          this.passwordStrength = 'simple';
        } else if (inputValue.match(mediumPattern)) {
          this.passwordStrength = 'medium';
        } else if (inputValue.match(strongPattern)) {
          this.passwordStrength = 'strong';
        } else {
          this.passwordStrength = null;
        }
      });
  }

}
