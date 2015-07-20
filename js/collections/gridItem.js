define(['models/gridItem'], function(GridItem) {
   return Backbone.Collection.extend({

      model: GridItem,
      isShipSinked: function(shipCell){
      	var hints = 0;
         var sunkenCount = 0;
      	var shipId = shipCell.model.attributes.shipId;
      	var shipCollection = shipCell.options.parent.ships[shipId-1]
      	for (var i=0; i< shipCollection.length; i++){
            
      		if(shipCollection.models[i].get("clicked")=== true){
      			hints ++;             
      		}           
      	}
      	if (hints === shipCollection.length){
            shipCell.options.parent.updateScore(sunkenCount, shipCollection)
      	}
         if ( sunkenCount === shipCell.options.parent.ships.length){            
            return sunkenCount;
            
         }
      }
   });
});
