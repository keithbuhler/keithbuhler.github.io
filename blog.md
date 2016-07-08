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

<div class="home">

{% for post in paginator.posts %}
<div class="post">
    <h2><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
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

### Most recent post

# Writing Tools #


Nothing is wrong with using Microsoft Word or Apple Pages; at the end of the day, you just need a reliable set of tools with which to capture and publish thoughts. At the same time, there is so much innovative software out there. 

As an academic and a writer, I enjoy exploring new software and workflow processes. Here are a few tools I have used or use regularly to unlock my imagination and productivity. The tools are organized from Easy to Hard. 


## Easy ##

![Drive](http://its.ucsc.edu/google/images/drive.png?t=0)

* Ease 5/5, Usefulness 3/5: [Google Drive (Formerly Google Docs)](https://drive.google.com/) Google Drive started out as an alternative to Dropbox in that it mirrors itself from your hard drive onto the cloud. (And every file change is auto-synced.) Pretty soon though, the market got crowded in the cloud backup business. So Google added Docs, Sheets, Forms, Slides, and Drawings apps to make the utility indispensable. "Docs" is 10x better than Word or Pages; Sheets is 10x easier and more intuitive than Excel; Slides is 10x simpler and more intuitive than Powerpoint or Keynote, and Drawing is 10x better than "Microsoft Paint". And *all* these files are automatically in the cloud. I've used Slides, for example, in my [philosophy](/teaching) classrooms or conferences across the country and never have to bother with thumb drives or plugging in my own laptop or any of that nonsense. Furthermore, nothing in the Office Suite that I've used corresponds to Google Forms, which I've used to create surveys for class and [for fun.](http://keithbuhler.com/cs-lewis-influence-survey) Drive does almost everything I need it to do. 

![Scrivener](http://img.informer.com/icons/png/48/3499/3499419.png)

[Read more](http://keithbuhler.com/writing-tools)


## Posts

<ul class="posts">
  
  {% for post in site.posts %}
  <li>
  <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}

</ul>



<br>

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
