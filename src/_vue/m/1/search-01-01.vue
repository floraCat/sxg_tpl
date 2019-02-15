<template>
<form class="sxg-search">
    <div class="icon"></div>
    <input name="keyword" class="keyword" type="text" placeholder="搜索商品名称" />
</form>
</template>

<script>
export default {
    data: function () {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss">
.sxg-search {
    width: 70%;
    height: .32rem;
    border: #ddd .01rem solid;
    border-radius: .16rem;
    .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: .32rem;
        height: .32rem;
        background: url(~@/assets/imgs/circle.png) no-repeat center;
        background-size: .2rem;
    }
    .keyword {
        height: .32rem;
        line-height: .26rem;
        padding: .03rem .1rem .03rem .32rem;
        border: none;
        color: #666;
    }
}
</style>
