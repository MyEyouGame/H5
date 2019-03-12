 <!DOCTYPE html>

<html>
	<head>
		<title>Myth of Eastern</title>
		<meta charset="utf-8"/>
		<link rel="icon" href="images/info/apps_icon.png" type="image/png">
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
		<script type="text/javascript" src="js/scripts.js" ></script>		
		<script type="text/javascript" src="js/jssor.slider.min.js"></script>
		<link rel="stylesheet" href="css/magnific-popup.css">
		<script src="js/1.9.1_jquery.min.js"></script>
		<script src="js/jquery.magnific-popup.js"></script>
			
		<script>
			jssor_1_slider_init = function() {
				
				var jssor_1_SlideoTransitions = [
				  [{b:5500,d:3000,o:-1,r:240,e:{r:2}}],
				  [{b:-1,d:1,o:-1,c:{x:51.0,t:-51.0}},{b:0,d:1000,o:1,c:{x:-51.0,t:51.0},e:{o:7,c:{x:7,t:7}}}],
				  [{b:-1,d:1,o:-1,sX:9,sY:9},{b:1000,d:1000,o:1,sX:-9,sY:-9,e:{sX:2,sY:2}}],
				  [{b:-1,d:1,o:-1,r:-180,sX:9,sY:9},{b:2000,d:1000,o:1,r:180,sX:-9,sY:-9,e:{r:2,sX:2,sY:2}}],
				  [{b:-1,d:1,o:-1},{b:3000,d:2000,y:180,o:1,e:{y:16}}],
				  [{b:-1,d:1,o:-1,r:-150},{b:7500,d:1600,o:1,r:150,e:{r:3}}],
				  [{b:10000,d:2000,x:-379,e:{x:7}}],
				  [{b:10000,d:2000,x:-379,e:{x:7}}],
				  [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:9100,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:10000,d:1600,x:-200,o:-1,e:{x:16}}]
				];
				
				var jssor_1_options = {
				  $AutoPlay: true,
				  $SlideDuration: 800,
				  $SlideEasing: $Jease$.$OutQuint,
				  $CaptionSliderOptions: {
					$Class: $JssorCaptionSlideo$,
					$Transitions: jssor_1_SlideoTransitions
				  },
				  $ArrowNavigatorOptions: {
					$Class: $JssorArrowNavigator$
				  },
				  $BulletNavigatorOptions: {
					$Class: $JssorBulletNavigator$
				  }
				};
				
				var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
				
				//responsive code begin
				//you can remove responsive code if you don't want the slider scales while window resizing
				function ScaleSlider() {
					var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
					if (refSize) {
						refSize = Math.min(refSize, 1920);
						jssor_1_slider.$ScaleWidth(refSize);
					}
					else {
						window.setTimeout(ScaleSlider, 30);
					}
				}
				ScaleSlider();
				$Jssor$.$AddEvent(window, "load", ScaleSlider);
				$Jssor$.$AddEvent(window, "resize", ScaleSlider);
				$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
				//responsive code end
			};
		
			$(document).ready(function() {
				$('.image-popup-fit-width').magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					image: {
						verticalFit: false
					}
				});
			});
			$(document).ready(function() {
				$('.image-popup-fit-width2').magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					image: {
						verticalFit: false
					}
				});
			});
			$(document).ready(function() {
				$('.popup-youtube').magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,

					fixedContentPos: false
				});
			});
			
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
			<div class="container">
				<table class="tbl1" >
					<tr class="tr1">
						<td width="83%">
							
						</td>
						<td width="17%">
							<a href="https://www.facebook.com/eyoulhws" name="facebook" target="_blank"><img class="fb" id="fb" src="images/btn/fb.png" onmouseover="fb_mouseOver()" onmouseout="fb_mouseOut()"></a>
							<a href="https://www.instagram.com/eyougame_lhws/" name="instagram" target="_blank"><img class="insta" id="insta" src="images/btn/insta.png" onmouseover="insta_mouseOver()" onmouseout="insta_mouseOut()"></a>
						</td>
					</tr>
				</table>
			</div>
			<div class="container2">
				<table class="tbl1">
					<tr>
						<td class="td1">
							<div class="img_playbtn">
								<a href="http://www.eyougame.com/Public/video/lhws.mp4" class="popup-youtube">	
									<div style="position:absolute;width:100%;">
										<img src="images/info/circle.png" class="play-bg"/>
									</div>
									<div style="position:absolute;width:100%;">
										<img class="circle" src="images/info/circle2.png" />
									</div>	
								</a>
							</div>
							<div class="img_video"><img class="vd1" id="vd1" src="images/info/video_bg.png"/></div>	
						</td>
						<td class="td2">
							<img class="app_icon" id="app_icon" src="images/info/apps_icon.png"/>
						</td>
						<td class="td2">
							<a href="images/info/qrcode.png"  class="image-popup-fit-width2"><img class="qrcode" id="qrcode" src="images/info/qrcode.png" onmouseover="qrcode_mouseOver(this)" onmouseout="qrcode_mouseOut(this)"/></a>
						</td>
						<td class="td2">					
								<a href="https://itunes.apple.com/app/id1076843672" target="_blank">
									<img class="dl1" id="dl1" src="images/info/dl1.png" onmouseover="dl1_mouseOver(this)" onmouseout="dl1_mouseOut(this)">
								</a>
								<a href="https://play.google.com/store/apps/details?id=com.eyougame.lhw" target="_blank">
									<img class="dl2" id="dl2" src="images/info/dl2.png" onmouseover="dl2_mouseOver(this)" onmouseout="dl2_mouseOut(this)">
								</a>
								<a href="http://download.eyougame.com/lycs.apk" target="_blank">
									<img class="dl3" id="dl3" src="images/info/dl3.png" onmouseover="dl3_mouseOver(this)" onmouseout="dl3_mouseOut(this)">
								</a>
								<a href="" target="_blank">
									<img class="dl4" id="dl4" src="images/info/dl4.png" onmouseover="dl4_mouseOver(this)" onmouseout="dl4_mouseOut(this)">						
								</a>
						</td>
					</tr>
				</table>
			 </div>	
			<div class="container3">
				<div class="div1">
					<img class="icon" src="images/info/icon.png"/><img class="word" src="images/info/game-screenshot.png" />
				</div>	
				<div class="div1" style="margin-top:1% !important;">
					<img class="icon" style="padding-left:12%;" src="images/info/icon2.png"/><img class="word" src="images/info/game-information.png" />
				</div>
			</div>	
			<div class="container3_2">	
				<div class="div2">
					<div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1200px; height: 650px; overflow: hidden; visibility: hidden;">
						<!-- Loading Screen -->
						 <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
							<div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
							<div style="position:absolute;display:block;background:url('images/slideshow/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
						</div>
						<div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 1200px; height: 650px; overflow: hidden;">
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/001.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/001.jpg" />
								</a>
							</div>
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/002.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/002.jpg" />
								</a>
							</div>
							<div data-p="225.00" data-po="80% 55%" style="display: none;">
								<a href="images/slideshow/003.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/003.jpg" />
								</a>
							</div>	
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/004.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/004.jpg" />
								</a>
							</div>
							<div data-p="225.00" data-po="80% 55%" style="display: none;">
								<a href="images/slideshow/005.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/005.jpg" />
								</a>
							</div>	
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/006.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/006.jpg" />
								</a>
							</div>
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/007.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/007.jpg" />
								</a>
							</div>
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/008.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/008.jpg" />
								</a>
							</div>
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/009.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/009.jpg" />
								</a>
							</div>
							<div data-p="225.00" style="display: none;">
								<a href="images/slideshow/010.jpg"  class="image-popup-fit-width">
									<img data-u="image" src="images/slideshow/010.jpg" />
								</a>
							</div>
						</div>
						<!-- Bullet Navigator -->
						<div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="0">
							<!-- bullet navigator item prototype -->
							<div data-u="prototype" style="width:16px;height:16px;"></div>
						</div>
					</div>
					<script>
						jssor_1_slider_init();
					</script>

					<!-- #endregion Jssor Slider End -->
				</div>				
				<div class="div3">
					<table class="tbl2">
						<tr class="tr2">
							<td width="100%" style="padding:0%;">
								<div style="float:left; width:16%;padding:2% 1.5%;" id="btn1"><img style="margin-left:auto;margin-right:auto; width:75%;" src="images/information/news.png"/>
								</div>
								<div style="float:left;width:41%;padding:2% 0%;" id="btn2"><img style="margin-left:auto;margin-right:auto; width:75%;" src="images/information/annoucement.png"/>
								</div>
								<div style="float:left;width:16%;padding:2% 1.5%;" id="btn3"><img style="margin-left:auto;margin-right:auto; width:75%;" src="images/information/event.png"/>
								</div>
								<div style="float:left;width:18%;padding:2% 1.5%;" id="btn4"><img style="margin-left:auto;margin-right:auto; width:75%;" src="images/information/raider.png"/>
								</div>
							</td>
						</tr>
						<tr>
							<table class="tbl1">
								<tr>
									<td colspan="3"></td>
								</tr>
								<tr>
									
								</tr>
							</table>
						</tr>
					</table>	
				</div>
			</div>	
			<div class="container4">
				<div class="div1" style="margin-bottom:1% !important;">
					<img class="icon" src="images/data/icon.png"/><img class="word" src="images/data/game-data.png" />
				</div>
				<div class="div4">
					<table class="tbl1">
						<tr>
							<td width="8%" rowspan="2">
								<img class="left" src="images/data/left.png"/>
							</td>
							<td style="position:relative;width:84%;">
									<div class="data_pic"><img class="d_pic" id="d_pic" src="images/data/Newbie-Guide.jpg"></div>
									<div class="data_bg"><img class="d_bg" id="d_bg" src="images/data/bg_data.png"></div>						
							</td>
							<td width="8%" rowspan="2">
								<img class="right" src="images/data/right.png"/>
							</td>
						</tr>
						<tr>
							<td width="70%" >
								<div width="100%" style="margin-left:2%;margin-right:2%;">
									<div  style="float:left;width:25%;"><img class="databtn" id="Newbie_Guide" src="images/data/Newbie_Guide2.png" onmouseover="Newbie_Guide_mouseOver(this)" onmouseout="Newbie_Guide_mouseOut(this)"/>
									</div>
									<div  style="float:left;width:25%;"><img class="databtn" id="Hero_Intro" src="images/data/Hero_Intro.png" onmouseover="Hero_Intro_mouseOver(this)" onmouseout="Hero_Intro_mouseOut(this)"/>
									</div>
									<div  style="float:left;width:25%;"><img class="databtn" id="Master_Enchantment" src="images/data/Master_Enchantment.png" onmouseover="Master_Enchantment_mouseOver(this)" onmouseout="Master_Enchantment_mouseOut(this)"/>
									</div>
									<div  style="float:right;width:25%;"><img class="databtn" id="Special_System" src="images/data/Special_System.png" onmouseover="Special_System_mouseOver(this)" onmouseout="Special_System_mouseOut(this)"/>
									</div>
								</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="container3">
				<div class="div1" >
					<img class="icon" src="images/arraignment/icon.png"/><img class="word" src="images/arraignment/game-features.png" />
				</div>
				<div style="margin-top:2%;">
					<table class="tbl1">
						<tr class="popup-gallery">
							<td width="25%">
								<a href="images/arraignment/001.jpg" title=""><img class="screenshot1" src="images/arraignment/001.jpg" width="100%"></a>
							</td>
							<td width="25%">
								<a href="images/arraignment/002.jpg" title=""><img class="screenshot2" src="images/arraignment/002.jpg" width="100%"></a>
							</td>
							<td width="25%">
								<a href="images/arraignment/003.jpg" title=""><img class="screenshot3" src="images/arraignment/003.jpg" width="100%"></a>
							</td>
							<td width="25%">
								<a href="images/arraignment/004.jpg" title=""><img class="screenshot4" src="images/arraignment/004.jpg" width="100%"></a>
							</td>
						</tr>	
					</table>	
				</div>
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