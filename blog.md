---
layout: splash
title: THE BUHLER REPORT
tags: [philosophy, science, fun, politics]
author_profile: true
header:
  image: https://keithbuhler.com/img/pexels-greek.jpg


---

<center> 

<h1> THE BUHLER REPORT </h1>

<i> To enlighten and entertain. Timeless wisdom and current events.</i>

</center>

----

{% for post in site.posts %}

<div class="post">
    
    <h2> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
    <span class="time">{{ post.date | date: "%-d %B %Y" }}</span> 
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <br>
    <br>
</div>

{% endfor %}



<br>
<br>

## All Posts by Date

{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}


<br>

## About Buhler

Welcome! I'm a husband and father 24/7. During the 9-5 I'm a [philosopher](/) and classical [educator,](/teaching) and [writer](http://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12/ref=sr_1_9?ie=UTF8&qid=1401301911&sr=8-9&keywords=sola+scriptura). This site is under development. The eventual goal is to host an ecclectic set of projects to enlighten and entertain. Browse, leave a comment, or send me a note. Thanks for visiting.


## New stuff

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
