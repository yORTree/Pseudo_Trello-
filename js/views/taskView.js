var TaskView = Backbone.View.extend({
  render : function(){

console.log("TASK VIEW IS RENDERING");
    
	// var greeting= "<h1> Greetings, "+ this.model.get('username') +" !!</h1>";
	var taskTitle = '<div id="currentTasks"><h2> The task below has been saved! </h2></div>';
	var taskItem = this.model.get('description');
	var showAll = '<br><br><button id="showAll">Show All Tasks</button>';
	var returnBtn = '<br><br><button id="userPage">Return</button>';
    
	var input = '<br><div id="taskList"><ul><li></li></ul></div>';
	this.$el.html("<div id='taskview'>"+taskTitle +taskItem + returnBtn + input + showAll+"</div>");


	console.log('TASKS HAS BEEN ADDED!',this.el);
},
  
  initialize : function(){
    this.render();

  },

  events : {
     "click button" : "returnHome"

  },

   returnHome : function(){
    	$("#taskview").hide();
    	// $("#login-area").show();
    }
});

