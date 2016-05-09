angular.module('app.controllers', [])

.controller('SportCtrl', function ($scope) {

})

.controller('CalendarCtrl', function ($scope) {
	'use strict';
    $scope.calendar = {};
    $scope.changeMode = function (mode) {
        $scope.calendar.mode = mode;
    };

    $scope.loadEvents = function () {
        $scope.calendar.eventSource = createRandomEvents();
    };

    $scope.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };

    $scope.onViewTitleChanged = function (title) {
        $scope.viewTitle = title;
    };

    $scope.today = function () {
        $scope.calendar.currentDate = new Date();
    };

    $scope.isToday = function () {
        var today = new Date(),
            currentCalendarDate = new Date($scope.calendar.currentDate);

        today.setHours(0, 0, 0, 0);
        currentCalendarDate.setHours(0, 0, 0, 0);
        return today.getTime() === currentCalendarDate.getTime();
    };

    $scope.onTimeSelected = function (selectedTime) {
        console.log('Selected time: ' + selectedTime);
    };

    function createRandomEvents() {
        var events = [];
        for (var i = 0; i < 20; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
})

.controller('MetCtrl', function ($scope) {
        
})

.controller('SettingCtrl',function($scope){
	$scope.items=[
		{text:"自动计步"},
	];
})

.controller('ModifypswCtrl', function ($scope) {
        
})

.controller('ModifymeCtrl', function ($scope) {
        
})

.controller('LoginCtrl', function ($scope) {
        
})

.controller('RegisterCtrl', function ($scope) {
        
})

.controller('MapCtrl',function ($scope){
    
})

.controller('WalkCtrl',function ($scope){
    
})

.controller('OverrunCtrl',function ($scope){
    
})

.controller('StoprunCtrl',function ($scope){
    
})

.controller('OverwalkCtrl',function ($scope){
    
})

.controller('StopwalkCtrl',function ($scope){
    
})

.controller('MeCtrl',function ($scope){

})

.controller('TutorialCtrl', function($scope, $state, $ionicViewService) {

  //window.localStorage['didTutorial'] = false;// For Test

  var startApp = function() {
    //$ionicViewService.clearHistory();
    $state.go('me');
    //window.localStorage['didTutorial'] = true;
  };
/*
  if(window.localStorage['didTutorial'] === "true") {
    console.log('Skip intro');
    // 向导页面只显示一次
    startApp();
  } else {
    setTimeout(function () {
      navigator.splashscreen.hide();
    }, 750);
  }
*/
  // "立即体验"按钮Event
  $scope.gotoMain = function() {
    startApp();
  }

 // $scope.slideHasChanged = function(index) {
 // };
})
