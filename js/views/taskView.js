var TaskView = Backbone.View.extend({
  render : function(){

console.log("TASK VIEW IS RENDERING");

	// var greeting= "<h1> Greetings, "+ this.model.get('username') +" !!</h1>";
	var taskTitle = '<div id="currentTasks"><h2> The task below has been saved! </h2></div>';
	var taskItem = this.model.get('description');
	var returnBtn = '<br><br><button id="logout">Return to Homepage</button>';

	var input = '<br><div id="taskList"></div>';
	this.$el.html("<div id='taskview'>"+taskTitle +taskItem + returnBtn + input +"</div>");


	console.log('TASKS HAS BEEN ADDED!',this.el);
},

  initialize : function(){
    this.render();

  }
});
