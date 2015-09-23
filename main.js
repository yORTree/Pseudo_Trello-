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

//LOGIN VIEW---------------------------------------------------------



var LoginView = Backbone.View.extend({
	render : function (){
		console.log("render login");
		var login = '<button id="login" type="submit">Login</button>';
		var usrBtn = '<button id="newName">Add Name</button>';
		var input = '<br><input type="text" id="userField" placeholder="Add New User Name">';
		var headline = '<h1 class="main-heading">To Do List</h1>';
		var headline2 = '<h2>Please log in.</h2>';
		var nametag = "<p class='nametag'>name:</p>";
		var selector = this.userSelector();
		this.$el.html("<br><div id='login-area'>" + headline + headline2 + nametag + selector + login + input + usrBtn + "</div>");
		// this.el.append(this.$el);
	},
    userSelector: function(){
		var users = [];
		content = "";

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

	events: {
		"click #login" 		: "userLogin",
		"click #newName"	: "addNewUser"
	},


	userLogin : function(){
		$("#login-area").hide();
		var selectedUser = $("#selectDropdown").val();
		var userModel = app.users.where({username: selectedUser})[0];
		 console.log(userModel);
		userView = new UserView({model: userModel});
		userView.render();
		//this.model.get(username)
		}

 });

	var UserModel = Backbone.Model.extend({
	    defaults : {"value" : ""},
	    replace : function (str) {
	      this.set("value", str);
	    }
	});

// ----------------------------------------------------------------
//USERVIEW---------------------------------------------------------
// ----------------------------------------------------------------


var UserView = Backbone.View.extend({
	render: function (){
	var myTasks = [];
	console.log(this.model);
    
	var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
	var currentTasks = "<div id='currentTasks'><h2> Here are your current tasks: "+ myTasks + "</h2></div>"
	var createBtn = '<button id="createTask">Create New Task</button>';
	var logoutBtn = '<br><br><button id="logout">Logout</button>';
	var taskBtn = '<br><br><button id="addTask" type="submit">Add Task</button>';
	var input = '<br><textarea type="text" id="taskDescription" style="display: none" value="Enter Task Description"></textarea>';
	this.$el.html("<div id='userview'>"+greeting+ currentTasks +createBtn + input + taskBtn + logoutBtn +"</div>");
	$('#app').append(this.el);

	console.log('user works!',this.el);

	},

	initialize: function(){
		this.model.on("change", this.render, this);
	},

	events: {
		"click #createTask" : "addDescription",
		"click #addTask" : "taskAdder",
		"click #logout" : "logoutUser",
	
	},
	addDescription : function(){
        $("#taskDescription").show();
		// this.taskView.add({});
	},

	// taskAdder : function(){
 //    	enteredTasks = "<select id='selectDropdown'>"+myTasks+"</select>";
	// 	return content;
	// },








		// taskCollectionView = new TaskCollectionView({ collection : taskCollection});
      // taskView = new TaskView({model: taskModel});


    logoutUser : function(){
    	$("#userview").hide();
    	$("#login-area").show();
    }

});




var TaskModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    replace : function (str) {
      this.set("value", str);
    }
});

var TaskCollection = Backbone.Collection.extend({
    model : TaskModel,
    initialize: function () {
       
    }
});


var TaskCollectionView = Backbone.View.extend({
    render : function () {
        var btn = '<button id="addbutton">Add Text</button>';
        var div = '<div id="text-list"></div>';
        this.$el.html(div + btn);
    },
    initialize : function () {
        this.listenTo(this.collection, 'add', this.addOne);
    },
    events : {
        "click #addbutton" : "addCollection"
    },

    addOne : function (txt) {
        txt.set("value","Enter something here...");
        var view = new TaskView({model : txt});
        view.render();
        this.$("#taskDescription").append(view.$el);
    }
    // addCollection : function () {
    //     this.collection.create({id : idCount});
    //     idCount = idCount+1;
    // }
});

var content;
var loginView;
var userView;
var taskView;
var taskCollection;
var taskModel;
var taskCollectionView;

$(document).ready( function () {
	console.log("ready");
                        

loginView = new LoginView({el:"#app"});
loginView.render();


userModel = new UserModel({title:'Make this page work!',
                           description: 'Fix all the code!',
                           creator: app.users});


// userView.render();

// userModel = new UserModel({creator: 'Jennifer'});
// userView = new UserView({el: "#app"})

taskCollection = new TaskCollection();
taskCollectionView = new TaskCollectionView({ collection : taskCollection});
taskCollectionView.render();
taskCollection.add(taskModel)

// taskView.render();


// $("#app").append(userView.$el);

});



// 	 app.tasks = new TaskCollection([
// 		// test data here
// 	]);

// 	app.gui = new GUI(app.users,
// 						app.tasks,
// 						'#app');// selector of main div
// });
