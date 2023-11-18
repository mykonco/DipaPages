const navToggler = document.querySelector(".nav-toggler");
const navBar = document.querySelector(".aside");
navToggler.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

function close() {
    if (navBar.classList.contains("open")) {
        navBar.classList.remove("open");
    }
}

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        close(this)
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})
document.querySelector(".btn-work").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})
document.querySelector(".btn-hire").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})
document.querySelector(".contact").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
})