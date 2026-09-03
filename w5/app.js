async function greet() {
    return "Hello!";
}

console.log(greet());

greet().then((response) => {
    console.log(response);
})

async function getData() {
    let text = ""
    greet().then((response) => {
        text = response;
    })
    return text;
}

async function getData() {
    const text = await greet();
    console.log(text);
}

console.log(getData());

// function fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//     return response.json();
//     })
//     .then(users => {
//         //show user on UI
//         let tableBody = document.querySelector("#user-table tbody");
//         users.forEach(user => {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.phone}</td>
//                 <td>${user.email}</td>
//                 <td>${user.website}</td>
//                 <td>${user.address.city}</td>
//             `
//                 tableBody.appendChild(row)
//         })
//     });
// }

async function fetchUsers() {

    //try {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = document.querySelector("#user-table tbody");    
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
            <td>${user.address.city}; ${user.address.street}</td>
        `
        tableBody.appendChild(row)

    })
    // }
    // catch (error) {
    //     console.error(error);
    // }
    // finally {
    //     fetchUsers(users);
    // }
}
