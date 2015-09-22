var app = {};

// $(function() { //when DOM is ready...
	app.users = new UserCollection([

		{username:'Jennifer'},
		{username:'Jason'},
		{username:'Ty'}
	]);


var LoginModel = Backbone.Model.extend({
	// // defaults : {"username" : ""},
	// replace : function(usr){
	// this.set("username", usr);
	// }
});



var LoginView = Backbone.View.extend({
	render : function (){
		console.log("render login");
		var login = '<button id="login" type="submit">Login</button>';
		var usrBtn = '<button id="newName">Add Name</button>';
		var input = '<input type="text" id="userField" value="Add New User Name">';
		var selector = this.userSelector();
		this.$el.html("<br><div>" +selector +login+ input +usrBtn+"</div>");
		// this.el.append(this.$el);
	},
    userSelector: function(){
		var users = [];
		var content = "";
		
		for (var i = 0;i < app.users.length; i++){ 	
			users.push(app.users.models[i].attributes.username);
			content+=("<option>"+users[i]+"</option>");
	      	
      	}
		content = "<select id='selectDropdown'>"+content+"</select>";
		return content;
	},

	addNewUser: function(){
		var newUser = $("#userField").val();
		app.users.add({username: newUser});
		this.render();
	},

	// initialize: function(){
 //       this.model.on("change", this.render, this);
	// 	// console.log("init login")
	// 	// this.once("change", this.render, this);
	// },
	events: {
		"click #login" 		: "userLogin",
		"click #newName"	: "addNewUser"
	},
	
	userLogin : function(){
		taskView.render();
	}

});


var TaskModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    replace : function (str) {
      this.set("value", str);
    }
});


var TaskView = Backbone.View.extend({
	render: function (){
		var taskVal = this.model.get("value");
		var btn = '<button id="showTasks">List of Tasks</button>';
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

  });
// });

var loginView;
var taskCollection;
var taskCollectionView;
$(document).ready( function () {
	console.log("ready");

loginView = new LoginView({el:"#app"});
taskCollection = new TaskCollection();
taskCollectionView = new TaskCollectionView({ collection : taskCollection});

loginView.render();
// taskCollectionView.render();

$("#app").append(taskCollectionView.$el);

});



// 	 app.tasks = new TaskCollection([
// 		// test data here
// 	]);

// 	app.gui = new GUI(app.users,
// 						app.tasks,
// 						'#app');// selector of main div
// });
