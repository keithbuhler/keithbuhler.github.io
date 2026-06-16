---
layout: page
title: Welcome | 
permalink: 
header:
      image: https://www.keithbuhler.com/images/kb-keith-at-trinity-speaking.jpg
---

{% for post in site.posts limit:1 %}
<div>
<center>
<h1><font color="gray"> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></font></h1>
<span class="time"> <font color="gray" font-size="2em"><i> {{ post.date | date: "%m.%d.%Y" }} / {{ post.categories | join: ' &middot; ' | prepend: '<span class="subheader">' | append: '</span>' }}{% if post.categories != empty and post.subheadline != NULL %} – {% endif %}{{ post.subheadline }} </i></font></span> 
</center>
<br>
{{ post.content | markdownify | split:'<!--more-->' | first }}
{% if post.content contains '<!--more-->' %}
<a href="{{ post.url | prepend: site.baseurl }}"><i>Read the rest... </i></a><br><br>
{% endif %}

</div>