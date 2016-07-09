---
layout: posts
title: The Buhler Report
tags: philosophy, science, fun
comments: false
--- 


<center>

<h1> Welcome to ... </h1>

<img src="/img/TheBuhlerReport1.png" align="center" width="500" height="130">

<br>

<h4><i>Timeless philosophy and current events.</i></h4>

</center>

<br>

<hr>


{% for post in site.posts %}

<div class="post">
    <h1><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.date | date: "%-d %B %Y" }}</a></h1>
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <br>
    <hr>
</div>

{% endfor %}



<br>
<br>

## Posts

{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}



<br>

## About Buhler

Thanks for visiting!

<img src="/img/midair-small.jpg" alt="Mid-air" align="right" hspace="5"> 

Hi! Welcome to my personal site. I'm a husband, father, [philosopher](/), [educator](/teaching), speaker, and [writer](http://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12/ref=sr_1_9?ie=UTF8&qid=1401301911&sr=8-9&keywords=sola+scriptura). This site is a sandbox for an ecclectic bunch of projects I'm working on. Feel free to explore. (You can check out my [philosophy site](/) for my academic work.) 

## Other Fun Projects


* Go to [philosophy student home](/philosophy)
* Go to [professional home page](/)