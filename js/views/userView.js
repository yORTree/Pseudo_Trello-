var UserView = Backbone.View.extend({
	render: function (){
	console.log(this.model);
    
	var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
	var currentTasks = '<div id="currentTasks"><h2> Here are your current tasks: </h2></div><div id="taskList"><ul><li><br>Get Better At This!</li></ul></div>';
	var createBtn = '<button id="createTask">Create New Task</button>';
	var showAllTasks = '<button id="showTask">Show All Tasks</button>';
	var logoutBtn = '<br><br><button id="logout">Logout</button>';
	var taskBtn = '<br><br><button id="addTask" type="submit">Add Task</button>';
	var input = '<br><textarea type="text" id="taskDescription" style="display: none" value="Enter Task Description"></textarea>';
	this.$el.html("<div id='userview'>"+greeting+ currentTasks +createBtn + input + taskBtn + showAllTasks + logoutBtn +"</div>");
	$('#app').append(this.el);

	console.log('user works!',this.el);

	},

	initialize: function(){
		console.log("USER VIEW INITIALIZING!!!!!", this.initialize);
		this.model.on("change", this.render, this);
	},

	events: {
		"click #createTask" : "addDescription",
		"click #addTask" : "taskAdder",
		"click #logout" : "logoutUser"
	
	},
	addDescription : function(){
        $("#taskDescription").show();

	},

	taskAdder : function(){
		console.log("I AM ADDING TASKS- WOOT!", this.taskAdder);
		taskView = new TaskCollection({ collection : taskCollection});
		// this.collection.create({description: taskView});
		// $('TaskCollection').append(myTasks);

	},
		

    logoutUser : function(){
    	$("#userview").hide();
    	$("#login-area").show();
    }

});