import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-sku-builder',
  templateUrl: './demo-form-with-sku-builder.component.html',
})
export class DemoFormWithSkuBuilderComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'sku': ['ABC123'],
      'skuPrice': [],
    })
  }

  onSubmit(value: string): void {
    console.log('You Submitted value: ', value);
  }
  ngOnInit() {
  }

}
