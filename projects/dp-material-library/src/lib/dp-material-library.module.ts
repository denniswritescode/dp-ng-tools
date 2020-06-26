import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DPTableComponent } from './table/table.component';

@NgModule({
  declarations: [
    DPTableComponent,
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    DPTableComponent,
  ]
})
export class DPMaterialLibraryModule { }
