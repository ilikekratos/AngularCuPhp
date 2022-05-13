<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
session_start();

    $username = $_POST['username'];
    $password = $_POST['password'];

    $con = mysqli_connect("localhost", "root", "", "test");
    $sql = "SELECT name,password,isadmin FROM test.users WHERE name = '$username' LIMIT 1";

    $query = $con->query($sql);
    if($query) {
        $row = mysqli_fetch_row($query);
        if(isset($row[0])){
        $dbUserName = $row[0];
        $dbPassword = $row[1];        
        $dbIsAdmin = $row[2];
        if($username == $dbUserName && $password == $dbPassword && $dbIsAdmin == 1) {
            echo json_encode ('Good');
        }
        else {
            echo json_encode ('Incorrect credentials');
        }
        }
        else {
            echo json_encode ('Incorrect credentials');
    
        }
    

    $con->close();
}

?>
