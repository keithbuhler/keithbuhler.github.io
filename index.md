---
layout: page
title: Welcome | 
permalink: 
header:
      image: http://www.keithbuhler.com/images/keith-at-trinity-speaking.jpg
---

Thank you for visiting. 

I'm Keith Buhler, a philosopher and classical educator. 

This site is a guide to my personal interests and professional activities. 

You may want to check out: 

* my [current projects](/projects)
* my [academic research](/research) to dialog about virtue 
* [the "Buhler Report"](/blog), a blog with recent reflections on  sundry topics such as books, culture, parenting, movies, politics, and living intentionally
* [The Classical Academy Podcast](https://www.trinityclassicalacademy.com/about/podcast), a friendly introduction to classical education. 



## About me

My life mission is to help people of all ages to pursue virtue and wisdom.  The pursuit of wisdom informs my teaching, coaching, and other activities.  We *all* need to practice the practical skills that bring about human flourishing: growth in virtue, relational health, prayer and spiritual discipline. These practices require hard work and discipline but they are worth it. Virtue is possible.

In my day job, I'm an academic philosopher with a special interest in virtue ethics and a teacher.  

Currently, I teach online philosophy courses for Asbury University and  dual-credit philosophy courses at a [classical Christian school](https://classicalchristian.org/), (plus other courses as needed, such as: theology, history, Greek language, Spanish, and drama.) 

In other areas of the classical education renewal, I am the host of the [Classical Academy Podcast](https://www.trinityclassicalacademy.com/about/podcast), which offers a friendly introduction to classical education for parents and fellow teachers in the movement, and I serve as a board member of two other classical schools. Finally, I recently became an [Alcuin Fellow](http://www.alcuinfellowship.com/) (West Coast chapter). 



## Recent Activity

In December 2019, I'll be giving a free talk about health education in California public schools. 

I'm currently developing and implementing a [10th grade philosophy course](http://www.keithbuhler.com/trinity-philosophy/) introducing students to Plato and Aristotle by reading the whole *Republic* and the whole *Nicomachean Ethics*, as well as teaching them to write and argue using the medieval "disputatio" format (a la Aquinas).  

In 2018, I gave a lecture entitled ["Philosophy for Everyone" at Trinity Classical Academy,](https://www.youtube.com/watch?v=SMvlTUVFf4M&t=137s) introducing our community to the nature and value of philosophy. 
<br> 

Last summer, I spoke at [the ACCS conference on "Assessing for Virtue".](https://www.youtube.com/watch?v=ovzMF-znsN8&t=2394s) and received positive feedback from the 120 teachers, admin, and parents in attendance.  

Around the same time, I had the privilege of [interviewing Dr. Robert George of Princeton](https://www.youtube.com/watch?v=tfDdJiyDnaY&t=10s) for my YouTube channel. 

Before that, I did audio interviews with [Eric Silverman, David Bradshaw, and JP Moreland](http://www.advicetochristianphilosophers.com/) for my Christian Philosophers podcast.

----- 


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


----

## Popular Posts


- [Interview with English professor and CS Lewis scholar Louis Markos](http://www.keithbuhler.com/markos) *Real virtue wins out every time.*

- [Interview with Christian philosopher Eric Silverman](http://www.keithbuhler.com/philosophy/2017/11/24/silverman-interview.html) *How Christians can succeed in academic philosopher. How a thoughtful reflection on Christianity's view of love inspires his ethical work.*

- [**"Life is Suffering", and other Jordan Peterson quotations**](http://www.keithbuhler.com/philosophy/2017/04/25/jordan-peterson-quotes.html) *"We don’t understand the world. I do think the world is more like a musical masterpiece than it is like anything else. And things are oddly connected."*

-  [**This Classic Text Explains why Classical Education is Best**](http://www.keithbuhler.com/buhlerreport/yalereport-post/) -- *If you haven’t read the Yale Report, it is very good. The “Yale Report of 1828” is one of the “most influential documents in the history of American higher education” according to R.J. O’Hara. It is still a pleasure to read, and its influence should not wane.*




----- 



## Prior Work

In 2017, completed a philosophy book (as of yet unpublished), titled [Becoming What We Are](/phd). It defends Aristotle's ethics in light of scientific naturalism -- and offers a tendentious definition of scientific naturalism. 

In 2012, I published a my first book, *Sola Scriptura*, a [Platonic dialogue](http://bitly.com/ScriptureOrTradition) consisting of of various Christians discussing Scripture and Tradition. 


----- 

## Endorsements

<br> 

* *"Buhler makes philosophy come alive"*  --[Dr. Chris Bounds, Asbury University](https://www.asbury.edu/academics/departments/christian-studies-philosophy/faculty-staff/chris-bounds)

* *"A good-conversation machine"* --[Dr. Andrew Selby, Trinity Classical Academy](https://baylor.academia.edu/AndrewSelby)

* *"Enthusiastic, personable, and precise"* --[Dr. Dan Breazeale, University of Kentucky](https://philosophy.as.uky.edu/users/breazeal)

*  *"Dynamism, acumen, and compassion"*   --[Peter Gross, Wheatstone Academy](http://www.wheatstoneministries.com/people/)