const formContainer = document.querySelector("#formContainer")
const form = {
    buildAndAppendForm () {
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
            <h1>Contacts</h1>
    `
    formContainer.innerHTML = contactForm
    }
}

export default form