import Ember from 'ember';

export default Ember.Component.extend({
    init(){
      this._super(...arguments);
      this.title = this.attrs.title.value;
      this.todos = this.attrs.todos.value;
    },

    actions: {
      addTodo: function() {
        this.set(`addTodo`, true);
      },
      saveTodo: function(idx) {
        var todo = this.get('newTodo');
        this.get('todos').pushObject(todo);
        this.set('newTodo', '');
        this.send('cancel');
      },
      cancel: function() {
        this.set(`addTodo`, false);
      }
    }
});
