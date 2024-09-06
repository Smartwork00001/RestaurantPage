import img from "./images/download (3).jpeg"
function loadContactPage(){
    console.log("contact page loaded")
    const contentDiv  = document.getElementById("content");
    // clear all contents
    while (contentDiv.firstChild) {
        contentDiv.firstChild.remove();
    }
    // Create an image element
    const image = document.createElement("img");
    image.src = img; // Replace with the actual image path

    // Create a headline element
    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    // Create a paragraph element for the description
    const description = document.createElement("p");
    description.textContent = "Have questions or need more information? Feel free to contact us using the following details:";

    // Create a contact information section
    const contactInfo = document.createElement("div");
    contactInfo.innerHTML = `
        <p><strong>Address:</strong> 123 Main Street, City, State, Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> info@yourrestaurant.com</p>
    `;

    // Append the elements to the homePageDiv
    contentDiv.appendChild(image);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(description);
    contentDiv.appendChild(contactInfo);
}

export default loadContactPage