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
  $welcomeFetch = mysql_query("SELECT welcomeCopy FROM espanol_content WHERE id = '1'");
  $fetchWelcome = mysql_fetch_assoc($welcomeFetch);

  $headlineFetch = mysql_query("SELECT * FROM espanol_headlines WHERE headlineLink != '' AND headlineLink != 'null' OR headlineText != '' AND headlineText != 'null' OR headlineThumb != '' AND headlineThumb != 'null' OR altTag1 != '' AND altTag1 != 'null'");
  $fetchHeadlineLinks = mysql_fetch_assoc($headlineFetch);

  $headlineFetch2 = mysql_query("SELECT * FROM espanol_headlines WHERE headlineLink2 != '' AND headlineLink2 != 'null' OR headlineText2 != '' AND headlineText2 != 'null' OR headlineThumb2 != '' AND headlineThumb2 != 'null' OR altTag2 != '' AND altTag2 != 'null'");
  $fetchHeadlineLinks2 = mysql_fetch_assoc($headlineFetch2);

  $headlineFetch3 = mysql_query("SELECT * FROM espanol_headlines WHERE headlineLink3 != '' AND headlineLink3 != 'null' OR headlineText3 != '' AND headlineText3 != 'null' OR headlineThumb3 != '' AND headlineThumb3 != 'null' OR altTag3 != '' AND altTag3 != 'null'");
  $fetchHeadlineLinks3 = mysql_fetch_assoc($headlineFetch3);

  $headlineFetch4 = mysql_query("SELECT * FROM espanol_headlines WHERE headlineLink4 != '' AND headlineLink4 != 'null' OR headlineText4 != '' AND headlineText4 != 'null' OR headlineThumb4 != '' AND headlineThumb4 != 'null' OR altTag4 != '' AND altTag4 != 'null'");
  $fetchHeadlineLinks4 = mysql_fetch_assoc($headlineFetch4);

  $ayudaFetch = mysql_query("SELECT ayudaCopy FROM espanol_content WHERE ayudaCopy != '' AND ayudaCopy != 'null'");
  $fetchAyuda = mysql_fetch_assoc($ayudaFetch);

  $flyerFetch = mysql_query("SELECT flyerCopy FROM espanol_content WHERE flyerCopy != '' AND flyerCopy != 'null'");
  $fetchFlyer = mysql_fetch_assoc($flyerFetch);

  $flyerBckImgFetch = mysql_query("SELECT flyerBckImg FROM espanol_content WHERE flyerBckImg != '' AND flyerBckImg != 'null'");
  $fetchBckImgFlyer = mysql_fetch_assoc($flyerBckImgFetch);

  $enlacesRapidosFetch = mysql_query("SELECT enlacesRapidosCopy FROM espanol_content WHERE enlacesRapidosCopy != '' AND enlacesRapidosCopy != 'null'");
  $fetchEnlacesRapidos = mysql_fetch_assoc($enlacesRapidosFetch);

  $socialesFetch = mysql_query("SELECT socialesCopy FROM espanol_content WHERE socialesCopy != '' AND socialesCopy != 'null'");
  $fetchSociales = mysql_fetch_assoc($socialesFetch);

?>

<?php

  $flyerBckImgFetch = mysql_query("SELECT * FROM espanol_content  WHERE flyerBckImg != '' AND flyerBckImg != 'null'");
  $fetchBckImgFlyer = mysql_fetch_assoc($flyerBckImgFetch);

?>

<?php echo $fetchWelcome['welcomeCopy'], "  ", $fetchAyuda['ayudaCopy'], "  ", $fetchFlyer['flyerCopy'], "  ", $fetchBckImgFlyer['flyerBckImg'], "   ", $fetchEnlacesRapidos['enlacesRapidosCopy'], "   ", $fetchSociales['socialesCopy']; ?>
