import {
  AfterViewInit,
  Component,
  Input,
  Optional,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { MatColumnDef, MatTable } from '@angular/material/table';
import { DPTableColumnConfig } from '../table.component';

@Component({
  selector: 'dp-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class DPColumnComponent implements AfterViewInit {
  @Input() public config: DPTableColumnConfig;
  @Input() public template: TemplateRef<any>;
  @Input() public mobile: boolean;

  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  constructor(@Optional() public table: MatTable<any>) { }

  ngAfterViewInit() {
    if (this.table) {
      this.table.addColumnDef(this.columnDef);
    }
  }
}
