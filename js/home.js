// ---------------- PRODUCT POPUP ----------------
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

document.querySelectorAll(".inner-div img").forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

function closePopup(){
    popup.style.display = "none";
}

// Modal
const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeBtn = document.querySelector(".modal .close");

aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    aboutModal.style.display = "none";
});

function goToProfile(){
    window.location.href = "profile.html";
}

function goToDresses(){
    window.location.href = "dresses.html";
}


// Click outside modal closes
window.addEventListener("click", (e) => {
    if(e.target == aboutModal){
        aboutModal.style.display = "none";
    }
});


const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const contactClose = contactModal.querySelector(".close");

contactBtn.addEventListener("click", () => {
    contactModal.classList.add("show");
});

contactClose.addEventListener("click", () => {
    contactModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if(e.target == contactModal){
        contactModal.classList.remove("show");
    }
});



// ---------------- SEARCH FILTER ----------------
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".inner-div");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.getAttribute("data-name").toLowerCase();
        if(name.includes(filter)){
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
});

// Top menu click alert
document.querySelectorAll(".top-left .top-menu").forEach(item => {
    item.addEventListener("click", () => {
        alert(item.innerText + " clicked");
    });
});

document.querySelectorAll(".add-cart").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        alert("Product added to cart 🛒");
    });
});

// Optional: Top menu clicks
document.getElementById("about").onclick = function(){
    alert("About Us: This is our ecommerce website.");
}

document.getElementById("contact").onclick = function(){
    alert("Contact Us: Email us at ecommercesupport@gmail.com");
}

document.getElementById("more").onclick = function(){
    alert("More Info: Check our latest offers and collections!");
}
