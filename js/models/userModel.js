	var UserModel = Backbone.Model.extend({
	    defaults : {"value" : ""},
	    replace : function (str) {
	      this.set("value", str);
	    }
	});