import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,

  init(){
    this._super(...arguments);
    this.title = this.attrs.title.value;
    this.desc = this.attrs.desc.value;
  },

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
