import img from "./images/download (2).jpeg"
function loadAboutPage(){
    console.log("about page loaded")
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
    headline.textContent = "About Our Restaurant";

    // Create a paragraph element for the description
    const description = document.createElement("p");
    description.textContent = "Learn more about our restaurant's history, mission, and team. Discover the passion and dedication that goes into every dish we serve.";

    // Append the elements to the homePageDiv
    contentDiv.appendChild(image);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(description);
}

export default loadAboutPage