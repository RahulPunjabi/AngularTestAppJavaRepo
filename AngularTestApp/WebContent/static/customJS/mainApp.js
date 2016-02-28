
    
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
.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {

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

}])