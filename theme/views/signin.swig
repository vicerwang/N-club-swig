{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui form segment" style="width:400px;margin:60px auto;">
            <form method="post">
                <div class="ui left icon input" style="width:100%">
                    <i class="mail icon"></i>
                    <input type="text" name="name" placeholder="用户名">
                </div>
                <br><br>
                <div class="ui left icon input" style="width:100%">
                    <i class="lock icon"></i>
                    <input type="password" name="password" placeholder="密码">
                </div>
                <br><br>
                <input type="submit" class="ui button fluid" value="登录">
            </form>
        </div>
    </div>
{% endblock %}
