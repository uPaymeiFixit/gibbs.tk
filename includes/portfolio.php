		<!-- MAIN -->
		<div id="main">	
			<div class="wrapper clearfix">
			
				
				<h2 class="page-heading"><span>WORK</span></h2>


				<!--THE PAGES NEED CONVERTED TO PJAX-->
				<?php

					//$page = $_GET["page"];
					//include 'projects-page'.$page.'.html';

					include 'projects-page1.html';

				?>



				<script>
					$(".pager").click(function () {
					      $('.portfolio-thumbs').fadeOut(1000);
					});
				</script>

				<!-- pager -->
        		<ul class="pager">
					<li id="1" class="paged">Page <?php echo $page ?> of 3</li>
					<li id="2" <?php if ($page == 1){?>class="active"<?php }?>><a href="portfolio.php?page=1">1</a></li>
					<li id="3" <?php if ($page == 2){?>class="active"<?php }?>><a href="portfolio.php?page=2">2</a></li>
					<li id="4" <?php if ($page == 3){?>class="active"<?php }?>><a href="portfolio.php?page=3">3</a></li>.
				</ul>
				<div class="clearfix"></div>
	        	<!-- ENDS pager -->
		
	        	
			</div>
		</div>
		<!-- ENDS MAIN -->