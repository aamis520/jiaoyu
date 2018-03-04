<style lang="less" scoped>

</style>
<template>
    <div class="page">
        <header-item></header-item>
        <div class="page-container">
            <div class="w-s left-menu-w">
                <div class="left-menu-t radius">
                    <span class="icon-setting">设置</span>
                </div>
                <div class="left-menu-list radius">
                    <ul class="first-menu">
                        <li class="item" v-for="(menu,index) in firstMenuList" 
                        :class="[{checked:index===currentIndex},icon(index)]"
                        @click="changeMenu(menu,index)" :key="menu.id">{{menu.name}}</li>
                    </ul>
                    <second-menu :secondMenu="currentItem.alias"></second-menu>
                </div>
            </div>
            <router-view class="w-l"></router-view>
        </div>
    </div>
</template>
<script>
import header from "@components/head";
import secondMenu from "./second-menu";
export default {
  components: {
    "header-item": header,
    "second-menu": secondMenu
  },
  data() {
    return {
      firstMenuList: [
        { path: "/systemHead/base", name: "校区", alias: "base" },
        { path: "/systemHead/depart", name: "部门", alias: "depart" },
        { path: "/systemHead/account", name: "账号", alias: "account" },
        { path: "/systemHead/finance", name: "财务", alias: "finance" },
        {
          path: "/systemHead/comprehensive",
          name: "综合",
          alias: "comprehensive"
        },
        { path: "/systemHead/course", name: "课程", alias: "course" },
        { path: "/systemHead/classes", name: "班级", alias: "classes" },
        { path: "/systemHead/vip", name: "vip", alias: "vip" },
        { path: "/systemHead/discount", name: "优惠", alias: "discount" },
        { path: "/systemHead/goods", name: "物品", alias: "goods" }
      ],
      styles: [],
      currentItem: { path: "base", name: "校区", alias: "base" },
      currentIndex: 0
    };
  },
  mounted() {
    // 二级路由的坑,重新加载当前页面
    for (let i = 0; i < this.firstMenuList.length; i++) {
      if (this.$route.path.match(this.firstMenuList[i].path)) {
        this.reloadPage(this.firstMenuList[i], i);
        return;
      }
    }
  },
  methods: {
    changeMenu(item, index) {
      this.currentItem = item;
      this.currentIndex = index;
      this.$router.push({ path: item.path });
    },
    reloadPage(item, index) {
      this.currentItem = item;
      this.currentIndex = index;
      this.$router.push({ path: this.$route.path });
    },
    icon(index) {
      return "icon-" + this.firstMenuList[index].alias;
    }
  }
};
</script>
