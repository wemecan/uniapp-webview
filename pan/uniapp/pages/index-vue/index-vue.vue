<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<div class="statusBar" :style="{height:statusBarHeight+'wx',width:windowWidth+'wx',backgroundColor:'#ff706f'}"></div>
		<!-- #endif -->
		<!-- 这是扩展名为.vue  index-vue 中的webview 展现的内容 -->
		<web-view :src="weburl" :style="{height:(windowHeight-statusBarHeight-100)+'wx',width:windowWidth+'wx','marginTop':statusBarHeight+'wx'}"
		 @onPostMessage="handlePostMessage" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: "",
				windowHeight: "",
				windowWidth: "",
				weburl: "http://192.168.1.208:8080//index.html"
			}
		},
		onLoad() {
			try {
				let systemInfo = uni.getSystemInfoSync();
				this.windowHeight = systemInfo.windowHeight;
				this.windowWidth = systemInfo.windowWidth;
				this.statusBarHeight = systemInfo.statusBarHeight;
				console.log("系统窗口的高度", systemInfo.statusBarHeight)
			} catch (e) {
				console.log('获取系统信息失败!', e)
			}
			this.windowHeight = this.windowHeight;
			console.log(`状态栏高度${this.statusBarHeight}`)
		},
		methods: {
			handlePostMessage(e) {
				let resMsgObj = e.detail.data[0];
				console.log(resMsgObj)
			},
		}
	}
</script>

<style>
	.statusBar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
	}
</style>
