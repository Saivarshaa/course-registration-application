function showCourses(){
fetch("http://localhost:8080/courses") //API END POINT 
.then((response)=>response.json())
.then( (courses) => {
    const dataTable = document.getElementById("coursetable")
    courses.forEach(course => {
        var row = `<tr>
        <td>${course.courseId}</td>
        <td>${course.courseName}</td>
        <td>${course.trainer}</td>
        <td>${course.durationInWeeks}</td>
        </tr>`

        dataTable.innerHTML+=row;
    });
});
}

function showStudents(){
    fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((students)=>{
        const studentTable = document.getElementById("studentTable")
        students.forEach(student => {
            var row =`<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`

            studentTable.innerHTML+=row;
        });
    });
}