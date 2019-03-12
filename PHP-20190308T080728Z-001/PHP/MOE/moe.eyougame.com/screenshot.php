<!DOCTYPE html>

<html>
	<head>
		<title>Myth of Eastern</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
		<script type="text/javascript" src="js/scripts.js" ></script>		
		<script type="text/javascript" src="js/jssor.slider.min.js"></script>
		<link rel="stylesheet" href="css/magnific-popup.css">
		<script src="js/1.9.1_jquery.min.js"></script>
		<script src="js/jquery.magnific-popup.js"></script>
		<script>
			$(document).ready(function() {
				$('.popup-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					tLoading: 'Loading image #%curr%...',
					mainClass: 'mfp-img-mobile',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function(item) {
							return item.el.attr('title') + '<small></small>';
						}
					}
				});
			});
		</script>
	</head>
<body>
<div id="wrapper">
	<div id="header">
		<?php
			include("menu.php");
		?>
	</div>
	<div id="content">	
		<div class="container5">
			<table class="tbl1">
				<tr>
					<td>
						<a href="home.php"><img class="words" src="images/words/home.png"></img></a>
						<img class="words" src="images/words/to.png"></img>
						<a href="screenshot.php"><img class="words" src="images/words/screenshot.png"></img></a>
					</td>
				</tr>
			</table>
		</div>
		<div class="container6">
			<table class="tbl1">
				<tr>
					<td>						
						<div id="screenshot_pic" class="popup-gallery">
							<?php 
								// get the image from the db
								/* $sql = "SELECT screenshots_img FROM screenshots";
								$result = mysql_query("$sql") or die("Invalid query: " . mysql_error());

								$result = mysql_query($sql);
								
								while($row=mysql_fetch_array($result))
								{								
									$img1 = $row['screenshots_img'];
								
								echo '<a href="data:image/jpeg;base64,' . base64_encode($img1) . '" title=""><img class="center-cropped" src="data:image/jpeg;base64,' . base64_encode($img1) . '"></a> &nbsp';
								} */
							?>						
						</div>
						<div class="scroll_bg"><img class="scroll" id="scroll" src="images/scroll.png" width="100%"/></div>	
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div id="footer">
		<?php
			include("footer.php");
		?>
	</div>
</div>	
	</body>
</html>	