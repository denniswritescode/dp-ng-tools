import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

export interface DPTableColumnConfig {
  property: string;
  header: string;
}

@Component({
  selector: 'dp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class DPTableComponent<T> implements OnInit {
  @ViewChild(MatTable) table: MatTable<T>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() public data: Observable<T[]>;
  @Input() public columns: DPTableColumnConfig[];

  public displayedColumns: string[];

  public dataSource: MatTableDataSource<T>;
  public dataLength: number;

  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.data
        .subscribe(this.dataHandler.bind(this))
    );

    this.displayedColumns = this.columns.map(c => c.property);
  }

  dataHandler(data: T[]) {
    this.dataLength = data.length;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
