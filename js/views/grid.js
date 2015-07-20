define(['require', 
    'text',
    'collections/gridItem',
    'models/gridItem',
    'views/grid',
    'views/gridItem',
    ], function (require,Text,gridItemCollection,gridItemModel,gridView,gridItemView) {

    return Backbone.View.extend({
        el: '.wrap',  
        horizontalSize: 10,
        verticalSize: 10,
        shipId:0,
        ships:[],
        grid : [],
        sunkenCount: 0,

        initialize: function () {          
           this.grid = new gridItemCollection();
            for (var i= 0; i < this.horizontalSize * this.verticalSize ; i++) {
                var item = new gridItemModel({ index:i });
                this.grid.add(item);                             
            }
            this.render();
            this.setShipCell(4,Math.floor(Math.random() * 2));
            this.setShipCell(4,Math.floor(Math.random() * 2));
            this.setShipCell(5,Math.floor(Math.random() * 2));            
        },

        render: function () {
            var that = this;
            var templatelocal = Handlebars.compile(this.template);
           
            that.$el.html();            
             this.grid.each(function(gridItem) {
                var view = new gridItemView({ model: gridItem,parent:that });                   
                that.$el.append(view.render().el);
            });            
        },

         updateScore: function(sunkenCount,ship) {
            this.sunkenCount ++
            if (this.sunkenCount < this.ships.length)
                document.querySelector('#toastSinked').show()
            var that = this;            
            if (this.ships.length === this.sunkenCount){
                  $('.wrap').toggleClass('opened');
                  $('.modal').css('z-index', '1')
            }
        },

         setShipCell: function(size, shipAlignement) { 
            var shipCells = [];
            var shipAlignement = (shipAlignement == 1) ? true: false;
            var locationX;
            var locationY;
            if (shipAlignement) {
                locationX = Math.floor(Math.random() * (this.horizontalSize - 1 - size));
                locationY = Math.floor(Math.random() * (this.verticalSize - 1));
            } else {
                locationX = Math.floor(Math.random() * (this.horizontalSize - 1));
                locationY = Math.floor(Math.random() * (this.verticalSize - 1 - size));
            }
            for (var i = 0 ; i < size ; i++) {
                var cell;
                if (shipAlignement) {

                    cell = (locationY * 10 + locationX + i);
                    if (this.validateShipCell(cell)){
                        shipCells.push(cell);
     
                    } else { 
                        this.setShipCell(size,Math.floor(Math.random() * 2))
                         return;
                    }

                } else {
                    cell= (locationY + i) * 10 + locationX;
                    if(this.validateShipCell(cell)){
                        shipCells.push(cell);
                                                
                    }else{

                        this.setShipCell(size,Math.floor(Math.random() * 2))
                        return;
                    }                                
                }            
            }
           
            if(shipCells.length === size){
                this.createShips(shipCells);
            } else {
                 this.setShipCell(size,Math.floor(Math.random() * 2))
            }           
        },

        createShips: function(shipCells){
            this.shipId ++
            var that = this;
            var ship = new gridItemCollection([], {id : this.shipId });
            $.each(shipCells,function(index, value){
                that.grid.models[value].set('ship','true');
                that.grid.models[value].set('shipId',that.shipId);
               ship.add(that.grid.models[value]);
            })
            this.ships.push(ship)        
        },
        
        validateShipCell: function(cell){
            if (this.grid.models[cell].attributes.ship === false) {
                return true;
            }  else {
                return false;
            }
        }
    });

});
