Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email'],
    hasMany: {model: 'Branch', name: 'branches'}
});