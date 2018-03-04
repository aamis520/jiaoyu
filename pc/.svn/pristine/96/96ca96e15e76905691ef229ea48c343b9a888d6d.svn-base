<template>
  <div>
      <right-top title="学校类型"></right-top>
      <edit-item v-for="structure in structureList" 
      :structure="structure" 
      :headSchoolInfo="schoolInfo"
      :currType="currStructureType" 
      :key="structure.type_id" 
      @check="changeType"
      @done="getHeadSchoolInfo">
      </edit-item>
  </div>
</template>
<script>
import edit from "./structure-edit";
import rightTop from "../components/right-top";
import preURL from "@commonJS/const";
export default {
  data() {
    return {
      url: preURL.base + "v1/campus/getCampusTypes",
      url_2: preURL.base + "/v1/campus/findHeadSchoolById",
      url_3: preURL.base + "/v1/campus/saveHeadSchool",
      structureList: [],
      userInfo: "",
      schoolInfo: "",
      currStructureType: ""
    };
  },
  mounted() {
    this.userInfo = this.$ls.get("USER_INFO");
    console.log(this.userInfo);
    this.getStructureList();
    this.getHeadSchoolInfo();
  },
  methods: {
    getStructureList() {
      this.axios.post(this.url).then(response => {
        console.log(response);
        this.structureList = response.messages;
      });
    },
    getHeadSchoolInfo() {
      let params = {
        headSchoolId: this.userInfo.headSchoolId
      };
      this.axios.post(this.url_2, params).then(response => {
        console.log(response);
        this.schoolInfo = response.messages || {};
      });
    },
    changeType(type) {
      this.currStructureType = type;
    }
  },
  components: {
    "edit-item": edit,
    "right-top": rightTop
  }
};
</script>