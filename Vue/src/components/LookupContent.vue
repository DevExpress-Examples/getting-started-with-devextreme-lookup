<script setup lang="ts">
import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';
import type { DxLookupTypes } from 'devextreme-vue/lookup';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import type { Task } from '../types';

const employeesTasks: Task[] = [
  {
    ID: 1,
    Assignee: 'Mr. John Heart',
    Subject: 'Choose between PPO and HMO Health Plan',
    disabled: true,
  }, {
    ID: 2,
    Assignee: 'Mr. John Heart',
    Subject: 'Google AdWords Strategy',
  }, {
    ID: 3,
    Assignee: 'Mr. John Heart',
    Subject: 'New Brochures',
  }, {
    ID: 4,
    Assignee: 'Mr. John Heart',
    Subject: 'Update NDA Agreement',
  }, {
    ID: 5,
    Assignee: 'Mr. John Heart',
    Subject: 'Review Product Recall Report by Engineering Team',
  }, {
    ID: 6,
    Assignee: 'Mrs. Olivia Peyton',
    Subject: 'Update Personnel Files',
  }, {
    ID: 7,
    Assignee: 'Mrs. Olivia Peyton',
    Subject: 'Review Health Insurance Options Under the Affordable Care Act',
  }, {
    ID: 8,
    Assignee: 'Mrs. Olivia Peyton',
    Subject: 'Non-Compete Agreements',
  }, {
    ID: 9,
    Assignee: 'Mrs. Olivia Peyton',
    Subject: 'Give Final Approval for Refunds',
  }, {
    ID: 10,
    Assignee: 'Mr. Robert Reagan',
    Subject: 'Deliver R&D Plans for 2013',
  }, {
    ID: 11,
    Assignee: 'Mr. Robert Reagan',
    Subject: 'Decide on Mobile Devices to Use in the Field',
  }, {
    ID: 12,
    Assignee: 'Mr. Robert Reagan',
    Subject: 'Try New Touch-Enabled WinForms Apps',
  }, {
    ID: 13,
    Assignee: 'Mr. Robert Reagan',
    Subject: 'Approval on Converting to New HDMI Specification',
  }, {
    ID: 14,
    Assignee: 'Ms. Greta Sims',
    Subject: 'Approve Hiring of John Jeffers',
  }, {
    ID: 15,
    Assignee: 'Ms. Greta Sims',
    Subject: 'Update Employee Files with New NDA',
  }, {
    ID: 16,
    Assignee: 'Ms. Greta Sims',
    Subject: 'Provide New Health Insurance Docs',
  },
];

const dataSource: DataSource = new DataSource({
  store: employeesTasks,
  key: 'ID',
  group: 'Assignee',
  paginate: true,
  pageSize: 2,
});

const searchExpr: string[] = ['Assignee', 'Subject'];

const onValueChanged = (e: DxLookupTypes.ValueChangedEvent): void => {
  notify(`Previous: ${e.previousValue}, Current: ${e.value}`, 'info', 2000);
};
</script>

<template>
  <div id="container">
    <DxLookup
      :data-source="dataSource"
      value-expr="ID"
      display-expr="Subject"
      search-mode="contains"
      :search-expr="searchExpr"
      :min-search-length="2"
      :show-data-before-search="true"
      @value-changed="onValueChanged"
      :grouped="true"
      group-template="group-list"
      page-load-mode="nextButton"
      next-button-text="More"
      item-template="list-item"
    >
      <template #group-list="{ data }">
        {{ `${data.key} (${data.items.length} tasks)` }}
      </template>
      <template #list-item="{ data: itemData }">
        {{ itemData.disabled ? `\u274C ${itemData.Subject}` : `\u2705 ${itemData.Subject}` }}
      </template>
      <DxDropDownOptions
        :hide-on-outside-click="true"
        :show-title="false"
      />
    </DxLookup>
  </div>
</template>

<style scoped>
#container {
  width: 500px;
  height: 500px;
  padding-top: 5px;
}
</style>
