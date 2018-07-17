define(function() {
   return Backbone.Model.extend({
       defaults: {
	      clicked: false,
	      ship: false
	    },
	    setClick: function() {
            this.set("clicked",true);
        }
   });
});
