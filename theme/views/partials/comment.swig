{% if comments.length %}
<div class="ui segment">
    <div class="ui comments">
        <h3 class="ui header">评论</h3>
        <div class="ui divider"></div>
        {% for comment in comments %}
            <div class="comment">
                <a class="avatar" href="/user/{{ comment.user.name }}">
                    <img src="{{ comment.user.email | gravatar }}">
                </a>
                <div class="content">
                    <a class="author" href="/user/{{ comment.user.name }}">
                        {{ comment.user.name }}
                    </a>
                    <div class="metadata">
                        <span class="data">
                            {{ comment.updated | fromNow }}
                        </span>
                    </div>
                    <div class="text">
                        {{ comment.content }}
                    </div>
                </div>
            </div>
        {% endfor %}

        {% if session.user %}
            <form class="ui reply form" method="post">
                <input type="hidden" name="topicId" value="{{ topic._id }}">
                <div class="field">
                    <textarea name="content"></textarea>
                </div>
                <input type="submit" class="ui button" value="留言">
            </form>
        {% endif %}
    </div>
</div>
{% endif %}
