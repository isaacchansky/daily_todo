var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    props: {
        id: 'any',
        task: ['string', true, ''],
        summary: ['string', false, ''],
        isComplete: ['boolean', true, false]
    },
    session: {
        active: ['boolean', true, false]
    },
    derived: {
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/todo/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/todo/' + this.id;
            }
        }
    }
});
