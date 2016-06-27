---
layout: fun
title: Buhler Report
--- 

# Welcome to...

<center>

<img src="/img/TheBuhlerReport1.png" align="center">

Thoughtful philosophical dialogue. Occasional bursts of Star Wars.

</center>


<div class="home">

{% for post in paginator.posts %}

<div class="post">
    <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
    <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="post-content">{{ post.content }}</div>
    <div class="source">Source: 
        <a class="source-link" href="{{ post.path | remove: '/Users/KEDB/Documents/keithbuhler.com/' | prepend: 'https://raw.githubusercontent.com/keithbuhler/keithbuhler.com/' }}">
            md
        </a>
        | Permalink: 
        <a class="permalink" href="{{ post.url | prepend: site.baseurl }}">
            html
        </a>
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

