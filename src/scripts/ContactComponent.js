const contactManager = {
makeNewContactComponent(contact) {
    return `
    <h2>${contact.name}</h2>
    <p>Phone Number: ${contact.phone}</p>
    <p>Address: ${contact.address}</p>
    `

}
}

export default contactManager