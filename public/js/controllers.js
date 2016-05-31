app.controller('ListItems',['$scope','DataService', 
	function($scope,DataService){
		 DataService.getAllItems();
}]);