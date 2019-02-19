import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DemoFormWithSkuComponent } from './demo-form-with-sku/demo-form-with-sku.component';
import { DemoFormWithSkuBuilderComponent } from './demo-form-with-sku-builder/demo-form-with-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { DemoFormWithValidationsCustomComponent } from './demo-form-with-validations-custom/demo-form-with-validations-custom.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormWithNgModelComponent } from './demo-form-with-ng-model/demo-form-with-ng-model.component';

const routes: Routes = [
  {path:'', component:IntroComponent, pathMatch:'full'},
  {path:'sku', component:DemoFormWithSkuComponent, pathMatch:'full' },
  {path:'sku-builder', component:DemoFormWithSkuBuilderComponent, pathMatch:'full'},
  {path:'validations-explicit', component:DemoFormWithValidationsExplicitComponent, pathMatch:'full'},
  {path:'validations-shorthand', component:DemoFormWithValidationsShorthandComponent, pathMatch:'full'},
  {path:'validations-custom', component:DemoFormWithValidationsCustomComponent, pathMatch:'full'},
  {path:'events', component:DemoFormWithEventsComponent, pathMatch:'full'},
  {path:'ngmodel', component:DemoFormWithNgModelComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
