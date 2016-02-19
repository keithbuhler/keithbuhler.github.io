---
layout: post
title: Blog

---

{% for post in site.posts %}

{{ post.date | date_to_string }} 

{{ post.title }} 

{% endfor %}


