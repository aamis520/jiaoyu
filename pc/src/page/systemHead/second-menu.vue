
<template>
    <div class="second-menu">
        <router-link class="item" v-for="menu in menuList[secondMenu]" :to="menu.path" :key="menu.id">{{menu.name}}</router-link>
    </div>
</template>
<script>
export default {
  props: ["secondMenu"],
  data() {
    return {
      menuList: {
        base: [
          { path: "structure", name: "学校类型" },
          { path: "campus", name: "校区设置" },
          { path: "tree", name: "框架设置" },
          { path: "campus-list", name: "结果查看" }
        ],
        depart: [
          { path: "depart", name: "部门设置" },
          { path: "role", name: "角色设置" },
          { path: "permissions", name: "权限设置" },
          { path: "permissions-list", name: "权限列表" }
        ],
        account: [{ path: "account", name: "账号设置" }],
        classes: [{ path: "index", name: "班级设置" }],
        comprehensive: [
          { path: "index", name: "常用信息" },
          { path: "comprehensive-applySet", name: "报名设置" },
          { path: "comprehensive-tuition", name: "学费规则" },
          { path: "comprehensive-teacher-remark", name: "教学点评" },
          { path: "comprehensive-approve", name: "审批设置" },
          { path: "comprehensive-importOrexport", name: "导入导出" },
          { path: "comprehensive-integral", name: "积分设置" },
          { path: "comprehensive-stamp", name: "打印设置" },
          { path: "comprehensive-performance", name: "业绩统计" },
          { path: "comprehensive-data", name: "数据字典" },
          { path: "comprehensive-formula", name: "公式设置" }
        ],
        course: [{ path: "common-settings", name: "常用项设置" },
        { path: "class-settings", name: "班级课设置" },
        { path: "on-one-settings", name: "一对一设置" },
        { path: "on-n-settings", name: "一对N设置" },
        { path: "interview", name: "面试题设置" }],
        discount: [
        	{ path: "inroll-set", name: "报名设置" },
        	{ path: "class-course", name: "班级课程" },
        	{ path: "vip-course", name: "VIP课程" },
        	{ path: "transfer-introduce", name: "设转介绍" },
        	{ path: "grant-coupon", name: "发优惠券" }
        ],
        finance: [
        	{ path: "finance-set", name: "财务设置" },
        	{ path: "account-set", name: "账号设置" },
        	{ path: "salary-system", name: "薪酬体系" },
        	{ path: "finance-export", name: "财务导出" }
        ],
        goods: [{ path: "index", name: "物品设置" }],
        vip: [{ path: "vip-standard", name: "VIP标准" },
        { path: "vip-one", name: "1对1设置" }]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
