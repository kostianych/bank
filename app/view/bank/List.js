// Define the model for a State
Ext.define('State', {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'id'},
        {type: 'string', name: 'name'}
    ]
});

// The data for all states
var states = [
    {"id":"1","name":"SBSA"},
    {"id":"2","name":"ABSA"},
    {"id":"3","name":"NEDBANK"}
];

function createStore() {
    // The data store holding the states; shared by each of the ComboBox examples below
    return Ext.create('Ext.data.Store', {
        autoDestroy: true,
        model: 'State',
        data: states
    });
};

Ext.define('AM.view.bank.List' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.banklist',

    title : 'Banks',
    //store: 'Banks',

    frame: true,
    width: 340,
    bodyPadding: 5,

//    fieldDefaults: {
//        labelAlign: 'left',
//        labelWidth: 90,
//        anchor: '100%'
//    },

    // The fields
    items: [
        {
        xtype: 'combo',
        name: 'cbBanks',
        alias: 'bankcombo',
        fieldLabel: 'Bank',
        emptyText: 'Choose bank...',
        valueField: 'id',
        displayField: 'name',
        store: createStore(),
        queryMode: 'local',
        editable: false
    },
    {
        xtype: 'branchlist'
    },
    {
        xtype: 'button',
        text : 'Add',
        action: 'add'
    },
    {
        xtype: 'button',
        text : 'Edit',
        action: 'edit'
    },
    {
        xtype: 'button',
        text : 'Delete',
        action: 'del'
    }



    ],

    buttons:  [
    {
        text: 'Add',
        action: 'add'
    }
    ]//,


//    renderTo: Ext.getBody()

});
