<style lang="less" scoped>
@image: "../../../images/system-head/";
@common: "../../../images/common-icon/";

.structure-w {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 12px;
  height: 240px;
  box-sizing: border-box;
  cursor: pointer;
  background: #fff url("@{image}stru_7.png") no-repeat 100px center;
  &.t001 {
    background-image: url("@{image}stru_1.png");
    .struture-setting-w {
      width: 720px;
    }
  }
  &.t002 {
    background-image: url("@{image}stru_4.png");
    .struture-setting-w {
      width: 620px;
    }
  }
  &.t003 {
    background-image: url("@{image}stru_7.png");
    .struture-setting-w {
      width: 520px;
    }
  }
  &.curr {
    border: 2px solid #4ed79e;
    .structure-icon {
      background-image: url("@{image}school_h.png");
    }
  }
}

.struture-setting-w {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-end;
  .btn-ok {
    width: 26px;
    height: 26px;
    background-image: url("@{common}duigou.png");
  }
  .btn-edit {
    color: #4ed79e;
  }
  .input {
    border-bottom: 1px solid #999;
    width: 340px;
    display: flex;
    input {
      border: none;
      outline: none;
      flex-grow: 1;
    }
  }
}
.structure-item {
  display: flex;
  align-items: center;
  height: 45px;
  line-height: 45px;
}
.structure-t {
  margin-right: 10px;
}
.structure-c {
  margin-right: 10px;
  .course-item {
    margin-right: 12px;
  }
}
.structure-icon {
  width: 42px;
  height: 45px;
  background: url("@{image}school.png") no-repeat left center;
}

.structure-tip {
  color: #4ed79e;
}
</style>
<template>
    <div class="structure-w radius" :class="[{curr:isChecked},structure.type_code]" @click.self ="changeCheck">
      <span class="structure-icon"></span>
      <div class="struture-setting-w" v-if="isEdit">
        <div>
          <dl class="structure-item">
            <dt class="structure-t">本校全称：</dt>
            <dd class="structure-c input">
              <input type="text" v-model="schooleName">
            </dd>
          </dl>
          
          <dl class="structure-item">
            <dt class="structure-t">本校简称：</dt>
            <dd class="structure-c input">
              <input type="text" v-model="shortSchoolName">
            </dd>
          </dl>
          <dl class="structure-item">
            <dt class="structure-t">开设课程：</dt>
            <dd class="structure-c">
              <check-box :checkList="headSchoolInfo.course_type_list||structure.course_type_list" @change="formatResultList"></check-box>
            </dd>
          </dl>
        </div>
        <span class="btn-ok" @click="finish"></span>
      </div>
      <div class="struture-setting-w" v-if="isInfo">
        <div>
          <dl class="structure-item">
            <dt class="structure-t">本校全称：</dt>
            <dd class="structure-c">
              {{schooleName}}
            </dd>
          </dl>
          <dl class="structure-item">
            <dt class="structure-t">本校简称：</dt>
            <dd class="structure-c">
              {{shortSchoolName}}
            </dd>
          </dl>
          <dl class="structure-item">
            <dt class="structure-t">开设课程：</dt>
            <dd class="structure-c">
              <span class="course-item" v-for="item in courseInfoList" :key="item.id">{{item.name}}</span>
            </dd>
          </dl>
          <div class="structure-tip">提示：请点击左侧导航栏的“校区设置”继续完善信息</div>
        </div>
        <!-- <span class="btn-edit" @click="changeCheck">修改</span> -->
      </div>
    </div>
</template>
<script>
import checkbox from "@components/sk-check-box";
import preURL from "@commonJS/const";
export default {
  props: ["structure", "headSchoolInfo", "currType"],
  data() {
    return {
      url: preURL.base + "v1/campus/saveHeadSchool",
      isChecked: false,
      isEdit: false,
      isInfo: false,
      schooleName: this.headSchoolInfo.head_school_name || "",
      shortSchoolName: this.headSchoolInfo.short_name || "",
      courseCheckList: "",
      courseInfoList: [],
      userInfo: ""
    };
  },
  mounted() {
    this.userInfo = this.$ls.get("USER_INFO");
    this.showInfo();

    this.courseInfoList = this.getCourseInofList();
  },
  components: {
    "check-box": checkbox
  },
  methods: {
    //
    changeCheck() {
      if (!this.isChecked) {
        this.showEdit();
        this.$emit("check", this.structure.type_name);
      } else {
        this.showInfo();
      }
    },
    showEdit() {
      this.isChecked = true;
      this.isEdit = true;
      this.isInfo = false;
    },
    showInfo() {
      this.isChecked = false;
      this.isEdit = false;
      this.isInfo =
        this.headSchoolInfo.head_school_name &&
        this.headSchoolInfo.structure_type === this.structure.type_name;
    },
    getCourseInofList() {
      let list = [],
        tempList = this.headSchoolInfo.course_type_list || [],
        len = tempList.length;
      for (let i = 0; i < len; i++) {
        if (tempList[i].is_check) {
          list.push(tempList[i]);
        }
      }
      return list;
    },
    //
    formatResultList(checkedlist, result) {
      console.log("formatResultList========");
      console.log(checkedlist);
      console.log(result);
      this.courseCheckList = result;
    },
    //
    finish() {
      let params = {
        head_school_id: this.userInfo.headSchoolId,
        head_school_name: this.schooleName,
        short_name: this.shortSchoolName,
        courseTypeJsons:
          this.courseCheckList || this.headSchoolInfo.course_type_list //补偿多选不点击无法回调的问题
      };

      // 修改当前架构不传 架构类型
      if (this.structure.type_name !== this.headSchoolInfo.structure_type) {
        params.structure_type = this.structure.type_name;
      }

      if (!this.schooleName.trim()) {
        this.$message({
          showClose: true,
          message: "学校名称不能为空",
          type: "error"
        });
        return;
      }
      if (!this.shortSchoolName.trim()) {
        this.$message({
          showClose: true,
          message: "学校简称不能为空",
          type: "error"
        });
        return;
      }

      this.axios.post(this.url, params).then(response => {
        if (response.errorcode === 200) {
          this.$emit("done");
        } else {
          this.$message({
            showClose: true,
            message: response.messages,
            type: "error"
          });
        }
        this.showInfo();
      });
    }
  },
  watch: {
    headSchoolInfo() {
      this.showInfo();
      this.courseInfoList = this.getCourseInofList();
    },
    currType() {
      if (this.currType === this.structure.type_name) {
        this.showEdit();
      } else {
        this.showInfo();
      }
    }
  }
};
</script>