define(['require', 
    'text!templates/test.hbs', 
    'collections/gridItem',
    'models/gridItem',
    'views/gridItem'], function (require,Template,ShipCollection,GridModel, Test) {

    return Backbone.View.extend({
        
        tagName: 'div',
        className : 'box',
        template: require('text!templates/test.hbs'),
        events: {
         'click .gridItem ' : 'clicked'
        },

    clicked: function(){

        if (this.model.get('clicked') === false) {
             this.model.setClick();
        } 
        if (this.model.get("ship") === false){
            $(this.el).children().addClass("shipmissed")
        }   
        else{ 
            this.shipCollection.isShipSinked(this);
            $(this.el).children().addClass("ship")
        }     
    },
       
    initialize: function () {            
        this.shipCollection = new ShipCollection();                    
        this.render();
    },

    render: function () {
       var that = this;
        var templatelocal = Handlebars.compile(this.template);
        this.$el.html(templatelocal());
        return this          
    }
         
    });

});
