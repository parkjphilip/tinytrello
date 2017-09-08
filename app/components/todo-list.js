import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    init(){
      this._super(...arguments);
      this.title = this.attrs.title.value;
      this.todos = this.attrs.todoList.todos;
    },

    actions: {
      addTodo: function() {
        this.set(`addTodo`, true);
      },
      // create a new task with the inputted title, initializing it with an
      // empty string for description - push it to the current list's todos
      saveTodo: function() {
          var title = this.get('newTodoTitle');
          var newTodo = this.get('store').createRecord('todo', {
            title: title,
            desc: ""
          });
          this.get('todos').pushObject(newTodo);
          this.set('newTodoTitle', '');
          this.send('cancel');
      },
      cancel: function() {
        this.set(`addTodo`, false);
      },
      toggleModal: function() {
        this.toggleProperty('isShowingModal');
      }
    }
});
