<!doctype html>
<html class="no-js">

	<head>
		<meta charset="utf-8"/>
		<title>ZENI</title>
		
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link rel="stylesheet" media="all" href="css/style.css"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<!-- Adding "maximum-scale=1" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->
		
		
		<!-- JS -->
		<script src="js/jquery-1.6.4.min.js"></script>
		<script src="js/css3-mediaqueries.js"></script>
		<script src="js/custom.js"></script>
		<script src="js/tabs.js"></script>
		
		<!-- Tweet -->
		<link rel="stylesheet" href="css/jquery.tweet.css" media="all"  /> 
		<script src="js/tweet/jquery.tweet.js" ></script> 
		<!-- ENDS Tweet -->
		
		<!-- superfish -->
		<link rel="stylesheet" media="screen" href="css/superfish.css" /> 
		<script  src="js/superfish-1.4.8/js/hoverIntent.js"></script>
		<script  src="js/superfish-1.4.8/js/superfish.js"></script>
		<script  src="js/superfish-1.4.8/js/supersubs.js"></script>
		<!-- ENDS superfish -->
		
		<!-- prettyPhoto -->
		<script  src="js/prettyPhoto/js/jquery.prettyPhoto.js"></script>
		<link rel="stylesheet" href="js/prettyPhoto/css/prettyPhoto.css"  media="screen" />
		<!-- ENDS prettyPhoto -->
		
		<!-- poshytip -->
		<link rel="stylesheet" href="js/poshytip-1.1/src/tip-twitter/tip-twitter.css"  />
		<link rel="stylesheet" href="js/poshytip-1.1/src/tip-yellowsimple/tip-yellowsimple.css"  />
		<script  src="js/poshytip-1.1/src/jquery.poshytip.min.js"></script>
		<!-- ENDS poshytip -->
		
		<!-- GOOGLE FONTS -->
		<link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
		
		<!-- Flex Slider -->
		<link rel="stylesheet" href="css/flexslider.css" >
		<script src="js/jquery.flexslider-min.js"></script>
		<!-- ENDS Flex Slider -->
		
		<!-- Less framework -->
		<link rel="stylesheet" media="all" href="css/lessframework.css"/>
		
		<!-- modernizr -->
		<script src="js/modernizr.js"></script>
		
		<!-- SKIN -->
		<link rel="stylesheet" media="all" href="css/skin.css"/>
		
		<!-- reply move form -->
		<script src="js/moveform.js"></script>
		

	</head>
	
	<body lang="en">
	
		<?php $page='contact'; include 'includes/header.php'; ?>
		
		<!-- MAIN -->
		<div id="main">	
			<div class="wrapper clearfix">
			
				
				<h2 class="page-heading"><span>CONTACT</span></h2>	
	        	
				<!-- page content -->
	        	<div id="page-content" class="clearfix">
					
				<!-- Map -->
				<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true" /></script>
				<script type="text/javascript">
					function initialize() {
						var latlng = new google.maps.LatLng(34, -118);
						var myOptions = {
						  zoom: 7,
						  center: latlng,
						  mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					var map = new google.maps.Map(document.getElementById("map_canvas"),
					    myOptions);
					}
				</script>
				
				<div id="map_canvas"></div>
				<!-- ENDS Map -->
				
				
	        	
	        	
					<div class="map-content">
						Located in southern California. 
					</div>
					
					<!-- form -->
					<script type="text/javascript" src="js/form-validation.js"></script>
					<form id="contactForm" action="#" method="post">
						<h2 class="heading">Contact me using this form</h2>
						<p> If you have any requests, concerns, or questions, you can contact me using the form below.</p>
						<fieldset>
							<div>
								<input name="name"  id="name" type="text" class="form-poshytip" title="Enter your full name" />
								<label>Name</label>
							</div>
							<div>
								<input name="email"  id="email" type="text" class="form-poshytip" title="Enter your email address" />
								<label>Email</label>
							</div>
							<div>
								
								<input name="web"  id="web" type="text" class="form-poshytip" title="Enter your website" />
								<label>Website</label>
							</div>
							<div>
								<textarea  name="comments"  id="comments" rows="5" cols="20" class="form-poshytip" title="Enter your comments"></textarea>
							</div>
							
							<!-- send mail configuration -->
							<input type="hidden" value="uPaymeiFixit@gmail.com" name="to" id="to" />
							<input type="hidden" value="Enter the subject here" name="subject" id="subject" />
							<input type="hidden" value="send-mail.php" name="sendMailUrl" id="sendMailUrl" />
							<!-- ENDS send mail configuration -->
							
							<p><input type="button" value="Send" name="submit" id="submit" /> <span id="error" class="warning">Message</span></p>
						</fieldset>
						
					</form>
					<p id="sent-form-msg" class="success">Success. Thanks for your comments.</p>
					<!-- ENDS form -->
					
					
					<!-- contact sidebar -->
		        	<aside id="contact-sidebar">
		        		<div class="block">
			        		<h4>Contact Information</h4>
			        		<p>You can contact me directly by email or phone if you have any requests, concerns, or questions.</p>
			        		
			        		<ul class="address-block">
			        			<li class="address">Located in California</li>
			        			<li class="mobile">+1 (281) 954-4227</li>
			        			<li class="tags"><a href="http://globalitacademy.com/">globalitacademy.us</a></li>
			        			<li class="email"><a href="mailto:uPaymeiFixit@gmail.com">uPaymeiFixit@gmail.com</a></li>
			        		</ul>
			        		
		        		</div>	        	
		        	</aside>
		        	<div class="clearfix"></div>
					<!-- ENDS contact-sidebar -->
					
				</div>	        	
	        	<!--  page content-->
	        	
	        	

	        	
			</div>
		</div>
		<!-- ENDS MAIN -->
		
		<?php include 'includes/footer.html'; ?>
		
		<!-- Start google map -->
		<script>initialize();</script>	
	</body>
	
</html>