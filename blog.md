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

<h4><i>Timeless philosophy and current events.</i></h4>

</center>

<br>

<hr>


{% for post in site.posts %}

<div class="post">
    <h4><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.date | date: "%-d %B %Y" }}</a></h4>
    <div class="post-excerpt">{{ post.excerpt }}</div>
    <br>
    <hr>
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

<p><a id="Buhler Report" target="_blank" href="http://www.keithbuhler.com/blog"> <img src="/favicon.ico" align="center"> </a></p><p> The Buhler Report: Thoughtful dialogue on timeless truths and current events.</p>

<br>

<p><a id="IRP" target="_blank" href="http://bit.ly/36BooksPerYear"> <img src="/img/fun-books.jpg" alt="books" align="center"> </a>  </p><p>Reading Intentionally: A self-help program designed for reading more books. </p>

<br>

<p><a id="Inklings"  target="_blank" href="http://www.inklings.info"> <img src="/img/fun-lewis.jpg" align="center" width="256"> </a> </p><p>Inklings.Info: Lists, ebooks, and information about the Oxford Dons. </p>

<br>

<p><a id="Advice" target="_blank" href="http://bit.ly/22o8m7j"> <img src="/img/alvin-plantinga.jpg" width="256" height="256" align="center"></a></p><p>  Advice to Christian Philosophers: Interviews with big name philosophers.</p>

<br>

<p><a id="Sola Scriptura" target="_blank" href="http://bitly.com/ScriptureOrTradition"> <img src="/img/fun-sola.jpg" align="center"></a> </p><p>Sola Scriptura: A philosophical dialogue for inquirers about Scripture, tradition, protestantism and Orthodoxy</p>

<br>

<p><a id="discussion" target="_blank" href="https://www.youtube.com/watch?v=yU9_t1sS6ws"> <img src="/img/fun-discussion.jpg" align="center">  </a></p><p> How to lead a discussion (video)</p>

<p><a id="science" target="_blank" href="http://www.philosophyisscience.com"> <img src="http://mrnussbaum.com/images/isaac_newton.jpg" width="256" height="286" align="center" width="">  </a></p><p> Philosophy is Science: Provocative thoughts on the relationship (identity) between philosophy and other formal and natural sciences.  </p>

<br>


<p><a id="art" target="_blank" href="http://www.keithbuhler.com/art"> <img src="http://keithbuhler.com/img/fun-wither-small.jpg" width="256" height="240" align="center">  </a></p><p> Drawings, sculptures,  pumpkins, and other artistic creations  </p>


</div>

## More Fun Things

* [Bio](/bio): A little bit about me.
* [Lectures](/speaking): public speeches, conferences, and classes.
* [Meditation](/meditation): How to meditate (and why)
* [Paypal](https://www.paypal.me/keithbuhler): Through the magic of the internet, you can send me money(!) 
* [Writings](/writings): Fiction, screenplays, verse, and satire. 
* [YouTube](https://www.youtube.com/channel/UCDxfeT2v6-kFM12T7zD-K9Q): My new channel with argumentative fallacies, philosophy talks, discussion advice, and more.
* Classical Education Resources -- coming soon

* [Philosophy student home](/philosophy)
* [Professional home page](/)