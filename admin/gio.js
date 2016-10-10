function addListeners(){
	window.resizeBar=document.getElementById('resizebar');resizeBar.addEventListener('mousedown', mouseDown, false);window.addEventListener('mouseup', mouseUp, false);
}
function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}
function mouseDown(e){
	var button=document.getElementsByClassName('fa-indent')[0] || document.getElementsByClassName('fa-dedent')[0]
	button.classList.add('fa-dedent');button.classList.remove('fa-indent');document.body.classList.remove('noleft');window.addEventListener('mousemove', divMove, true);
}
function divMove(e){
    var div = document.getElementById('resizebar');var left = document.getElementById('leftwrap');var wrap = document.getElementById('mainwrap');
  div.style.left = e.clientX + 'px';wrap.style.left = e.clientX + 'px';left.style.width = e.clientX + 'px';
}
