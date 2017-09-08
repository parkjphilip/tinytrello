import Ember from 'ember';

export default Ember.Route.extend({
  // when hitting this application route, initializes the lists as an array
  // with one default list - the function returns the one element array
  model: function(){
    let lists = [];
    var defaultList = this.store.createRecord('list', {
      title: 'Default List',
      todos: []
    });
    lists.pushObject(defaultList);
    return lists;
  },
});
