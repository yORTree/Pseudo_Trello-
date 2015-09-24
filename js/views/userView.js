var UserView = Backbone.View.extend({
	render: function (){
	console.log(this.model);
    
	var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
	var currentTasks = '<div id="currentTasks"><h2> Here are your current tasks: </h2><br><ul><li>Get Better At This!</li></ul></div>';
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
		
		var newTask = $("#taskDescription").val();
		taskView = new TaskView({ collection : taskCollection});
		this.collection.add({description: newTask});
    	console.log("Number 1",myTasks);
 		console.log("Number 2", newTask);
		myTasks.push(newTask);
		console.log("Number 3", myTasks);
		$('TaskCollection').append(myTasks);

	},
		

    logoutUser : function(){
    	$("#userview").hide();
    	$("#login-area").show();
    }

});