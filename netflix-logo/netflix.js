function stripe() {
    let sizeW = Math.random() * 3;
    let e = document.createElement('div');
    e.classList.add('lines');
    document.body.appendChild(e);

    e.style.left = Math.random() * innerWidth + 'px';
    e.style.width = 1 + sizeW + 'px';
    e.style.background = 'hsl('+ Math.floor(Math.random() *360)
    + 'deg, 100%, 50%)';

    setTimeout(function(){
        document.body.removeChild(e)
    },2000)
}
setInterval(function(){
    stripe()
},20);