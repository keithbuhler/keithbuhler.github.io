---
layout: default
title:  Welcome
permalink: /archive/
header:
  image: http://www.keithbuhler.com/images/banner-buhler-report.svg
---

<div class="container docs-container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar hidden-print" role="complementary">
            <div id="navigation">
              <h1>Posts</h1>
              <ul class="nav sidenav">

                {% for post in site.posts  %}
                  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
                  {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
                  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
                  {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

                  {% if forloop.first %}
                    <li><a href="#year_{{this_year}}">{{this_year}}</a>
                      <ul class="nav">
                        <li><a href="#month_{{this_year}}_{{this_month}}">{{this_month}}</a></li>
                  {% endif %}

                  {% if forloop.last %}
                        </ul>
                      </li>
                  {% else %}
                    {% if this_year != next_year %}
                        </ul>
                      </li>
                      <li><a href="#year_{{next_year}}">{{next_year}}</a>
                        <ul class="nav">
                          <li><a href="#month_{{next_year}}_{{next_month}}">{{next_month}}</a></li>
                    {% else %}    
                      {% if this_month != next_month %}
                          <li><a href="#month_{{next_year}}_{{next_month}}">{{next_month}}</a></li>
                      {% endif %}
                    {% endif %}
                  {% endif %}
                {% endfor %}
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-md-9" role="main">
          <div class="panel docs-content">
            <div class="wrapper">
              <div class="home">
                {% for post in site.posts  %}
                  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
                  {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
                  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
                  {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

                  {% if forloop.first %}
                    <h1 id="year_{{this_year}}">{{this_year}}</h1>
                    <h2 id="month_{{this_year}}_{{this_month}}">{{this_month}}</h2>
                    <ul>
                  {% endif %}

                  <ol class="breadcrumb">
                   <li><span>{{ post.date | date: "%B %e, %Y" }}</span> &raquo; <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
                  </ol>
                  {% if forloop.last %}
                    </ul>
                  {% else %}
                    {% if this_year != next_year %}
                      </ul>
                      <h1 id="year_{{next_year}}">{{next_year}}</h1>
                      <h2 id="month_{{next_year}}_{{next_month}}">{{next_month}}</h2>
                      <ul>
                    {% else %}    
                      {% if this_month != next_month %}
                        </ul>
                        <h2 id="month_{{next_year}}_{{next_month}}">{{next_month}}</h2>
                        <ul>
                      {% endif %}
                    {% endif %}
                  {% endif %}
                {% endfor %}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
