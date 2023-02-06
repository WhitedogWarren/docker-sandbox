const userForm = document.getElementById("userForm");
userForm.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData(userForm);
    console.log(Object.fromEntries(formData));
    postUser(Object.fromEntries(formData));
});

const postUser = (data) => {
    fetch("http://backend.localhost/users", {
        method: 'POST',
        headers: { "content-type": "Application/json"},
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

fetch("http://backend.localhost/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
        console.log(users);
    })
    .catch(error => console.log(error));