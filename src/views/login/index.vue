<template>
  <div class="login">
    <div class="login-header">
      <nav>
        <h1>用户登录</h1>
      </nav>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" />
        </el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup>

const form = {
  username: 'super-admin',
  password: '123456'
}

</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login {
  height: 100vh;
  background: #2d3a4b;
  position: relative;
  .login-header {
    width: 500px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -230px;
    margin-top: -150px;

    h1 {
      color: #fff;
      margin-left: 100px;
    }
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        float: left;
        width: 100%;
        background: transparent !important;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
}
</style>
