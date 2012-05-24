Ext.define('AM.view.branch.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.branchedit',

    requires: ['Ext.form.Panel'],

    title : 'Edit Branch',
    layout: 'fit',
    autoShow: true,
    height: 180,
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
                        name : 'name',
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
