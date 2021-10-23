<?php include("../template-includes/db-connection.php");?>

<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type: application/json");
?>

<?php
   $hubslidesQ = mysql_query("SELECT compliance FROM espanol_slideshow WHERE compliance != '' ORDER BY img_order ASC");
   $hubslidesF = mysql_fetch_assoc($hubslidesQ);
?>

<?php do { ?>
  <?php echo $hubslidesF['compliance']; ?>
  <?php } while ($hubslidesF = mysql_fetch_assoc($hubslidesQ));?>
