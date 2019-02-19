import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
})
export class DemoFormWithValidationsShorthandComponent implements OnInit {
  
  myForm: FormGroup;
  sku:AbstractControl;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'sku': ['', Validators.required],
    });

  }

  onSubmit(value: string): void {
    console.log('You Submitted value: ', value);
  }
  ngOnInit() {
  }


}
