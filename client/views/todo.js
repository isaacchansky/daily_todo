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
        },
        'model.summary': {
            type: 'value',
            hook: 'summary'
        },
        'model.isComplete': [
            {
                type: 'booleanClass',
                hook: 'complete',
                name: 'complete',
                yes: 'completed',
                no: 'incomplete'
            },
            {
                type: 'booleanAttribute',
                hook: 'action-complete',
                name: 'checked',
            }
        ],
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick',
        'change [data-hook~=action-complete]': 'toggleComplete',
        'click [data-hook~=action-update-summary]': 'updateSummary'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    },
    toggleComplete: function (e) {
        if(this.model.isComplete){
            this.model.isComplete = false;
        }else{
            this.model.isComplete = true;
        }
        this.model.save();
    },
    updateSummary: function(){
        this.model.summary = this.queryByHook('summary').value;
        this.model.save();
    }
});
