var app = {};

$(function() { //when DOM is ready...
	app.users = new UserCollection([
		{username:'Person1'},
		{username:'Person2'},
		{username:'Person3'}
	]);





var TextView = Backbone.View.extend({
	defaults : {"value": ""},
	replace : function(str){
		this.set("value", str);
	}
});


var TextCollectionView = Backbone.View.extend({
    render : function () {
        var btn = '<button id="addTask">Add Task</button>';
        var div = '<div id="taskList"></div>';
        this.$el.html(div + btn);
},

   initialize: function () {
   	this.listenTo(this.Collection, "add", this.addView);
   },
   events : {
   	"click #addTask" : "addModel",
   },
   addModel : function(){
   	this.Collection.add({});
   },
    addView : function (newModel) {
        newModel.set("value","Enter New Task");
        var view = new TextView({model : newModel});
        view.render();
        this.$("#taskList").append(view.$el);
    }

})
});















// 	 app.tasks = new TaskCollection([
// 		// test data here
// 	]);

// 	app.gui = new GUI(app.users,
// 						app.tasks,
// 						'#app');// selector of main div
// });
