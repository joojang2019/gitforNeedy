angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.borrow', {
    url: '/borrow',
    views: {
      'tab1': {
        templateUrl: 'templates/borrow.html',
        controller: 'borrowCtrl'
      }
    }
  })

  .state('tabsController.myItem', {
    url: '/item',
    views: {
      'tab2': {
        templateUrl: 'templates/myItem.html',
        controller: 'myItemCtrl'
      }
    }
  })

  .state('tabsController.lend', {
    url: '/lend',
    views: {
      'tab3': {
        templateUrl: 'templates/lend.html',
        controller: 'lendCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.connect'
      2) Using $state.go programatically:
        $state.go('tabsController.connect');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /tabs/tab1/page7
      /tabs/tab3/page7
  */
  .state('tabsController.connect', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/connect.html',
        controller: 'connectCtrl'
      },
      'tab3': {
        templateUrl: 'templates/connect.html',
        controller: 'connectCtrl'
      }
    }
  })

  .state('tabsController.itemList', {
    url: '/itemlist',
    views: {
      'tab1': {
        templateUrl: 'templates/itemList.html',
        controller: 'itemListCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});