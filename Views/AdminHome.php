<!DOCTYPE html>
<html>

<head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        html,
        body {
            height: 100%;
            margin: 0;
        }

        body {
            background-color: #e3e3e3;
            display: flex;
        }

        .LeftEmptySpace {
            height: 100%;
            display: flex;
            justify-content: flex-end;
        }

        .fab_parent {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            margin-right: -20px;
        }

        .Rounded-Shit {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div style="width: 10%; height: 100%;">
        <div class=" LeftEmptySpace teal white-text">
            <div class="fab_parent">

                <a class="btn-floating btn-large waves-effect waves-light red Rounded-Shit btn tooltipped"
                    data-position="buttom" id="Home" data-tooltip="Home">
                    <i class="material-icons large left">home</i>
                </a>
                <a class="btn-floating btn-large waves-effect waves-light red  Rounded-Shit btn tooltipped"
                    data-position="buttom" id="Admin" data-tooltip="Admin">
                    <i class="material-icons large left">account_circle</i>
                </a>
                <a class="btn-floating btn-large waves-effect waves-light red Rounded-Shit btn tooltipped"
                    data-position="buttom" id="Courses" data-tooltip="Courses">
                    <i class="material-icons large left">import_contacts</i>
                </a>
            </div>
        </div>
    </div>
    <!-- Container -->
    <div class="container" style="width: 90%; height: 100%;  display: flex;   align-items: center;">
        <div class="row z-depth-1"
            style="display: flex; flex-direction: column;align-items: center;height: 90%;width: 85%;">

            <div class="col s12" style="margin: 0; padding :0px;display: flex;flex-direction: column; ">
                <ul class="tabs red " style="display: flex;justify-content: space-evenly;">
                    <li class="tab col s6 red">
                        <a href="#CoursesTab" class="white-text">Courses</a>
                    </li>
                    <li class="tab col s6 red">
                        <a href="#StaticsTab" class="white-text">Statics</a>
                    </li>
                </ul>
            </div>

            <!--Tabs Content-->
            <div class="" id="CoursesTab" style="height: 100%;width: 100%;overflow-y: scroll;overflow-x: hidden;">
                <div class="row">
                    <div class="col s6" style="display: flex; justify-content: center; margin-top: 10px;">
                        <button id="addCourse" class="btn waves-effect waves-light">
                            Course
                            <i class="material-icons right">
                                add
                            </i>
                        </button>
                    </div>
                    <div class="col s6" style="display: flex; justify-content: center; margin-top: 10px;">
                        <button class="btn waves-effect waves-light" >
                            Search
                            <i class="material-icons right">
                                search
                            </i>
                        </button>
                    </div>
                </div>
                <table class="responsive-table" style="margin-left: 20px;padding-right: 10px;">
                    <thead>
                        <tr role="row">
                            <th>ID</th>
                            <th>
                                Number</th>
                            <th>
                                Name</th>
                            <th>Trainer
                            </th>
                            <th>
                                FBCode</th>
                            <th>Start
                                Date</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr role="row">
                            <td>1</td>
                            <td>079851485</td>
                            <td>Java</td>
                            <td>samer</td>
                            <td>789</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>2</td>
                            <td>079851485</td>
                            <td>Java</td>
                            <td>Mohammad</td>
                            <td>741</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>3</td>
                            <td>079851478</td>
                            <td>C#</td>
                            <td>Omar</td>
                            <td>745</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>4</td>
                            <td>079851354</td>
                            <td>Network</td>
                            <td>Adel</td>
                            <td>965</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>5</td>
                            <td>079851363</td>
                            <td>Network2</td>
                            <td>fadi</td>
                            <td>412</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>6</td>
                            <td>079851363</td>
                            <td>Python</td>
                            <td>saeed</td>
                            <td>523</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>7</td>
                            <td>079851789</td>
                            <td>Algorithms</td>
                            <td>Lames</td>
                            <td>582</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>8</td>
                            <td>079851555</td>
                            <td>Modeling</td>
                            <td>Jomana</td>
                            <td>852</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                        <tr role="row">
                            <td>9</td>
                            <td>079851555</td>
                            <td>Modeling</td>
                            <td>Reem</td>
                            <td>951</td>
                            <td>04/12/2019</td>
                            <td><button class="btn blue waves-effect waves-light"><i
                                        class="material-icons">visibility</i></button></td>
                            <td><button class="btn yellow waves-effect waves-light"><i
                                        class="material-icons">edit</i></button></td>
                            <td><button class="btn red waves-effect waves-light"><i
                                        class="material-icons">cancel</i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="" id="StaticsTab">Statics bitch</div>
            <!--End Tabs Content-->

        </div><!-- End Row -->
    </div> <!-- End Container -->



    <!--JavaScript at end of body for optimized loading-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.tooltipped').tooltip();
            $("#Home").click(() => {
                window.open("index.php", "_self");
            });
            $("#Admin").click(() => {
                window.open("Admin.php", "_self");
            });
            $("#Courses").click(() => {
                window.open("Courses.php", "_self");
            });
            $("#addCourse").click(()=>{
                window.open("AddCourse.php","_self");
            })
            $('.tabs').tabs();

            $('.collapsible').collapsible();


        });


    </script>
</body>

</html>


<!-- <ul class="collapsible">
    <li>
        <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
        <div class="collapsible-body">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Trainer</th>
                    <th>FeedbackCode</th>
                    <th>Start Date</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    <tr role="row" ><td>1</td><td>079851485</td><td>Java</td><td>samer</td><td>789</td><td>04/12/2019</td><td><button class="btn btn-primary">view</button></td><td><button class="btn btn-warning">Edit</button></td><td><button class="btn btn-danger">Delete</button></td></tr>
                </tbody>
            </table>

        </div>
    </li>
    <li>
        <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        <div class="collapsible-body">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Trainer</th>
                    <th>FeedbackCode</th>
                    <th>Start Date</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    <tr role="row" ><td>1</td><td>079851485</td><td>Java</td><td>samer</td><td>789</td><td>04/12/2019</td><td><button class="btn btn-primary">view</button></td><td><button class="btn btn-warning">Edit</button></td><td><button class="btn btn-danger">Delete</button></td></tr>
                </tbody>
            </table>

        </div>
    </li>
    <li>
        <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
        <div class="collapsible-body">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Course Number</th>
                    <th>Course Name</th>
                    <th>Trainer</th>
                    <th>FeedbackCode</th>
                    <th>Start Date</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    <tr role="row" ><td>1</td><td>079851485</td><td>Java</td><td>samer</td><td>789</td><td>04/12/2019</td><td><button class="btn btn-primary">view</button></td><td><button class="btn btn-warning">Edit</button></td><td><button class="btn btn-danger">Delete</button></td></tr>
                </tbody>
            </table>
        </div>
    </li>
</ul> -->