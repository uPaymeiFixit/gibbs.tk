<!doctype html>
<html class="no-js">

	<head>
		<meta charset="utf-8"/>
		<title>uPaymeiFixit | Work</title>
		
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link rel="stylesheet" media="all" href="css/style.css"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<!-- Adding "maximum-scale=1" fixes the Mobile Safari auto-zoom bug: http://filamentgroup.com/examples/iosScaleBug/ -->
		
		
		<!-- JS -->
		<!--<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>-->
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
	
		<?php $page='work'; include 'includes/header.php'; ?>
		
		<!-- MAIN -->
		<div id="main">	
			<div class="wrapper clearfix">
			
				
				<h2 class="page-heading"><span>WORK</span></h2>


				<!--THE PAGES NEED CONVERTED TO PJAX-->
				<?php

					$page = $_GET["page"];
					include 'projects-page'.$page.'.html';

				?>



				<script>
					$(".pager").click(function () {
					      $('.portfolio-thumbs').fadeOut(1000);
					});
				</script>

				<!-- pager -->
        		<ul class="pager">
					<li class="paged">Page <?php echo $page ?> of 3</li>
					<li <?php if ($page == 1){?>class="active"<?php }?>><a href="portfolio.php?page=1">1</a></li>
					<li <?php if ($page == 2){?>class="active"<?php }?>><a href="portfolio.php?page=2">2</a></li>
					<li <?php if ($page == 3){?>class="active"<?php }?>><a href="portfolio.php?page=3">3</a></li>.
				</ul>
				<div class="clearfix"></div>
	        	<!-- ENDS pager -->
		
	        	
			</div>
		</div>
		<!-- ENDS MAIN -->
		
		<?php include 'includes/footer.html'; ?>
					
	</body>
	
</html>