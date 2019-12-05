<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <div class="container">
          <div class="row">
            <col class="6">
            <form id="AdminLoginForm" method="get" contentType="application/x-www-form-unlencode" >
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
                Login
            </button>
            </div>
          </div>
      </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            $("#AdminLoginForm").submit((e)=>{
                e.preventDefault();
                $.ajax({
                    type:"get",
                    url:"http://localhost:3000/admin",
                    data:{
                        name:$("#Email").val(),
                        password:$("#Password").val()
                    },
                    success:(res)=>{
                        console.log(res)
                        console.log($("#Email").val() + " => " +$("#Password").val())
                        // if(res == "Success")
                        //     window.open("AdminHome.php","_self");
                        // else
                        //     alert("Something Wrong!")
                    },
                    error :(err)=>{
                        console.log(err)
                    }
                })

            })
        })
    </script>
    
</body>
</html>