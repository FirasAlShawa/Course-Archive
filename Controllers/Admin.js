import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent} from "../Controllers/LayoutController.js";

$(document).ready(function () {
    
    //setup main layout
        $("#mainLayout").html(layoutHTML);
        homeEvent;
        adminEvent;
        coursesEvent;
        tooltippedEvent;

    $('.tooltipped').tooltip();

    //sumit the signin form 
    $("#AdminLoginForm").submit((e)=>{
        e.preventDefault();
        $.ajax({
            type:"GET",
            url:"http://192.168.1.110:3000/admin",
            contentType:"application/x-www-form-unlencode",
            data:{
                name:$("#Email").val(),
                password:$("#Password").val()
            },
            success:(res)=>{
                if(res == "Success"){
                    alert("Weclome back Admin !")
                    window.open("AdminHome.html","_self");}
                else
                    alert(res)
            },
            error :(xhr, status, error)=>{
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        })
    })
});