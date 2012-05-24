Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Branches'],

    models: ['Branch'],

    views: ['branch.Edit', 'branch.List'],

    refs: [
        {
            ref: 'branchesPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > branchlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});
