{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui two column centered grid">
            <div class="left floated twelve wide column">
                {% include "./partials/list.swig" %}
            </div>
            <div class="right floated four wide column">
                {% include "./partials/userCard.swig" %}
                {% if session.user %}
                    {% include "./partials/createCard.swig" %}
                {% endif %}
                {% include "./partials/linkCard.swig" %}
            </div>
        </div>
    </div>
{% endblock %}
