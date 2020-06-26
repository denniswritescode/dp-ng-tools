import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DPMaterialLibraryModule } from 'projects/dp-material-library/src/lib/dp-material-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DPMaterialLibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
