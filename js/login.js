document.getElementById("loginBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const mobile = document.getElementById("mobileno").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();

    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    if (
        name === "" ||
        age === "" ||
        mobile === "" ||
        email === "" ||
        pass === "" ||
        (!male && !female)
    ) {
        alert("❌ Please fill all details");
    } else {
        // ✔️ only if all details filled
        window.location.href = "home.html";
    }
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
