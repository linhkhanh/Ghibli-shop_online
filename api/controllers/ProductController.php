<?php
require_once __DIR__ . "/../models/Product.php";

class ProductController
{
    private $product;

    public function __construct($db)
    {
        $this->product = new Product($db);
    }

    public function index()
    {
        $stmt = $this->product->getAll();
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}
