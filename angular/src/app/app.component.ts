import { Component } from '@angular/core';
import { Service, Task } from './app.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
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
  }

  onValueChanged(e: any) {
    console.log(e.previousValue);
    console.log(e.value);
  }

  groupTemplate(data: any) {
    let countInvisible = 0;
      for (let i = 0; i < data.items.length; i++) {
        if (data.items[i].visible === false) {
          countInvisible += 1;
        }
      }
    return data.key + " (" + (data.items.length - countInvisible) + " tasks)";
  }
}
