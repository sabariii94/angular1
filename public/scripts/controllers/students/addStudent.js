app.controller('addStudentController', ['$scope', '$location', '$log', 'StudentsFactory'
    , function ($scope, $location, $log, StudentsFactory) {

        $scope.student = {
            name: '',
            marks: 0
        };

        //add student
        $scope.addStudent = function () {
            StudentsFactory.addStudent($scope.student);
            $location.path('/viewStudents');
        };

    }]);
