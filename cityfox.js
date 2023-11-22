let getStart = document.getElementById("getstart")
let spinner= document.getElementById("spinner")
let landingBackground= document.getElementById("landingbackground")
getStart.innerHTML = "Get Started"
function started(eve) {
    eve.target.innerHTML = "Sign Up/ Log In"
}

function buying() {
    landingBackground.style.display ="none"
    spinner.style.display = "block"
    setTimeout(() => {
    landingBackground.style.display ="block"
    spinner.style.display = "none"
    }, 5000);
}