var TaskCollection = Backbone.Collection.extend({
    model : TaskModel,
    initialize: function () {
    	console.log('I AM ADDED!');
       
    }
});

taskCollection = new TaskCollection();
