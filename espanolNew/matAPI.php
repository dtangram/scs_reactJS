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
  $matLinksFetch = mysql_query("SELECT * FROM espanol_content WHERE matriculasLink != '' AND matriculasLink != 'null' OR matriculasLinkText != '' AND matriculasLinkText != 'null'");
  $fetchMatLinks = mysql_fetch_assoc($matLinksFetch);

?>

<?php do { ?>
  <?php echo $fetchMatLinks['matriculasLink'], "  ", $fetchMatLinks['matriculasLinkText']; ?>
  <?php

  } while ($fetchMatLinks = mysql_fetch_assoc($matLinksFetch));
?>
