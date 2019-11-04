import renderDOM from "./ContactList";
import form from "./ContactForm"

// const message = "Your Webpack application is set up and ready to go. Please start writing code."

// document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

// console.log(message)

renderDOM.renderAllContacts()
form.buildAndAppendForm()