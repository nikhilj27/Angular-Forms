import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {

  myForm: FormGroup;
  sku:AbstractControl;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'sku': ['', Validators.required],
    });

    this.sku = this.myForm.controls['sku'];

  }

  onSubmit(value: string): void {
    console.log('You Submitted value: ', value);
  }
  ngOnInit() {
  }


}
