const APICalls = {
getContacts() {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())

},
saveSingleContact() {
    return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  })
}
}

export default APICalls