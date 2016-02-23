{% if noReplyTopic && noReplyTopic.length %}
<div class="ui cards">
    <div class="card">
        <div class="content">
            <p>无人回复的话题</p>
            <div class="ui divider"></div>
            <div class="ui list">
                {% for topic in noReplyTopic %}
                    <a href="/topic/{{ topic.id }}" class="item summary">
                        {{ topic.title }}
                    </a>
                {% endfor %}
            </div>
        </div>
    </div>
</div>
{% endif %}
