import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addList: function(){
      // lists refers to the current array of all of the lists in the app
      var lists = this.get('model');
      var newList = this.store.createRecord('list', {
        title: 'User Added list',
        todos: []
      });
      lists.pushObject(newList);
    },
    // this deleteTodo function is passed down to the modal components
    // it deletes a todo if provided the todo and list index
    deleteTodo: function(listIdx, todoIdx) {
      this.get('model')[listIdx].todos.removeAt(todoIdx);
    }
  }
});
