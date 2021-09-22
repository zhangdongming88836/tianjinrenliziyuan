<template>
	<div id="commonPagination">
		<el-pagination
			@size-change="$_handleSizeChange"
      		@current-change="$_handleCurrentChange"
			background
			layout="total, prev, pager, next, jumper"
			:total="total"
			:current-page="pageNum"
			:page-size="pageSize"
		>
		</el-pagination>
	</div>
</template>
<script>
	export default {
		props:{
			total:{
				type:Number,
				default:false
			},
			pageNum:{
				type:Number,
				default:1
			},
			pageSize:{
				type:Number,
				default:false
			}
		},
		data(){
			return {}
		},
		methods: {
			$_handleSizeChange(pageSize){
				this.$emit('changeSize',pageSize)
			},
			$_handleCurrentChange(pageNum){
				this.$emit('changeCurrent',pageNum)
			}
		}
	}
</script>
<style lang="scss">
	#commonPagination{
		display:flex;
		justify-content: flex-end;
		margin-top:20px;
		.el-pagination.is-background .el-pager li:not(.disabled).active{
			background-color:#5490ff;
		}
	}
</style>