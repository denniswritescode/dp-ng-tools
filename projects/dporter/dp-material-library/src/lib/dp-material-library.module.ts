import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DPTableComponent } from './table/table.component';
import { DPColumnComponent } from './table/column/column.component';

@NgModule({
  declarations: [
    DPTableComponent,
    DPColumnComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    DPTableComponent,
    DPColumnComponent,
  ]
})
export class DPMaterialLibraryModule { }
