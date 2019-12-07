import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent}
 from "../Controllers/LayoutController.js"

$(document).ready(function(){
     //setup main layout
     $("#mainLayout").html(layoutHTML);
     homeEvent;
     adminEvent;
     coursesEvent;
     tooltippedEvent;

     $(document).on("click","#addCourse",(e)=>{
        window.open("AddCourse.php","_self");
     })
    
    $('.tabs').tabs();

    $('.collapsible').collapsible();

});