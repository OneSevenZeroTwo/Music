<template>
	<div class="box">
		<form class="m_wrap">
			<div class="m_header">
				<a href="#/app/newSong" class="goback">返回</a>
				账号登录
				<a class="m_header_refresh J_refresh" href="javascript:;"></a>
			</div>
			<form id="login-form" name="pop-form-login" method="post" action="">
				<input type="hidden" name="appkey" value="">
				<div>
					<span class="m_label"><img src="../../static/logo.png"/></span>
				</div>
				<mu-text-field label="登录帐号" hintText="请输入登录手机号码" labelFloat/><br/>
				<!--<i class="material-icons color-icon">&#xE8A6;</i>-->
				<mu-text-field label="登录密码" hintText="请输入密码" type="password" labelFloat/><br/>
				<div class="geetest">
					<div class="gt_bg"></div>
					<!--<div class="gt_wrap">
						<div class="gt_top">
							<a class="gt_exit" id="gt_close" href="javascript:;"></a>
							<div class="title">请拖动按钮通过验证</div>
						</div>
					</div>-->
					<div class="mr_b15">
						<mu-raised-button @click="gotoLogin(open)" label="登录" class="submit-btn demo-raised-button" secondary/>
					</div>
					<div class="mr_b15">
						<mu-raised-button @click="toRegister()" label="注册" class="reg-btn demo-raised-button" secondary/>
					</div>
					<div class="width90">
						<!--<a class="findpw" href="/forgetpw">找回密码</a>-->
					</div>
					<input type="hidden" name="cross_post" value="1">
				</div>
			</form>
		</form>
			<mu-dialog :open="dialog" title="小提示" @close="close">
				{{openCon}}
				<mu-flat-button slot="actions" primary @click="close" label="确定" />
			</mu-dialog>
	</div>
</template>

<script>
	//登录逻辑
	export default {
		data() {
			return {
				_telephone: '',
				_password: '',
				dialog: false,
				openCon:''
			}
		},
		methods: {
			handlechange(val) {
				console.log(`you choose ${val}`)
			},

			handleInput(val) {
				this.dataSource = [
					val,
					val + val,
					val + val + val
				]
			},
			open() {
				this.dialog = true
			},
			close() {
				this.dialog = false
			},
			//前往注册
			toRegister() {
				location.href = "#/register"
			},
			//点击登录
			gotoLogin() {
				var inputCon = document.getElementsByClassName("mu-text-field-input");
				this._telephone = inputCon[0].value;
				this._password = inputCon[1].value;
				console.log(this._telephone, this._password);
				//将用户名存入cookie
				document.cookie = 'tel=' + this._telephone;
				//发送ajax请求
				this.sendLogin();
				
			},
			sendLogin: function() {
				this.$ajax({
						url: 'http://localhost:12345/login',
						params: {
							telephone: this._telephone,
							password: this._password
						}
					})
					.then((res) => {
						console.log(res);
						this.open();
						if(res.data.user.length == 0) {
							//alert('登录帐号或登录密码错误');
							this.openCon = '登录帐号或登录密码错误'
						}else
						if(res.data.user.length == 1) {
							//alert('登录成功');
							var cookies = document.cookie;
							if(cookies) {
								var arr = cookies.split('; ');
								arr.forEach(function(item) {
									var temp = item.split('=');
									if(temp[0] === 'tel') {
										location.href = '/app/newSong/';
										
									}
								})
							}

						}

					})
					.catch((error) => {
						console.log(error);
						this.openCon='香菇，登录失败了,请重新输入';
					});
			}
		}
	}
</script>

<style scoped>
	.material-icons {
		position: absolute;
		left: 0;
		top: 25%;
	}
	
	.mu-text-field-focus-line {
		background-color: #FC378C;
	}
	
	.mr_b15 .reg-btn {
		background-color: #fff;
		color: #000000;
	}
	
	.mu-raised-button {
		display: inline-block;
		overflow: hidden;
		position: relative;
		border-radius: 22px;
		width: 290px;
		height: 36px;
		line-height: 36px;
		min-width: 88px;
		-webkit-transition-duration: .3s;
		transition-duration: .3s;
		-webkit-transition-timing-function: cubic-bezier(.23, 1, .32, 1);
		transition-timing-function: cubic-bezier(.23, 1, .32, 1);
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		text-decoration: none;
		text-transform: uppercase;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #FC378C;
		color: #fff;
		-webkit-box-flex: 0;
		-webkit-flex-shrink: 0;
		-ms-flex: 0 0 auto;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		margin: 0;
		outline: 0;
		padding: 0;
		cursor: pointer;
		box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
	}
	
	.mu-text-field {
		width: 80%;
	}
	
	.mu-text-field.focus-state {
		width: 80%;
		color: #FC378C;
	}
	
	.mu-text-field-focus-line {
		background-color: #FC378C;
	}
	
	.goback {
		text-align: center;
		color: #fff;
		position: absolute;
		left: 10px;
	}
	
	.focus-state {
		width: 100%;
		color: #FC378C;
	}
	
	.m_wrap {
		text-align: center;
	}
	
	.width90 {
		width: 90%;
		max-width: 429px;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
	}
	
	.mr_b25 {
		margin-bottom: 25px;
	}
	
	.mr_b15 {
		margin-bottom: 15px;
	}
	
	.m_header {
		position: relative;
		height: 44px;
		width: 100%;
		background-color: #FC378C;
		color: #fff;
		text-align: center;
		font-size: 18px;
		line-height: 44px;
	}
	
	.m_header_close,
	.m_header_refresh,
	.m_input,
	.m_reset_btn {
		background: url("http://s.yytcdn.com/v2/images/app/mobile/login/ico_m_login.png") no-repeat scroll 0 0;
		background-size: 22px 330px;
	}
	
	.m_header_close,
	.m_header_refresh {
		position: absolute;
		width: 22px;
		height: 22px;
	}
	
	.m_header_close {
		left: 9px;
		top: 11px;
	}
	
	.m_header_close:active {
		background-position: 0 -28px;
	}
	
	.m_header_refresh {
		right: 9px;
		top: 11px;
		background-position: 0 -56px;
	}
	
	.m_header_refresh:active {
		background-position: 0 -84px;
	}
	
	.m_label {
		display: inline-block;
		/*max-width: 425px;*/
		text-align: left;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		padding: 19px 0;
	}
	
	.m_label img {
		width: 100%;
		height: 191%;
		text-align: center;
		border-radius: 50%;
	}
	
	.m_input_wrap {
		position: relative;
	}
	
	.m_input {
		outline: none;
		background-color: #ffffff;
		width: 100%;
		height: 32px;
		border: 2px solid #d3d3d3;
		color: #bcbab8;
		border-radius: 15px;
		padding: 0 6px 0 32px;
		line-height: normal;
		vertical-align: middle;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.m_input:focus {
		color: #333333;
		border-color: #33e1a7;
	}
	
	.m_reset_btn {
		background-position: 0 -224px;
		height: 22px;
		position: absolute;
		right: 5px;
		top: 5px;
		width: 22px;
	}
	
	.m_reset_btn:active {
		background-position: 0 -252px;
	}
	
	.m_name {
		background-position: 4px -109px;
	}
	
	.m_name:focus {
		background-position: 4px -137px;
	}
	
	.m_pwd {
		background-position: 4px -165px;
	}
	
	.m_pwd:focus {
		background-position: 4px -193px;
	}
	
	.m_phone_wrap {
		width: 100%;
		float: left;
		margin-right: 5%;
	}
	
	.m_phone {
		background-position: 4px -277px;
	}
	
	.m_phone:focus {
		background-position: 4px -305px;
	}
	
	.m_button {
		width: 89%;
		max-width: 425px;
		border-radius: 20px;
		display: inline-block;
		color: #fff;
		font-size: 16px;
		height: 40px;
		line-height: 40px;
		padding: 0 6px;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		text-align: center;
		-webkit-appearance: none;
		outline: none
	}
	
	.m_button:hover {
		color: #fff;
	}
	
	.m_submit {
		background-color: #FC378C;
	}
	
	.m_button_plain {
		border: 2px solid #dcdcdc;
		line-height: 36px;
		color: #7c7b79;
	}
	
	.m_button_plain:hover {
		color: #7c7b79;
	}
	
	.m_button_plain:active {
		color: #33e1a7;
		border-color: #33e1a7;
	}
	
	.findpw {
		position: absolute;
		right: 22px;
		border-bottom: 1px solid #dcdcdc;
		color: #7c7b79;
	}
</style>