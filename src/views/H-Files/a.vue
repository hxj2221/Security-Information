<template>
  <div>
    <form
      action="http://bt1.wlqqlp.com:8082/api/file/addfile"
      enctype="multipart/form-data"
      method="post"
    >
      文件名称: <input type="text" name="file_name" /><br />
      文件描述:<input type="text" name="file_describe" /><br />
      文件分类:<input type="text" name="class_id" /><br />
      <input type="file" name="file" />
      <input type="submit" value="上传" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
