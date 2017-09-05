import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let lists = [];
    var defaultList = this.store.createRecord('list', {
      title: 'Default List'
    });
    lists.pushObject(defaultList);
    return lists;
  }

});
