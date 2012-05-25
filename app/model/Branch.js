Ext.define('AM.model.Branch', {
    extend: 'Ext.data.Model',
    fields: ['id', 'bank_id', 'name', 'address', 'manager', 'open_date', 'has_storage', 'deposit_currency']
});