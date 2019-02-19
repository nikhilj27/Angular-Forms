import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { ExampleDef } from './example.model';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoFormWithSkuComponent } from './demo-form-with-sku/demo-form-with-sku.component';
import { DemoFormWithSkuBuilderComponent } from './demo-form-with-sku-builder/demo-form-with-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { DemoFormWithValidationsCustomComponent } from './demo-form-with-validations-custom/demo-form-with-validations-custom.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormWithNgModelComponent } from './demo-form-with-ng-model/demo-form-with-ng-model.component';



export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'SKU', name: 'DemoFormSku', path: 'sku', component: DemoFormWithSkuComponent },
  { label: 'Sku(with Builder)', name: 'DemoFormSkuWithBuilder', path: 'sku-builder', component: DemoFormWithSkuBuilderComponent },
  { label: 'Validations-Explicit', name: 'DemoFormValidationExplicit', path: 'validations-explicit', component: DemoFormWithValidationsExplicitComponent },
  { label: 'Validations-Shorthand', name: 'DemoFormValidationShorthand', path: 'validations-shorthand', component: DemoFormWithValidationsShorthandComponent },
  { label: 'Validations-Custom', name: 'DemoFormValidationCustom', path: 'validations-custom', component: DemoFormWithValidationsCustomComponent },
  { label: 'Events', name: 'DemoFormEvents', path: 'events', component: DemoFormWithEventsComponent },
  { label: 'NgModel', name: 'DemoFormNgModel', path: 'ngmodel', component: DemoFormWithNgModelComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent,
    DemoFormWithSkuComponent,
    DemoFormWithSkuBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithValidationsShorthandComponent,
    DemoFormWithValidationsCustomComponent,
    DemoFormWithEventsComponent,
    DemoFormWithNgModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
