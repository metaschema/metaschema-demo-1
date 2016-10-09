function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.getElementsByClassName('header')[0],
            logo = document.getElementsByClassName('cont-logo')[0],
            head = document.getElementsByClassName('header-container')[0]
        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
            head.classList.add("smaller");
            logo.classList.add("smaller");
        } else {
                header.classList.remove("smaller");
            head.classList.remove("smaller");
            logo.classList.remove("smaller");
        }
    });
}
window.onload = init();