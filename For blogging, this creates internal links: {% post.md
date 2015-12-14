For blogging, this creates internal links: {% post_url 2010-07-21-name-of-post %}
![My helpful screenshot]({{ site.url }}/assets/screenshot.jpg)
… you can [get the PDF]({{ site.url }}/assets/mydoc.pdf) directly.

Index of posts
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


Put an excerpt paragraph by the post link:
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>


