<?php include("../template-includes/db-connection.php");?>

<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type: application/json");
?>

<?php
   $hubslidesQ = mysql_query("SELECT img_name FROM espanol_slideshow WHERE img_name != '' ORDER BY img_order ASC");
   $hubslidesF = mysql_fetch_assoc($hubslidesQ);
?>

<?php do { ?>
  <?php echo $hubslidesF['img_name']; ?>
  <?php } while ($hubslidesF = mysql_fetch_assoc($hubslidesQ));?>
