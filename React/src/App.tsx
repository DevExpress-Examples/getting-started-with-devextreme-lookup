import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Lookup, { DropDownOptions } from 'devextreme-react/lookup';
import type { LookupTypes } from 'devextreme-react/lookup';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { Task } from './types';
import { employeesTasks } from './data';

const dataSource = new DataSource({
  store: employeesTasks,
  key: 'ID',
  group: 'Assignee',
  paginate: true,
  pageSize: 2,
});

const searchExpression = ['Assignee', 'Subject'];

function renderListGroup(data: any): JSX.Element {
  return (
    <div>{`${data.key} (${data.items.length} tasks)`}</div>
  );
}

function renderListItem(data: Task): JSX.Element {
  return (
    <div>{data.disabled ? `\u274C ${data.Subject}` : `\u2705 ${data.Subject}`}</div>
  );
}

function App(): JSX.Element {
  const onValueChanged = useCallback((e: LookupTypes.ValueChangedEvent) => {
    notify(`Previous: ${e.previousValue}, Current: ${e.value}`, 'info', 2000);
  }, []);

  return (
    <div id="container">
      <Lookup
        dataSource={dataSource}
        valueExpr="ID"
        displayExpr="Subject"
        searchMode="contains"
        searchExpr={searchExpression}
        minSearchLength={2}
        showDataBeforeSearch={true}
        onValueChanged={onValueChanged}
        grouped={true}
        groupRender={renderListGroup}
        pageLoadMode="nextButton"
        nextButtonText="More"
        itemRender={renderListItem}
      >
        <DropDownOptions
          hideOnOutsideClick={true}
          showTitle={false}
        />
      </Lookup>
    </div>
  );
}

export default App;
