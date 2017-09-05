import Ember from 'ember';

// var defaultList = this.store.createRecord('list', {
//   title: 'Default List'
// });



export default Ember.Controller.extend({

  lists: [
    {
      title: 'Default List',
      todos: []
    },
    {
      title: 'Default List1',
      todos: []
    },
    {
      title: 'Default List2',
      todos: []
    },
  ],


  actions: {
    addTodo: function(idx) {
      debugger
      this.set(`addTodo${idx}`, true);
      this.rerender();
      debugger
    },
    saveTodo: function(idx) {
      var todo = this.get('newTodo');
      debugger
      this.get('lists')[idx].todos.push(todo);
      this.send('cancel');
    },
    cancel: function() {
      this.set(`addTodo${idx}`, false);
    }
  }

});
