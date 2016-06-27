---
layout: fun
title: Buhler Report
--- 

# Welcome to...

<center>

<img src="/img/TheBuhlerReport1.png" align="center">

Constant streams of philosophical dialogue. Occasional bursts of Star Wars.

</center>


{% for post in paginator.posts %}
    <div class="post">
    <h2><a class="post-link" href="{{ post.url}}">{{ post.title }}</a></h2>
      <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
        <div class="post-content">{{ post.content }}</div>
        </div>
      </div>

{% endfor %}



## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>



<p>
<p>
<p>

