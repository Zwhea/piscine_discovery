document.getElementById("myButton").addEventListener("click", click);

function click(){
	event.preventDefault();
	var b =  document.querySelector('body');
	b.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}