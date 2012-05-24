Ext.define('AM.store.Banks', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Bank',
    //autoLoad: true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/banks.json',
            update: 'data/updateBanks.json'
        },
        reader: {
            type: 'json',
            root: 'banks',
            successProperty: 'success'
        }
    }
});