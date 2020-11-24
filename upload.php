<?php
$target_dir = "https://localhost:1234/uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);

$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo $target_file;
  } else {
    echo "Sorry, there was an error uploading your file.";
  }

?>