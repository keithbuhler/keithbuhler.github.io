---
layout: fun
title: Buhler Report

--- 

# Welcome to...

<center>

<img src="/img/TheBuhlerReport1.png" align="center">

Thoughtful dialogue about philosophy, Christianity, science, and politics. 

</center>

## Recent

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>




## Archive

{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}    
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>

{% endfor %}



<p>
<p>
<p>

