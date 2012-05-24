Ext.define('AM.controller.Banks', {
    extend: 'Ext.app.Controller',

    stores: ['Branches'],

    models: ['Branch'],

    views: ['bank.List', 'branch.List'],

    refs: [
        {
            ref: 'banksPanel',
            selector: 'panel'
        }
    ],

//    init: function() {
//        this.control({
//            'viewport > userlist dataview': {
//                itemdblclick: this.editUser
//            },
//            'useredit button[action=save]': {
//                click: this.updateUser
//            }
//        });
//    },

    init: function() {
        this.control({
            'branchlist': {
                itemdblclick: this.editBranch
            },
            'branchedit button[action=save]': {
                click: this.updateBranch
            },
            'combo': {
                change: this.bankChanged
            }

        });
    },

    bankChanged: function (field, newValue, oldValue, eOpts) {
        this.getBranchesStore().suspendEvents();
        this.getBranchesStore().clearFilter();
        this.getBranchesStore().resumeEvents();
        this.getBranchesStore().filter({
            property: 'bank_id',
            anyMatch: true,
            value   : newValue
        });
        this.getBranchesStore().sync();
        console.log(this.getBranchesStore())
    },

    editBranch: function(grid, record) {
        var edit = Ext.create('AM.view.branch.Edit').show();

        edit.down('form').loadRecord(record);
        console.log("editUser clicked")
    },

    updateBranch: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getBranchesStore().sync();
    }
});
