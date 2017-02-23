---
layout: archive
permalink: /month-archive/
title: "Posts by Month"
author_profile: true
---


<h1>Archive of posts from {{ page.date | date: "%B %Y" }}</h1>

<ul class="posts">
{% for post in page.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>