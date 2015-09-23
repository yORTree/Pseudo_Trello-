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
		var input = '<br><input type="text" id="userField" value="Add New User Name">';
		var headline = '<h1 class="main-heading">To Do List</h1>';
		var headline2 = '<h2>Please log in.</h2>';
		var nametag = "<p class='nametag'>name:</p>";
		var selector = this.userSelector();
		this.$el.html("<br><div id='login-area'>" + headline + headline2 + nametag + selector + login + input + usrBtn + "</div>");
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
		loginView.remove();
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
		console.log('rendering task view');
		var taskVal = this.model.get("title");
		var btn = '<button id="showTasks">List of Tasks</button>';
		var input = '<input type="text" value= "Enter another task"/>';
		this.$el.html("<br><div>"+taskVal+"</div>");
		console.log('it works!');

	},
   
	initialize: function(){
		this.model.on("change", this.render, this);
	},
	events: {
		"click #login" : "render"
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
    	console.log('Rendering!');
        var btn = '<button id="addTask">Add Task</button>';
        var div = '<div id="taskList"></div>';
        this.$el.html(div + btn);
},

   initialize: function () {
   	console.log('BLAH!');
   	this.listenTo(this.collection, "add", this.addView);
   },
   events : {
   	"click #addTask" : "addModel",
   },
   addModel : function(){
   	this.collection.add({});
   },
    addView : function (newModel) {
    	console.log('New Model');
        // newModel.set("value","Enter New Task");
        var view = new TaskView({model : newModel});
        view.render();
        this.$("#taskList").append(view.$el);
    }

  });
// });

var loginView;
var taskView;
var taskCollection;
var testModel;
var taskCollectionView;
$(document).ready( function () {
	console.log("ready");

testModel = new TaskModel({title:'Make this page work!',
                           description: 'Fix all the code!',
                           creator: 'Jennifer'});

loginView = new LoginView({el:"#app"});
loginView.render();
taskCollection = new TaskCollection();
// taskView = new TaskView({model: testModel});
taskCollectionView = new TaskCollectionView({ collection : taskCollection});
taskCollectionView.render();
taskCollection.add(testModel)

// taskView.render();


$("#app").append(taskCollectionView.$el);

});



// 	 app.tasks = new TaskCollection([
// 		// test data here
// 	]);

// 	app.gui = new GUI(app.users,
// 						app.tasks,
// 						'#app');// selector of main div
// });
