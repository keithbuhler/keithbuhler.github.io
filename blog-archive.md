---
layout: archive
comments: false
header:
  image: blog-header-uk.jpg

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



## All Posts by Date

{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
