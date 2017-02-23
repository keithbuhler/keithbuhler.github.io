Complete Headline Archive

{% for post in site.posts limit:10 %}

<span class="time"> <font color="gray" size="1em"><i> {{ post.date | date: "%m.%d.%Y" }}</i></font> </span> &nbsp;&nbsp;&nbsp;&nbsp; 
<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

{% endfor %}



Year Archive with Excerpt


{% capture written_year %}'None'{% endcapture %}

{% for post in site.posts %}
 {% capture year %}{{ post.date | date: '%Y' }}
 {% endcapture %}
{% if year != written_year %}

<h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    
{% capture written_year %}{{ year }}{% endcapture %}
    
{% endif %}
{% include archive-single.html %}
{% endfor %}



Complete Post Last 10 Posts

{% for post in site.posts limit:10 %}

<span class="time"> <font color="gray" size="1em"><i> {{ post.date | date: "%m.%d.%Y" }}</i></font> </span> &nbsp;&nbsp;&nbsp;&nbsp; 
<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
<div class="post-content">{{ post.content }}</div>

{% endfor %}
