Ext.define('AM.store.Branches', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Branch',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/branches.json',
            update: 'data/updateBranches.json'
        },
        reader: {
            type: 'json',
            root: 'branches',
            successProperty: 'success'
        }
    }
});