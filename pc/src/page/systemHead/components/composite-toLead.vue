<style lang="less" scoped>
    .toLead{
        width: 867px;
        height: 713px;
        margin-top: 12px;
        background-color: #fff;
        border-radius: 5px;
        padding:0  43px  32px 67px;
    }
</style>
<template>
    <div class="toLead">
       <nav class="leadUl">
           <ul>
               <li>2n</li>
               <li>2n</li>
               <li>2n</li>
               <li>2n</li>
               <li>2n</li>
               <li>2n</li>
               <li>2n</li>
           </ul>
       </nav>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                default: "当前页面标题"
            }
        },
        data() {
            return {};
        }
    };
</script>
