import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DPTableColumnConfig } from 'projects/dporter/dp-material-library/src/public-api';

interface IExampleContact {
  name: string;
  phone: string;
  company: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dev-app';

  public contactTableCode = `<dp-table [columns]="columns" [data]="contacts"></dp-table>`;

  public columns: DPTableColumnConfig[] = [
    { property: 'name', header: 'Contact' },
    { property: 'phone', header: 'Phone' },
    { property: 'company', header: 'Company' },
  ];

  public contacts: Observable<IExampleContact[]> = of([
    {
      name: 'John Doe',
      phone: '123-555-1234',
      company: 'Google Inc',
    },
    {
      name: 'Jane Overman',
      phone: '433-555-1234',
      company: 'Quicken Loans',
    },
  ]);
}
