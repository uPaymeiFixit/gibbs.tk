<!doctype html>
<html class="no-js">

	<head>
		<meta charset="utf-8"/>
		<title>uPaymeiFixit | Home</title>
		
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

		<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="js/jquery.coda-slider-2.0.js"></script>
		<script type="text/javascript">
			$().ready(function() {
				$('#coda-slider-1').codaSlider();
			});
		</script>
		<script type="text/javascript">
	        $().ready(function() {
	            $("a.xtrig#2").click(function() {
	                $("#panel2").load("includes/page.html");
	            });
	            $("a.xtrig#3").click(function() {
	                $("#panel3").load("includes/portfolio.php");
	            });
	            $("a.xtrig#4").click(function() {
	                $("#panel4").load("includes/contact.html");
	            });
	        });
     	</script>
     	<link rel="stylesheet" href="css/coda-slider-2.0.css" type="text/css" media="screen" />
		
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
		

	</head>
	
	<body lang="en">
		
		<?php $page='home'; include 'includes/header.php'; ?>


		<div class="coda-slider-wrapper">
			<div class="coda-slider preload" id="coda-slider-1">
				<div class="panel">
					<div id="panel1" class="panel-wrapper">
						<?php include 'includes/index.html'; ?>
					</div>
				</div>
				<div class="panel">
					<div id="panel2" class="panel-wrapper" >
						<?php //include 'includes/page.html'; ?>
					</div>
				</div>

				<div class="panel">
					<div id="panel3" class="panel-wrapper">
						<?php //include 'includes/portfolio.php'; ?>
					</div>
				</div>

				<div class="panel">
					<div id="panel4" class="panel-wrapper">
						<?php //include 'includes/contact.html'; ?>
					</div>
				</div>

			</div><!-- .coda-slider -->
		</div><!-- .coda-slider-wrapper -->


		<?php include 'includes/footer.html'; ?>

	</body>
	
</html>