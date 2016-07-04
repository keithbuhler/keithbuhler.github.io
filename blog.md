---
layout: posts
title: Buhler Report
--- 


<center>

<h1> Welcome to ... </h1>

<img src="/img/TheBuhlerReport1.png" align="center">

<i>Thoughtful dialogue on timeless philosophy and current events.</i>

</center>


## Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>




{% for post in paginator.posts %}
    <div class="post">
    <h2><a class="post-link" href="{{ post.url}}">{{ post.title }}</a></h2>
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

