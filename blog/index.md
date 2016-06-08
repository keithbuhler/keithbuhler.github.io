---
layout: post
title: Buhler Report

--- 

# Welcome to the Buhler Report



<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
    <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
    <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="post-content">{{ post.content }}</div>

    </li>
  {% endfor %}


</ul>