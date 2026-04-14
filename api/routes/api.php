<?php
require_once __DIR__ . "/../config/database.php";
require_once __DIR__ . "/../controllers/ProductController.php";

$db = (new Database())->connect();
$controller = new ProductController($db);

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        $controller->index();
        break;
    default:
        echo "Link is not valid";
        break;
}
