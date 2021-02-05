<template>
  <div>
    <div class="postbox smsbox">
      <el-form ref="form" :model="note">
        <el-form-item label="短信Key" label-width="80px" style="width:90%" required>
          <el-input v-model="note.keyid"></el-input>
        </el-form-item>
        <el-form-item label="授权码" label-width="80px" style="width:90%" required>
          <el-input v-model="note.keysecret"></el-input>
        </el-form-item>
        <el-form-item label="签名" label-width="80px" style="width:90%" required>
          <el-input v-model="note.signname"></el-input>
        </el-form-item>
        <el-form-item label="短信验证" label-width="80px" style="width:90%" required>
          <el-input v-model="note.tempcode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="sumbit" size="medium" type="primary" @click="submit">立即提交</el-button>
          <el-button class="cancel" size="medium">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import service from '@/service/index'
  export default {
    components: {},
    props: {

    },
    inject: ["reload"],
    data() {
      return {
        note: {
          keyid: '', //短信key
          keysecret: '', //短信server
          signname: '', //短信签名
          tempcode: '', //短信验证
        }
      };
    },
    created() {
      service.ConfigNote().then(res => {
        console.log(res)
        this.note = res.data
      })
    },
    methods: {
      //  修改短信配置
      submit() {
        let params = {
          key: this.note.keyid,
          server: this.note.keysecret,
          sign: this.note.signname,
          code: this.note.tempcode
        }
        //  console.log(params)
        service.ConfigNoteEdit(params).then(res => {
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
</style>