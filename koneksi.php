<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'secondrive';
    $conn = new mysqli($host, $username, $password, $database);

    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
?>