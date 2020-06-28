import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { DPCellDefinitionDirective } from './table/cell-definition/cell-definition.directive';
import { DPColumnComponent } from './table/column/column.component';
import { DPTableComponent } from './table/table.component';

@NgModule({
  declarations: [
    DPTableComponent,
    DPColumnComponent,
    DPCellDefinitionDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    DPTableComponent,
    DPColumnComponent,
    DPCellDefinitionDirective,
  ]
})
export class DPMaterialLibraryModule { }
