<template>
    <div class="head-box">
        <div class="header">
            <router-link :to="{path:'/home'}">{{msg1}}</router-link>
            <span class="sp2">{{msg2}}</span>
            <span class="search">
                <input type="text" name="search" id="search" placeholder="师生班"/>
                <i>

                </i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg1: '南京市小银星艺术团',
                msg2: '不辱使命    不负众望',
                searchTxt: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .head-box {
        background: #4ED79F;
    }

    .header {
        width: 1600px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        margin: 0 auto;
        a {
            color: white;
        }
        a:hover {
            color: #0082E6;
        }
    }

    .sp2 {
        margin: 0 460px;
        color: white;
    }

    .search {
        width: 194px;
        height: 34px;
        display: inline-block;
        border-radius: 20px;
        margin-top: 15px;
        line-height: 34px;
        background: rgba(0, 0, 0, 0.2);
        padding: 0 20px;
    }

    .search input {
        border: none;
        background: none;
        color: white;
        outline: none;
        font-size: 14px;
    }

    ::-webkit-input-placeholder {
        color: #CBEEE0;
        letter-spacing: 1rem;
        font-size: 14px;
    }

</style>