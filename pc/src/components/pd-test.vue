<style scoped lang='less'>
.text {
    height: 30px;
    background-color: #eee;
}

</style>
<template>
    <div class="hello">
        <div class="message">prop-message:{{message}}</div>
        <div class="text">data-msg:{{msg}}</div>
        v-model-tip:
        <input type="text" v-model='tip'>
        <div class="text">computed-tip:{{tip}}</div>
    </div>
</template>
<script>
export default {
    props: ["message"],
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    watch: {
        message: function(value) {
            console.log("watch-message-change:" + value);
        },
        tip(value) {
            console.log("watch-tip-change:" + value);
        }
    },
    mounted() {
        this.msg = this.message;
    },
    computed: {
        tip: {
            get: function() {
                return this.msg;
            },
            set: function(value) {
                this.msg = value;
                console.log("changed!");
                console.log(value);
            }
        }
    }
};

</script>
