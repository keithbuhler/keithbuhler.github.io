---
layout: posts
title: The Buhler Report
tags: 
--- 


<center>

<h1> Welcome to ... </h1>

<img src="/img/TheBuhlerReport1.png" align="center" width="500" height="130">

<br>

<h2><i>Philosophical reflection on timeless truths and current events.</i></h2>

</center>


## Posts

<ul class="posts">
  {% for post in site.posts %}
  <li>
  <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>


<ul class="posts">

{% for post in paginator.posts %}
    <div class="posts">
      <h3><a class="post-link" href="{{ post.url}}">{{ post.title }}</a></h3>
      <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
      <div class="post-content">{{ post.content }}</div>
    </div>

{% endfor %}


<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    {% if paginator.previous_page ==1 %}
      <a href="{{ site.url }}" class="previous">Newer Posts</a>
    {% else %}
      <a href="/page{{ paginator.previous_page }}" class="previous">Newer Posts</a>
    {% endif %}
  {% endif %}
  {% if paginator.next_page %}
    <a href="/page{{ paginator.next_page }}" class="next">Older Posts</a>
  {% endif %}
</div>

<br>

<br>

