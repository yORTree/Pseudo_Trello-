
var TaskCollectionView = Backbone.View.extend({
    render : function () {
      console.log("SOMETHING",TaskCollectionView);
   
        // this.$el.html(div + btn);
    },
    initialize : function () {
    	console.log('I AM LISTENING!');
        this.listenTo(this.collection, 'add', this.addOne);
    },
    events : {
        "click #addTask" : "addOne"
    },

    addOne : function (txt) {
    	console.log(this.collection);
        // taskModel.set("value","Enter something here...");

        var view = new TaskView({model : taskModel});
        
        this.$("#taskDescription").append(view.$el);
        view.render();
    

    // addCollection : function () {
    //     this.collection.create({id : idCount});
    //     idCount = idCount+1;
    }
});
// taskCollectionView = new TaskCollectionView({ collection : taskCollection});