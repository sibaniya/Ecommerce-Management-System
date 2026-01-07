// Go to login page
function goToLogin(){
    window.location.href = "/login.html"; // change to your login page path
}

// Show product details on click
function showProduct(name){
    alert("You clicked on " + name + " product!");
    // Here you can redirect to a detailed product page if needed
}

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
