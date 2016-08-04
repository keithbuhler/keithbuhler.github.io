---
title: 
layout: post
permalink: /blog/
header:
  image: 
---

<img src="/images/blog-header-uk-large.jpg">

<center> 

<h1> THE BUHLER REPORT </h1>

<i> Thoughtful reflection on timeless truths and current events.</i>

</center>

{% for post in site.posts %}

<div class="post">
    
    <h2> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
    <span class="time">{{ post.date | date: "%-d %B %Y" }}</span> 
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <hr>
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

<img src="/images/keithbuhler-bw-small.png" align="left"> Thanks for visiting. I'm a [philosopher,](/) classical [educator,](/teaching) and [writer](http://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12/ref=sr_1_9?ie=UTF8&qid=1401301911&sr=8-9&keywords=sola+scriptura). The Buhler Report is in development. My goal is to provide thoughtful dialogue on timeless wisdom and current events to enlighten and entertain you on your journey. Browse, leave a comment, or send me a note. Thanks for visiting.


## New stuff

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
