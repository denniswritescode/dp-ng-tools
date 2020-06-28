import { NgModule } from '@angular/core';
import { DPPhonePipe } from './pipes/phone/phone.pipe';



@NgModule({
  declarations: [
    DPPhonePipe,
  ],
  imports: [
  ],
  exports: [
    DPPhonePipe,
  ]
})
export class DPCommonModule { }
