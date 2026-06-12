import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import DataSource from 'devextreme/data/data_source';
import { DxLookupTypes } from 'devextreme-angular/ui/lookup';
import { Task } from './app.types';
import { AppService } from './app.service';

import { DxLookupModule } from 'devextreme-angular/ui/lookup';

@Component({
    selector: 'app-root',
    imports: [DxLookupModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [AppService],
})
export class AppComponent {
  employeesTasks: Task[];

  dataSource: DataSource;

  constructor(private readonly appService: AppService) {
    this.employeesTasks = this.appService.getTasks();
    this.dataSource = new DataSource({
      store: this.employeesTasks,
      key: 'ID',
      group: 'Assignee',
      paginate: true,
      pageSize: 2,
    });
  }

  onValueChanged(e: DxLookupTypes.ValueChangedEvent): void {
    notify(`Previous: ${e.previousValue}, Current: ${e.value}`, 'info', 2000);
  }
}
