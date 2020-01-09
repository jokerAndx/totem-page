<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html">
        <b>Admin</b>LTE
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form @submit.prevent="loginSubmit">
          <div class="input-group mb-3">
            <input
              name="account"
              v-model="loginData.account"
              type="text"
              class="form-control"
              placeholder="帐号"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              name="password"
              v-model="loginData.password"
              type="password"
              class="form-control"
              placeholder="密码"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">登 录</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <div class="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
          </a>
        </div>
        <!-- /.social-auth-links -->

        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="register.html" class="text-center">Register a new membership</a>
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    loginSubmit() {
      let data = this.loginData;
      this.postRequest("/authority/login/", JSON.stringify(data)).then(resp => {
        if (resp && resp.status == 200) {
          console.log("调用成功:"+JSON.stringify(resp));
          this.$router.push({ path: "/home" });
        } else {
          console.log("调用失败:"+JSON.stringify(resp));
        }
      });
    }
  }
};
</script>
