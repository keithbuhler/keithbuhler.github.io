    <div id="comments" class="comments-area">
    <div class="showDisqus">Show Comments</div>
    <div id="disqus_thread"></div>
    </div>



    $j=jQuery.noConflict();

$j(document).ready(function() {
	$j('.showDisqus').on('click', function(){   // click event of the show comments button
		var disqus_shortname = 'enter_your_disqus_user_name';  // Enter your disqus user name

                // ajax request to load the disqus javascript
		$j.ajax({
	         type: "GET",
	         url: "http://" + disqus_shortname + ".disqus.com/embed.js",
	         dataType: "script",
	         cache: true
	     });

	        $j(this).fadeOut();  // remove the show comments button
	});
});
 