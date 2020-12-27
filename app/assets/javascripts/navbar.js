$( document ).ready(function() {
    const nav_observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            document.querySelector("#navbar").style.top = "-35vh"
        } else {
            document.querySelector("#navbar").style.top = "0"
        }
    }, {threshold: [0.5]});

    nav_observer.observe(document.querySelector("#navbar"))
});
