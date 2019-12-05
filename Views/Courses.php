<!DOCTYPE html>
<html>

<head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!-- My layout style -->
    <link rel="stylesheet" href="../assets/css/mainLayout.css">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
</head>

<body>
    <div id="mainLayout"></div>

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
    <script type="module" src="../Controllers/Courses.js"></script>

</body>

</html>