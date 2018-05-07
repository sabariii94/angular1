app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/addStudent', {
            templateUrl: '/views/students/addStudent.html',
            controller: 'addStudentController'
        })
        .when('/viewStudents', {
            templateUrl: '/views/students/viewStudents.html',
            controller: 'viewStudentsController'
        })
        .otherwise({
            redirectTo: '/viewStudents'
        });
}]);