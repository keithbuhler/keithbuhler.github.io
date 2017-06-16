---
layout: page
title: 
permalink: 
header:
  image: http://www.keithbuhler.com/images/banner-buhler-report.svg
related: 
---
<br>



*"The Buhler Report" is a conversational blog about classical education, liberal arts, philosophy, politics, film, and more. Comments and emails from enemies and friends, new and old, are much appreciated. (Note: The comment functionality is currently under construction.) I aim to bring you timeless wisdom and current events. Thanks for reading!*

<br>

<hr>

{% for post in site.posts limit:8 %}
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


<h1> <a href="/categories"> Categories </a> </h1>

</center>

* [Philosophy](/categories/#Philosophy-ref)
* [Classical Education](/categories/#Classical education-ref)
* [Politics](/categories/#Politics-ref)


<center>

<h1> Popular Posts</h1> 

</center>

- 04.01.2017 --  [**A Recent Chapter on Deification**](http://www.keithbuhler.com/buhlerreport/philosophy/2017/04/01/deification.html) *His article clarifies what the notion of “becoming god” amounts to, and explains the various species of deifiction: political deification, deification through beauty, deification as magic, deification as imitation, Christian deification, self-deification, deification through Gnosticism. This is all historically informative and very interesting; the kicker is that he accurately covers our own fashionable form of deification: techno-deification.*

- 02.23.2017 -- [**Reflections on Graduate Student Stipends**](http://www.keithbuhler.com/buhlerreport/philosophy/2017/02/23/Reflections-on-Philosophy-Graduate-School-Stipends.html) -- *Now that I am a postdoc scholar at the University of Kentucky (Go ‘Cats!), I am reflecting back on my experience as a Teaching Assistant. One thing that was hard to discover, perhaps understandably, was the expected “stipend” of graduate teaching assistants at other universities I applied to. For what it’s worth, I saved the information about our stipend. My department preferred that it not be public. But count your lucky stars you aren’t as poor as I was in 2012.*


- 12.17.2016 -- [**Glowing Fish Analogy**](http://www.keithbuhler.com/buhlerreport/philosophy/2016/12/17/glowing-fish-analogy.html) -- *A: There are no such things as glowing fish. B: But I saw a glowing fish, so they must exist. A: You can’t have one seen one, because they don’t exist. B:...*

- 12.29.2016 -- [**This Classic Text Explains why Classical Education is Best**](http://www.keithbuhler.com/buhlerreport/yalereport-post/) -- *If you haven’t read the Yale Repot, it is very good. The “Yale Report of 1828” is one of the “most influential documents in the history of American higher education” according to R.J. O’Hara. It is still a pleasure to read, and its influence should not wane.*

- 12.07.2016 -- [**Force Awakens Wasn’t Just a Copy of New Hope**](http://www.keithbuhler.com/buhlerreport/viicopyiv) -- *It’s been about a year since Star Wars: The Force Awakens came out. While we wait for Rogue One, it’s a good time to reflect. When Episode VII first came out...*

- 11.09.2016 -- [**Mini Exit Survey – Student Feelings about Trump**](http://www.keithbuhler.com/buhlerreport/politics/2016/11/09/student-trump-feelings2.html) --  *I teach 5 classes at two universities in Kentucky. So, after reading a lot about students on campus feeling terrible or unsafe after a Trump election victory...*



<center>

<br>

<h1> <a href="/archive"> Archive </a> </h1>

<br>
<br>

</center>

*The opinions expressed on this site are the author’s alone and do not represent the views of any organizations he is affiliated with.*

<!-- Code for posting just an excerpt (with no image) of each post. Put under heading. {% if post.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 160 }}</p>{% endif %}-->

