---
layout: page
title: 
permalink: /blog
header:
      image: http://www.keithbuhler.com/images/keithat-trinity-speaking.jpg
related: 
---

<br>


{% for post in site.posts limit:10 %}
<div>
<center>
<h1><font color="gray"> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></font></h1>
<span class="time"> <font color="gray" font-size="2em"><i> {{ post.date | date: "%m.%d.%Y" }} / {{ post.categories | join: ' &middot; ' | prepend: '<span class="subheader">' | append: '</span>' }}{% if post.categories != empty and post.subheadline != NULL %} – {% endif %}{{ post.subheadline }} </i></font></span> 
</center>
<br>
{{ post.content | markdownify | split:'<!--more-->' | first }}
{% if post.content contains '<!--more-->' %}
<a href="{{ post.url | prepend: site.baseurl }}"><i>Read the rest... </i></a><br><br>
{% endif %}

</div>

<br>
<br>
<br>
<br>
<br>

{% endfor %}


<br> 


<center>
<h2> Popular Posts</h2> 
</center>
<br> 


- [Interview with English professor and CS Lewis scholar Louis Markos](http://www.keithbuhler.com/markos) *Real virtue wins out every time.*

- [**Interview with pastor, author, and classical education pioneer Douglas Wilson**](http://www.keithbuhler.com/classical%20education/2017/07/13/interview-douglas-wilson.html) *PITTSBURGH – June 24, 2017. About the future of classical education. It was filmed at the Association of Classical Christian Schools national conference, “Repairing the Ruins.”*


- [Interview with Christian philosopher Eric Silverman](http://www.keithbuhler.com/philosophy/2017/11/24/silverman-interview.html) 

- [**"Life is Suffering", and other Jordan Peterson quotations**](http://www.keithbuhler.com/philosophy/2017/04/25/jordan-peterson-quotes.html) *We don’t understand the world. I do think the world is more like a musical masterpiece than it is like anything else. And things are oddly connected.*


- [**Reflections on Graduate Student Stipends**](http://www.keithbuhler.com/buhlerreport/philosophy/2017/02/23/Reflections-on-Philosophy-Graduate-School-Stipends.html) -- *Now that I am a postdoc scholar at the University of Kentucky (Go ‘Cats!), I am reflecting back on my experience as a Teaching Assistant. One thing that was hard to discover, perhaps understandably, was the expected “stipend” of graduate teaching assistants at other universities I applied to. For what it’s worth, I saved the information about our stipend. My department preferred that it not be public. But count your lucky stars you aren’t as poor as I was in 2012.*


-  [**This Classic Text Explains why Classical Education is Best**](http://www.keithbuhler.com/buhlerreport/yalereport-post/) -- *If you haven’t read the Yale Report, it is very good. The “Yale Report of 1828” is one of the “most influential documents in the history of American higher education” according to R.J. O’Hara. It is still a pleasure to read, and its influence should not wane.*







<center>
<h2> <a href="/categories"> Categories </a> </h2>
</center>
<br>

* [**Classical Education**](/categories/#Classical education-ref)
* [**Philosophy**](/categories/#Philosophy-ref)
* [**Politics**](/categories/#Politics-ref)





<center>
<br>
<h1> <a href="/archive"> Click here for all posts, organized by date </a> </h1>
<br>
<br>

</center>





<br>

---

*The opinions expressed on this site are the author’s alone and do not represent the views of any organizations he is affiliated with.*

<!-- Code for posting just an excerpt (with no image) of each post. Put under heading. {% if post.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 160 }}</p>{% endif %}-->

