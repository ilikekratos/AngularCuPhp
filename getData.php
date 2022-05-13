<?php if (isset($_SERVER['HTTP_ORIGIN'])) {
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
        $criteria = $_POST['criteria'];

        // Create connection
        $conn = new mysqli('localhost','root','','test');
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        if($criteria == 'none')
            $sql = "SELECT author, title, comment, date FROM guestbooks";
        if($criteria == 'title')
            $sql = "SELECT  author, title, comment, date FROM guestbooks GROUP BY title";

        if($criteria == 'author')
            $sql = "SELECT  author, title, comment, date FROM guestbooks GROUP BY author,title";
        $result = $conn->query($sql);

        if ($result->num_rows >= 0) {
            $list = array();
            while($row = $result->fetch_assoc()) {
                $list[] = $row; 
    
            }
            $conn->close();
            echo json_encode($list);
        } else {
            echo "0 results";
        }
       

?>