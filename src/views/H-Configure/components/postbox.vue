<template>
  <div>
    <div class="postbox">
      <el-form ref="form" :model="mail">
        <el-form-item label="发件箱" label-width="80px" style="width:30%" required>
          <el-input v-model="mail.version"></el-input>
        </el-form-item>
        <el-form-item label="授权码" label-width="80px" style="width:30%" required>
          <el-input v-model="mail.authorization_code"></el-input>
        </el-form-item>
        <el-form-item label="邮箱标题" label-width="80px" style="width:30%" required>
          <el-input v-model="mail.contentt"></el-input>
        </el-form-item>
        <el-form-item label="内容标题" label-width="80px" style="width:30%" required>
          <el-input v-model="mail.content"></el-input>
        </el-form-item>
        <el-form-item label="邮箱模板" label-width="80px" style="width:50%">
          <tinymce-editor ref="editor" class="tinyEditor" :value="mail.emailt" :disabled="disabled" @onClick="onClick">
          </tinymce-editor>
        </el-form-item>
        <el-form-item>
          <el-button class="sumbit" size="medium" type="primary" @click="submit">立即提交</el-button>
          <el-button class="cancel" size="medium">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import TinymceEditor from "@/components/TinymceEditor";
  import service from '@/service/index';
  export default {
    components: {
      TinymceEditor
    },
    props: {},
    inject: ["reload"],
    data() {
      return {
        mail: {
          version: '', //发送者邮箱email
          authorization_code: '', //邮箱授权码code
          contentt: '', //邮箱标题
          content: '', //内容标题
          emailt: '', //模板信息
        },
        disabled: false
      };
    },
    created() {
      // 邮箱配置
      service.ConfigMail().then(res => {
        // console.log(res)
        this.mail = res.data
      })
    },
    methods: {
      onClick() {

      },
      // 修改内容
      submit() {
        let params = {
          email: this.mail.version,
          code: this.mail.authorization_code,
          title: this.mail.contentt,
          titlee: this.mail.content,
          content: this.mail.emailt
        }
        console.log(params)
        service.ConfigMailEdit(params).then(res => {
          console.log(res)
          if (res.code == 20010) {
            this.$message({
              message: res.msg,
              type: "success",
              duration: 1000,
            });
            this.reload()
          }
        })
      }
    },
  }
</script>
<style scoped>
  .tiny {
    margin: 0;
  }
</style>