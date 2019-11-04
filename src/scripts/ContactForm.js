import APICalls from "./ContactCollection"
import renderDOM from "./ContactList";

const formContainer = document.querySelector("#formContainer")
const formComponents = {
    buildAndAppendForm() {
        let contactForm = `
       <h1>Contact Form</h1>
        <form>
            <fieldset>
                <label for="name-input">Name:</label>
                <input type="text" name="concept-input" id="name">
            </fieldset>
            <fieldset>
                <label for="concept-input">Phone#:</label>
                <input type="text" name="phone-input" id="phone">
            </fieldset>
            <fieldset>
                <label for="address-input">Address:</label>
                <input type="text" name="address-input" id="address">
            </fieldset>
            </form>
            <button id="saveContact">Save</button>
            <h1>Contacts</h1>
    `
        formContainer.innerHTML = contactForm
    },
    attachEventListenerToSaveButton() {
        const saveButton = document.querySelector("#saveContact")
        saveButton.addEventListener("click", event => {
            const name = document.querySelector("#name").value
            const phone = document.querySelector("#phone").value
            const address = document.querySelector("#address").value

            let newObject = {
            "name": name,
            "phone": phone,
            "address": address
            }
            APICalls.saveSingleContact(newObject)
            .then(APICalls.getContacts)
            .then(response => renderDOM.renderAllContacts(response))

        })
    }
}

export default formComponents