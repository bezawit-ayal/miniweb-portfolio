<?php
include 'config.php';

// Create database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS portfolio_db";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Select the database
$conn->select_db("portfolio_db");

// Create contacts table
$sql = "CREATE TABLE IF NOT EXISTS contacts (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Contacts table created successfully<br>";
} else {
    echo "Error creating contacts table: " . $conn->error . "<br>";
}

// Create projects table
$sql = "CREATE TABLE IF NOT EXISTS projects (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Projects table created successfully<br>";
} else {
    echo "Error creating projects table: " . $conn->error . "<br>";
}

// Insert sample projects
$sql = "INSERT INTO projects (title, description, link) VALUES
('Portfolio Redesign', 'Modern responsive landing page with smooth interactions and polished visuals.', '#contact'),
('Web App Dashboard', 'Interactive dashboard UI with flexible cards, charts, and design system consistency.', '#contact'),
('Brand Website', 'Elegant site built to showcase a brand story with strong typography and color.', '#contact')
ON DUPLICATE KEY UPDATE title=VALUES(title)";

if ($conn->query($sql) === TRUE) {
    echo "Sample projects inserted successfully<br>";
} else {
    echo "Error inserting projects: " . $conn->error . "<br>";
}

$conn->close();
echo "Database setup complete!";
?>