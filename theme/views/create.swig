{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui two column centered grid">
            <div class="left floated twelve wide column">
                <form method="post">
                    <div class="ui form segment">
                        <h2 style="margin-top:0;">发表话题</h2>
                        <div class="field">
                            <div class="fields">
                                <div class="field required">
                                    <label>版块</label>
                                    <div class="ui selection dropdown">
                                        <input type="hidden" name="tab">
                                        <div class="default text">版块</div>
                                        <i class="dropdown icon"></i>
                                        <div class="menu">
                                            {% for tab in $app.tabs %}
                                                {% if !loop.first %}
                                                <div class="item" data-value="{{ tab }}">{{ tab }}</div>
                                                {% endif %}
                                            {% endfor %}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field required">
                            <label for="title">标题</label>
                            <input type="text" id="title" name="title" placeholder="标题">
                        </div>
                        <div class="field required">
                            <label for="content">内容</label>
                            <textarea id="content" name="content" placeholder="内容"></textarea>
                        </div>
                        <input class="ui button" type="submit" value="发布">
                    </div>
                </form>
            </div>
            <div class="right floated four wide column">
                {% set name = session.user.name %}
                {% include "./partials/userCard.swig" %}
                {% include "./partials/linkCard.swig" %}
            </div>
        </div>
    </div>
{% endblock %}

{% block script %}
    <script>
        $('.ui.dropdown').dropdown();
    </script>
{% endblock %}
