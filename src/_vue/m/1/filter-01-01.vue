<template>
<div class="sxg-filter">
	<div class="tabs">
		<li :class="{on: tabOn === 'mult'}" @click="switchTab('mult')">综合</li>
		<li :class="{on: tabOn === 'sale'}" @click="switchTab('sale')">销量</li>
		<li :class="{on: tabOn === 'new'}" @click="switchTab('new')">上新</li>
		<li :class="{on: tabOn === 'price'}" @click="switchTab('price')">
			<p>价格</p>
			<div class="arrow">
				<span class="up" :class="{on: price === 'up'}"></span>
				<span class="down" :class="{on: price === 'down'}"></span>
			</div>
		</li>
	</div>
	<div class="style">
		<img v-if="style === 'bPic'" @click="switchStyle('sPic')" src="http://localhost:8000/imgs/circle.png" />
		<img v-if="style === 'sPic'" @click="switchStyle('bPic')" src="http://localhost:8000/imgs/circle_on.png" />
	</div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
        	tabOn: 'mult',
        	price: 'up',
        	style: 'bPic'
        };
    },
    methods: {
    	switchTab (tab) {
    		if (tab === 'price') {
    			if (this.tabOn === 'price') {
    				if (this.price === 'up') {
    					this.price = 'down'
    				} else {
    					this.price = 'up'
    				}
    			} else {
    				this.price = 'up'
    			}
    		}
    		this.tabOn = tab;
    	},
    	switchStyle (style) {
    		this.style = style;
    	}
    }
};
</script>
<style lang="scss">
.sxg-filter {
	height: .34rem;
	line-height: .34rem;
	border-bottom: #ddd .01rem solid;
    .tabs {
    	width: 86%;
    	display: flex;
    	text-align: center;
    	li {
    		position: relative;
    		flex: 1;
    	}
    	li.on {
    		color: red;
    	}
    }
    .arrow {
    	position: absolute;
    	top: 0;
    	right: .1rem;
    	width: .08rem;
    	height: .3rem;
    	.up {
    		position:absolute; 
    		top:0.06rem;
    		left:0;
    		width:0;
    		height:0;
    		border:3px transparent dashed;
    		border-bottom:6px #999 solid;
    	}
    	.up.on {
    		border-bottom-color: #333;
    	}
    	.down {
    		position:absolute; 
    		top:.19rem;
    		left:0;
    		width:0;
    		height:0;
    		border:3px transparent dashed;
    		border-top:6px #999 solid;
    	}
    	.down.on {
    		border-top-color: #333;
    	}
    }
    .style {
    	position: absolute;
    	top: 0;
    	right: 0;
    	width: .4rem;
    	height: .34rem;
    	border-left: #eee .01rem solid;
    	img {
    		width: .24rem;
    		margin: .05rem auto;
    	}
    }
}
</style>
