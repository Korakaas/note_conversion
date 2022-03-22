<?php
$notes = array('Do'=>'C', 'Ré' => 'D', 'Mi' => 'E', 'Fa' => 'F', 'Sol' => 'G', 'La' => 'A', 'Si' => 'B');
$result ="";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST['note_classique'])) {
        $result = "<p> Aucune note choisie </p>";
    }
    else{
        $note = $_POST['note_classique'];
        $result = '<p> La notation américaine pour la note \' '.$note.' \' est \' '.$notes[$note].' \'.</p>';
        echo $result;
    }
 
}
?>