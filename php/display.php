<?php
// Kết nối cơ sở dữ liệu
include 'connt/connect.php';

// Khởi tạo mảng rỗng để nhóm sản phẩm theo loại
$productsByType = [];

// Truy vấn SQL để lấy sản phẩm và loại sản phẩm
$sql = "SELECT product.id, product.name, product.type, product.price, product.image, product_type.type_name 
        FROM product 
        INNER JOIN product_type 
        ON product.type = product_type.type";
$result = $conn->query($sql);

if (!$result) {
    die("Lỗi truy vấn: " . $conn->error); // Xử lý lỗi truy vấn
}

// Nhóm sản phẩm theo loại
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $type = $row['type'];
        $productsByType[$type][] = $row; // Nhóm sản phẩm theo `type`
    }
} else {
    echo "Không có sản phẩm nào.";
}

?>