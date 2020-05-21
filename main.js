var header = document.getElementById("projects");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

var mobileBreakpoint = 768;
var isMobile = function () {
    return $(window).width() < mobileBreakpoint;
}
$('.button').on('click', function () {
if (isMobile()) {
    window.scroll(0, 250);
    } else window.scroll(0, 0);
});