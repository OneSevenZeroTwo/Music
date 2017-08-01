define(function(){
	return {
		/*
			获取某个范围的随机数
		*/
		randomNum:function(min,max){
			var res  = parseInt(Math.random()*(max-min+1))+min;
			return res;
		},


		/*
			利用递归求某个数的阶乘
		*/
		factorial:function(num){
			if( num <= 1 ){
				return 1;
			}
			// 变量更新
			return num * factorial(num-1);
		},


		/*
			计算某个数的平方
		*/
		square:function (num){
			var res = num * num;
			return res;
		},


		/*
			计算某个数的立方 cubic 立方
		*/
		cubic:function (num){
			var res = num*num*num;
			return res;
		},


		/*
			利用递归来得出斐波那契数列
			fibSequence 
			斐波那契数列
		*/ 
		fibSequence:function (num){
			if(num <= 2){
				return 1;
			}
			return fibSequence(num-1)+fibSequence(num-2);
		},


		/*
			生成随机表格的函数
		*/
		creatTable:function (_rows,_cols){	
			var res = '';
			// 控制行数
			for(var i = 1;i<=_rows;i++){
				res += '<tr>';
				// 控制列数
				for(var j =1;j<=_cols;j++){
				res +='<td>'+ i +'行'+ j +'列' +'</td>';
				}
				res += '</tr>';
			}
			res = '<table>' + res + '</table>';	
			return res;
		},


		/*
			随机生成颜色
		*/ 
		randomColor:function (){
			var r = randomNum(0,255);
			var g = randomNum(0,255);
			var b = randomNum(0,255);
			var res = 'rgb('+r+','+g+','+b+')';
			return res;
		},


		/*
			判断一个数组中有没有某个元素
		*/
		has:function (arr,item){
			for(i=0;i<=arr.length-1;i++){
				if(arr[i]===item){
					console.log('这个数组中有'+item+'这个元素');
				}else{
					console.log('这个数组中没有'+item+'这个元素');
					break;
				}
			}
		},


		/*
			随机生成四位数字字母组合的验证码
		*/
		numPlusWord:function (len){
			for(var res ='';res.length<len;res.length++){
				var num = parseInt(Math.random()*128);
				if((num>=48 && num<=57) || (num>=65 && num<=90) || num<=122 && num>=97){
					res += String.fromCharCode(num);
				}
			}
			return res;
		},


		/*
			去掉数组中重复的元素，得到新的数组
		*/
		norepeat:function (arr){
			var newArr = [];
			for(i=0;i<arr.length;i++){
				for(j=0;j<newArr.length;j++){
					if(arr[i] === newArr[j]){
						break;
					}
				}
				// 将数组中的数与新数组中的数比较
			    // 将没有的数写入新数组中
				if( j === newArr.length ){
					newArr.push(arr[i]);
				}
			}
			return newArr;
		},


		/*
			去掉字符串中重复的字符，得到一个对象
		*/
		count:function (str){
			// 利用对象的属性来做，建立一个空对象
			var obj = {};
			for(i = 0;i<str.length;i++){
				var char = str[i];
				if(obj[char] === undefined){
					obj[char] = 1;
				}else{
					obj[char]++;
				}
			} 
			return obj;
		},


		/*
			得到日期date的n天后的日期的方法
		*/
		afterDate:function (date,n){
			// 将输入的日期赋值给一个变量
			var inputDate = new Date(date);
			// 获取当前的日期
			var dayNum = inputDate.getDate();
			// 设置n天后的日期
			inputDate.setDate(dayNum + n);
			// 将n天后的日期导出
			var year = inputDate.getFullYear();
			var month = inputDate.getMonth()+1;
			var date = inputDate.getDate();
			var week = inputDate.getDay();
			var hour = inputDate.getHours();
			var min = inputDate.getMinutes();
			var sec = inputDate.getSeconds(); 
			var res = year +'年'+ month +'月'+ date +'日';
			return res;
		},


		/*
			实时显示最新时间，需要与setInterval(currentTime,1000);一起用
		*/
		// 避免第一次出现要等一秒的情况，所以先执行一遍函数
		// currentTime();
		// setInterval(currentTime,1000);
		currentTime:function (){
			var now = new Date();

			var year = now.getFullYear();
			// now.getMonth得到的值是为0~11的数字
			var month = now.getMonth()+1;
			var date = now.getDate();
			// 运用字符串的索引，将得到当前的星期
			var str_week = '星期天,星期一,星期二,星期三,星期四,星期五,星期六'.split(',');
			var week = str_week[now.getDay()];
			var hour = now.getHours();
			var min = now.getMinutes();
			var sec = now.getSeconds();

			// 三元运算，做补0操作，补足时分秒中缺少的零
			hour = hour<10 ?  '0'+hour : hour;
			min = min<10 ?  '0'+min : min;
			sec = sec<10 ?  '0'+sec : sec;

			var res = year +'-'+ month +'-'+ date +''+' '+week + ' '+hour +':'+min +':'+sec;
			//将res写入html结构中，box为形参，调用时可更改
			//box.innerHTML = res;
			return res;
		},


		/*
			以合适的速度返回浏览器顶部的方法
		*/
		// 配合点击事件和定时器一起使用
		// 在最外层绑定一个点击事件函数
		// var timer = setInerval(toTop);
		toTop:function () {
			// 控制滚动条滚动的速度，速度可以更改
			var scrollTop = window.scrollY;
			var speed = scrollTop/20;
			scrollTop = scrollTop - speed;
			//当垂直高度小于10的时候，滚动条直接跳到0的位置
			// 10可以更改
			if(scrollTop <= 10){
				clearInterval(timer);
				scrollTop = 0;
			}
			// 设置滚动条所要滚动到的位置
			window.scrollTo(0,scrollTop);
		},


		/*
			封装一个除去非元素节点的函数，得到新的函数
			不包含文本节点
		*/
		// 主要适用于IE8-，不能用children获取子元素，
		// 而是通过childNodes,
		// 这样获取的子元素包含了文本节点
		// var span = div.childNodes;
		getElement:function (nodes){
			var res = [];
			// 通过nodeType来判断节点类型，1为元素节点，2为属性节点，3为文本节点
			for(var i =0;i<nodes.length;i++){
				if(nodes[i].nodeType === 1 ){
					res.push(nodes[i]);
				}
			}	
			return res;	
		},


		/**
		 * [获取元素样式的方法，兼容ie8-]
		 * @param  {Element} ele  [要获取样式的元素]
		 * @param  {String} attr [css属性]
		 * @return {String}      [返回css属性对应的样式]
		 */
		getStyle:function (ele,attr){
			// 保存最终样式
			var res;
			if(window.getComputedStyle){
				res = getComputedStyle(ele)[attr];
			}else if(ele.currentStyle){
				res = ele.currentStyle[attr];
			}else{
				res = ele.style[attr];
			}

			return res;
		},
		// var box = document.getElementById('box')
		// getStyle(box,'background-color')

		/**
		 * [给元素添加事件，兼容IE8以下浏览器]
		 * @param {Node} 	 ele     [需要绑定事件的元素]
		 * @param {String} 	 type    [事件类型]
		 * @param {Function} handler [事件处理函数]
		 * @param {Boolean}  capture [是否捕获]
		 */
		addEvent:function (ele,type,handler,capture){
			// 判断是否支持事件监听
			// 标准浏览器
			if(ele.addEventListener){
				ele.addEventListener(type,handler,capture);
			}

			// IE8-
			else if(ele.attachEvent){
				ele.attachEvent('on' + type,handler);
			}

			// 传统绑定事件方式
			else{
				ele['on' + type] = handler;
			}
		},
		// addEvent(box,'click',function(){},true)


		/*
			Cookie的增删查改
		 *
		/**
		 * [设置和修改cookie]
		 * @param {[String]} name    [cookie名]
		 * @param {[String]} val     [cookie值]
		 * @param {[Date]} expires 	 [有效期]
		 * @param {[String]} path    [路径]
		 */
		setCookie:function (name,val,expires,path){
			var str_cookie = name + '=' + val;

			// 如果存在有效期
			if(expires){
				str_cookie += ';expires=' + expires
			}

			// 如果存在路径设置
			if(path){
				str_cookie += ';path=' + path
			}

			document.cookie = str_cookie;
		},

		//setCookie('top','120',now,'/');
		/**
		 * [删除cookie]
		 * @param  {[String]} name [要删除的cookie名]
		 */
		removeCookie:function (name){
			var now = new Date();
			now.setDate(now.getDate()-1);
			now = now.toUTCString();

			// document.cookie = name + '=null;expires=' + now;
			setCookie(name,null,now);
		},
		//removeCookie('top');

		/**
		 * [获取cookie值]
		 * @param  {[String]} name [需要获取的cookie名]
		 * @return {[String]}      [返回对应cookie的值]
		 */
		getCookie:function (name){
			var cookies = document.cookie;
			if(!cookies){
				return '';
			}

			var res = '';
			var arr = cookies.split('; ');
			arr.forEach(function(item){
				var temp = item.split('=');
				if(temp[0] === name){
					res = temp[1];
				}
			});

			return res;
		},
		//getCookie('tops');//120



		//缓冲运动的函数封装
		/**
		 * @param  {Node}
		 * @param  {[String]}
		 * @param  {[Number]}
		 */
		/*function animate(ele,attr,target){
			var timerName = attr+'timer';
			clearInterval(ele[timerName]);

			ele[timerName] = setInterval(function(){
				var current = getstyle(ele,attr);

				// 提取单位
				var unit = current.match(/[a-z]$+/i);
				// match方法得到的一个数组，所以要用索引来获取其中的值
				unit = unit ? unit[0]:'';

				// 提取数值
				current = parseFloat(current);
				// 计算速度
				var speed = (target-current)/10;

				speed = speed > 0? Math.ceil(speed):Math.floor(speed);
				if(speed === 0){
					clearInterval(ele[timerName])
					current = target - speed;
				};
				ele.style.attr = current+speed+unit;
			},30)
		}*/

		/**
		 * version:animate 1.2
		 * @param  {[node]}
		 * @param  {[object]}
		 * @param  {Function} {callback:回调函数}
		 */
		animate:function (ele,opt,callback){
			// 记录属性动画数量
			var timerLen = 0;

			//遍历opt对象，为每个属性设定一个定时器
			for(var attr in opt){
				timerLen++;

				createTimer(attr);
			}

			function createTimer(attr){
				// 获取目标值
				var target = opt[attr];

				// 为每个属性创建一个定时器标识
				var timerName = attr + 'timer';


				// 创建定时器前先清除之前的定时器
				clearInterval(ele[timerName]);


				// 定时器与DOM节点绑定
				ele[timerName] = setInterval(function(){
					// 先获取当前值
					var current = getStyle(ele,attr);//'10px','20rem','50deg','1em';

					// 提取单位
					var unit = current.match(/[a-z]+$/i);//['px'],null
					unit = unit ? unit[0] : '';

					// 提取当前值（数值）
					current = parseFloat(current);

					// 计算速度
					var speed = (target-current)/10;//0.3,-0.2


					// 单独处理opacity属性
					if(attr === 'opacity'){
						speed = speed>0 ? 0.1 : -0.1;
					}else{
						// 根据正负值分别取整
						speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
					}


					// 到达目标值后停止定时器
					if(speed===0 || current === target){
						clearInterval(ele[timerName]);

						// 重置current值
						current = target - speed;

						// 每执行完一个动画timerLen减一
						timerLen--;

						if(typeof callback === 'function' && timerLen===0){
							// 回调函数可以控制函数的执行顺序，作为函数的参数存在
							callback();
						}
					}


					ele.style[attr] = current + speed + unit;
				},50);
			}
			
		},
		//animate(box,'width',120)


		//ajax异步请求对象函数封装
		/**
		 * [ajax description]
		 * @param  {[
			 * type:string,
			 * url:string,
			 * async:bool,
			 * data:object,
			 * success:function
		 * ]} opt [
			 * type:get/post,
			 * url:请求文件地址，
			 * async:是否异步,true为异步,
			 * data:需要传入的数据,用对象来保存,
			 * success:回调函数
		 * ]
		 */
		ajax:function (opt){

			if(!opt.type){
				opt.type = 'get';
			}
			if(!opt.async){
				opt.async = true;
			}

			var xhr = null;
			try{
				xhr = new XMLHttpRequest();
			}catch(err){
				try{
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(err){
					try{
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}catch(err){
						alert('你的浏览器太low了，换个浏览器吧');
					}
				}
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status)){
					// 需要考虑是否需要使用JSON字符串
					opt.callback(xhr.responseText);
				}
			}

			for( var attr in opt.data){
				var res = '?';
				res += attr+'='+opt.data[attr]+'&';
			}
			res = res.splice(0,-1);

			if(opt.type === 'get'){
				
				xhr.open(opt.type,opt.url+res,opt.async);
				xhr.send();
			}
			
			if(opt.type === 'post'){

				xhr.open(opt.type,opt.url,opt.async);

				// 请求头
				xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
				xhr.send(res);
			}

		},
		/*ajax({
			type:'get',
			url:http://localhost/ajax/api,
			async:true,
			data:{id:1},
			success:function(),
		});*/


		// 利用Object.prototype.toString方法来判断数据类型的函数封装
		// 借用Object原型对象的toString方法
		type:function (data){
			return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
		}
	}
})