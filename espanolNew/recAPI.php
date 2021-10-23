<?php include("../template-includes/db-connection.php");?>

<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type: application/json");
?>

<?php
  // MyDbConnection();

  $id = $_GET['id'];

  //Tells you if its all ok
  $recLinksFetch = mysql_query("SELECT * FROM espanol_content WHERE recursosLink != '' AND recursosLink != 'null' OR recursosLinkText != '' AND recursosLinkText != 'null'");
  $fetchRecLinks = mysql_fetch_assoc($recLinksFetch);

?>

<?php do { ?>
  <?php echo $fetchRecLinks['recursosLink'], "  ", $fetchRecLinks['recursosLinkText']; ?>
  <?php

  } while ($fetchRecLinks = mysql_fetch_assoc($recLinksFetch));
?>
