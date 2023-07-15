function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const imgDark = document.getElementById("img-dark")
    const imgLight = document.getElementById("img-light")          
    if (html.classList.contains("light")) {
        imgDark.style.display = "none"
        imgLight.style.display = "block"
    }
    else {
        imgDark.style.display = "block"
        imgLight.style.display = "none"
    }
    
}
    





