var app = {};

// $(function() { //when DOM is ready...
	app.users = new UserCollection([
		{username:'Person1'},
		{username:'Person2'},
		{username:'Person3'}
	]);


var TaskModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    replace : function (str) {
      this.set("value", str);
    }
});


var TaskView = Backbone.View.extend({
	render: function (){
		var taskVal = this.model.get("value");
		var btn = '<button id="showTasks">List of Tasks</button>'
		var input = '<input type="text" value=' + taskVal + '/>';
		this.$el.html(taskVal+"<br><div>" + input +btn +"</div>");

	},

	initialize: function(){
		this.model.on("change", this.render, this);
	},
	events: {
		"click #showTasks" : "taskList"
	},
	taskList : function(){
		this.taskView.add({});
	}

   

});

var TaskCollection = Backbone.Collection.extend({
    model : TaskModel
});

var TaskCollectionView = Backbone.View.extend({
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
        var view = new TaskView({model : newModel});
        view.render();
        this.$("#taskList").append(view.$el);
    }

  })
// });


var taskCollection;
var taskCollectionView;
$(document).ready( function () {

taskCollection = new TaskCollection();
taskCollectionView = new TaskCollectionView({ collection : taskCollection});

taskCollectionView.render();

$("#app").append(taskCollectionView.$el);

});


// 	 app.tasks = new TaskCollection([
// 		// test data here
// 	]);

// 	app.gui = new GUI(app.users,
// 						app.tasks,
// 						'#app');// selector of main div
// });
