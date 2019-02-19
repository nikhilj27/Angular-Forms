import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

/**
 * Custom validation
 * @param control 
 */
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }

}


@Component({
  selector: 'app-demo-form-with-validations-custom',
  templateUrl: './demo-form-with-validations-custom.component.html',
})

export class DemoFormWithValidationsCustomComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])],
    });

    this.sku = this.myForm.controls['sku'];

  }

  onSubmit(value: string): void {
    console.log('You Submitted value: ', value);
  }
  ngOnInit() {
  }

}
