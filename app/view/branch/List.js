Ext.define('AM.view.branch.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.branchlist',

    title : 'Branches',
    store: 'Branches',

    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Address', dataIndex: 'address', flex: 1},
        {header: 'Manager', dataIndex: 'manager', flex: 1}
    ]
});
