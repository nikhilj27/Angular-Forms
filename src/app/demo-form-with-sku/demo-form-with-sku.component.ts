import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-with-sku',
  templateUrl: './demo-form-with-sku.component.html',
})
export class DemoFormWithSkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
