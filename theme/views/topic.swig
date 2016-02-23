{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui two column centered grid">
            <div class="left floated twelve wide column">
                <div class="ui segment">
                    <h2 style="margin-top:0">
                        {{ topic.title }}
                    </h2>
                    <div class="topic">
                        发布于 {{ topic.created | fromNow }} ·
                        作者 {{ topic.user.name }} ·
                        {{ topic.pv }} 次浏览 ·
                        {{ topic.comment }} 个回复 ·
                        {{ topic.tab }}
                    </div>
                    <div class="ui divider"></div>
                    <div class="content">
                        {{ topic.content }}
                    </div>
                </div>

                {% include "./partials/comment.swig" %}
            </div>
            <div class="right floated four wide column">
                {% set user = user %}
                {% set name = user.name %}
                {% include "./partials/userCard.swig" %}
                {% include "./partials/linkCard.swig" %}
            </div>
        </div>
    </div>
{% endblock %}
