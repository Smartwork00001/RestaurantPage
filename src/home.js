import img from "./images/download (1).jpeg"
function loadHomePage(){
    console.log("homepage loaded")
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
    headline.textContent = "Welcome to Our Amazing Restaurant!";

    // Create a paragraph element for the description
    const description = document.createElement("p");
    description.textContent = "Discover a culinary paradise where flavors come alive. Our talented chefs craft exquisite dishes using the freshest ingredients, ensuring an unforgettable dining experience.";

    // Append the elements to the homePageDiv
    contentDiv.appendChild(image);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(description);
}

export default loadHomePage