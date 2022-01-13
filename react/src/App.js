import React from 'react';
 
import 'devextreme/dist/css/dx.light.css';
 
import { DropDownOptions, Lookup } from 'devextreme-react/lookup';
 
import DataSource from 'devextreme/data/data_source';
import { employeesTasks } from './data';
 
const dataSource = new DataSource({
    store: employeesTasks,
    key: "ID",
    group: "Assignee",
    paginate: true,
    pageSize: 2
});

const searchExpression = ['Assignee', 'Subject'];

const renderListGroup = (data) => {
    return (
        <div>{ data.key + " - " + data.items.length }</div>
    );
}

const renderListItem = (data) => {
    return (
        <div>{ data.disabled ? '\u274C ' + data.Subject : '\u2705 ' + data.Subject }</div>
    );
}

function App() {
    const onValueChanged = useCallback((e) => {
        console.log(e.previousValue);
        console.log(e.value);
    }, []);

    return (
        <Lookup
            dataSource={dataSource}
            valueExpr="ID"
            displayExpr="Subject"
            searchMode="contains"
            searchExpr={searchExpression}
            minSearchLength={2}
            onValueChanged={onValueChanged}
            grouped={true}
            groupRender={renderListGroup}
            pageLoadMode="nextButton"
            nextButtonText="More"
            itemRender={renderListItem}
        >
            <DropDownOptions
                closeOnOutsideClick={true}
                showTitle={false}
            />
        </Lookup>
    ); 
}
 
export default App;