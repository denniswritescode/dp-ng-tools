import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DPCommonModule } from 'projects/dporter/dp-common/src/lib/dp-common.module';
import { DPMaterialLibraryModule } from 'projects/dporter/dp-material-library/src/lib/dp-material-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DPMaterialLibraryModule,
    DPCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
