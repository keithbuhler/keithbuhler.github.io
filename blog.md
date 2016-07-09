---
layout: posts
title: The Buhler Report
tags: philosophy, science, fun
comments: false
--- 


<center>

<h1> Welcome to ... </h1>

<img src="/img/TheBuhlerReport1.png" align="center" width="500" height="130">

<br>

<h3><i>Thoughtful dialogue on timeless truths and current events.</i></h3>

</center>

<br>

<hr>


{% for post in site.posts %}

<div class="post">
    <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <br>
    <hr>
</div>

{% endfor %}

<br>
<br>

## Archive

{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  <li><span class="time">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}



<br>

## Projects

<p><a id="IRP" target="_blank" href="http://www.readingintentionally.com"> <img src="/img/fun-books.jpg" alt="books" align="top"> </a>  </p><p>Reading Intentionally: A self-help program designed for reading more books. </p>

<br>

<p><a id="Inklings"  target="_blank" href="http://www.inklings.info"> <img src="/img/fun-lewis.jpg"> </a> </p><p>Inklings.Info: Lists, ebooks, and information about the Oxford Dons. </p>

<br>

<p><a id="Advice" target="_blank" href="http://www.advicetochristianphilosophers.com"> <img src="/img/fun-plantinga.jpg" > </a></p><p>  Advice to Christian Philosophers: Interviews with big name philosophers.</p>

<br>

<p><a id="Sola Scriptura" target="_blank" href="https://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12"> <img src="/img/fun-sola.jpg"></a> </p><p>Sola Scriptura: A philosophical dialogue for inquirers about Scripture, tradition, protestantism and Orthodoxy</p>

<br>

<p><a id="discussion" target="_blank" href="https://www.youtube.com/watch?v=yU9_t1sS6ws"> <img src="/img/fun-discussion.jpg" align="top">  </a></p><p> How to lead a discussion (video)</p>

<br>

* Go to [fun stuff](/fun)
* Go to [philosophy student home](/philosophy)
* Go to [professional home page](/)



<div class="home">

{% for post in paginator.posts %}
<div class="post">
    <h4><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
      <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="post-content">{{ post.content }}</div>
    <div class="source">Source: 
        | Permalink: 
        <a class="permalink" href="{{ post.url | prepend: site.baseurl }}">
            html
        </a>
    </div>

</div>

{% endfor %}

</div>