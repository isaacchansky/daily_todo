var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
    template: templates.includes.formInput()
});

module.exports = FormView.extend({
    fields: function () {
        return [
            new ExtendedInput({
                label: 'Task',
                name: 'task',
                value: this.model && this.model.task,
                placeholder: 'I need to ...',
                parent: this
            })
        ];
    }
});
