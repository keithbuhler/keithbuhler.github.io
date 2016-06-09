---
layout: fun
title: Buhler Report

--- 

# Welcome to the Buhler Report

<img src="/img/TheBuhlerReport1.png" align="center">

Dialogue on academic philosophy, the Christian religion, modern science, and conservative politics. 



{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}    
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>

{% endfor %}


#### Draft 1 Philosophy, science, politics, and religion from the perspective of calm reason and vibrant faith. 

#### Draft 2 Logical, light-hearted, enlightening. 

-----

