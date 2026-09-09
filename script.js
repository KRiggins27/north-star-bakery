
const preferenceMessages = {
    bread: "Our handcrafted breads are a North Star Bakery favorite!",
    pastry: "Our fresh pastries are made in-house daily!",
    cake: "Our custom cakes are perfect for celebrations and special events!"
};
const preferencePrices = {
    bread: "$12-$15",
    pastry: "$5-$25",
    cake: "$30-$150"
};
const preferenceSelect = document.getElementById("bakery-preference");
if (preferenceSelect) {
    preferenceSelect.addEventListener("change", showPreference);
}
function showPreference() {
    const message = document.getElementById("preference-message");
    const selectedPreference = preferenceSelect.value;
if (selectedPreference) {
    message.textContent = preferenceMessages[selectedPreference] + " Typical price range: " + preferencePrices[selectedPreference] + ".";
    localStorage.setItem("bakeryPreference", selectedPreference);
}
else {
    message.textContent = "";
    localStorage.removeItem("bakeryPreference");
}
}
function loadPreference() {
    const savedPreference = localStorage.getItem("bakeryPreference");
    if (savedPreference) {
        preferenceSelect.value = savedPreference;
        showPreference();
    }
}
if (preferenceSelect) {
    loadPreference();
}
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
}
function validateForm(event) {
    event.preventDefault();
        let formIsValid = true;
    const nameInput = document.getElementById("name");
    const nameValue = nameInput.value.trim();
    const nameError = document.getElementById("name-error");
    if (nameValue === "") {
        nameError.textContent = "Please enter your name.";
        formIsValid = false;
        } else {
    nameError.textContent = "";
        }

   const emailInput = document.getElementById("email"); 
   const emailValue = emailInput.value.trim();
   const emailError = document.getElementById("email-error");
   if (emailValue === "") {
    emailError.textContent = "Please enter your email address.";
    formIsValid = false;
    } else if (!emailValue.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
        } else {
    emailError.textContent = "";
        }

    const formStatus = document.getElementById("form-status");

if (formIsValid) {
        formStatus.textContent = "Thank you! Your request is ready to submit.";
    }
    else {
    formStatus.textContent = "";
}
}