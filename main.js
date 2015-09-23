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
	console.log(this.model);

	var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
	var btn = '<button id="createTasks">List of Tasks</button>';
	var input = '<input type="text" value= "Enter another task"/>';
	this.$el.html("<div  id='userview'>"+greeting+"</div>");
	$('#app').append(this.el);
	console.log('user works!',this.el);


	},

	// initialize: function(){
	// 	this.model.on("change", this.render, this);
	// },

	events: {
		"click #login" : "render"
	}
	// taskList : function(){
	// 	this.taskView.add({});
	// }



});


// ----------------------------------------------------------------
//TASKVIEW---------------------------------------------------------
// ----------------------------------------------------------------







var TaskModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    replace : function (str) {
      this.set("value", str);
    }
});



var content;
var loginView;
var userView;
var taskView;
var taskCollection;
var testModel;
var taskCollectionView;

$(document).ready( function () {
	console.log("ready");

// userModel = new UserModel({title:'Make this page work!',
//                            description: 'Fix all the code!',
//                            creator: 'Jennifer'});

loginView = new LoginView({el:"#app"});
loginView.render();


userModel = new UserModel({title:'Make this page work!',
                           description: 'Fix all the code!',
                           creator: app.users});


// userView.render();

// userModel = new UserModel({creator: 'Jennifer'});
// userView = new UserView({el: "#app"})

// taskCollection = new TaskCollection();
// taskView = new TaskView({model: testModel});
// taskCollectionView = new TaskCollectionView({ collection : taskCollection});
// taskCollectionView.render();
// taskCollection.add(testModel)

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
