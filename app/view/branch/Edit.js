Ext.define('AM.view.branch.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.branchedit',

    requires: ['Ext.form.Panel'],

    title : 'Edit Branch',
    layout: 'fit',
    autoShow: true,
    height: 260,
    width: 280,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : x,
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'address',
                        fieldLabel: 'Address'
                    },
                    {
                        xtype: 'textfield',
                        name : 'manager',
                        fieldLabel: 'Manager'
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Open date',
                        name: 'open_date',
                        value: new Date()  // defaults to today
                    },
                    {
                        xtype      : 'fieldcontainer',
                        fieldLabel : 'Has storage',
                        defaultType: 'radiofield',
                        defaults: {
                            flex: 1
                        },
                        layout: 'hbox',
                        items: [
                            {
                                boxLabel  : 'Yes',
                                name      : 'has_storage',
                                inputValue: 'Yes',
                                id        : 'radio1'
                            }, {
                                boxLabel  : 'No',
                                name      : 'has_storage',
                                inputValue: 'No',
                                id        : 'radio2'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Deposit currency',
                        defaultType: 'checkboxfield',
                        layout: 'hbox',
                        border: true,
                        layoutConfig: {
                            padding:'0',
                            pack:'center',
                            align:'middle'
                        },
                        items: [
                            {
                                boxLabel  : 'USD',
                                name      : 'deposit_currency',
                                inputValue: 'USD',
                                id        : 'checkbox1'
                            },
                            {
                                boxLabel  : 'EUR',
                                name      : 'deposit_currency',
                                inputValue: 'EUR',
                                checked   : true,
                                id        : 'checkbox2'
                            }, {
                                boxLabel  : 'RAND',
                                name      : 'deposit_currency',
                                inputValue: 'RAND',
                                id        : 'checkbox3'
                            }
                        ]
                    }

                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
