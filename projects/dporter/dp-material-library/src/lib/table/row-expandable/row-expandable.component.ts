import {
  AfterViewInit,
  Component,
  Input,
  Optional,
  ViewChild
} from '@angular/core';

import {
  MatCellDef,
  MatColumnDef,
  MatRowDef,
  MatTable
} from '@angular/material/table';


@Component({
  selector: 'dp-row-expandable',
  templateUrl: './row-expandable.component.html',
  styleUrls: ['./row-expandable.component.css']
})
export class DPRowExpandableComponent implements AfterViewInit {

  @Input() public colSpan: number;
  @Input() public config: IDPRowExpandableConfig;

  @ViewChild(MatRowDef) rowDef: MatRowDef<any>;
  @ViewChild(MatColumnDef) columnDef: MatColumnDef;
  @ViewChild(MatCellDef) cellDef: MatCellDef;

  public expanded: object;

  constructor(@Optional() public table: MatTable<any>) { }

  ngAfterViewInit() {
    if (this.table) {
      this.table.addColumnDef(this.columnDef);
      this.table.addRowDef(this.rowDef);
    }
    this.table.renderRows();
  }
}

/*****************************
 * Expandable Row Interfaces
 *****************************/
export interface IDPRowExpandableConfig {
  properties: IDPRowExpandableDataProperty[];
  displayedColumns: IDPRowExpandableDataDisplayColumns;
}

interface IDPRowExpandableDataProperty {
  property: string;
  icon: string;
}

interface IDPRowExpandableDataDisplayColumns {
  fullscreen: string[];
  mobile: string[];
}
