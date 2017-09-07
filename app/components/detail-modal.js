import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,

  init(){
    this._super(...arguments);
    this.title = this.attrs.title.value;
    this.desc = this.attrs.desc.value;
    this.listIdx = this.attrs.listIdx.value;
    this.todoIdx = this.attrs.todoIdx.value;
    this.delete = this.attrs.delete;
  },

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    delete: function() {
      let listIdx = this.attrs.listIdx;
      let todoIdx = this.attrs.todoIdx;
      this.attrs.delete(listIdx, todoIdx);
    },
    editDesc: function() {
      debugger
      this.get('desc');
    }
  }
});
