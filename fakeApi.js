var _ = require('underscore');

var todos = [
    {
        id: 1,
        task: 'pick up milk',
        summary: '',
        isComplete: false
    },
    {
        id: 2,
        task: 'write code',
        summary: '',
        isComplete: false
    },
    {
        id: 3,
        task: 'work out',
        summary: '',
        isComplete: false
    },
    {
        id: 4,
        task: 'do laundry',
        summary: '',
        isComplete: false
    }
];
var id = 7;

function get(id) {
    return _.findWhere(todos, {id: parseInt(id + '', 10)});
}

exports.name = 'fake_api';
exports.version = '0.0.0';
exports.register = function (plugin, options, next) {
    plugin.route({
        method: 'GET',
        path: '/api/todos',
        handler: function (request, reply) {
            reply(todos);
        }
    });

    plugin.route({
        method: 'POST',
        path: '/api/todos',
        handler: function (request, reply) {
            var todo = request.payload;
            todo.id = id++;
            todos.push(todo);
            reply(todo).code(201);
        }
    });

    plugin.route({
        method: 'GET',
        path: '/api/todos/{id}',
        handler: function (request, reply) {
            var found = get(request.params.id);
            reply(found).code(found ? 200 : 404);
        }
    });

    plugin.route({
        method: 'DELETE',
        path: '/api/todos/{id}',
        handler: function (request, reply) {
            var found = get(request.params.id);
            if (found) todos = _.without(todos, found);
            reply(found).code(found ? 200 : 404);
        }
    });

    plugin.route({
        method: 'PUT',
        path: '/api/todos/{id}',
        handler: function (request, reply) {
            var found = get(request.params.id);
            if (found) _.extend(found, request.payload);
            reply(found).code(found ? 200 : 404);
        }
    });

    next();
};
