<template>
    <div id="container">
        <DxLookup
            :data-source="dataSource"
            value-expr="ID"
            display-expr="Subject"
            search-mode="contains"
            :searchExpr="['Assignee', 'Subject']"
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
                {{ groupTemplate(data) }}
            </template>
            <template #list-item="{ data: itemData }">
                {{ itemData.disabled ? '\u274C ' + itemData.Subject : '\u2705 ' + itemData.Subject }}
            </template>
            <DxDropDownOptions 
                :close-on-outside-click="true"
                :show-title="false"
            />
        </DxLookup>
    </div>
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
            },
            groupTemplate(data) {
                let countInvisible = 0;
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].visible === false) {
                        countInvisible += 1;
                    }
                }
                return data.key + " (" + (data.items.length - countInvisible) + " tasks)";
            }
        }
    }
</script>

<style>
    #container {
        width: 500px;
        height: 500px;
        padding-top: 5px;
    }
</style>