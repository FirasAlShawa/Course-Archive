import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "../Controllers/LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

     //Add new course button event
     $(document).on("click","#addCourse",(e)=>{
        window.open("AddCourse.php","_self");
     })
    
     //enabling the tabs effect
    $('.tabs').tabs();


    $.ajax({
        type:"GET",
        url:"http://192.168.1.110:3000/trainingcourses/",
        success:(res)=>{
            res.map((row)=>{
                $(BuildCourseBlock(row)).appendTo("#CoursesTable");
            })
        },
        error:(xhr,status,err)=>{
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });

});

function BuildCourseBlock(trainingcourse){
    var TableRow = 
    `<tr>
        <td>${trainingcourse.ID}</td>
        <td>${trainingcourse.Number}</td>
        <td>${trainingcourse.Name}</td>
        <td>${trainingcourse.TrainerName}</td>
        <td>${trainingcourse.FeedbackCode}</td>
        <td>${trainingcourse.StartDate}</td>
        <td>
            <button class="btn blue waves-effect waves-light">
                <i class="material-icons">visibility</i>
            </button>
        </td>
        <td>
            <button class="btn yellow waves-effect waves-light">
                <i class="material-icons">edit</i>
            </button>
        </td>
        <td>
            <button class="btn red waves-effect waves-light">
                <i class="material-icons">cancel</i>
            </button>
        </td>
    </tr>`

    return TableRow;
}


{/*
    API Response:
        "ID": 1,
        "FeedbackCode": 123,
        "Number": 78547,
        "Name": "java",
        "TrainerName": "Firas",
        "StartDate": "2019-12-07T21:00:00.000Z",
        "EndDate": null,
        "Internal": 0   
    
<th>ID</th>
<th>Course Number</th>
<th>Course Name</th>
<th>Trainer</th>
<th>FeedbackCode</th>
<th>Start Date</th>
<td><button class="btn blue waves-effect waves-light"><i
class="material-icons">visibility</i></button></td>
<td><button class="btn yellow waves-effect waves-light"><i
class="material-icons">edit</i></button></td>
<td><button class="btn red waves-effect waves-light"><i
class="material-icons">cancel</i></button></td>
*/}
