import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addList: function(){
      var lists = this.get('model');
      var newList = this.store.createRecord('list', {
        title: 'User Added list'
      });
      lists.pushObject(newList);
    }
  }
});
