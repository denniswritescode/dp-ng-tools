import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

export interface DPTableColumnConfig {
  name: string;
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
  public dataSource: MatTableDataSource<T>;

  constructor() { }

  ngOnInit(): void {
  }
}
