var PageView = require('./base');
var templates = require('../templates');
var TodoView = require('../views/todo');


module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates.pages.home,
    events: {
      'click [data-hook~=add]': 'addRandom'
    },
    render: function(){
      this.renderWithTemplate();
      this.renderCollection(this.collection, TodoView, this.queryByHook('todos-list'));
      if(!this.collection.length){
        this.fetchCollection();
      }
    },
    fetchCollection: function(){
      this.collection.fetch();
      return false;
    }
});
