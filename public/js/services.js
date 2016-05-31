app.factory('DataService',
	['$rootScope','$http',
	function($rootScope,$http){
		var retObj = {
			getAllItems: function(){
				$http.get('/items/api')
					 .then(function(response){
					 	$rootScope.items =  response.data;
					 });
			}
		};

		return retObj;
}]);