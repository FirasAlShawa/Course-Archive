const layoutHTML = 
    "<div class=' LeftEmptySpace teal white-text'>"
        +"<div class='fab_parent'>"
            +"<a class='btn-floating btn-large waves-effect waves-light red Rounded-Shit btn tooltipped'"
                +"data-position='buttom' id='Home' data-tooltip='Home'>"
                +"<i class='material-icons large left'>home</i>"
            +"</a>"
            +"<a class='btn-floating btn-large waves-effect waves-light red  Rounded-Shit btn tooltipped'"
                +"data-position='buttom' id='Admin' data-tooltip='Admin'>"
                +"<i class='material-icons large left'>account_circle</i>"
            +"</a>"
            +"<a class='btn-floating btn-large waves-effect waves-light red Rounded-Shit btn tooltipped'"
                +"data-position='buttom' id='Courses' data-tooltip='Courses'>"
                +"<i class='material-icons large left'>import_contacts</i>"
            +"</a>"
        +"</div>"
    +"</div>";

    var homeEvent = $(document).on("click","#Home",(e)=>{
        window.open("index.php","_self");

    })

    var adminEvent =  $(document).on("click","#Admin",(e)=>{
        window.open("Admin.php","_self");
    });

    var coursesEvent = $(document).on("click","#Courses",(e)=>{
        window.open("Courses.php","_self");
    })

    
    var tooltippedEvent= $('.tooltipped').tooltip();
 

export {layoutHTML,homeEvent,adminEvent,coursesEvent,tooltippedEvent};