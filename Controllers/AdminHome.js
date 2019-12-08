import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "../Controllers/LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

    //Page Buttons

        //Add new course button event
        $(document).on("click","#addCourse",(e)=>{
            window.open("AddCourse.php","_self");
        })


    //TableRow Buttons Events
        $(document).on("click","#ViewBtn",(e)=>{
            localStorage["ViewCourse"] = $(e.target).data("trainingcourseid")
            window.open("ViewCourse.html","_self")
        })

        $(document).on("click","#EditBtn",(e)=>{
            console.log("EditBtn")
        })

        $(document).on("click","#DeleteBtn",(e)=>{
            //e.target => return html block! 
            DeleteCourse($(e.target).data("trainingcourseid"),$(e.target))
        })

    
     //enabling the tabs effect
    $('.tabs').tabs();

    //laod trainingcourses
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

    function BuildCourseBlock(trainingcourse){
        var TableRow = 
        `<tr>
            <td>${trainingcourse.ID}</td>
            <td>${trainingcourse.Number}</td>
            <td>${trainingcourse.Name}</td>
            <td>${trainingcourse.TrainerName}</td>
            <td>${trainingcourse.FeedbackCode}</td>
            <td>${(trainingcourse.StartDate).substring(0,10)}</td>
            <td>
                <button class="btn blue waves-effect waves-light" id="ViewBtn" data-trainingcourseid='${trainingcourse.ID}'>
                    <i class="material-icons" style="pointer-events: none;">visibility</i>
                </button>
            </td>
            <td>
                <button class="btn yellow waves-effect waves-light"  id="EditBtn" data-trainingcourseid='${trainingcourse.ID}'>
                    <i class="material-icons" style="pointer-events: none;">edit</i>
                </button>
            </td>
            <td>
                <button class="btn red waves-effect waves-light" id="DeleteBtn" data-trainingcourseid='${trainingcourse.ID}'>
                    <i class="material-icons"  style="pointer-events: none;">cancel</i>
                </button>
            </td>
        </tr>`
    
        return TableRow;
    }

    function DeleteCourse(trainingcourseid,CurrentBtn){
        $.ajax({
            url:`http://192.168.1.110:3000/trainingcourses/${trainingcourseid}`,
            type:"DELETE",
            success:(res)=>{
                if(res.state){
                    $(CurrentBtn).closest("tr").fadeOut(500,()=>{
                        $(CurrentBtn).closest("tr").remove();
                    })
                    // alert(res.message)
                }else{
                    alert(res.message)
                    $(CurrentBtn).parent().parent().html();
                }
                // $(row).remove(); //Remove the row containing the image element

            },
            error:(xhr,status,err)=>{
                alert(err);
            }
        })
    }

    function ViewCourse(){

    }

   
});






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
