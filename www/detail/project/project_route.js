/*项目经验路由*/
angular.module("project.route",[
'project.controller',
'project.service'
])
.config(['$stateProvider',function($stateProvider){
	$stateProvider.state("tab.project",{
		url:'/project',
		views:{
			'tab-project':{
				templateUrl:'detail/project/project.html',
				controller:'ProjectController'
			}
		}
	})
	}]);
