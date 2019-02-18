<template>
<form class="sxg-search" name="form_search" method="get" action="#">
    <input type="text" class="keyword" name="keyword" placeholder="..." />
    <input type="submit" class="submit" value=">" />
</form>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style>
.sxg-search{ position:relative; width:200px; height:30px;}
.sxg-search .keyword{ width:163px; height:24px; line-height:26px; padding:2px 3px; border-right:none;}
.sxg-search .submit{ position:absolute; top:0; right:0; width:30px; height:30px; background: #fff; cursor:pointer;}
</style>

<!--
<data>[
    {"label":"左边宽","tpl":"toolTop","TorB":"50px","left":"120px","lineHeight":"10px"},
    {"label":"右边宽","tpl":"toolBtm","TorB":"50px","left":"210px","lineHeight":"10px"},
    {"label":"整体高","tpl":"toolRt","TorB":"","left":"310px","lineHeight":"10px"}
]</data>
-->
