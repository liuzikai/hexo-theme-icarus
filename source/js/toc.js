function scrollCallBack(entries, observer) {
    console.log($(window).scrollTop());
}
let scrollObserver = new IntersectionObserver(scrollCallBack,
    {
        rootMargin: '9999px 0px -100% 0px'
    });
scrollObserver.observe(document.getElementsByClassName('column-main')[0]);