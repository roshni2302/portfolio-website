const menuBtn =
document.getElementById("menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
const form =
document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    if(name === "" || email === ""){

        alert(
            "Please fill all required fields"
        );

        e.preventDefault();
    }

});
const darkBtn =
document.getElementById("dark-mode-btn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});
const text =
"First Year B.Tech CSE Student";

let index = 0;

function typeText(){

    if(index < text.length){

        document
        .getElementById("typing-text")
        .textContent += text.charAt(index);

        index++;

        setTimeout(typeText,100);
    }
}

typeText();