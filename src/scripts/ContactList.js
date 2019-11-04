import APICalls from "./ContactCollection"
import contactManager from "./ContactComponent"

const renderDOM = {
    renderContacts() {
        APICalls.getContacts()
        .then(response => {
        let htmlForAllContacts = ""
        response.forEach(contact => {
            const contactHtml = contactManager.makeNewContactComponent(contact)
            htmlForAllContacts += contactHtml
        });
        const contactsContainer = document.querySelector("#contactsContainer")
        contactsContainer.innerHTML = htmlForAllContacts
    })
    }
}
export default renderDOM