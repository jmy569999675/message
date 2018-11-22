/*function Message(obj,text){
	this.borderColor=obj.bColor||"black";//边框颜色
	this.borderSize = obj.bSize;//边框大小
	this.bgc= obj.bgc;//背景颜色
	this.time = obj.time;//停留的时间
	this.text = text;//弹窗提示的内容
	this.textColor = obj.textColor;//字体颜色
	this.package = document.createElement("div");
	this.p = document.createElement("p");
	this.body = document.getElementsByTagName('body')[0];
	this.create();
	this.add();
}
// 创建标签
Message.prototype.create = function(){	
	this.package.setAttribute("id","tips");
	this.package.style.borderColor = this.borderColor||"#000";
	this.package.style.borderWidth = this.borderSize||"10px";
	this.package.style.borderStyle ="solid";
	this.package.style.background = this.bgc||"#fff";
	this.package.style.color = this.textColor || "black";
	this.package.style.position = "fixed";
	this.package.style.width = "60%";
	this.package.style.marginLeft = "-30%";
	this.package.style.left = "50%";
	this.package.style.top = "50%";
	this.package.style.display = "block";
	this.package.style.padding =".4rem .2rem";
	this.package.style.lineHeight = ".4rem";
	this.package.style.textAlign = "center";
	this.package.style.fontSize = ".32rem";	
	this.p.innerHTML = this.text;
	this.package.appendChild(this.p);
	this.body.appendChild(this.package)
}
Message.prototype.add = function(){
	var that = this;
	var a = document.getElementsByClassName(this.className);
	var t1 = setTimeout(function(){
		that.package.style.display = "none";
		that.body.removeChild(that.package);
		clearInterval(t1)
	},that.time)
}*/
var msgConfig = {
	bColor:"",//边框颜色,默认黑色
	bSize :"2" ,//边框线条粗细,默认1px
	bgc : "",//内容背景颜色,默认白色
	time : 2000,// 内容消失毫秒
	textColor:"",//字体颜色,默认黑色
}
function Message(obj){
	this.borderColor=obj.bColor||"black";//边框颜色
	this.borderSize = obj.bSize||"10px";//边框大小
	this.bgc= obj.bgc||"#fff";//背景颜色
	this.time = obj.time||2000;//停留的时间
	this.textColor = obj.textColor|| "black";//字体颜色
	this.init();
}
Message.prototype = {
	create:function(){
		this.package = document.createElement("div");
		this.p = document.createElement("p");
		this.body = document.getElementsByTagName('body')[0];
		this.package.setAttribute("id","tips");
		this.package.style.borderColor = this.borderColor;
		this.package.style.borderWidth = this.borderSize;
		this.package.style.borderStyle ="solid";
		this.package.style.background = this.bgc;
		this.package.style.color = this.textColor ;
		this.package.style.position = "fixed";
		this.package.style.width = "60%";
		this.package.style.marginLeft = "-30%";
		this.package.style.left = "50%";
		this.package.style.top = "50%";
		this.package.style.display = "none";
		this.package.style.padding =".4rem .2rem";
		this.package.style.lineHeight = ".4rem";
		this.package.style.textAlign = "center";
		this.package.style.fontSize = ".32rem";	
		this.package.appendChild(this.p);
		this.body.appendChild(this.package)
	},
	init:function(){
		this.create();
	},
	show:function(msg){
		var that = this;
		this.package.style.display = "block";
		this.p.innerHTML=msg;
		var t1 = setTimeout(function(){
			that.package.style.display = "none";
		},that.time)
	},
}
// 初始化
var message=new Message(msgConfig)