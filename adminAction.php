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

	$author = $_POST['author'];
	$title = $_POST['title'];
	$comment = $_POST['comment'];
	$date = $_POST['date'];
	$action = $_POST['action'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		if($action == "add")
		{
			$stmt = $conn->prepare("insert into guestbooks(author, title, comment, date) values(?, ?, ?, ?)");
			$stmt->bind_param("ssss", $author, $title, $date, $comment);
		}
		if($action == "update")
		{
			$stmt = $conn->prepare("update guestbooks set author = ?,  comment = ?, date = ? WHERE title = ?");
			$stmt->bind_param("ssss", $author,  $date, $comment, $title);
		}
		if($action == "delete")
		{
			$stmt = $conn->prepare("delete from guestbooks where title = ?");
			$stmt->bind_param("s",$title);
		}
		
		try{$execval = $stmt->execute();
			echo json_encode('good');}
		catch(Exception $e){
			echo json_encode('fail');

		}
		

		$stmt->close();
		$conn->close();
	}
?>