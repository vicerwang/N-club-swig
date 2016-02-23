<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>
        {% block title %}
        {% endblock %}
    </title>
    <link rel="stylesheet" href="/dep/semantic-ui/semantic.min.css">
    <link rel="stylesheet" href="/style.css">
    {% block head %}
    {% endblock %}
</head>
<body>
    <div class="ui fixed menu navbar">
        <div class="container">
            <a href="/" class="item">{{ $app.name }}</a>
            <div class="item">{{ $app.description }}</div>
            <div class="right menu">
                {% if session.user %}
                    <a href="/logout" class="item">登出</a>
                {% else %}
                    <a href="/signup" class="item">注册</a>
                    <a href="/signin" class="item">登录</a>
                {% endif %}
            </div>
        </div>
    </div>

    {% if flash %}
        {% if flash.success %}
            <div class="flash">
                <div class="ui green message">
                    <i class="close icon"></i>
                    {{ flash.success }}
                </div>
            </div>
        {% elseif flash.error %}
            <div class="flash">
                <div class="ui red message">
                <i class="close icon"></i>
                    {{ flash.error }}
                </div>
            </div>
        {% endif %}
    {% endif %}

    {% block body %}
    {% endblock %}

    <script src="/dep/jquery/jquery.min.js"></script>
    <script src="/dep/semantic-ui/semantic.min.js"></script>
    <script>
        $('.message .close').click(function() {
            $(this).parent().fadeOut();
        });
    </script>
    {% block script %}
    {% endblock %}
</body>
</html>
