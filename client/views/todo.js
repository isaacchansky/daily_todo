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
                yes: 'completed',
                no: 'incomplete'
            },
            {
                type: 'booleanAttribute',
                hook: 'action-complete',
                name: 'checked',
            }
        ],
        'model.summarizing': {
            type: 'toggle',
            hook: 'summary-section'
        }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick',
        'change [data-hook~=action-complete]': 'toggleComplete',
        'click [data-hook~=action-update-summary]': 'updateSummary',
        'click [data-hook~=action-expand]': 'showFullTaskWithSummary'
    },
    // EVENT HANDLERS
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    },
    toggleComplete: function (e) {
        if(this.model.isComplete){
            this.model.set('isComplete', false);
        }else{
            this.model.set('isComplete', true);
            this.model.set('summarizing', true);
        }
        this.model.save();

    },
    updateSummary: function(){
        this.model.set('summary', this.queryByHook('summary').value);
        this.model.save();
        this.model.set('summarizing', false);
    },
    showFullTaskWithSummary: function(){
        this.toggleSummarizationSession();
    },
    // INTERNAL FUNCTIONS
    toggleSummarizationSession: function(){
        if(this.model.summarizing){
            this.model.set('summarizing', false);
        }else{
            this.model.set('summarizing', true);
        }
    }
});
