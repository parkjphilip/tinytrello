import Ember from 'ember';

export default Ember.Controller.extend({
  todos: [],
  lists: [],
  
  actions: {
    addTodo: function() {
      debugger
      this.set('addTodo', true);
    },
    saveTodo: function() {
      var todo = this.get('newTodo');
      this.get('todos').pushObject(todo);
      this.send('cancel';)
    }
    cancel: function() {
      this.set('addTodo', false);
    }
  }

});
