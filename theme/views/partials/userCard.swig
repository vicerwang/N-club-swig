<div class="ui cards">
    <div class="card">
        <div class="content">
            <div class="userCard">
                <img src="{{ user.email | gravatar }}" alt="用户头像">
                <div class="info">
                    <p>{{ user.name }}</p>
                    <p class="meta">{% if user.gender === 'male' %}男{% else %}女{% endif %}</p>
                </div>
                <div class="description">
                    {{ user.signature }}
                </div>
                <div class="extra content">
                    {% if session.user.name === name %}
                        <a href="/user/{{ user.name }}">
                            <i class="home icon"></i>
                            个人主页
                        </a>
                        <a href="javascript:;" class="right floated">
                            <i class="setting icon"></i>
                            设置
                        </a>
                    {% else %}
                        <a href="javascript:;">
                            <i class="send icon"></i>
                            私信
                        </a>
                        <a href="javascript:;" class="right floated">
                            <i class="plus icon"></i>
                        </a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
