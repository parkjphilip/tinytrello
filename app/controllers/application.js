import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addList: function(){
      var lists = this.get('model');
      var newList = this.store.createRecord('list', {
        title: 'User Added list',
        todos: []
      });
      lists.pushObject(newList);
    },
    deleteTodo: function(listIdx, todoIdx) {
      this.get('model')[listIdx].todos.removeAt(todoIdx);
    }
  }
});
