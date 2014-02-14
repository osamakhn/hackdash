/**
 * VIEW: Projects of an Instance
 * 
 */

var Project = require('./Project');

module.exports = Backbone.Marionette.CollectionView.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  id: "projects",
  itemView: Project,

  collectionEvents: {
    "reset": "updateIsotope"
  },

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------

  onDomRefresh: function(){
    this.updateIsotope();
  },

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

  updateIsotope: function(){
    var $projects = this.$el;
    var self = this;

    $projects.imagesLoaded(function() {
      $projects.isotope({
          itemSelector: '.project'
        , animationEngine: 'jquery'
        , resizable: true
        , masonry: { columnWidth: self.projectColumnWidth() }
        , sortAscending: true
        /*
        , getSortData : {
              'name' : function ( $elem ) {
                return $elem.data('name').toLowerCase();
              },
              'date' : function ( $elem ) {
                return $elem.data('date');
              }
          }
        , sortBy: 'name'
        */
      });
    });
  },

  projectColumnWidth: function () {
    var $projects = this.$el;

    return ($projects.width() >= 1200) ? 300
      :
      ($projects.width() === 960) ?
        $projects.width() / 3
      :
      ($projects.width() === 744) ?
        $projects.width() / 2
      :
        $projects.width();
  }

});