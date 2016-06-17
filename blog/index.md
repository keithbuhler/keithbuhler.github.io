---
layout: fun
title: Buhler Report

--- 

# Welcome to...

<img src="/img/TheBuhlerReport1.png" align="center">

<center>
Thoughtful dialogue about philosophy, Christianity, science, and politics. 

</center>



{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}    
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>

{% endfor %}



