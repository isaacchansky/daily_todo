/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var InfoPage = require('./pages/info');
var TodoAddPage = require('./pages/todo-add');
var TodoEditPage = require('./pages/todo-edit');
var TodoViewPage = require('./pages/todo-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'info': 'info',
        'todo/add': 'todoAdd',
        'todo/:id': 'todoView',
        'todo/:id/edit': 'todoEdit',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomePage({
            model: me,
            collection: app.todos
        }));
    },

    info: function () {
        this.trigger('page', new InfoPage({
            model: me
        }));
    },

    todoAdd: function () {
        console.log('hi');
        this.trigger('page', new TodoAddPage());
    },

    todoEdit: function (id) {
        this.trigger('page', new TodoEditPage({
            id: id
        }));
    },

    todoView: function (id) {
        this.trigger('page', new TodoViewPage({
            id: id
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
