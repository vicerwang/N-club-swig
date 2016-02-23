{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui two column centered grid">
            <div class="left floated twelve wide column">
                {% include "./partials/tab.swig" %}
                {% include "./partials/list.swig" %}
                {% include "./partials/pagination.swig" %}
            </div>
            <div class="right floated four wide column">
                {% if session.user %}
                    {% set name = session.user.name %}
                    {% include "./partials/userCard.swig" %}
                    {% include "./partials/createCard.swig" %}
                {% endif %}
                {% include "./partials/noReplyCard.swig" %}
                {% include "./partials/linkCard.swig" %}
            </div>
        </div>
    </div>
{% endblock %}
