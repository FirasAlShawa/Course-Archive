import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent} from "../Controllers/LayoutController.js";

$(document).ready(function () {
    
    //setup main layout
        $("#mainLayout").html(layoutHTML);
        homeEvent;
        adminEvent;
        coursesEvent;
        tooltippedEvent;

        $(document).on("click","#FeedbackBtn",(e)=>{
            var code = prompt("Feedback Code ?")
            $.ajax({
                url:`http://192.168.1.110:3000/feedback/${code}`,
                type:"GET",
                success:(res)=>{
                    if(res.state){
                        alert(res.message)
                    }else{
                        alert(res.message)
                    }
                },
                error:(xhr,status,err)=>{
                    console.log(err)
                }
            })
        })

        $.ajax({
            url:"http://192.168.1.110:3000/feedback/",
            success:(res)=>{
                res.map((row)=>{
                    $(CreateCard(row)).appendTo("#Cards")
                })
            },
            error:(xhr,status,error)=>{
                console.log(error)
            }
        })
        
        function CreateCard(course){
            var block = `<div class="" style="margin:20px;">
                            <div class="card teal white-text center-text">
                                <div class="card-content">
                                    <div class="card-title">${course.Name}</div>
                                    <p>Number: \n ${course.Number}</p>
                                    <p>Dr.${course.TrainerName}</p>
                                </div>
                                <div class="card-action">
                                    <a id="FeedbackBtn" class="btn red waves-effect">Feedback</a>
                                </div>
                            </div>
                        </div>`;
            return block;
        }
        
    });