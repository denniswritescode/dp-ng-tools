import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import {
  IExampleContact,
  TABLE_COLUMNS,
  TABLE_COLUMNS_MOBILE_FILTER,
  TABLE_DATA,
  TABLE_EXPANDABLE_DATA,
} from './configurations/table.config';

import { IDPRowExpandableConfig, IDPTableColumnConfig } from 'projects/dporter/dp-material-library/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dev-app';

  public contactTableCode = `<dp-table [columns]="columns" [data]="contacts"></dp-table>`;

  public contacts: Observable<IExampleContact[]> = TABLE_DATA;
  public columns: IDPTableColumnConfig[] = TABLE_COLUMNS;
  public expandable: IDPRowExpandableConfig = TABLE_EXPANDABLE_DATA;
  public mobileColumns = TABLE_COLUMNS_MOBILE_FILTER;
  public mobile = false;
}
