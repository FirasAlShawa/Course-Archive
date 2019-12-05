import {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent} from "../Controllers/LayoutController.js";

$(document).ready(function () {
    
    //setup main layout
        $("#mainLayout").html(layoutHTML);
        homeEvent;
        adminEvent;
        coursesEvent;
        tooltippedEvent;
        
    });