<?php include("../template-includes/db-connection.php");?>

<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type: application/json");
?>

<?php
  MyDbConnection();
  $QstaffDir = mysql_query("SELECT * FROM district_staff WHERE Departmenttext LIKE '%Childhood%' ORDER BY fnametext ASC");
  $FstaffDir = mysql_fetch_assoc($QstaffDir);
  // $json = @json_encode($FstaffDir);
?>

<?php do { ?>
  <?php echo "   ", $FstaffDir['fnametext'], " ", $FstaffDir['lnametext'], "  ", $FstaffDir['Titletext'], "  ", $FstaffDir['Departmenttext'], "  ", $FstaffDir['DPhonetext'], "  ", $FstaffDir['Emailtext'], "";?>
<?php } while($FstaffDir = mysql_fetch_assoc($QstaffDir));?>
