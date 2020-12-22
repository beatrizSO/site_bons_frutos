$(document).ready(function (event) {
    const services_nav = document.getElementById('services-nav')
    const services_nav_underline = document.getElementById('services-nav-underline')
    const services_function_yes = () => {
        services_nav_underline.style.margin = "0 5px 0"
    }
    const services_function_no = () => {
        services_nav_underline.style.margin = "100px 5px 0"
    }
    services_nav.addEventListener('mouseenter', services_function_yes)
    services_nav.addEventListener('mouseleave', services_function_no)

    const about_nav = document.getElementById('about-nav')
    const about_nav_underline = document.getElementById('about-nav-underline')
    const about_function_yes = () => {
        about_nav_underline.style.margin = "0 5px 0"
    }
    const about_function_no = () => {
        about_nav_underline.style.margin = "100px 5px 0"
    }
    about_nav.addEventListener('mouseenter', about_function_yes)
    about_nav.addEventListener('mouseleave', about_function_no)

    const portfolio_nav = document.getElementById('portfolio-nav')
    const portfolio_nav_underline = document.getElementById('portfolio-nav-underline')
    const portfolio_function_yes = () => {
        portfolio_nav_underline.style.margin = "0 5px 0"
    }
    const portfolio_function_no = () => {
        portfolio_nav_underline.style.margin = "100px 5px 0"
    }
    portfolio_nav.addEventListener('mouseenter', portfolio_function_yes)
    portfolio_nav.addEventListener('mouseleave', portfolio_function_no)

    const partners_nav = document.getElementById('partners-nav')
    const partners_nav_underline = document.getElementById('partners-nav-underline')
    const partners_function_yes = () => {
        partners_nav_underline.style.margin = "0 5px 0"
    }
    const partners_function_no = () => {
        partners_nav_underline.style.margin = "100px 5px 0"
    }
    partners_nav.addEventListener('mouseenter', partners_function_yes)
    partners_nav.addEventListener('mouseleave', partners_function_no)

    const services_observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            services_nav_underline.style.margin = "0 5px 0"
            services_nav.removeEventListener('mouseleave', services_function_no)
        } else {
            services_nav_underline.style.margin = "100px 5px 0"
            services_nav.addEventListener('mouseleave', services_function_no)
        }
    }, { threshold: [0.55] })

    services_observer.observe(document.getElementById('services_section'))

    const about_observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            document.getElementById("about-nav-underline").style.margin = "0 5px 0"
            about_nav.removeEventListener('mouseleave', about_function_no)
        } else {
            document.getElementById("about-nav-underline").style.margin = "100px 5px 0"
            about_nav.addEventListener('mouseleave', about_function_no)
        }
    }, { threshold: [0.6] })

    about_observer.observe(document.querySelector('#about_section'))

    const portfolio_section = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            document.getElementById("portfolio-nav-underline").style.margin = "0 5px 0"
            portfolio_nav.removeEventListener('mouseleave', portfolio_function_no)
        } else {
            document.getElementById("portfolio-nav-underline").style.margin = "100px 5px 0"
            portfolio_nav.addEventListener('mouseleave', portfolio_function_no)
        }
    }, { threshold: [0.4] })

    portfolio_section.observe(document.querySelector('#portfolio_section'))

    const partners_section = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            document.getElementById("partners-nav-underline").style.margin = "0 5px 0"
            partners_nav.removeEventListener('mouseleave', partners_function_no)
        } else {
            document.getElementById("partners-nav-underline").style.margin = "100px 5px 0"
            partners_nav.addEventListener('mouseleave', partners_function_no)
        }
    }, { threshold: [0.6] })

    partners_section.observe(document.querySelector('#partners_section'))
});
