import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "./LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

     $('select').formSelect();
     $.ajax({
         url:`http://192.168.1.110:3000/trainingcourses/${localStorage["EditCourse"]}`,
         type:"GET",
         success:(res)=>{
            console.log(res[0])
            SetData(res[0])
            
         },
         error:(xhr,status,err)=>{
            console.log(err)
         }
     })

     $(document).on("click","#BackBtn",(e)=>{
        localStorage["ViewCourse"] = -1;
        window.history.back();
     })

     $("#EditForm").submit((e)=>{
      e.preventDefault();
      var trainingcourse = GetData()
      $.ajax({
           url : `http://192.168.1.110:3000/trainingcourses/${localStorage["EditCourse"]}`,
           type:"PUT",
           contentType:"application/x-www-form-urlencoded",
           data : {data :trainingcourse},
           success:(res)=>{
            console.log(res)
           },
           error:(xhr,status,err)=>{
            console.log(err)
           }
        })
     })
   //   $(document).on("submit","#UpdateBtn",(e)=>{
     
   //   })

     function SetData(trainingcourse){
         console.log(trainingcourse)
         $("#id").val(trainingcourse.ID);
         $("#feedback").val(trainingcourse.FeedbackCode);
         $("#trainer").val(trainingcourse.TrainerName);
         $("#Internal").prop("checked",trainingcourse.Internal)
         $("#Name").val(trainingcourse.Name);
         $("#Number").val(trainingcourse.Number);
         $("#startdate").val((trainingcourse.StartDate).substring(0,10));
         $("#enddate").val(((trainingcourse.EndDate != null)?(trainingcourse.EndDate).substring(0,10) : "Empty" ));
      }

      function GetData(){

         var start = new Date( $("#startdate").val());
         var end = new Date($("#enddate").val());
         if(end.getTime() > start.getTime()){
            var trainingcourse = {
               ID:$("#id").val(),
               FeedbackCode:$("#feedback").val(),
               Number: $("#Number").val(),
               Name:$("#Name").val() ,
               TrainerName:$("#trainer").val(),
               StartDate:(end.getTime() > start.getTime())? $("#startdate").val():null,
               EndDate:(end.getTime() > start.getTime())? $("#enddate").val():null ,
               Internal : $("#Internal").prop("checked")
            }
         }else{
            alert("Worng Date *the start date should be before end date*")
            return null;
         }
    
         return trainingcourse;
      } 
});