
const btn = document.querySelector("#btn")

document.body.style.backgroundColor = "black"
document.body.style.color = "white"

btn.innerHTML = `<i class="fa-solid fa-sun " style="color: rgb(255, 212, 59);"></i> Light Mode`


btn.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

        btn.innerHTML = `<i class="fa-solid fa-moon"></i> Dark Mode`

    }
    else {
        document.body.style.backgroundColor = "black"


        document.body.style.color = "white"


        btn.innerHTML = `<i class="fa-solid fa-sun" style="color: rgb(255, 212, 59);"></i> Light Mode`



    }



})

