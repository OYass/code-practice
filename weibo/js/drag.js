class Drag{
	constructor(obj,title){
		this.obj = obj;
		this.title = this.obj.querySelector(title);
		this.init();
	}

	init(){
		this.title.onmousedown = e =>{
			let x =e.offsetX,
			y = e.offsetY;
			document.onmousemove = e=>{
				let _left = e.clientX-x,
				_top = e.clientY - y;
				this.move(_left,_top);
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}
			return false;
		}
	}

	move(left,top){
		tools.setStyle(this.obj,{
			left:left+"px",
			top:top+"px"
		});
	}
}