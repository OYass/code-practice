class slideShow{
	constructor(selector){
		this.box = tools.$(selector);
		this.ul = this.box.querySelector("ul");
		this.ol = this.box.querySelector("ol");
		this.imgs = this.box.querySelectorAll("img");
		this.top = 0;
		this.timer = null;
		this.btn = [];
		this.index = 0;
		this.lastIndex = 0;
		this.init();
		this.slidePicture();
	}


init(){
	for (var i = 0; i < this.imgs.length-1; i++) {
		this.li = document.createElement("li");
		this.li.innerHTML = i+1;
		if (i===0) this.li.classList.add("ac");
		this.ol.appendChild(this.li);
		this.btn.push(this.li);
	}
}

slidePicture(){
	this.bandEvents();
}

bandEvents(){
	this.box.querySelector("#goNext").onclick = this.rightSlide.bind(this);
	this.box.querySelector("#goPrev").onclick = this.leftSlide.bind(this);
	this.box.onmouseleave = this.autoPlay().bind(this);
	this.box.onmouseenter = this.stopSlide.bind(this);
	for (let i = 0; i < this.btn.length; i++) {
		this.btn[i].onclick = function changeIndex(){
				this.index = i;
				this.changeLi();
				this.changeImg();
				this.lastIndex = this.index;
		}.bind(this);
	}
}

changeLi(){
	if (this.index>this.btn.length-1) {this.index = 0}
		else if (this.index<0) {this.index = this.btn.length-1 }
	this.btn[this.lastIndex].classList.remove("ac");
	this.btn[this.index].classList.add("ac");
	this.lastIndex = this.index;
}

changeImg(){
	let moveTop = -(this.index)*500+'px';
	// let left = tools.getStyle(this.ul,'left');
	// let newLeft = parseInt(left)+moveLeft+"px";
	// console.log(newLeft);
	console.log(moveTop);
	console.log(this.index);
	tools.setStyle(this.ul,{top:moveTop});
	this.top = -(this.index*500);
}

rightSlide(){
	if (this.top ===-2500) {
		tools.setStyle(this.ul,{top:"0"});
		this.top = 0;
	}
	this.top-=500;

	tools.move2(this.ul,'top',this.top);
	this.lastIndex = this.index;
	this.index++;
	this.changeLi();
	// this.index++;
}

leftSlide(){
	if (this.top === 0) {
		tools.setStyle(this.ul,{top:"-2500px"});
		this.top = -2500;
		// return;
	}
	this.top +=500;
	tools.move2(this.ul,'top',this.top);
	this.lastIndex = this.index;
	this.index--;
	this.changeLi();
}

autoPlay(){
	clearInterval(this.timer);
	this.timer = setInterval(this.box.querySelector("#goNext").onclick,3000);
	return this.autoPlay;
}

stopSlide(){
	clearInterval(this.timer);
}


}

new slideShow("#box");

