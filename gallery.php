<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// This is a simple example and not suitable for a production environment.
// In a real-world scenario, you should add proper validation and error handling.

$uploadDir = 'uploads/';
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && isset($_POST['title'])) {
        $file = $_FILES['image'];
        $title = $_POST['title'];

        if (in_array($file['type'], $allowedTypes)) {
            $fileName = time() . '-' . basename($file['name']);
            $uploadFile = $uploadDir . $fileName;

            if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
                $content = [
                    'title' => $title,
                    'image' => $uploadFile,
                ];

                file_put_contents('content.json', json_encode($content));
                header('Location: index.html');
                exit;
            }
        }
    }
}
