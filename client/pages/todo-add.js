/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var TodoForm = require('../forms/todo');


module.exports = PageView.extend({
    pageTitle: 'add todo',
    template: templates.pages.todoAdd,
    subviews: {
        form: {
            container: 'form',
            prepareView: function (el) {
                return new TodoForm({
                    el: el,
                    submitCallback: function (data) {
                        app.todos.create(data, {
                            wait: true,
                            success: function () {
                                app.navigate('/');
                                app.todos.fetch();
                            }
                        });
                    }
                });
            }
        }
    }
});
