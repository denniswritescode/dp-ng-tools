import { AfterViewInit, Component, Input, Optional, TemplateRef, ViewChild, OnChanges } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { DPTableColumnConfig } from '../table.component';

@Component({
  selector: 'dp-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class DPColumnComponent implements AfterViewInit, OnChanges {
  @Input() public config: DPTableColumnConfig;
  @Input() public template: TemplateRef<any>;

  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  constructor(@Optional() public table: MatTable<any>) { }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngAfterViewInit() {
    if (this.table) {
      this.table.addColumnDef(this.columnDef);
    }
  }
}
