$(() => {
  const lookup = $('#lookup').dxLookup({
    dataSource: new DevExpress.data.DataSource({
      store: employeesTasks,
      key: 'ID',
      group: 'Assignee',
      paginate: true,
      pageSize: 2,
    }),
    valueExpr: 'ID',
    displayExpr: 'Subject',
    searchMode: 'contains',
    searchExpr: ['Assignee', 'Subject'],
    minSearchLength: 2,
    showDataBeforeSearch: true,
    onValueChanged(e) {
      DevExpress.ui.notify(`Previous: ${e.previousValue}, Current: ${e.value}`, 'info', 2000);
    },
    grouped: true,
    groupTemplate(data, index, element) {
      return `${data.key} (${data.items.length} tasks)`;
    },
    pageLoadMode: 'nextButton',
    nextButtonText: 'More',
    itemTemplate(itemData, itemIndex, itemElement) {
      return itemData.disabled ? `\u274C ${itemData.Subject}` : `\u2705 ${itemData.Subject}`;
    },
    dropDownOptions: {
      hideOnOutsideClick: true,
      showTitle: false,
    },
  }).dxLookup('instance');
});
