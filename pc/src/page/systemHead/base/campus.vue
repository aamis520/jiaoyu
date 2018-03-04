<style>
.page-w {
  display: flex;
  justify-content: space-between;
  height: 400px;
}
.page-l {
}
.page-r {
}
</style>
<template>
  <div>
      <right-top title="校区设置"></right-top>
      <div class="page-w">
        <div class="page-l mod-w radius"></div>
        <div class="page-r mod-w radius"></div>
      </div>
  </div>
</template>
<script>
import rightTop from "../components/right-top";
export default {
  data() {
    return {};
  },
  components: {
    "right-top": rightTop
  }
};
</script>