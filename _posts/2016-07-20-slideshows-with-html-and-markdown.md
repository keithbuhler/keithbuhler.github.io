---
title: How to Create Slideshows with Markdown (instead of Powerpoint or Google)
layout: single
tags: [markdown, writing, workflow]
categories: [Misc]
permalink: 
excerpt_separator: <!---more-->
author_profile: false
comments: true
share: true
related: false
header:
      image: http://www.keithbuhler.com/images/banner-buhler-report.svg
      teaser: 
---

<img src="http://www.scarymommy.com/wp-content/uploads/2014/10/you-your-wall-street-boyfriend-24-hours-0.jpg" width="400" height="380">

Since I started doing my website with Jekyll, I've started writing *everything* in Markdown -- [papers](https://raw.githubusercontent.com/keithbuhler/keithbuhler.github.io/master/_papers/hegel-paper.md), journals, [syllabi](/business), and of course web pages. [Markdown](http://www.markdowntutorial.com/) is a Babelfish in that it can speak any language, including HTML. 

What *can't* it do? Can it replace Powerpoint? 

![thumbs up](https://media.giphy.com/media/l0MYHEI0xktKCVjri/giphy.gif)

Sure can.

<!---more-->

Ever since Google released [Google Slides in 2012](https://en.wikipedia.org/wiki/Google_Docs,_Sheets,_Slides_and_Forms), I've used it for creating classroom presentations. I never liked "Powerpoint" much. Slides is intuitive, simple, web-aware, and cloud-based (so no need for thumb drives). 

However, there is a new game in town. HTML Slideshows. Check out my first [HTML slideshow here!](http://www.keithbuhler.com/slideshows/business1syllabus/)
 
If you host a site on [Github](http://github.com) using Jekyll, you can create slideshows and publish them to the web instantly. It's call [Reveal](http://dansheffler.com/presentations/#/). [Hakim El Hattab created it. Fork it here.](https://github.com/hakimel/reveal.js/) Reveal takes a bit of simple programming. 

To be honest, it took me most of the morning to get it installed and working correctly. The section dividers were the hard part for me; I had all sorts of errors. Either the sections all lumped together, or there were dangling <section> tags on every slide. 

After some troubleshooting, and copying successfully functioning shows, [I figured it out.](https://raw.githubusercontent.com/keithbuhler/keithbuhler.github.io/master/slideshows/business1syllabus.md)


If you don't want to do the code, you can cut the chase and use the Slides visual editor as well [here.](https://slides.com/) It's a bit more work than Google Slides but more beautiful and customizable. 

--- 

## How to do it ##

Since I want to use Markdown, I had to install [Marked](https://github.com/chjj/marked) as well. Now, I start the slideshow like this:

    ---
    title: Introduction
    layout: slide
    ---

    <section data-markdown>

    # Heading

    -Content, etc.

    </section>

The "section data-markdown" functions as a normal "section" tag, but at compile tells Jekyll to read all the contents as Markdown (and hence convert them to HTML).

By default, each section is a slide. If I start a new section, then the slideshow will be horizontal. That's good enough to do almost all I need!


## Vertical Slides ##

However, because I wanted to make things harder, I tried to copy Dan Sheffler's vertical slides. This gives you a kind of "Master slide" and "Sub-slide" hierarchy. The hierarchical approach is better than the "flat" approach if you have longer slideshows [(I do a whole week at a time)](http://www.keithbuhler.com/slideshows/business1intro#/) or if you just want to control the organization. 


If I want to do vertical slides, I needed to nest the sections. 

    <section>               <!--Begin Vertical set-->
    <section data-markdown> <!--Begin Intro Slide 1-->

    # Business ethics

    </section>              <!--End Intro slide 1-->
    <section data-markdown>  < Begin Slide 2>

    ## Welcome!
    * 3x5 cards
    * Names
    * Stories

    </section>      < End Slide 2>
    </section>      <End Vertical Set>


Finally, I tried to put a background image on the FIRST "header" slide but NOT on the nested vertical slides. To do that with Reveal is very easy:

    <section data-background="url or path">

Since I am also using "data-markdown" I found they could both be included in the section tag. 

    <section data-background="http://www.scarymommy.com/wp-content/uploads/2014/10/you-your-wall-street-boyfriend-24-hours-0.jpg" data-markdown>


So the finished product looks like this


    <section><!--Vertical set begin-->
    <section data-background="http://www.scarymommy.com/wp-content/uploads/2014/10/you-your-wall-street-boyfriend-24-hours-0.jpg" data-markdown><!--Intro slide begin-->

    # Business ethics

    </section> <!--Intro slide end-->
    <section data-markdown>  <!---Rest of slideshow-->

    ## Welcome!

    * 3x5 cards
    * Names
    * Stories

    </section><section data-markdown>


Now I've got to create some more slideshows!
