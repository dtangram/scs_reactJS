  <div id="tp-menu-accordion">
  <div id="accordion" class="tp-page-accordion">
             <?php if($PageMenuDF['LinkName']){?>
             <h3>Menu</h3>
      <div>
        <ul class="FIF-accordian-links">
           <?php do { ?>
 <li>
 <a href="<?php echo $PageMenuDF['URLaddress'];?>?PID=<?php echo $PageMenuDF['ID'];?>"><?php echo $PageMenuDF['LinkName'];?></a>
 </li>
<?php } while($PageMenuDF = mysql_fetch_assoc($PageMenuDQ)); ?>

        </ul>
      </div>
      <?php } ?>

       <?php if($PageMenuPF['LinkName']){?>
      <h3>Programs & Services</h3>
      <div>
        <ul class="FIF-accordian-links">
               <?php do { ?>
 <li>
 <a href="<?php echo $PageMenuPF['URLaddress'];?>?PID=<?php echo $PageMenuPF['ID'];?>"><?php echo $PageMenuPF['LinkName'];?></a>
 </li>
<?php } while($PageMenuPF = mysql_fetch_assoc($PageMenuPQ)); ?>
        </ul>
      </div>
      <?php } ?>

       <?php if($PageMenuRF['LinkName']){?>
      <h3>Menu</h3>
      <div>

        <ul class="FIF-accordian-links">
     <li><a href="index"> Home</a></li>
      <?php do {

	  $external = strrchr("http", $PageMenuRF['URLaddress']);
	  $pdf = strrchr("pdf", $PageMenuRF['URLaddress']);
	  //echo $external;
	  if($external == 'http' || $pdf == 'pdf'){
		 $external = 1;
		 //echo $external;
		}
	  ?>
<li>
 <a href="<?php echo $PageMenuRF['URLaddress'];?>?PID=<?php echo $PageMenuRF['ID'];?>" <?php if($external == 1){?>target="_blank"<?php } ?>><?php  echo $PageMenuRF['LinkName'];?></a>
 </li>
<?php } while($PageMenuRF = mysql_fetch_assoc($PageMenuRQ)); ?>
 <!--         <li><a href="staff">Staff</a></li>    -->
           </ul>
         </div>
         <?php } ?>

    </div>
     </div>

<!-- <p style="text-align:center"><strong>Contact Us</strong><br>
Tracy Leaks, <br>
<em><a href="https://twitter.com/@SCSGreenschools" target="_blank" style="color: green;
    font-size: 2em;
    position: absolute;
    margin: -1.5em 0;"><i class="fa fa-twitter" aria-hidden="true"></i></a> Green Schools Project Leader</em><br>
 <span class="fi-telephone"></span> 901-416-4118 </p> -->

 
<!--<div class="row">
<div class="menu-photo-box large-12 columns">
<div style="background: rgb(135, 78, 51);">
<img class="" src="/uf/cabinet/images/trinette.jpg"></div>
<div class="row tp-box-1-bg">
<p align="center"><span class="tp-box-title" style="
  text-transform: uppercase;
  font-weight: bold;
  background: rgb(111, 107, 108);
  padding: .3em 1em .3em 1em;
  border: solid .2em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0em;
  border-radius: .2em;
  font-size: .85em;">Chief of Human Resources</span><br>
<span class="tp-box-name">Trinette C. Small</span><br>
<span class="fi-mail"> </span> <a id="cabinet-email-color-orange" href="mailto:smalltc@scsk12.org">Email</a></p>
</div>
</div>
</div>
-->
<!--<p style="text-align: center;"><strong>CONTACT INFO</strong> <br>

160 S. Hollywood St.<br>
Barnes Building Main Floor<br>

Phone: <span class="fi-telephone"> </span>  901-416-5304<br>
</p>
-->
