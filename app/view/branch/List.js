Ext.define('AM.view.branch.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.branchlist',

    title : 'Branches',
    store: 'Branches',

    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Address', dataIndex: 'address', flex: 1},
        {header: 'Manager', dataIndex: 'manager', flex: 1},
        {header: 'Open date', dataIndex: 'open_date', flex: 1},
        {header: 'Has storage', dataIndex: 'has_storage', flex: 1},
        {header: 'Deposit currency', dataIndex: 'deposit_currency', flex: 1}
    ]//,
//    plugins: [
//        Ext.create('Ext.grid.plugin.RowEditing', {
//            clicksToEdit: 1
//        })
//    ]

});
