const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const mobile = document.getElementById("mobileno").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;

    if(name === "" || age === "" || mobile === "" || email === "" || pass === "" || (!genderMale && !genderFemale)){
        alert("Please fill all fields");
    } else {
        alert("Login Successfully");
        // redirect to home page
        window.location.href = "/index.html";
    }
});
