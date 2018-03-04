<template>
  <div class="tankuang" v-show="isshow">
    <el-checkbox-group
      v-model="checkedCities1"
      :min="0"
      :max="30">
      <div class="cityBox">
        <el-checkbox class="city" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </div>
      <div class="cityBox">
        <el-checkbox class="city" v-for="city1 in cities1" :label="city1" :key="city1">{{city1}}</el-checkbox>
      </div>
      <div class="cityBox">
        <el-checkbox class="city" v-for="city2 in cities2" :label="city2" :key="city2">{{city2}}</el-checkbox>
      </div>
      <div class="cityBox">
        <el-checkbox class="city" v-for="city3 in cities3" :label="city3" :key="city3">{{city3}}</el-checkbox>
      </div>
      <div class="cityBox">
        <el-checkbox class="city" v-for="city4 in cities4" :label="city4" :key="city4">{{city4}}</el-checkbox>
        <span class="iconfont icon-dui right" @click="xianshi()"></span>
      </div>
    </el-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['语文', '数学', '英语', '物理','化学', '地理', '生物', '政治','识字', '汉语拼音', '奥数',
   '珠心算','作业', '思维训练', '阅读与写作'];
  const cityOptions1 = ['中国舞', '民族舞', '芭蕾舞', '街舞','拉丁舞', '爵士舞', '幼儿舞', '娃娃舞','形体'];

  const cityOptions2 = ['钢琴','电子琴','古筝','小提琴','二胡','琵琶','架子鼓','萨克斯','尤克里里',
   '手风琴','声乐','快乐童声'];
  const cityOptions3 = ['彩笔画', '水粉', '素描', '速写','线描', '卡通', '创意美术', '手工精品','钢笔书法', '手笔书法', '奥数',
   '硬笔书法','工作室'];
  const cityOptions4 = ['围棋', '中国象棋', '国际象棋', '篮球','足球', '跆拳道', '机器人', '主持'];

  export default {
    data(){
      return {
        checkedCities1: ['语文', '英语','作文','中国棋', '民族舞','电子琴','古筝', '尤克里里','手风琴','卡通',
         '创意美术','钢笔书法','足球', '跆拳道','机器人','机器人'],
        cities: cityOptions,
        cities1: cityOptions1,
        cities2: cityOptions2,
        cities3: cityOptions3,
        cities4: cityOptions4,
        isshow:true,

      }
    }
    ,
    methods:{
      xianshi:function(){
        this.isshow=!this.isshow;
        this.$emit("to-close",this.checkedCities1);
      }
    }
  }
</script>

<style scoped lang="css">
*{
  margin: 0;
  padding: 0;
}
.tankuang{
  background: #000000;
  background:rgba(0, 0, 0, 0.8);
  width: 900px;
  height:400px;
  border-radius: 6px;
}
.lists{
  float: left;
}
.cityBox{
  width: 100%;
  height:80px;
  padding: 10px 20px;
  border-bottom: 1px solid white;
}
.city{
  border-radius: 50%;
  width: 90px;
  line-height: 30px;
  color: white;
  margin-left: 0;
}
.el-checkbox__inner{
  /*border-radius: 50%;*/
}
.icon-dui{
  color:rgb(79, 238, 133) ;
  position: absolute;
  right: 50px;
  bottom: 20px;
}
</style>
