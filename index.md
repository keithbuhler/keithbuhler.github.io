---
layout: page
title: 
permalink: 
header:
      image: http://www.keithbuhler.com/images/oxford4.png
related: 
---


Welcome to the online home of Dr. Keith Buhler, a philosopher and classical educator based out of Los Angeles.

On this site, you can follow [*The Buhler Report*](/blog) for reflections on timeless wisdom and coverage of current events.  The blog provides links,  brief thoughts, and longer essays mainly focusing on [classical education](/categories/#Classical education-ref), [academic philosophy](/categories/#Philosophy-ref), and [conservative politics](/categories/#Politics-ref). 

You can also learn more about [Dr. Buhler](/about/) and his [academic work](/cv/), learn [how](philosophy-class) and [why](/philosophymajor) to study philosophy, or explore other fun projects in the [sandbox](/sandbox/). Thanks for reading. 

<br>
 

<h2> Latest Post </h2>

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
<center>
<br> 

