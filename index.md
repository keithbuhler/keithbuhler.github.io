---
layout: page
title: Welcome!
permalink: 
header:
      image: http://www.keithbuhler.com/images/oxford4.png
related: 
---

<br>

<img src="http://www.keithbuhler.com/images/keith_face.jpg" align="left" hspace="20" border="1px">


I'm Dr. Keith Buhler, a philosopher and classical educator based out of Los Angeles. 

Welcome to my online hub for sharing new projects, connecting with people, and pursuing virtue,  wisdom, truth, and beauty together.

On this site, you can follow my blog, the [*The Buhler Report*](/blog) for dialog about timeless wisdom and  current events.  The Report features curated links, brief thoughts, and longer essays on the important themes of [classical education](/categories/#Classical education-ref), [academic philosophy](/categories/#Philosophy-ref), and [conservative politics](/categories/#Politics-ref). 

You can also learn more [about me](/about/) and my [academic work in virtue ethics](/cv/),  consider [how](philosophy-class) and [why](/philosophymajor) to study philosophy. Finally, you can explore a bunch of fun stuff in the [sandbox](/sandbox/) (including how to build a website like this for free). Thanks for reading. 

<br>
 

<center>
<h2> Most Recent Post  </h2>
</center>

<br>

{% for post in site.posts limit:1 %}

<div>
<center>
<h3><font color="gray"> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></font></h3>
<span class="time"> <font color="gray" font-size="2em"><i> {{ post.date | date: "%m.%d.%Y" }} / {{ post.categories | join: ' &middot; ' | prepend: '<span class="subheader">' | append: '</span>' }}{% if post.categories != empty and post.subheadline != NULL %} – {% endif %}{{ post.subheadline }} </i></font></span> 
</center>
<br>
{{ post.content | markdownify | split:'<!--more-->' | first }}
{% if post.content contains '<!--more-->' %}
<a href="{{ post.url | prepend: site.baseurl }}"><i>Read the rest... </i></a><br><br>

{% endif %}

</div>
{% endfor %}
<br> 

