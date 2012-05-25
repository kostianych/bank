Ext.define('AM.controller.Banks', {
    extend: 'Ext.app.Controller',

    stores: ['Branches'],

    models: ['Branch'],

    views: ['bank.List', 'branch.List'],

    refs: [
        {
            ref: 'buttonDel',
            selector: 'button[action=del]'
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

    currentAction: '',

    init: function() {
        this.control({
            'branchedit button[action=save]': {
                click: this.updateUser
            },
            'branchlist': {
                itemdblclick: this.editBranch
            },
            'branchedit button[action=save]': {
                click: this.updateBranch
            },
            'combo': {
                change: this.bankChanged
            },
            'button[action=add]': {
                click: this.addBranch
            },
            'button[action=edit]': {
                click: this.editBranchBtn
            },
            'button[action=del]': {
                click: this.removeBranch
            }



        });
    },



    addBranch: function (button) {
        currentAction = button.action;
        console.log('addBranch before' + button.action);
        var edit = Ext.create('AM.view.branch.Edit').show();

        button.fireEvent("openWindowEvent", arguments);

        var branch = Ext.create('AM.model.Branch', {id: 666, bank_id: 1, name: '', address: '', manager: '', open_date: '',
            has_storage: false, deposit_currency: 'RAND'});
        edit.down('form').loadRecord(branch);
        console.log('addBranch after' + "add")
    },

    removeBranch: function (button) {
//        currentAction = button.action;
//        console.log('addBranch before' + button.action);
//        var edit = Ext.create('AM.view.branch.Edit').show();
//        var branch = Ext.create('AM.model.Branch', {id: 666, bank_id: 1, name: '', address: '', manager: '', open_date: '',
//            has_storage: false, deposit_currency: 'RAND'});
//        edit.down('form').loadRecord(branch);

        console.log('removeBranch')
//        var win    = button.up('window'),
//            form   = win.down('form'),
//            record = form.getRecord(),
//            values = form.getValues();
//
//        record.set(values);
//        win.close();
//        this.getBranchesStore().sync();
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

    editBranchBtn: function(button) {
        var edit = Ext.create('AM.view.branch.Edit').show();
        //var win    = button.up('window');
        var grid   = button.parent.down('branchlist');

        var record = grid.getSelectionModel().getSelections();
        edit.down('form').loadRecord(record);
        console.log("editBranchBtn clicked")
    },

    updateBranch: function(button) {
        console.log('updateBranch ' + button.action);
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        if (currentAction = 'add') {
           this.getBranchesStore().add(record);
        }
        win.close();
        this.getBranchesStore().sync();
    }
});
