---
layout: page
title: Welcome | 
permalink: 
header:
      image: http://www.keithbuhler.com/images/keith-at-trinity-speaking.jpg
---

Thank you for visiting. 

I'm Keith Buhler, and this site is a guide to my professional activity and personal interests. 

## My work

I'm currently the founding headmaster of an Orthodox Christian classical academy in California. In addition, I serve on the board of another classical school. I am an [Alcuin Fellow](http://www.alcuinfellowship.com/) (West Coast chapter).  My academic research focuses on virtue ethics and naturalism. And in business I help others to leveraging real estate assets to generate passive income and long-term wealth. 

You may want to check out: 

* my [current projects](/projects) in philosophy, education, and arts
* my [academic research](/research) to dialog about virtue and wisdom 
* [the "Buhler Report"](/blog), a blog with recent reflections on  sundry topics such as books, culture, parenting, movies, politics, and living intentionally
* The [Classical Academy Podcast](https://www.trinityclassicalacademy.com/about/podcast), which offers a friendly introduction to classical education.


## My Mission

My life mission is to help people of all ages to pursue virtue and wisdom.  The pursuit of wisdom informs my leadership, teaching, business and other activities.  

I believe, with Aristotle and with Christ, that real virtue is possible -- but it requires hard work and practice. We *all* need to try out practical skills that bring about human flourishing, although we may often fail. *Not trying* guarantees a life of vanishing meaning, purpose, joy, and goodness. Some of the skills that bring about human flourishing include listening well, being proactive, self-discipline, prayer, fighting for justice, serving others, prayer, forgiveness, quietness and solitude, gratitude, and other spiritual disciplines. 



## Previous Activity

I've developed and implementied a [high school philosophy courses](http://www.keithbuhler.com/trinity-philosophy/) and Great Books courses, introducing students to Plato, Aristotle, Scripture, and other books in the Great Tradition.

In 2018, I gave a lecture entitled ["Philosophy for Everyone" at Trinity Classical Academy,](https://www.youtube.com/watch?v=SMvlTUVFf4M&t=137s) introducing our community to the nature and value of philosophy. 
<br> 

Around the same time, I had the privilege of [interviewing Dr. Robert George of Princeton](https://www.youtube.com/watch?v=tfDdJiyDnaY&t=10s) for my YouTube channel. 

Before that, I did audio interviews with [Eric Silverman, David Bradshaw, and JP Moreland](http://www.advicetochristianphilosophers.com/) for my Christian Philosophers podcast.


<br>


## Latest Post


<br>


{% for post in site.posts limit:1 %}

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

{% endfor %}


<br> 


<br>

## Popular Posts


- [Interview with English professor and CS Lewis scholar Louis Markos](http://www.keithbuhler.com/markos) *Real virtue wins out every time.*

- [Interview with Christian philosopher Eric Silverman](http://www.keithbuhler.com/philosophy/2017/11/24/silverman-interview.html) *How Christians can succeed in academic philosopher. How a thoughtful reflection on Christianity's view of love inspires his ethical work.*

- [**"Life is Suffering", and other Jordan Peterson quotations**](http://www.keithbuhler.com/philosophy/2017/04/25/jordan-peterson-quotes.html) *"We don’t understand the world. I do think the world is more like a musical masterpiece than it is like anything else. And things are oddly connected."*

-  [**This Classic Text Explains why Classical Education is Best**](http://www.keithbuhler.com/buhlerreport/yalereport-post/) -- *If you haven’t read the Yale Report, it is very good. The “Yale Report of 1828” is one of the “most influential documents in the history of American higher education” according to R.J. O’Hara. It is still a pleasure to read, and its influence should not wane.*




<br>



## Prior Work

In 2017, completed my dissertation in philosophy, a book length defense of ethical naturalism. It is titled [Becoming What We Are](/phd). It defends Aristotle's ethics in light of scientific naturalism -- and offers a tendentious definition of scientific naturalism. 

In 2012, I published a my first book, *Sola Scriptura*, a [Platonic dialogue](http://bitly.com/ScriptureOrTradition) consisting of of various Christians discussing Scripture and Tradition. 

<br>
<br>

## Endorsements

<br> 

* *"Buhler makes philosophy come alive"*  --[Dr. Chris Bounds, Indiana Wesleyan University](https://www.asbury.edu/academics/departments/christian-studies-philosophy/faculty-staff/chris-bounds)

* *"A good-conversation machine"* --[Dr. Andrew Selby, Whitefield Academy](https://baylor.academia.edu/AndrewSelby)

* *"Enthusiastic, personable, and precise"* --[Dr. Dan Breazeale, University of Kentucky](https://philosophy.as.uky.edu/users/breazeal)

*  *"Dynamism, acumen, and compassion"*   --[Peter Gross, Christian Adulthood Initiative](https://www.christianadulthood.org/)
