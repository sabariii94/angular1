app.factory('StudentsFactory', function () {

    var _self = this;
    //list of students
    _self.students = [
        {name: 'prasath', marks: 100},
        {name: 'mosin', marks: 90}
    ];

    return {
        addStudent: function (student) {
            _self.students.push(student);
        },
        deleteStudent: function (student) {
            var index = _self.students.indexOf(student);
            _self.students.splice(index, 1);
        },
        getStudents: function () {
            return _self.students;
        }
    };
});