<div class="ui bottom attached active tab segment">
    <div class="ui list">
        {% for topic in topics %}
            <div class="item">
                <a href="/user/{{ topic.user.name }}" class="ui image">
                    <img src="{{ topic.user.email | gravatar }}" alt="发表人头像">
                </a>
                <div class="content">
                    <a href="/topic/{{ topic._id.toString() }}" class="header">{{ topic.title }}</a>
                </div>
                <p class="topic">
                    <a href="/user/{{ topic.user.name }}"><b>{{ topic.user.name }}</b></a>发起了话题 · {{ topic.pv }} 次浏览 · {{ topic.comment }} 个回复 · {{ topic.updated | fromNow }} · {{ topic.tab }}
                </p>
            </div>
            {% if !loop.last %}
                <div class="ui divider"></div>
            {% endif %}
        {% endfor %}
    </div>
</div>
