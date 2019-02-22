<template>
<div class="sxg-caption">
	<h3>栏目标题</h3>
	<a class="more" href="#">更多 ></a>
</div>
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
.sxg-caption {
    height: .34rem;
    line-height: .34rem;
    padding: 0 .1rem;
    border-left: red .05rem solid;
    h3 {
    	float: left;
    	font-size: .16rem;
    }
    .more {
    	float: right;
    	color: #999;
    }
}
</style>
