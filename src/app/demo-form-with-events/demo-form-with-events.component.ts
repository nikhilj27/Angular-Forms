import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';


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
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
})
export class DemoFormWithEventsComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])],
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      });

    this.myForm.valueChanges.subscribe(
      (value: any) => {
        console.log('form changed to: ', value);
      });

  }

  onSubmit(value: string): void {
    console.log('You Submitted value: ', value);
  }
  ngOnInit() {
  }

}
