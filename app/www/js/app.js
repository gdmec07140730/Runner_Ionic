angular.module('app', ['ionic', 'app.controllers','ngAnimate', 'ui.rCalendar'])

.run(function ($ionicPlatform, $animate) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  'use strict';
  $animate.enabled(false);
})


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // //设置默认返回按钮的文字   
  // $ionicConfigProvider.backButton.previousTitleText(false).text('返回');  
  // // 设置全局 $http 超时  
  //  $httpProvider.interceptors.push('timeoutHttpIntercept');  
  // // 配置选项卡，让tab在iOS和Android都显示在底部  
  // $ionicConfigProvider.tabs.position('bottom');  
  // $ionicConfigProvider.tabs.style('standard');  
  // //让nav标题在iOS和Android上都居中显示  
  // $ionicConfigProvider.navBar.alignTitle('center');  
  // 
  $ionicConfigProvider.platform.ios.tabs.style('standard'); 
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');


  $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');


  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-back');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-back');        


  $ionicConfigProvider.platform.ios.views.transition('ios'); 
  $ionicConfigProvider.platform.android.views.transition('android');

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.sport', {
    url: '/sport',
    views: {
      'tab-sport': {
        templateUrl: 'templates/tab-sport.html',
        controller: 'SportCtrl'
      }
    }
  })

  .state('tab.calendar', {
      url: '/calendar',
      views: {
        'tab-calendar': {
          templateUrl: 'templates/tab-calendar.html',
          controller: 'CalendarCtrl'
        }
      }
    })
    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })

  .state('tab.me', {
    url: '/me',
    views: {
      'tab-me': {
        templateUrl: 'templates/tab-me.html',
        controller: 'MetCtrl'
      }
    }
  })

  .state('tab.setting', {
    url: '/setting',
    views: {
      'tab-me': {
        templateUrl: 'templates/setting.html',
        controller: 'SettingCtrl'
      }
    }
  })

  .state('tab.modify-psw', {
    url: '/modify-psw',
    views: {
      'tab-me': {
        templateUrl: 'templates/modify-psw.html',
        controller: 'ModifypswCtrl'
      }
    }
  })

  .state('tab.modify-me', {
    url: '/modify-me',
    views: {
      'tab-me': {
        templateUrl: 'templates/modify-me.html',
        controller: 'ModifymeCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  .state('map',{
    url:'/map',
    templateUrl:'templates/map.html',
    controller:'MapCtrl'
  })

  .state('walk',{
    url:'/walk',
    templateUrl:'templates/walk.html',
    controller:'WalkCtrl'
  })

   .state('over-run',{
    url:'/over-run',
    templateUrl:'templates/over-run.html',
    controller:'OverrunCtrl'
  })

    .state('stop-run',{
    url:'/stop-run',
    templateUrl:'templates/stop-run.html',
    controller:'StoprunCtrl'
  })

     .state('over-walk',{
    url:'/over-walk',
    templateUrl:'templates/over-walk.html',
    controller:'OverwalkCtrl'
  })

    .state('stop-walk',{
    url:'/stop-walk',
    templateUrl:'templates/stop-walk.html',
    controller:'StopwalkCtrl'
  })
  // .state('setting',{
  //   url:'/setting',
  //   templateUrl:'templates/setting.html',
  //   controller:'SettingCtrl'
  // })

 

  $urlRouterProvider.otherwise('/tab/sport');

});
