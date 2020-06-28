import { DPTableColumnConfig } from 'projects/dporter/dp-material-library/src/public-api';
import { Observable, of } from 'rxjs';

export interface IExampleContact {
  name: string;
  phone: string;
  company: string;
  email: string;
}

export const TABLE_COLUMNS: DPTableColumnConfig[] = [
    { property: 'name', header: 'Contact' },
    { property: 'phone', header: 'Phone' },
    { property: 'company', header: 'Company' },
    { property: 'email', header: 'Email' },
];
export const TABLE_COLUMNS_MOBILE_FILTER: string[] = [ 'name' ];

export const TABLE_DATA: Observable<IExampleContact[]> = of([
  {
    name: 'John Doe',
    phone: '123-555-1234',
    company: 'Google Inc',
    email: 'john@johndoe.com'
  },
  {
    name: 'Jane Overman',
    phone: '433-555-1234',
    company: 'Quicken Loans',
    email: 'jane@quickenloans.com',
  },
]);
