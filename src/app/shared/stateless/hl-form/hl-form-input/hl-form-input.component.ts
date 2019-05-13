import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hl-form-input',
  templateUrl: './hl-form-input.component.html',
  styleUrls: ['./hl-form-input.component.scss']
})
export class HlFormInputComponent implements OnInit {
  @Input() inputId: string;
  @Input() inputLabel: string;
  @Input() inputType: string;
  @Input() formName: FormGroup;
  @Input() controlValidators: any[];
  @Input() controlName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
