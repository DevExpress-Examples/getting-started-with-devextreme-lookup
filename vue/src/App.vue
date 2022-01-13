<template>
        <DxLookup
            :data-source="dataSource"
            value-expr="ID"
            display-expr="Subject"
            search-mode="contains"
            :searchExpr="['Assignee', 'Subject']"
            :min-search-length="2"
            @value-changed="onValueChanged"
            :grouped="true"
            group-template="group-list"
            page-load-mode="nextButton"
            next-button-text="More"
            item-template="list-item"
        >
            <template #group-list="{ data }">
                {{ data.key + " - " + data.items.length }}
            </template>
            <template #list-item="{ data: itemData }">
                {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
            </template>
            <DxDropDownOptions 
                :close-on-outside-click="true"
                :show-title="false"
            />
        </DxLookup>
</template>

<script>
    import { DxLookup, DxDropDownOptions } from 'devextreme-vue/lookup';
    import DataSource from 'devextreme/data/data_source';
    import { employeesTasks } from './data';

    const dataSource = new DataSource({
        store: employeesTasks,
        key: "ID",
        group: "Assignee",
        paginate: true,
        pageSize: 2
    });

    export default {
        components: {
            DxLookup,
            DxDropDownOptions
        },
        data() {
            return {
                dataSource
            }
        },
        methods: {
            onValueChanged(e) {
                console.log(e.previousValue);
                console.log(e.value);
            }
        }
    }
</script>