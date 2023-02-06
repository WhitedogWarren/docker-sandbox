const userForm = document.getElementById("userForm");
userForm.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData(userForm);
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
        fetchUsers();
    })
    .catch(error => {
        console.log(error);
    })
}

const displayUsers = (users) => {
    let userlistElt = document.getElementById('userlist');
    userlistElt.innerHTML = "<h3>users</h3>";
    if(users.length > 0) {
        if(document.getElementById('empty_userlist')) {
            document.getElementById('empty_userlist').remove();
        }
        for(user of users) {
            let userElt = document.createElement('span');
            userElt.innerText = user.pseudo;
            userlistElt.appendChild(userElt);
            userlistElt.appendChild(document.createElement('br'));
        }
    } else {
        let emptyList = document.createElement('span');
        emptyList.setAttribute('id', "empty_userlist");
        emptyList.innerText = "aucun";
        userlistElt.appendChild(emptyList);
    }
}

const fetchUsers = () => {
    fetch("http://backend.localhost/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
        displayUsers(users);
    })
    .catch(error => console.log(error));
}

fetchUsers();