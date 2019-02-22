<template>
<div class="sxg-gotop" @click="gotop()">
	<p>返回顶部</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {};
    },
    methods: {
    	gotop () {
    		document.body.scrollTop = document.documentElement.scrollTop = 0;
    	}
    }
};
</script>
<style lang="scss">
.sxg-gotop {
	position: absolute;
	bottom: .15rem;
	right: .15rem;
	width: .5rem;
	height: .5rem;
	border: #ddd 1px solid;
	border-radius: 50%;
	cursor: pointer;
    p {
    	width: .28rem;
    	line-height: .16rem;
    	margin: .09rem auto 0;
    }
}
</style>
