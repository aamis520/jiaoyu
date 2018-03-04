<template>
    <ul class="sk-check-box">
        <check-item v-for="item in checkList" :value="item" @check="change" :key="item.id"></check-item>
    </ul>
</template>

<script>
import common from "@commonJS";
import checkItem from "./sk-check-item";

export default {
  props: ["checkList"],

  data: function() {
    return {
      checkedListTemp: []
    };
  },
  mounted() {
    // 将已选中的选项存入 checkedListTemp
    for (let i = 0; i < this.checkList.length; i++) {
      if (this.checkList[i].is_check) {
        this.checkedListTemp.push(this.checkList[i]);
      }
    }

    console.log("初始化选项数据----");
    console.log(this.checkedListTemp);
  },
  methods: {
    change(item) {
      // checkedListTemp 中存入已选中的项，删除未选中的项
      if (this.checkedListTemp.isContain(item)) {
        this.checkedListTemp.removeItem(item);
      } else {
        this.checkedListTemp.push(item);
      }
      // fullCheckedList
      let fullList = this.getFullCheckedList();

      console.log("修改选项数据----");
      console.log(this.checkedListTemp);
      console.log(fullList);

      this.$emit("change", this.checkedListTemp, fullList);
    },
    getFullCheckedList() {
      let fullList = [],
        len = this.checkList.length;
      for (let i = 0; i < len; i++) {
        fullList[i] = this.checkList[i];
        fullList[i].is_check = !!this.checkedListTemp.isContain(
          this.checkList[i]
        );
      }
      return fullList;
    }
  },
  components: {
    "check-item": checkItem
  }
};
</script>