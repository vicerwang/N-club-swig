<div class="ui top attached tabular menu">
    {% for tab in $app.tabs %}
        <a href="{% if tab === '全部' %}/{% else %}?tab={{ tab }}{% endif %}" class="item{% if tab === query.tab || query.tab === '' && tab === '全部' %} active{% endif %}">
            {{ tab }}
        </a>
    {% endfor %}
</div>
