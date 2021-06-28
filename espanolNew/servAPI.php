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
  $servLinksFetch = mysql_query("SELECT * FROM espanol_content WHERE serviciosLink != '' AND serviciosLink != 'null' OR serviciosLinkText != '' AND serviciosLinkText != 'null'");
  $fetchServLinks = mysql_fetch_assoc($servLinksFetch);

?>

<?php do { ?>
  <?php echo $fetchServLinks['serviciosLink'], "  ", $fetchServLinks['serviciosLinkText']; ?>
  <?php

  } while ($fetchServLinks = mysql_fetch_assoc($servLinksFetch));
?>
