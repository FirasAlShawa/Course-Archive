import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "../Controllers/LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

     $.ajax({
         url:`http://192.168.1.110:3000/trainingcourses/${localStorage["ViewCourse"]}`,
         type:"GET",
         success:(res)=>{
            // console.log(res[0])
            SetDate(res[0])
            
         },
         error:(xhr,status,err)=>{
            console.log(err)
         }
     })

     $(document).on("click","#BackBtn",(e)=>{
        localStorage["ViewCourse"] = -1;
        window.history.back();
     })

     function SetDate(trainingcourse){
         console.log(trainingcourse)
         $("#id").text(trainingcourse.ID);
         $("#feedback").text(trainingcourse.FeedbackCode);
         $("#trainer").text(trainingcourse.TrainerName);
         $("#Name").text(trainingcourse.Name);
         $("#Number").text(trainingcourse.Number);
         $("#startdate").text((trainingcourse.StartDate).substring(0,10));
         $("#enddate").text(((trainingcourse.EndDate != null)?(trainingcourse.EndDate).substring(0,10) : "Empty" ));
      }
});