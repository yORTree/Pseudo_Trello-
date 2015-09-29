var UserView = Backbone.View.extend({
	render: function (){
	console.log(this.model);

	var greeting= "<h1> Hello, "+ this.model.get('username') +" !!</h1>";
	var currentTasks = '<div id="currentTasks"><h2> Here are your current tasks: </h2><br><li>Get Better At This!</li></div>';
	var createBtn = '<button id="createTask">Create New Task</button>';
	
	var logoutBtn = '<button id="logout">Logout</button>';
	var taskBtn = '<br><br><button id="addTask" type="submit" style="display: none">Add Task</button>';
    var showAll = '<br><br><button id="showAll">Show All Tasks</button>';
	var input = '<br><br><textarea type="text" id="taskDescription" style="display: none" value="Enter Task Description"></textarea>';
	this.$el.html("<div id='userview'>"+greeting+ currentTasks +createBtn +input + taskBtn + showAll + logoutBtn +"</div>");
	$('#app').append(this.el);

	console.log('user works!',this.el);

	},

	initialize: function(){
		console.log("USER VIEW INITIALIZING!!!!!", this.initialize);
		this.model.on("change", this.render, this);
	},

	events:  {
		"click #createTask" : "addDescription",
		"click #addTask" : "taskAdder",
		"click #logout" : "logoutUser"

	},
	addDescription : function(){
		$("#addTask").show();
        $("#taskDescription").show();

	},

	taskAdder : function(){
		console.log("I AM WORKING!");
		var newTaskDescription = $("#taskDescription").val();
		var model = new TaskModel({description: newTaskDescription});
		this.collection.add(model); //eventually will be 'create' once server is set up
		this.makeView(model);
		$('#taskDescription').val('');
		$('#taskDescription').hide();
        $('#addTask').hide();
	},

	makeView : function(newModel){
    var newView = new TaskView({model: newModel});
      this.$el.append(newView.$el);



	},

    logoutUser : function(){
    	$("#userview").hide();
    	$("#login-area").show();
    }

});
