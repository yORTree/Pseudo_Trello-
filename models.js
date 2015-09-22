var UserModel = Backbone.Model.extend({
	defaults: {
		username:'Jennifer',
		username:'Ty',
		username:'Jason',
	}
})

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
