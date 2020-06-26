import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { DPTableColumnConfig } from 'dp-material-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dev-app';
  public tableConfig: Observable<DPTableColumnConfig> = from([
    { name: 'name', header: 'Contact' },
    { name: 'phone', header: 'Phone' },
    { name: 'company', header: 'Company' },
    { name: 'email', header: 'Email' },
    { name: 'more', header: '' },
  ]);
}
