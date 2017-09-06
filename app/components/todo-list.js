import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    init(){
      this._super(...arguments);
      this.title = this.attrs.title.value;
      this.todos = [];
    },

    actions: {
      addTodo: function() {
        this.set(`addTodo`, true);
      },
      saveTodo: function() {
          var title = this.get('newTodoTitle');
          var desc = this.get('newTodoDesc');
          var store = this.get('store');
          var newTodo = store.createRecord('todo', {
            title: title,
            description: desc
          });
          this.get('todos').pushObject(newTodo);
          this.set('newTodoTitle', '');
          this.set('newTodoDesc', '');
          this.send('cancel');
      },
      cancel: function() {
        this.set(`addTodo`, false);
      }
    }
});
