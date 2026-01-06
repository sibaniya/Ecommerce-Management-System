const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const qty = document.getElementById("qty");
const addCart = document.getElementById("addCart");

decrease.addEventListener("click", () => {
    if(Number(qty.value) > 1){
        qty.value = Number(qty.value) - 1;
    }
});

increase.addEventListener("click", () => {
    qty.value = Number(qty.value) + 1;
});

addCart.addEventListener("click", () => {
    alert(`${qty.value} item(s) added to Cart!`);
});
