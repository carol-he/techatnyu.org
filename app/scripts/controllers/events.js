'use strict';

/**
 * @ngdoc function
 * @name techatnyuorgApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the techatnyuorgApp
 */
angular.module('techatnyuorgApp')
  .controller('EventsCtrl', function ($scope, Restangular) {
  	var events;
  	var now = moment();
  	$scope.currentMonth = now.get("month");
  	$scope.currentYear = now.get("year");
   	$scope.$watch('clndr.month', function() {
   		var calMonth = $scope.clndr.month.get('month');
   		var calYear = $scope.clndr.month.get('year');
   		if (typeof calMonth !== 'undefined') {
        	$scope.currentMonth = $scope.clndr.month.get('month');
    	}
    	if (typeof calYear !== 'undefined') {
        	$scope.currentYear = $scope.clndr.month.get('year');
    	}
    });
 	function urlify(text) {
	    var urlRegex = /(https?:\/\/[^\s]+)/g;
	    return text.replace(urlRegex, function(url) {
	        return url.link(url);
	    });
	}

	function SimpleEvent(start, end, title, description, rsvpUrl) {
	 	var timeDetails = moment(start);
	  	this.date = timeDetails.format("YYYY-MM-DD");
	  	this.month = timeDetails.get("month");
	  	this.year = timeDetails.get("year");
	  	this.description = description;
	  	this.title = title;
	  	rsvpUrl ? this.rsvpUrl = rsvpUrl : this.rsvpUrl = "http://rsvp.techatnyu.org/";
	}
  	function populateCalendar() {
	 	var nutso = events;
	 	$scope.events = [];
	 	for (var i = 0; i < nutso.length; i++) {
	  		var currentAttr = nutso[i].attributes;
	  		var description = currentAttr.description;
	  		if (description) {
	  			description = urlify(currentAttr.description);
	  		}	
	  		$scope.events.push(new SimpleEvent(currentAttr.startDateTime, currentAttr.endDateTime, currentAttr.title, description, currentAttr.rsvpUrl));
		}
	}
  	Restangular.one('events/?page%5Blimit%5D=10&sort=%2bstartDateTime')
 	.get()
		.then(function(data) {
			events = data.data.filter(function(event) {
			var details = event.attributes;
			var status = details.status;
			var isInternal = details.isInternal;
			return ((!isInternal) && status !== "draft");
		 });
		populateCalendar();
	});
	$scope.showEvents = function(events) {
        //alert(events.map(function(e) { return e.title }).join("\n"));
        console.log(events);
    };
    $scope.isInCurrentMonth = function(event) {
    	if (event.month === $scope.currentMonth && event.year === $scope.currentYear) {
    		return true;
    	}
    	else {
    		return false;
    	}
    
    };
});
