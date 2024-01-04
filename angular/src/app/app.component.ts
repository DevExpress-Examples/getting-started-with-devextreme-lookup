import { Component } from '@angular/core';
import { Service, Task } from './app.service';
import DataSource from 'devextreme/data/data_source';

import Lookup, { Properties } from 'devextreme/ui/lookup';
import { DxLookupModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    DxLookupModule
  ]
})
export class AppComponent {
  employeesTasks: Task[];
  dataSource: DataSource;

  constructor(service: Service) {
    this.employeesTasks = service.getTasks();
    this.dataSource = new DataSource({
      store: this.employeesTasks,
      key: "ID",
      group: "Assignee",
      paginate: true,
      pageSize: 2
    });

    Lookup.defaultOptions<Properties>({ device: d => true, options: {
      showClearButton: true,
    } });
  }

  onValueChanged(e: any) {
    console.log(e.previousValue);
    console.log(e.value);
  }

}
