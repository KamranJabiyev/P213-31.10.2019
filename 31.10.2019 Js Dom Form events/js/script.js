// let menus = document.querySelectorAll(".menu div");
// let contents = document.querySelectorAll(".content div");

// for (let menu of menus) {
//     menu.addEventListener("click", function() {
//         //for menu background color
//         let active = document.querySelector(".active");
//         active.classList.remove("active");
//         this.classList.add("active");

//         //content
//         let index = this.getAttribute("data-index");
//         for (let content of contents) {
//             if (content.getAttribute("data-index") == index) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }
//         }

//     })
// }

// Slider Start

// let left = document.querySelector(".left");
// let right = document.querySelector(".right");

// let images = document.querySelector(".images");

// right.addEventListener("click", function() {
//     let active = document.querySelector(".active");
//     active.classList.remove("active");

//     if (active.nextElementSibling != null) {
//         active.nextElementSibling.classList.add("active");
//     } else {
//         images.firstElementChild.classList.add("active");
//     }
// })

// left.addEventListener("click", function() {
//     let active = document.querySelector(".active");
//     active.classList.remove("active");

//     if (active.previousElementSibling != null) {
//         active.previousElementSibling.classList.add("active");
//     } else {
//         images.lastElementChild.classList.add("active");
//     }
// })

// Slider End

//Form Event (new lesson)

// let input = document.querySelector(".text");
// let slct = document.getElementById("test")
// let danger = document.getElementById("danger");

// input.addEventListener("focus", function() {
//     console.log("Inputa focus olundu")
// })

// input.addEventListener("blur", function() {
//     console.log("Inputdan chixdiq")
// })

// slct.addEventListener("change", function() {
//     console.log("Inputun deyeri deyishdirildi")
// })
// let send = document.querySelector("#send");
// let btn_send = document.querySelector("#btn-send");

// send.addEventListener("submit", function(e) {
//     // e.preventDefault();
//     if (input.value.trim() == "") {
//         danger.style.display = "block"
//     }
// })

// input.addEventListener("keyup", function() {
//     if (input.value == "") {
//         danger.style.display = "block"
//     } else {
//         danger.style.display = "none"
//     }
// })

// btn_send.addEventListener("click", function() {
//     alert("men ishledim");
// })