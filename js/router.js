define(['views/grid','collections/gridItem'], function(Grid) {

   var AppRouter = Backbone.Router.extend({
      
      routes: {
         'index': 'grid'
      },
     
      initialize: function() {
         this.views = {
            index: new Grid()
         }
      },
       
      search: function() {
         this.views.index.render();
      }

   }); 

   var router = new AppRouter;
   Backbone.history.start();

});
