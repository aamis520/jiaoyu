<template>
    <div class="head-box">
        <div class="header">
            <router-link :to="{path:'/home'}">{{msg1}}</router-link>
            <span class="sp2">{{msg2}}</span>
            <span class="search">
                <input type="text" name="search" id="search" placeholder="师生班"/>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "南京市小银星艺术培训学校",
      msg2: "",
      searchTxt: ""
    };
  }
};
</script>

<style scoped lang="less">
.head-box {
  background: #4ed79f;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 1300px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  margin: 0 auto;
  a {
    color: white;
  }
  a:hover {
    color: #0082e6;
  }
}

.sp2 {
  color: white;
}

.search {
  width: 194px;
  height: 34px;
  display: inline-block;
  border-radius: 20px;
  margin-top: 15px;
  line-height: 34px;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 20px;
}

.search input {
  border: none;
  background: none;
  color: white;
  outline: none;
  font-size: 14px;
}

::-webkit-input-placeholder {
  color: #cbeee0;
  letter-spacing: 1rem;
  font-size: 14px;
}
</style>