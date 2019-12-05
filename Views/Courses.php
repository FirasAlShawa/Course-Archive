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

    <div class="container" style="width: 90%; height: 100%;  display: flex;   align-items: center;">
        <div class="row z-depth-1"
            style="display: flex;justify-content: center;align-items: center;height: 90%; width: 95%;">
            <div class="col s2" style="margin: 0;width: 100%;height: 100%; overflow-y: overlay;">
                <div style="
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
            ">
                    <h1>Our Courses : </h1>
                    <div class="">
                        <div class="card teal white-text center-text">
                            <div class="card-content">
                                <div class="card-title">Java</div>
                                <p>With Firas Alshawa</p>
                            </div>
                            <div class="card-action">
                                <a class="btn red waves-effect">Feedback</a>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="card teal white-text">
                            <div class="card-content">
                                <div class="card-title">Java</div>
                                <p>With Firas Alshawa</p>
                            </div>
                            <div class="card-action">
                                <a class="btn red waves-effect">Feedback</a>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="card teal white-text">
                            <div class="card-content">
                                <div class="card-title">Java</div>
                                <p>With Firas Alshawa</p>
                            </div>
                            <div class="card-action">
                                <a class="btn red waves-effect">Feedback</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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
        });


    </script>
</body>

</html>