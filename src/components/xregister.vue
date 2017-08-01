<template>
	<div>
		<div class="m_wrap">
			<div class="m_header" @click="">
				<a href="#/app/newSong" class="goback">&lt;返回</a>
				账号注册
				<a class="m_header_refresh" href="javascript:;"></a>
			</div>
			<form id="register-form" name="pop-form-login" method="post">
				<!--上传头像-->
				<form id="uploadForm">
					<input type="file" name="deviceinfo" @change="doUpload()" multiple="multiple">
				</form>
				<div>
					<span class="m_label"><img @click="uploadImg()" v-model="imgurl" class="headpic" src="../../static/logo.png"/></span>
				</div>

				<mu-text-field label="注册帐号" hintText="请输入注册手机号码" v-model="telephone" labelFloat/><br/>
				<mu-text-field label="昵称" hintText="请输入昵称" labelFloat/><br/>
				<mu-text-field label="输入密码" hintText="请输入6-20位密码" type="password" labelFloat/><br/>
				<mu-text-field label="确认密码" hintText="再次确认密码" type="password" labelFloat/><br/>
				<div class="geetest">
					<div class="gt_bg"></div>
					<div>
						<mu-raised-button @click="gotoRegister()" label="确认注册" id="reg-btn" class="submit-btn demo-raised-button" secondary/>
					</div>
				</div>
			</form>
		</div>
		<mu-dialog :open="dialog" title="小提示" @close="close">
			{{openCon}}
			<mu-flat-button slot="actions" primary @click="close" label="确定" />
		</mu-dialog>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				telephone: '',
				password: '',
				repassword: '',
				nickname: '',
				imgurl: '',
				dialog: false,
				openCon: '',
				picImg: false,
				data:''
			}
		},
		mounted(){
			this.$store.state.sildeShow = false;
		},
		methods: {
			open() {
				this.dialog = true
			},
			close() {
				this.dialog = false
			},
			//点击注册
			gotoRegister() {
				this.open();
				//匹配输入框信息
				var inputCon = document.getElementsByClassName("mu-text-field-input");
				var imgurl = document.querySelector('#uploadForm input').files;
				//获取手机号
				//console.log(inputCon[0].value);
				var _telephone = inputCon[0].value;
				//console.log(_telephone)
				this.telephone = _telephone
				//console.log(this.telephone)
				if(!/^1[3-57-9]\d{9}$/.test(_telephone)) {
					this.openCon = '您输入的手机号不正确！请重新输入正确的手机号';
					return false;
				}
				//获取昵称
				var _nickname = inputCon[1].value;
				//console.log(_nickname)
				this.nickname = _nickname;
				if(!/^([\u2E80-\u9FFF]*)|[a-zA-Z]*$/.test(_nickname)) {
					this.openCon = '您的输入不符合规则，请输入中/英文的昵称';
					return false;
				}
				//获取首次密码值
				var _password = inputCon[2].value;
				//console.log(_password);
				this.password = _password;
				//console.log(this.password)
				if(!/^\S{6,20}$/.test(_password)) {
					this.openCon = '密码不合法,请输入6-20位的密码';
					return false;
				}
				//确认密码
				var _repassword = inputCon[3].value;
				//console.log(_repassword);
				this.repassword = _repassword;
				//console.log(this.repassword)
				if(_repassword !== _password) {
					this.openCon = '两次输入密码不一致';
					return false;
				}
				//发送ajax请求
				this.sendReg();
			},
			sendReg() {
				this.$ajax({
						url: 'http://localhost:12345/register',
						params: {
							telephone: this.telephone,
							nickname: this.nickname,
							password: this.password,
							repassword: this.repassword
						}
					})
					.then((res) => {
						//console.log(res);
						this.openCon = '注册成功，前往登录';
						location.href = '#/login';
					})
					.catch((error) => {
						console.log(error);
						this.openCon = '蓝瘦，注册不幸失败了，请重新注册';
					});
			},
			doUpload(){
				var dd = new FormData($('#uploadForm')[0]);
				var _self = this;
				console.log(dd)
				console.log(_self)
				dd.append('headpic',document.querySelector('#uploadForm input').files[0]);
				console.log(document.querySelector('#uploadForm input').files);
				$.ajax({
					url: 'http://localhost:12345/upload-single',
					type: 'POST',
					cache: false, //不必须
					data: dd,
					processData: false,
					contentType: false,
					success: function(data) {
						console.log(_self.telephone)
						console.log(data)
						$(".headpic").attr("src", "../../static/uploads/" + data);
						//console.log($(".headpic").attr("src", "../../static/uploads/" + data));
						console.log($(".headpic").attr("src", "../../static/uploads/" + data)[0].src);
						var imgurl = $(".headpic").attr("src", "../../static/uploads/" + data)[0].src;
						//console.log(imgurl)
						//console.log(_self.imgurl)
						_self.$ajax({
							url: 'http://localhost:12345/touxiang',
							params: {
								telephone: _self.telephone,
								imgurl: imgurl
							}
						})
						.then((res) => {
							console.log(res);
							console.log(6666,res.config.params.imgurl)
						})
						.catch((error) => {
							console.log(error);
						});
					}
				});
			},
			uploadImg() {
				console.log(123);
				$("#uploadForm input").trigger('click');
			}
		}

	}
</script>
<style scoped>
	.goback {
		text-align: center;
		color: #fff;
		position: absolute;
		left: 10px;
	}
	.mu-text-field-focus-line {
		background-color: #FC378C;
	}
	
	.m_wrap {
		text-align: center;
	}
	#uploadForm{
		position: absolute;
		left: 40%;
		top: 10%;
	}
	#uploadForm input{
		width: 60px;
		height: 60px;
		padding: 20px 0;
		opacity: 0;
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
</style>