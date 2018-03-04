<style lang="less" scoped>

    @images: '../assets/images/class-settings/';

    .selected-w {
        @tit-width: 100px;
        position: relative;
        padding-left: @tit-width;
        .selected-t {
            left: 0;
            top: 0;
            position: absolute;
            width: @tit-width - 10px;
            height: 50px;
            line-height: 50px;
        }
        .selected-c {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }

    .select-list {
        border-top: 1px solid #555;
        padding-top: 10px;
        padding-bottom: 10px;
        &:first-child {
            border: none;
        }
    }

    .radio {

    }

    .check-box {

        float: left;
        text-align: left;
        height: 30px;
        line-height: 30px;
        padding-right: 25px;
        cursor: pointer;

        &.checked {
            background: url('@{images}green.png') no-repeat right center;
        }

        &.radio.checked {
            background: url('@{images}red.png') no-repeat right center;
        }
    }

</style>

<template>
    <dl class="selected-w">
        <dt class="selected-t">
            <span class="text">科目类型</span>
        </dt>
        <dd class="hf selected-c">
            <div class="check-box checked" :class="{radio}" v-for="item in list" @click="check">
                <span class="text">{{item.name}}</span>
                <tip v-if="true" :msg="'测试内容'"></tip>
            </div>
        </dd>
    </dl>
</template>

<script>

    import tip from './sk-tip.vue'

    export default {

        props: {
            radio: {
                default: true
            },
            list: {
                validator: function () {
                    return true
                }
            }
        },

        methods: {
            check: function (isRadio) {
                console.log(isRadio)
            },
            getResult() {

            }
        },

        components: {
            tip
        }
    }

</script>