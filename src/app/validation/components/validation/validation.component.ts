import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ControlError } from '../../../shared/interfaces/control-error.type';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  @Input() public control: AbstractControl;
  public controlError: ControlError = null;

  public ngOnInit(): void {
    this.controlError = this.control.errors;
  }

}
