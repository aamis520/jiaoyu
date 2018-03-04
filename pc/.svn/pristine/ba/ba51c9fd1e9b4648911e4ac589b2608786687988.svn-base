<style scoped lang="less"></style>
<template>
    <li class="tab-item">
        <span v-if="!isSubModuleList" class="text" @click="select(mod.menuList)">{{mod.moduleName}}</span>
        <span v-if="isSubModuleList" class="text">{{mod.moduleName}}</span>
        <ul v-if="isSubModuleList" class="list-sec shadow">
            <li class="list-item" v-for="subMod in mod.subModuleList" :key="subMod.id" @click="select(subMod.menuList)">
                {{subMod.moduleName}}
            </li>
        </ul>
    </li>
</template>
<script>
export default {
    props: ['mod'],
    data() {
        return {
            isChecked: true,
            menuList: [],
            modList: ''
        }
    },
    computed: {
        isSubModuleList() {
            return this.mod.subModuleList && this.mod.subModuleList.length > 0
        }
    },
    mounted: function() {},
    methods: {
        select(mod) {
            console.log('checked+++')
            console.log(mod)
            this.$emit('checked', mod)
        }
    }
}

</script>
