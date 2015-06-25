$(document).ready(function () {

	var DayModel = Backbone.Model.extend({
		defaults: {"date" : 1, "day" : "", "month" : 0},
		initialize: function() {
			var calDate = new Date();
			var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

			console.log(day[calDate.getDay()]);
		}
	});

	var weekDay = new DayModel();

	var DayView = Backbone.View.extend({
		render: function () {
		var dayNum = this.model.get('date');
		var dayWeekday = this.model.get('day');
		this.$el.html(dayNum + dayWeekday);
		}
	});

	var DayCollection = Backbone.Collection.extend({
		model : DayModel
	});

	var DayCollectionView = Backbone.View.extend({
		render: function() {
			var today = new Date;
			var year = today.getDate();
			var day = today.getDay();
			var month = today.getMonth();

			function daysInMonth(month, year) {
				return new Date(year, month+1, 0).getDate();
			}
			console.log(daysInMonth(7, 2015));

			var calTable = '<table border="1" style="width: 100%""><tr><td>butts</td></tr><tr></tr><tr></tr><tr></tr><tr></tr></table>'
			this.$el.html(calTable);
		},
		initialize: function(){
			this.calArr = [];
		}
	});

	var dayCollection = new DayCollection();
	var dayCollectionView = new DayCollectionView()({

	})
})