---
title: 
layout: single
permalink: 
header: 
    image: http://www.keithbuhler.com/images/buhlerreportbanner3.jpg
    caption: "Photo credit:[Patrick](http://trainguy-patrick.blogspot.com/2011/04/parthenon.html)"
excerpt: 
author_profile: true
comments: false
related: true
sidebar: 
      nav: 
---

{% for post in site.posts limit:5 %}
<div>
<center>
<h1><font color="gray"> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></font></h1>
<span class="time"> <font color="gray" font-size="2em"><i> {{ post.date | date: "%m.%d.%Y" }} / {{ post.categories | join: ' &middot; ' | prepend: '<span class="subheader">' | append: '</span>' }}{% if post.categories != empty and post.subheadline != NULL %} – {% endif %}{{ post.subheadline }} </i></font></span> 


</center>
<div class="post-content">{{ post.content | strip_html | truncatewords:200}}<br>
<a href="{{ post.url }}">Read more...</a><br><br>
</div>

</div>

<br>
<br>
<br>
<hr>


{% endfor %}


<br> 


### [Older Posts](/buhlerreport/year-archive) 


<br>


*The Buhler Report aims to enlighten and entertain by publishing timeless wisdom and the latest news about academic philosophy, classical education, politics, and more. Your comments are read and appreciated.* 

*All opinions contained in this site are the author's alone and do not represent the views of any organizations he is affiliated with.*


### 1. Subscribe

<br> 

<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
      /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="//keithbuhler.us1.list-manage.com/subscribe/post?u=97f6265af674b156b34528bd4&amp;id=22e9d219d4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <label for="mce-EMAIL">Subscribe here</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_97f6265af674b156b34528bd4_22e9d219d4" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->

<br> 

### 2. Comment

![Buhler](http://www.keithbuhler.com/images/buhler-oxford.JPG)

If you see something you like, something you hate, something you disagree with, post a comment and let's dialogue. Or share a post on your social media site to expand the conversation. 

Thanks for reading. 

<script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us1.list-manage.com","uuid":"97f6265af674b156b34528bd4","lid":"22e9d219d4"}) })
</script>

