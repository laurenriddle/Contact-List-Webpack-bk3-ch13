const contactManager = {
makeNewContactComponent(contact) {
    return `
    <h1>${contact.name}</h1>
    <p>Phone Number: ${contact.phone}</p>
    <p>Address: ${contact.address}</p>
    `

}
}

export default contactManager