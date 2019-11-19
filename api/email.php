<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$config = parse_ini_file('../private/config.ini');
$host = $config['servername']; 
$user = $config['username']; 
$password = $config['password']; 
$dbname = $config['dbname']; 
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
  case 'GET':
    $id = $_GET['id'];
    $sql = "select * from Email".($id?" where id=$id":''); 
    break;
  case 'POST':
    $email = $_POST["email"];
    // 1. validate email
    function validEmail($email) {
      return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    // 2. check if email exists
    function isUnique($con, $email) {
      $exists = mysqli_query($con,"select count(*) from Email where email=$email");
      return $exists < 1;
    }
    if (validEmail($email) && isUnique($con,$email)) {
      // 3. insert
      $sql = "insert into Email (email) values ('$email')"; 
    } else {
      $sql = "";
      http_response_code(422);
    }
    break;
}

// run SQL statement
$result = strlen($sql) ? mysqli_query($con,$sql) : false;

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
  if (!$id) echo '[';
  for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
  if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();