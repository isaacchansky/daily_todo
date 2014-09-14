/*global app, alert*/
var PageView = require('./base');
var templates = require('../templates');
var TodoForm = require('../forms/todo');


module.exports = PageView.extend({
    pageTitle: 'view todo',
    template: templates.pages.todoView,
    bindings: {
        'model.task': {
            type: 'text',
            hook: 'task'
        },
        'model.editUrl': {
            type: 'attribute',
            hook: 'edit',
            name: 'href'
        }
    },
    events: {
        'click [data-hook~=delete]': 'handleDeleteClick'
    },
    initialize: function (spec) {
        var self = this;
        app.todos.getOrFetch(spec.id, {all: true}, function (err, model) {
            if (err) alert('couldnt find a model with id: ' + spec.id);
            self.model = model;
        });
    },
    handleDeleteClick: function () {
        this.model.destroy({success: function () {
            app.navigate('collections');
        }});
    }
});
