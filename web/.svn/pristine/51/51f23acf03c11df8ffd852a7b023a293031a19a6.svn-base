<style lang="less" scoped>

    @images: '../assets/images/class-settings/';

    .check-box {

        .item {
            float: left;
            text-align: left;
            height: 30px;
            line-height: 30px;
            padding-right: 25px;
            margin-right: 25px;
            cursor: pointer;
        }

        & .checked {
            background: url('@{images}green.png') no-repeat right center;
        }

        &.radio .checked {
            background: url('@{images}red.png') no-repeat right center;
        }

    }

</style>

<template>
    <ul class="hf check-box" :class="{radio}">
        <li class="item" v-for="item in list" :class="{checked:isChecked}" @click="check(item)">
            <span class="text">{{item.name}}</span>
            <tip v-if="item.isTip" :msg="'测试内容'"></tip>
        </li>
    </ul>
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

        data: function () {
            return {
                result: []
            }
        },

        methods: {
            check: function (isRadio) {
                this.$emit('result', isRadio)
            },
            getResult() {

            }
        },

        components: {
            tip
        }
    }

</script>