import Ember from 'ember';

export default Ember.Component.extend({
    init(){
      this._super(...arguments);
      this.title = this.attrs.title.value;
      this.todos = [];
    },

    actions: {
      addTodo: function() {
        this.set(`addTodo`, true);
      },
      saveTodo: function(event) {
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
