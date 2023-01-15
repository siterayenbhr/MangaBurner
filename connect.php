<?php
    $email = $_POST['email'];
    $passwd = $_POST['passwd'];
    $remember = $_POST['remember'];
    $name = $_POST['name'];
    $registerEmail = $_POST['registerEmail'];
    $registerPasswd = $_POST['registerPasswd'];
    $registerPasswdConfirm = $_POST['registerPasswdConfirm'];
    $registerTerms = $_POST['registerTerms'];
    //DB connection ::
    $conn = new mysqli('localhost', 'root', '', 'mbulogin');
    if($conn->connect_error){
        die('Connection Failed  :  '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(email, passwd, remember, name, registerEmail, registerPasswd, registerPasswdConfirm, registerTerms) values(?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssbssssb",$email, $passwd, $remember, $name, $registerEmail, $registerPasswd, $registerPasswdConfirm, $registerTerms);
        $stmt->execute();
        echo "registration avec succée";
        $stmt->close();
        $conn->close();
    }
?>