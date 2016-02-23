{% extends "./layout.swig" %}

{% block body %}
    <div class="container">
        <div class="ui form segment" style="width:400px;margin:40px auto">
            <form method="post">
                <div class="two fields">
                    <div class="field required">
                        <label for="name">用户名</label>
                        <input type="text" id="name" name="name" placeholder="用户名">
                    </div>
                    <div class="field required">
                        <label>性别</label>
                        <div class="ui selection dropdown" style="min-width:0;">
                            <div class="default text">选择性别</div>
                            <i class="dropdown icon"></i>
                            <input type="hidden" name="gender">
                            <div class="menu">
                                <div class="item" data-value="male">男</div>
                                <div class="item" data-value="female">女</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="two fields">
                    <div class="field required">
                        <label for="password">密码</label>
                        <input type="password" id="password" name="password" placeholder="密码">
                    </div>
                    <div class="field required">
                        <label for="rePassword">重复密码</label>
                        <input type="password" id="rePassword" name="rePassword" placeholder="重复密码">
                    </div>
                </div>
                <div class="field required">
                    <label for="email">邮箱</label>
                    <input type="email" id="email" name="email" placeholder="邮箱">
                </div>
                <div class="field">
                    <label for="signature">个人签名</label>
                    <input type="text" id="signature" name="signature" placeholder="限制在50字以内">
                </div>
                <input type="submit" class="ui button fluid" value="注册">
            </form>
        </div>
    </div>
{% endblock %}

{% block script %}
    <script>
        $('.ui.dropdown').dropdown();
    </script>
{% endblock %}
