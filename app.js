var app = {};




// $(function() { //when DOM is ready...
	app.users = new UserCollection([

		{username:'Jennifer'},
		{username:'Jason'},
		{username:'Ty'}
]);




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

taskView = new TaskView({model: taskModel});


userModel = new UserModel({title:'Make this page work!',
                           description: 'Fix all the code!',
                           creator: app.users});


// userView.render();

// userModel = new UserModel({creator: 'Jennifer'});
// userView = new UserView({el: "#app"})


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
