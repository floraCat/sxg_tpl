<template>
<div class="sxg-layout">
	<li>
		<img src="http://localhost:8000/images/11.jpg" />
		<div class="info">
			<span class="bg"></span>
			<h4>标题标题</h4>
			<p>简短描述简短描述</p>
		</div>
	</li>
	<li>
		<img src="http://localhost:8000/images/11.jpg" />
		<div class="info">
			<span class="bg"></span>
			<h4>标题标题</h4>
			<p>简短描述简短描述简短描述简短描述</p>
		</div>
	</li>
	<li>
		<img src="http://localhost:8000/images/11.jpg" />
		<div class="info">
			<span class="bg"></span>
			<h4>标题标题</h4>
			<p>简短描述简短描述简短描述简短描述</p>
		</div>
	</li>
	<li>
		<img src="http://localhost:8000/images/11.jpg" />
		<div class="info">
			<span class="bg"></span>
			<h4>标题标题</h4>
			<p>简短描述简短描述简短描述简短描述</p>
		</div>
	</li>
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
.sxg-layout {
    overflow: hidden;
    padding: .1rem .1rem;
    li {
    	position: relative;
    	float: left;
    	width: 30.3%;
    	height: 1rem;
    	margin: 0 3% .1rem 0;
    	img {
    		width: 100%;
    		height: 100%;
    	}
    	.info {
    		position: absolute;
    		bottom: 0;
    		left: 0;
    		width: 100%;
    		height: .5rem;
    		padding: .05rem;
    		color: #ccc;
    		overflow:hidden;
    	}
    	.bg {
    		position: absolute;
    		top: 0;
    		left: 0;
    		width: 100%;
    		height: 100%;
    		background: #000;
    		opacity: .3;
    	}
    	h4 {
    		position: relative;
    		z-index: 9;
    		height: .24rem;
    		line-height: .24rem;
    		font-size: .14rem;
    		color: #fff;
    	}
    	p {
    		position: relative;
    		z-index: 9;
    		height: .16rem;
    		line-height: .16rem;
    		white-space:nowrap; 
    		overflow:hidden;
			text-overflow:ellipsis; 
    	}
    }
}
</style>
