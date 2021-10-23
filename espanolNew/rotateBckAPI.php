<?php include("../template-includes/db-connection.php");?>

<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type: application/json");
?>

<?php
   $hubslidesQ = mysql_query("SELECT img_url FROM espanol_slideshow WHERE img_url != '' ORDER BY img_order ASC");
   $hubslidesF = mysql_fetch_assoc($hubslidesQ);
?>

<?php do { ?>
  <?php echo $hubslidesF['img_url']; ?>
  <?php } while ($hubslidesF = mysql_fetch_assoc($hubslidesQ));?>
