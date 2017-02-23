<br>

{% for post in site.posts %}


<div class="post">
    <h3> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    <span class="time"><i>{{ post.date | date: "%-d %B %Y" }}</i></span> 
    <p>
    <div class="post-excerpt">{{ post.excerpt }}</div>
    </p>
    <hr>
</div>

{% endfor %}



<br>

## Complete Archive


      {% if post.date >= date: 12/01/2016 %}
      {% endif %}
      {% capture year %} {{ post.date | date: '%Y' }} {% endcapture %}
