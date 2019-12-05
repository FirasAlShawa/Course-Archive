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
            <div class="col s8" style="margin: 0; display: flex;flex-direction: column; ">
                <h1 style="text-align: center;">Admin Login</h1>
                <form id="AdminLoginForm" action="get" contentType="application/x-www-form-unlencode" >
                    <div class="input-field">
                        <i class="material-icons prefix">email</i>
                        <input type="text" name="Email" id="Email" autocomplete="false">
                        <label for="Email">Email</label>
                    </div>
                    <div class="input-field">
                        <i class="material-icons prefix">security</i>
                        <input type="password" name="Password" id="Password" autocomplete="false">
                        <label for="Password">Password</label>
                    </div>

                    
                </form>
                <button id="LoginBtn" type="submit" form="AdminLoginForm" class="btn waves-effect waves-light" type="submit">
                    Login<i class="material-icons left">send</i>
                </button>
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
            $("#Home").click(()=>{
                window.open("index.php","_self");
            });
            $("#Admin").click(()=>{
                window.open("Admin.php","_self");
            });
            $("#Courses").click(()=>{
                window.open("Courses.php","_self");
            });

            $("#AdminLoginForm").submit((e)=>{
                e.preventDefault();
                console.log("1")
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
                            window.open("AdminHome.php","_self");}
                        else
                            alert(res)
                    },
                    error :(xhr, status, error)=>{
                        var err = eval("(" + xhr.responseText + ")");
                        alert(err.Message);
                    }
                })
                console.log("2")

            })
        });


    </script>
</body>

</html>