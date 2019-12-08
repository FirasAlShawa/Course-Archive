import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "../Controllers/LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

     $('.tabs').tabs();
     
     $('select').formSelect();

     $("#AddForm").submit((e)=>{
          e.preventDefault()
          var trainingcourse = GetData()
          console.log(trainingcourse)
          $.ajax({
               url:"http://192.168.1.110:3000/trainingcourses/",
               type : "POST",
               contentType:"application/x-www-form-urlencoded",
               data :{data:trainingcourse},
               success:(res)=>{
                    window.open("AdminHome.html","_self")
               },
               error:(xhr,status,err)=>{
                    console.log(err)
                    alert("Something worng!")
               }
          })
     })

     $(document).on("click","#BackBtn",(e)=>{
          window.history.back();
       })
  


     function GetData(){
          var start = new Date( $("#startdate").val());
          var end = new Date($("#enddate").val());
          if(end.getTime() > start.getTime()){
             var trainingcourse = {
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