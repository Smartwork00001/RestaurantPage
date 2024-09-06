import loadHomePage from "./home"
import loadAboutPage from "./about";
import loadContactPage from "./contact";

// Function to load the corresponding JavaScript file and update the content
function loadPage(target) {
    // Dynamically import the JavaScript file
    const functionToCall = {
        "Home": loadHomePage,
        "About": loadAboutPage,
        "Contact": loadContactPage
    }[target];

    if (functionToCall) {
        functionToCall();
    } else {
        console.error(`Function for target "${target}" not found`);
    }
}

function pageLoad(){
    console.log("from pageLoad.js")
    loadHomePage()

    // Get the navigation element
    const navigation = document.getElementById("navigation");

    // Create the navigation links
    const homeLink = document.createElement("a");
    homeLink.href = "#Home"; // Use a hash for internal navigation
    homeLink.textContent = "Home";

    const aboutLink = document.createElement("a");
    aboutLink.href = "#About";
    aboutLink.textContent = "About";

    const contactLink = document.createElement("a");
    contactLink.href = "#Contact";
    contactLink.textContent = "Contact";

    // Create a list element to contain the links
    const navList = document.createElement("ul");

    // Append the links to the list
    navList.appendChild(homeLink);
    navList.appendChild(aboutLink);
    navList.appendChild(contactLink);

    // Append the list to the navigation
    navigation.appendChild(navList);

    // Add event listeners to the links
    let navigationLinks = [homeLink, aboutLink, contactLink];

    navigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = link.getAttribute('href').substring(1); // Remove the "#"
            loadPage(target);
        });
    });

}

export default pageLoad