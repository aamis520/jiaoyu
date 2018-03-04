<style lang="less" scoped>
    .common {
        position: absolute;
        top: -94px;
        left: 0;
        width: 100%;
        padding-left: 270px;
        li {
            float: left;
            margin-left: 40px;
            cursor: pointer;
        }
    }

    .active {
        color: #31c27c;
    }

</style>

<template>
    <form>
        <ul class="common">
            <li v-on:click="toggle(tab.index,tab.view)" v-for="tab in tabs" :class="{active:tab.index==active}">
                {{tab.type}}
            </li>
        </ul>
        <component :is="currentView"></component>
    </form>
</template>

<script>
    import mustchose from "./mustChose"
    import setok from "./setOK"

    export default {
        data() {
            return {
                active: 0,
                currentView: "mustchose",
                tabs: [
                    {
                        index: 0,
                        type: '必须设置项',
                        view: "mustchose"
                    },
                    {
                        index: 1,
                        type: '已为您设好的项',
                        view: "setok"
                    }
                ]
            }
        },
        components: {
            mustchose: mustchose,
            setok: setok
        },
        mounted() {

        },
        methods: {
            toggle: function (index, view) {
                this.active = index
                this.currentView = view
            }
        }
    }
</script>