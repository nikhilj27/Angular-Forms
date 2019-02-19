import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-ng-model',
  templateUrl: './demo-form-with-ng-model.component.html',
})
export class DemoFormWithNgModelComponent implements OnInit {

  myForm: FormGroup;
  productName: string;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'productName': ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
