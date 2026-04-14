<?php
class Product
{
    private $conn;
    private $table = "PRODUCT";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL PRODUCTS
    public function getAll()
    {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
