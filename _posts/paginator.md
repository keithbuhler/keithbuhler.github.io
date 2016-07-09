<!---this works-->

This works: 

<ul class="posts">
  
  {% for post in site.posts %}
  <li>
   &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
    <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
  </li>
  {% endfor %}

</ul>

<!---this works-->


<ul class="posts">
  
  {% for post in site.posts %}
  <li>
   &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
    <div class="post-date">{{ post.date | date: "%-d %B %Y" }}</div>
    <div class="post-content">{{ post.content }}</div>

  </li>
  {% endfor %}

</ul>