(function () {
    'use strict';

angular.module('mainApp', [
        // Angular modules 

        // Custom modules 

        // 3rd Party Modules
       
    ])

.config([function () {  
        console.log("Configuration hook")
    }])

.run([function () {

    console.log("Run hook")

}])

.service('GlobalStuff', [function () {

    var that = this;
    that.globalModelName = {};

    this.setGlobalModel = function (modelName) {
        if (modelName!=undefined)
        {
            that.globalModelName = modelName;
        }   
    }
 
}])

.service('ApiService', ['GlobalStuff','$http', function (GlobalStuff,$http) {

    var that = this;
    that.modelData = {};

    this.getModelNames = function () {
        console.log("getModelNames function");
        return $http.get('api/DynamicModels');
    }

    this.getAll = function (modelName) {
        GlobalStuff.setGlobalModel(modelName)
        return $http.get('api/' + GlobalStuff.globalModelName);
    }

    this.getOne = function (modelID) {
        return $http.get('api/' + GlobalStuff.globalModelName + '/' + modelID);
    }

    this.create = function (modelObject) {
        return $http.post('api/' + GlobalStuff.globalModelName, modelObject);
        
    }

    this.update = function (modelID, modelObject) {
        return $http.put('api/' + GlobalStuff.globalModelName + '/' + modelID, modelObject);
        
    }

    this.delete = function (modelID) {
        return $http.delete('api/' + GlobalStuff.globalModelName + '/' + modelID);
    }

}])

.controller('MainCtrl', ['GlobalStuff','ApiService', '$scope','$interpolate', '$http','$sce', function (GlobalStuff,ApiService, $scope, $interpolate, $http, $sce) {

	this.showCreateAlert = false;
    var scope = this;
    scope.modelData = {};
    scope.HeaderColumnName = {};
    scope.PrimaryKeyName = {};
    scope.crazyHTMLArray = [];
    scope.badHTML;
    
    this.DynamicTrial = function () {

    	if(GlobalStuff.globalModelName=="Students")
    		{
    		scope.sample = {
    	            "primaryKey": "studentID",
    	            "headerColumn": "firstMidName",
    	            "columns":
    	                [
    	                 {
    	                     "columnName" : "firstMidName",
    	                     "data" :{
    	                             "inputType": "text",
    	                             "required": "true",
    	                             "placeholder": "Enter First Name"
    	                         }
    	                 },
    	                 {
    	                     "columnName" : "lastName",
    	                     "data" :{
    	                             "inputType": "text",
    	                             "required": "true",
    	                             "placeholder": "Enter Last Name"
    	                         }
    	                 },
    	                 {
    	                     "columnName": "enrollmentDate",
    	                     "data" :{
    	                             "inputType": "date",
    	                             "required": "true",
    	                         }
    	                 }
    	                ]
    	        };//end of scope.sample

    		}//end if student
    	
    	else /*if(GlobalStuff.globalModelName=="Courses")*/
    		{
    		scope.sample = {
    	            "primaryKey": "courseID",
    	            "headerColumn": "courseName",
    	            "columns":
    	                [
    	                 {
    	                     "columnName" : "courseName",
    	                     "data" :{
    	                             "inputType": "text",
    	                             "required": "true",
    	                             "placeholder": "Enter Course Name"
    	                         }
    	                 },
    	                 {
    	                     "columnName" : "courseDept",
    	                     "data" :{
    	                             "inputType": "text",
    	                             "required": "true",
    	                             "placeholder": "Enter Course Dept"
    	                         }
    	                 }
    	                ]
    	        };//end of scope.sample
    		}
        
        scope.HeaderColumnName = scope.sample.headerColumn;
        scope.PrimaryKeyName = scope.sample.primaryKey;

    }
    
  //bind html eg
    this.bindSomeCrazyHTML = function () {

        angular.forEach(scope.modelData, function (value, key) {
            var oneModelObject = value;
            value.modelPk = value[scope.PrimaryKeyName];
            value.modelHeader = value[scope.HeaderColumnName];
            console.log(value.modelPk);
            //scope.examplePk = $sce.trustAsHtml(scope.PrimaryKeyName + ' : ' + oneModelObject[scope.PrimaryKeyName].toString());
            //scope.exampleHeaderColumn = $sce.trustAsHtml(oneModelObject[scope.HeaderColumnName].toString());
            //scope.crazyHTML = '<div class="panel-heading">' + exampleHeaderColumn + '</div>\
            //<div class="panel-body">' + PrimaryKeyName + ' :' + examplePk + '</div>';
            //scope.crazyHTMLArray.push[$sce.trustAsHtml(crazyHTML)];
            //scope.badHTML = $sce.trustAsHtml(crazyHTML);
            //console.log(scope.badHTML);
            console.log(scope.examplePk+scope.exampleHeaderColumn);
        })

    };
    
    this.resetFlag = function () {
        this.showCreateAlert = false;
    }
    
  //getAll
    this.loadGrid = function (modelName) {

        this.DynamicTrial();
        console.log("Load Grid");
        //globalModelName = modelName;
        var getAllPromise=ApiService.getAll(modelName);
        getAllPromise.then(
        function successCallback(response) {
            scope.modelData = response.data;
            scope.bindSomeCrazyHTML();
            //scope.HeaderColumn = scope.modelData[scope.HeaderColumnName];
            //scope.PrimaryKey=scope.modelData[PrimaryKeyName];
            console.log(scope.modelData);
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
    };
    
  //getSingle
    this.getStudent = function (modelID) {

        scope.newModel = {};
        var getOnePromise=ApiService.getOne(modelID);
        getOnePromise.then(
        function successCallback(response) {
            scope.model = response.data;
            scope.HeaderColumn = scope.model[scope.HeaderColumnName];
            scope.PrimaryKey=scope.model[scope.PrimaryKeyName];
            if(GlobalStuff.globalModelName=="Students")
            	{
	            	scope.model.enrollmentDate = new Date(scope.model['enrollmentDate']);
	                console.log(scope.model.EnrollmentDate);
            	}
            console.log(scope.model);
            console.log(scope.sample.columns);
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
        

    };
    
  //Create
    this.createStudent = function (modelObject) {

        console.log(modelObject);
        var createPromise=ApiService.create(modelObject);
        createPromise.then(
        function successCallback() {
            console.log("Created");
            scope.showCreateAlert = true;
            scope.loadGrid(GlobalStuff.globalModelName);  
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
        

    };
    
  //Update
    this.editStudent = function (modelID, modelObject) {

        var updatePromise=ApiService.update(modelID,modelObject);
        updatePromise.then(
        function successCallback() {
            console.log("Updated");
            scope.showCreateAlert = true;
            scope.loadGrid(GlobalStuff.globalModelName);
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
        scope.showCreateAlert = true;
    }
    
  //Delete
    this.deleteStudent = function (modelID) {

        var deletePromise=ApiService.delete(modelID);
        deletePromise.then(
        function successCallback(response) {
            console.log("Deleted");
            scope.showCreateAlert = true;
            scope.loadGrid(GlobalStuff.globalModelName);
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
        
    };
    
  //Get model names for sidebar
    this.getModelNames = function () {

        console.log("Get Model Names");
        var getModelNamesPromise=ApiService.getModelNames();
        getModelNamesPromise.then(
        function successCallback(response) {
            scope.ContollerModels = response.data;
            console.log(scope.ContollerModels);
        },
        function errorCallback(response) {
            console.log(response.status + response.statusText);
        })
    };
    
}])


})();

/*.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {

    this.showCreateAlert = false;
    var scope = this;
    var globalModelName;

    this.resetFlag = function () {
        this.showCreateAlert = false;
    }

    //getAll
    this.loadGrid = function (modelName) {
        globalModelName = modelName;
        $http.get('api/' + globalModelName,{cache:false})
            .success(function (data) {
              scope.students = data;
              console.log(data);
          });
    }

    //getSingle
    this.getStudent = function (studentID) {
        $http.get('api/Students/' + studentID)
        .success(function (data) {
            scope.student = data;
            scope.student.enrollmentDate = new Date(data['enrollmentDate']);
            console.log(scope.student.EnrollmentDate);
            console.log(data);
        })

    }

    //Create
    this.createStudent = function (student) {
        $http.post('api/Students', student)
        .success(function () {
            console.log("Created");
            scope.loadGrid(globalModelName);
            scope.showCreateAlert = true;
        })
    }

    //Update
    this.editStudent = function (studentID,student) {
        $http.put('api/Students/' + studentID, student)
        .success(function () {
            console.log("Updated");
            scope.loadGrid(globalModelName);
            scope.showCreateAlert = true;
        })
    }

    //Delete
    this.deleteStudent = function (studentID) {
        $http.delete('api/Students/' + studentID)
        .success(function (data){
            console.log(data);
            scope.loadGrid(globalModelName);
            scope.showCreateAlert = true;
        }
         
        )
    }

    //Get model names for sidebar
    this.getModelNames = function () {
        console.log("Here");
        $http.get('api/DynamicModels')
        .success(function (data) {
            console.log(data);
            scope.ContollerModels = data;
        })
    }

}])*/