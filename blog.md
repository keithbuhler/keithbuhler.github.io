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
</ul>

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



<p><a id="IRP" target="_blank" href="http://www.readingintentionally.com"> <img src="/img/fun-books.jpg" alt="books" align="top"> </a>  </p><p>Reading Intentionally: My blog to  help people read more books. </p>

<br>

<p><a id="Inklings"  target="_blank" href="http://www.inklings.info"> <img src="/img/fun-lewis.jpg"> </a> </p><p>Inklings.Info: Ebooks, lists, and info on the Oxford Dons. </p>

<br>

<p><a id="Advice" target="_blank" href="http://www.advicetochristianphilosophers.com"> <img src="/img/fun-plantinga.jpg" > </a></p><p>  Advice to Christian Philosophers: Interviews with big name philosophers.</p>

<br>

<p><a id="Sola Scriptura" target="_blank" href="https://www.amazon.com/Sola-Scriptura-Dialogue-Keith-Buhler-ebook/dp/B009N27L12"> <img src="/img/fun-sola.jpg"></a> </p><p>Sola Scriptura: My Book for inquirers about Scripture, tradition, protestantism and Orthodoxy</p>

<br>

<p><a id="discussion" target="_blank" href="https://www.youtube.com/watch?v=yU9_t1sS6ws"> <img src="/img/fun-discussion.jpg" align="top">  </a></p><p> How to lead a discussion (video)</p>


## Other Projects

* [Art](/art): Drawings, sculptures, pumpkins, and more.
* [Bio](/bio): A little bit about me.
* [Lectures](/speaking): public speeches, conferences, and classes.
* [Meditation](/meditation): How to meditate (and why)
* [Paypal](https://www.paypal.me/keithbuhler): Through the magic of the internet, you can send me money(!) 
* [Philosophy is Science](http://www.philosophyisscience.com): Some provocative thoughts on the relationship (identity) between philosophy and other formal and natural sciences. 
* Social Media: [Facebook](http://www.facebook.com/kedbuhler/) and [Twitter](https://twitter.com/Keith_Buhler) 
* [Writings](/writings): Fiction, screenplays, verse, and satire. 
* [Writing tools](/writing-tools): Markdown, word count, and more
* [YouTube](https://www.youtube.com/channel/UCDxfeT2v6-kFM12T7zD-K9Q): My new channel with argumentative fallacies, philosophy talks, discussion advice, and more.
* Classical Education Resources -- coming soon
* Attention Span Project -- how long is your attention span? -- coming soon
