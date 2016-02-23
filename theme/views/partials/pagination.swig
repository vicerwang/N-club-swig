{% if pages && pages > 1 %}
    <div class="ui pagination menu">
        {% if page && page > 1 %}
            <a href="{{ '?tab=' + tab + '&p=' + (page - 1) }}" class="icon item">
                <i class="left arrow icon"></i>
            </a>
        {% endif %}

        {% for item in items %}
            <a href="{{ '?tab=' + tab + '&p=' + item }}" class="item{% if item == page %} active{% endif %}">{{ item }}</a>
        {% endfor %}

        {% if page && page < pages %}
            <a href="{{ '?tab=' + tab + '&p=' + (page + 1) }}" class="icon item">
                <i class="right arrow icon"></i>
            </a>
        {% endif %}
    </div>
{% endif %}
