import Ember from 'ember';

export default Ember.Controller.extend({
  todos: [],

  actions: {
    addTodo: function() {
      debugger
      this.set('addTodo', true);
    },
    saveTodo: function() {
      this.set('addTodo', false);
    }
  }

});
