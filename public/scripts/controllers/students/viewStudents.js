app.controller('viewStudentsController', ['$scope', '$log', 'StudentsFactory'
    , function ($scope, $log, StudentsFactory) {

        $scope.students = [];

        //delete student from list
        $scope.deleteStudent = function (student) {
            StudentsFactory.deleteStudent(student);
        };

        //get students list from factory
        var getStudents = function () {
            $scope.students = StudentsFactory.getStudents();
        };

        getStudents();

    }]);
