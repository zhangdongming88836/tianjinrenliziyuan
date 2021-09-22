<template>
	<div id="commonTitle">
		<div class="commonTitle_left">
			<p class="line"></p>
			<p>{{title.firstTitle}}</p>
			<p v-if="title.secondTitle !== ''">
				<i class="iconfont iconicon_arrow_right"></i>
				{{title.secondTitle}}
			</p>
			<p v-if="title.thirdTitle !== ''">
				<i class="iconfont iconicon_arrow_right"></i>
				{{title.thirdTitle}}
			</p>
		</div>
		<div class="commonTitle_right" v-if="link !== ''" @click="handleReturn">
			<i class="iconfont iconicon_back"></i>返回
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		props:{
			title:{
				type:Object,
				default:false
			},
			link:{
				type:String,
				default:''
			}
		},
		methods:{
			handleReturn(){
				this.$router.push(this.link)
			},
		}
	}
</script>
<style lang="scss">
	#commonTitle{
		display:flex;
		justify-content: space-between;
		width:100%;
		height:50px;
		line-height:50px;
		box-sizing: border-box;
		padding:0 10px;
		background:#fff;
		border-bottom:4px solid #DEE1E6;
		i{
			margin-right:4px;
			font-size:14px;
		}
		.commonTitle_left{
			display: flex;
			line-height:50px;
			.line {
				width: 4px;
				height: 24px;
				margin:12px 8px 0 0;
				background:#DEE1E6;
			}
			p{
				font-size:16px;
				color:#333;
			}
		}
		.commonTitle_right{
			line-height:50px;
			align-self: center;
			height:32px;
			line-height:32px;
			box-sizing: border-box;
			padding:0 10px;
			border-radius:4px;
			font-size:14px;
			color:#fff;
			text-align:center;
			cursor:pointer;
			background:#1999f7;
		}
	}
</style>