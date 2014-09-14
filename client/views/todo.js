var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.todo,
    bindings: {
        'model.task': '[data-hook~=task]',
        'model.editUrl': {
            type: 'attribute',
            hook: 'action-edit',
            name: 'href'
        },
        'model.viewUrl': {
            type: 'attribute',
            hook: 'task',
            name: 'href'
        }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
