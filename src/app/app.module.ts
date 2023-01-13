import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
