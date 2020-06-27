import { DPTableColumnConfig } from '../table.component';
import { Component, Input, AfterViewInit, ViewChild, Optional } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'dp-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class DPColumnComponent implements AfterViewInit {
  @Input() public config: DPTableColumnConfig;

  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  constructor(@Optional() public table: MatTable<any>) { }

  ngAfterViewInit() {
    if (this.table) {
      this.table.addColumnDef(this.columnDef);
    }
  }
}
