const form = document.querySelector("form");
const obj = { email: "", password: "" };

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        obj.email = login;
        obj.password = password;
        console.log(obj);

        form.elements.email.value = "";
        form.elements.password.value = "";
    }
}
