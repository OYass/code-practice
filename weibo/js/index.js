function Login(){
	this.box = tools.$("#box");
	this.container = tools.$("#container");
	this.content = tools.$("#content");
	this.bindEvents();
}

Login.prototype = {
	constructor:Login,
	bindEvents:function(){
		this.box.onclick = function(){
			this.popBox();
		}.bind(this);
		this.container.onclick = e =>{
			switch(e.target.id){
				case "loginBtn": this.loginBtnClick();
				case "closeBtn": this.closeBtnClick(); break;
			}
		}
	},
	popBox:function(){
		this.container.innerHTML = `<h4>发布微博</h4><a id="closeBtn" class="close_btn" href="javascript:;">×</a><p><label>用户名：<input id="username" type="text"></label></p><p><label>正文：<input id="text" type="textarea"></label></p><p><button id="loginBtn" class="loginBtn" type="button">发布</button></p>`;
		tools.showCenter(this.container);
		this.modal = document.createElement('div');
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		new Drag(this.container, "h4");
	},
	closeBtnClick: function () {
		this.container.style.display = "none";
		this.modal.remove();
	},

	loginBtnClick: function () {
		let username = tools.$("#username").value;
		let textContent = tools.$("#text").value;
		if(username === "" || textContent === "") {
			alert("用户名或密码不能为空");
		}else{
			let p = document.createElement("p");
			var date = new Date();
			p.innerHTML =username+"在"+date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"号"+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒"+"发布的消息是"+textContent;
			this.content.appendChild(p);
				}
	}.bind(this),



}

new Login();
