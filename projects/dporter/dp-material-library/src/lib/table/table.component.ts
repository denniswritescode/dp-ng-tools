import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';

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
export class DPTableComponent<T> implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<T>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() public data: Observable<T[]>;
  @Input() public columns: DPTableColumnConfig[];
  @Input() public mobileColumns: string[];
  @Input() public mobile: boolean;

  private columnNames: string[];

  public dataSource: MatTableDataSource<T>;
  public dataLength: number;

  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columnNames = this.columns.map(c => c.property);

    this.subscriptions.push(
      this.data
        .subscribe(this.dataHandler.bind(this))
    );
  }

  dataHandler(data: T[]) {
    this.dataLength = data.length;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns(): string[] {
    return this.mobile ?
      this.columnNames.filter(c => this.mobileColumns.includes(c)) :
      this.columnNames;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
