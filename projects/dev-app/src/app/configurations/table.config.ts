import { IDPRowExpandableConfig, IDPTableColumnConfig } from 'projects/dporter/dp-material-library/src/public-api';
import { Observable, of } from 'rxjs';

export const TABLE_COLUMNS: IDPTableColumnConfig[] = [
    { property: 'name', header: 'Contact' },
    { property: 'phone', header: 'Phone' },
    { property: 'company', header: 'Company' },
    { property: 'email', header: 'Email' },
];

export const TABLE_COLUMNS_MOBILE_FILTER: string[] = [ 'name' ];

export const TABLE_EXPANDABLE_DATA: IDPRowExpandableConfig = {
  properties: [
    {
      property: 'phone',
      icon: 'perm_phone_msg',
    },
    {
      property: 'address',
      icon: 'location_on',
    },
    {
      property: 'email',
      icon: 'email',
    },
    {
      property: 'company',
      icon: 'business_center',
    },
  ],
  displayedColumns: {
    fullscreen: [ 'email', 'address' ],
    mobile: [ 'email', 'address', 'phone', 'company' ]
  },
};

export const TABLE_DATA: Observable<IExampleContact[]> = of([
  {
    name: 'John Doe',
    phone: '123-555-1234',
    company: 'Google Inc',
    email: 'john@johndoe.com',
    address: '1234 Easy Street, Detroit, Michigan, 48223',
  },
  {
    name: 'Jane Overman',
    phone: '433-555-1234',
    company: 'Quicken Loans',
    email: 'jane@quickenloans.com',
    address: '5555 Difficult Ave, Chicago, Illinois, 60652',
  },
  {
    name: 'Quincy Johnson',
    phone: '433-555-1234',
    company: 'Quicken Loans',
    email: 'q@quickenloans.com',
    address: '654532 Medium Lane, Beverly Hills, California, 90210',
  },
]);

export interface IExampleContact {
  name: string;
  phone: string;
  company: string;
  email: string;
}
