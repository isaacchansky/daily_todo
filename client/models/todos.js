var Collection = require('ampersand-rest-collection');
var Todo = require('./todo');


module.exports = Collection.extend({
    model: Todo,
    url: '/api/todos'
});
