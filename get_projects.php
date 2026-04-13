<?php
include 'config.php';

// Select the database
$conn->select_db("portfolio_db");

$sql = "SELECT title, description, link FROM projects ORDER BY created_at DESC";
$result = $conn->query($sql);

$projects = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($projects);

$conn->close();
?>