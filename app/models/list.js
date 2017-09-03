import DS from 'ember-data';

export default DS.Model.extend({
  todos: DS.hasMany('todo')
});
