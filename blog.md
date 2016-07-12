---
layout: single
title: THE BUHLER REPORT
tags: [philosophy, science, fun, politics]
author_profile: true

---

{% for post in site.posts %}

<div class="post">
    <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.date | date: "%-d %B %Y" }}</a></h3>
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <br>
    <br>
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

Welcome! I'm a husband and father 24/7, and a [philosopher](/) and classical [educator](/teaching) speaker, and [writer](http://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12/ref=sr_1_9?ie=UTF8&qid=1401301911&sr=8-9&keywords=sola+scriptura) during the 9-5. This site is a sandbox for developing an ecclectic set of projects to enlighten and entertain. Browse, leave a comment, or send me a note. Thanks for visiting.


## New stuff

{% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
