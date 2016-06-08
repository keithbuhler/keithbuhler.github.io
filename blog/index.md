---
layout: post
title: Buhler Report

--- 

# Welcome to the Buhler Report

Philosophy, science, politics, and religion from the perspective of calm reason and vibrant faith. 



{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}    
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}