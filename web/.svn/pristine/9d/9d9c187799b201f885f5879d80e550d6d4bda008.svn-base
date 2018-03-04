<style scoped lang="less">
    @images: '../../../assets/images/class-settings/';
    .pop-w {
        position: absolute;
        top: 60px;
        left: 120px;
        background-color: #353735;
        width: 900px;
        padding: 20px 30px;
        border-radius: 4px;
        z-index: 3;
    }

    .arrow {
        position: absolute;
        width: 21px;
        height: 7px;
        top: -7px;
        background: url('@{images}s_2.png') no-repeat left center;
        z-index: 1;
    }

    .select-list {
        border-top: 1px solid #555;
        padding-top: 10px;
        padding-bottom: 10px;
        &:first-child {
            border: none;
        }
    }

    .check-box {
        float: left;
        text-align: left;
        height: 30px;
        line-height: 30px;
        width: 120px;
        padding-left: 25px;
        color: #fff;
        cursor: pointer;
        background: url('@{images}s_3.png') no-repeat left center;
        &.checked {
            background-image: url('@{images}s_1.png');
        }
    }

    .btn-ok {
        width: 26px;
        height: 26px;
        background-image: url("@{images}confirm_normal.png");
    }
</style>

<template>
    <div class="pop-w jsList">
        <span class="arrow"></span>
        <div class="pop-bd">
            <p class="hf select-list">
                <span class="check-box">语文</span>
                <span class="check-box">数学</span>
                <span class="check-box">英语</span>
                <span class="check-box">物理</span>
                <span class="check-box">化学</span>
                <span class="check-box">地理</span>
                <span class="check-box">生物</span>
                <span class="check-box">历史</span>
                <span class="check-box">政治</span>
                <span class="check-box">汉语拼音</span>
                <span class="check-box">奥数</span>
                <span class="check-box">珠心算</span>
                <span class="check-box">故事</span>
                <span class="check-box">作文</span>
                <span class="check-box">识字</span>
                <span class="check-box">阅读与写作</span>
            </p>
            <p class="hf select-list">
                <span class="check-box">中国舞</span>
                <span class="check-box">民族舞</span>
                <span class="check-box">芭蕾舞</span>
                <span class="check-box">街舞</span>
                <span class="check-box">拉丁舞</span>
                <span class="check-box">爵士舞</span>
                <span class="check-box">幼儿舞</span>
                <span class="check-box">娃娃舞</span>
                <span class="check-box">形体</span>
            </p>
            <p class="hf select-list">
                <span class="check-box">钢琴</span>
                <span class="check-box">电子琴</span>
                <span class="check-box">古筝</span>
                <span class="check-box">小提琴</span>
                <span class="check-box">二胡</span>
                <span class="check-box">琵琶</span>
                <span class="check-box">架子鼓</span>
                <span class="check-box">长笛</span>
                <span class="check-box">萨克斯</span>
                <span class="check-box">尤克里里</span>
                <span class="check-box">手风琴</span>
                <span class="check-box">声乐</span>
                <span class="check-box">快乐童声</span>
            </p>
            <p class="hf select-list">
                <span class="check-box">彩笔画</span>
                <span class="check-box">水粉</span>
                <span class="check-box">素描</span>
                <span class="check-box">速写</span>
                <span class="check-box">线描</span>
                <span class="check-box">卡通</span>
                <span class="check-box">创意美术</span>
                <span class="check-box">手工精品</span>
                <span class="check-box">钢笔书法</span>
                <span class="check-box">毛笔书法</span>
                <span class="check-box">硬笔书法</span>
                <span class="check-box">工作室</span>
            </p>
            <p class="hf select-list">
                <span class="check-box">围棋</span>
                <span class="check-box">中国象棋</span>
                <span class="check-box">国际象棋</span>
                <span class="check-box">篮球</span>
                <span class="check-box">足球</span>
                <span class="check-box">跆拳道</span>
                <span class="check-box">机器人</span>
                <span class="check-box">主持</span>
                <span class="check-box">思维训练</span>
            </p>
        </div>
        <div class="pop-btn">
            <span class="fr btn-s btn-ok" @click="addSubjectList"></span>
        </div>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                checkedSubjectList: []
            }
        },

        mounted: function () {

            var v = this

            var result = this.checkedSubjectList

            $(".jsList").on("click", ".check-box", function () {

                var $this = $(this)
                var str = $this.html()

                if ($this.is(".checked")) {
                    $this.removeClass("checked")
                    v.deleteStringFromArray(str, result)
                } else {
                    $this.addClass("checked")
                    result.push(str);
                }

            })
        },

        methods: {

            // 批量增加科目
            addSubjectList() {

                let
                    v = this,
                    checkedSubjectList = this.getCheckedSubjectList()

                this.axios.post('api/api-course/v1/course/commonitem/batchInsertSubject?accessToken=aaaa', checkedSubjectList).then(function () {
                    v.$emit('submit')
                })

            },

            getCheckedSubjectList: function () {
                let
                    subjectList = this.checkedSubjectList,
                    len = subjectList.length,
                    list = [],
                    schoolId = 1

                for (let i = 0; i < len; i++) {
                    list[i] = {
                        name: subjectList[i],
                        head_school_id: schoolId
                    }
                }

                return {subject_lsit: list}
            },

            deleteStringFromArray: function (string, array) {
                let len = array.length;
                for (let i = 0; i < len; i++) {
                    if (string === array[i]) {
                        return array.splice(i, 1)
                    }
                }
            }
        }
    }
</script>

