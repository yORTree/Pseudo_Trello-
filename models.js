var UserModel = Backbone.Model.extend({
	defaults: {
		username:'Jennifer',
		username:'Ty',
		username:'Jason',
	}
})

// var TextView = Backbone.View.extend({
// 	defaults : {"value": ""},
// 	replace : function(str){
// 		this.set("value", str);
// 	}
// });

// // var TextView = Backbone.View.extend({
// // 	render: function() {
// // 	},

// //     initialize: function () {
// //         this.model.on("change", this.render, this);
// //         // last argument 'this' ensures that render's
// //         // 'this' means the view, not the model
// //     },

// //    events : {
// //     // "click #addTask" : "addTask",
 

// // },
// // addTask : function () {
// //     var str = this.$el.find("input").val();
// //     this.model.replace(str);
// //   }
// // });  



// var TextCollectionView = Backbone.View.extend({
//     render : function () {
//         var btn = '<button id="addTask">Add Task</button>';
//         var div = '<div id="taskList"></div>';
//         this.$el.html(div + btn);
// },

//    initialize: function () {
//    	this.listenTo(this.Collection, "add", this.addView);
//    },
//    events : {
//    	"click #addTask" : "addModel",
//    },
//    addModel : function(){
//    	this.Collection.add({});
//    },
//     addView : function (newModel) {
//         newModel.set("value","Enter New Task");
//         var view = new TextView({model : newModel});
//         view.render();
//         this.$("#taskList").append(view.$el);
//     }

// });















var IssueModel = Backbone.Model.extend({
	defaults: {
		title:'',
		description:'',
		creator:'',
		assignee:'',
		status:'unassigned',
	}
	// Add methods if needed...
})

var UserCollection = Backbone.Collection.extend({
	model:UserModel
})

var IssueCollection = Backbone.Collection.extend({
	model:IssueModel
})
