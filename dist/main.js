/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_download_2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/download (2).jpeg */ \"./src/images/download (2).jpeg\");\n\nfunction loadAboutPage(){\n    console.log(\"about page loaded\")\n    const contentDiv  = document.getElementById(\"content\");\n    // clear all contents\n    while (contentDiv.firstChild) {\n        contentDiv.firstChild.remove();\n    }\n    // Create an image element\n    const image = document.createElement(\"img\");\n    image.src = _images_download_2_jpeg__WEBPACK_IMPORTED_MODULE_0__; // Replace with the actual image path\n\n    // Create a headline element\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"About Our Restaurant\";\n\n    // Create a paragraph element for the description\n    const description = document.createElement(\"p\");\n    description.textContent = \"Learn more about our restaurant's history, mission, and team. Discover the passion and dedication that goes into every dish we serve.\";\n\n    // Append the elements to the homePageDiv\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(headline);\n    contentDiv.appendChild(description);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFHLEVBQUU7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi9pbWFnZXMvZG93bmxvYWQgKDIpLmpwZWdcIlxuZnVuY3Rpb24gbG9hZEFib3V0UGFnZSgpe1xuICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgcGFnZSBsb2FkZWRcIilcbiAgICBjb25zdCBjb250ZW50RGl2ICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICAvLyBjbGVhciBhbGwgY29udGVudHNcbiAgICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnREaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGFuIGltYWdlIGVsZW1lbnRcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gaW1nOyAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBpbWFnZSBwYXRoXG5cbiAgICAvLyBDcmVhdGUgYSBoZWFkbGluZSBlbGVtZW50XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSBcIkFib3V0IE91ciBSZXN0YXVyYW50XCI7XG5cbiAgICAvLyBDcmVhdGUgYSBwYXJhZ3JhcGggZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTGVhcm4gbW9yZSBhYm91dCBvdXIgcmVzdGF1cmFudCdzIGhpc3RvcnksIG1pc3Npb24sIGFuZCB0ZWFtLiBEaXNjb3ZlciB0aGUgcGFzc2lvbiBhbmQgZGVkaWNhdGlvbiB0aGF0IGdvZXMgaW50byBldmVyeSBkaXNoIHdlIHNlcnZlLlwiO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBlbGVtZW50cyB0byB0aGUgaG9tZVBhZ2VEaXZcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0UGFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_download_3_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/download (3).jpeg */ \"./src/images/download (3).jpeg\");\n\nfunction loadContactPage(){\n    console.log(\"contact page loaded\")\n    const contentDiv  = document.getElementById(\"content\");\n    // clear all contents\n    while (contentDiv.firstChild) {\n        contentDiv.firstChild.remove();\n    }\n    // Create an image element\n    const image = document.createElement(\"img\");\n    image.src = _images_download_3_jpeg__WEBPACK_IMPORTED_MODULE_0__; // Replace with the actual image path\n\n    // Create a headline element\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"Contact Us\";\n\n    // Create a paragraph element for the description\n    const description = document.createElement(\"p\");\n    description.textContent = \"Have questions or need more information? Feel free to contact us using the following details:\";\n\n    // Create a contact information section\n    const contactInfo = document.createElement(\"div\");\n    contactInfo.innerHTML = `\n        <p><strong>Address:</strong> 123 Main Street, City, State, Country</p>\n        <p><strong>Phone:</strong> +123 456 7890</p>\n        <p><strong>Email:</strong> info@yourrestaurant.com</p>\n    `;\n\n    // Append the elements to the homePageDiv\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(headline);\n    contentDiv.appendChild(description);\n    contentDiv.appendChild(contactInfo);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQUcsRUFBRTs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzP2Q1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tIFwiLi9pbWFnZXMvZG93bmxvYWQgKDMpLmpwZWdcIlxuZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCl7XG4gICAgY29uc29sZS5sb2coXCJjb250YWN0IHBhZ2UgbG9hZGVkXCIpXG4gICAgY29uc3QgY29udGVudERpdiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgLy8gY2xlYXIgYWxsIGNvbnRlbnRzXG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IGltZzsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgaW1hZ2UgcGF0aFxuXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGxpbmUgZWxlbWVudFxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBwYXJhZ3JhcGggZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiSGF2ZSBxdWVzdGlvbnMgb3IgbmVlZCBtb3JlIGluZm9ybWF0aW9uPyBGZWVsIGZyZWUgdG8gY29udGFjdCB1cyB1c2luZyB0aGUgZm9sbG93aW5nIGRldGFpbHM6XCI7XG5cbiAgICAvLyBDcmVhdGUgYSBjb250YWN0IGluZm9ybWF0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdEluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICA8cD48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+IDEyMyBNYWluIFN0cmVldCwgQ2l0eSwgU3RhdGUsIENvdW50cnk8L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+UGhvbmU6PC9zdHJvbmc+ICsxMjMgNDU2IDc4OTA8L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+IGluZm9AeW91cnJlc3RhdXJhbnQuY29tPC9wPlxuICAgIGA7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGVsZW1lbnRzIHRvIHRoZSBob21lUGFnZURpdlxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFBhZ2UiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_download_1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/download (1).jpeg */ \"./src/images/download (1).jpeg\");\n\nfunction loadHomePage(){\n    console.log(\"homepage loaded\")\n    const contentDiv  = document.getElementById(\"content\");\n    // clear all contents\n    while (contentDiv.firstChild) {\n        contentDiv.firstChild.remove();\n    }\n    // Create an image element\n    const image = document.createElement(\"img\");\n    image.src = _images_download_1_jpeg__WEBPACK_IMPORTED_MODULE_0__; // Replace with the actual image path\n\n    // Create a headline element\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"Welcome to Our Amazing Restaurant!\";\n\n    // Create a paragraph element for the description\n    const description = document.createElement(\"p\");\n    description.textContent = \"Discover a culinary paradise where flavors come alive. Our talented chefs craft exquisite dishes using the freshest ingredients, ensuring an unforgettable dining experience.\";\n\n    // Append the elements to the homePageDiv\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(headline);\n    contentDiv.appendChild(description);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQUcsRUFBRTs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWcgZnJvbSBcIi4vaW1hZ2VzL2Rvd25sb2FkICgxKS5qcGVnXCJcbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpe1xuICAgIGNvbnNvbGUubG9nKFwiaG9tZXBhZ2UgbG9hZGVkXCIpXG4gICAgY29uc3QgY29udGVudERpdiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgLy8gY2xlYXIgYWxsIGNvbnRlbnRzXG4gICAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50RGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBhbiBpbWFnZSBlbGVtZW50XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IGltZzsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgaW1hZ2UgcGF0aFxuXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGxpbmUgZWxlbWVudFxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIE91ciBBbWF6aW5nIFJlc3RhdXJhbnQhXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBwYXJhZ3JhcGggZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGlzY292ZXIgYSBjdWxpbmFyeSBwYXJhZGlzZSB3aGVyZSBmbGF2b3JzIGNvbWUgYWxpdmUuIE91ciB0YWxlbnRlZCBjaGVmcyBjcmFmdCBleHF1aXNpdGUgZGlzaGVzIHVzaW5nIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgZW5zdXJpbmcgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS5cIjtcblxuICAgIC8vIEFwcGVuZCB0aGUgZWxlbWVudHMgdG8gdGhlIGhvbWVQYWdlRGl2XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\nconsole.log(\"mike testing!\")\n\n;\n\n// load page\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxDQUFpQzs7QUFFakM7QUFDQSxxREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJtaWtlIHRlc3RpbmchXCIpXG5cbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9wYWdlTG9hZFwiXG5cbi8vIGxvYWQgcGFnZVxucGFnZUxvYWQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n// Function to load the corresponding JavaScript file and update the content\nfunction loadPage(target) {\n    // Dynamically import the JavaScript file\n    const functionToCall = {\n        \"Home\": _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        \"About\": _about__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        \"Contact\": _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }[target];\n\n    if (functionToCall) {\n        functionToCall();\n    } else {\n        console.error(`Function for target \"${target}\" not found`);\n    }\n}\n\nfunction pageLoad(){\n    console.log(\"from pageLoad.js\")\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n    // Get the navigation element\n    const navigation = document.getElementById(\"navigation\");\n\n    // Create the navigation links\n    const homeLink = document.createElement(\"a\");\n    homeLink.href = \"#Home\"; // Use a hash for internal navigation\n    homeLink.textContent = \"Home\";\n\n    const aboutLink = document.createElement(\"a\");\n    aboutLink.href = \"#About\";\n    aboutLink.textContent = \"About\";\n\n    const contactLink = document.createElement(\"a\");\n    contactLink.href = \"#Contact\";\n    contactLink.textContent = \"Contact\";\n\n    // Create a list element to contain the links\n    const navList = document.createElement(\"ul\");\n\n    // Append the links to the list\n    navList.appendChild(homeLink);\n    navList.appendChild(aboutLink);\n    navList.appendChild(contactLink);\n\n    // Append the list to the navigation\n    navigation.appendChild(navList);\n\n    // Add event listeners to the links\n    let navigationLinks = [homeLink, aboutLink, contactLink];\n\n    navigationLinks.forEach(link => {\n        link.addEventListener('click', (event) => {\n            event.preventDefault();\n            const target = link.getAttribute('href').substring(1); // Remove the \"#\"\n            loadPage(target);\n        });\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUNHO0FBQ0k7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFZO0FBQzVCLGlCQUFpQiw4Q0FBYTtBQUM5QixtQkFBbUIsZ0RBQWU7QUFDbEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTTtBQUNOLDhDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQVk7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZUxvYWQuanM/Nzk0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIlxuaW1wb3J0IGxvYWRBYm91dFBhZ2UgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBGdW5jdGlvbiB0byBsb2FkIHRoZSBjb3JyZXNwb25kaW5nIEphdmFTY3JpcHQgZmlsZSBhbmQgdXBkYXRlIHRoZSBjb250ZW50XG5mdW5jdGlvbiBsb2FkUGFnZSh0YXJnZXQpIHtcbiAgICAvLyBEeW5hbWljYWxseSBpbXBvcnQgdGhlIEphdmFTY3JpcHQgZmlsZVxuICAgIGNvbnN0IGZ1bmN0aW9uVG9DYWxsID0ge1xuICAgICAgICBcIkhvbWVcIjogbG9hZEhvbWVQYWdlLFxuICAgICAgICBcIkFib3V0XCI6IGxvYWRBYm91dFBhZ2UsXG4gICAgICAgIFwiQ29udGFjdFwiOiBsb2FkQ29udGFjdFBhZ2VcbiAgICB9W3RhcmdldF07XG5cbiAgICBpZiAoZnVuY3Rpb25Ub0NhbGwpIHtcbiAgICAgICAgZnVuY3Rpb25Ub0NhbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGdW5jdGlvbiBmb3IgdGFyZ2V0IFwiJHt0YXJnZXR9XCIgbm90IGZvdW5kYCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpe1xuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBwYWdlTG9hZC5qc1wiKVxuICAgIGxvYWRIb21lUGFnZSgpXG5cbiAgICAvLyBHZXQgdGhlIG5hdmlnYXRpb24gZWxlbWVudFxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVMaW5rLmhyZWYgPSBcIiNIb21lXCI7IC8vIFVzZSBhIGhhc2ggZm9yIGludGVybmFsIG5hdmlnYXRpb25cbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYWJvdXRMaW5rLmhyZWYgPSBcIiNBYm91dFwiO1xuICAgIGFib3V0TGluay50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29udGFjdExpbmsuaHJlZiA9IFwiI0NvbnRhY3RcIjtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgLy8gQ3JlYXRlIGEgbGlzdCBlbGVtZW50IHRvIGNvbnRhaW4gdGhlIGxpbmtzXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgbGlua3MgdG8gdGhlIGxpc3RcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGFib3V0TGluayk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGxpc3QgdG8gdGhlIG5hdmlnYXRpb25cbiAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbGlua3NcbiAgICBsZXQgbmF2aWdhdGlvbkxpbmtzID0gW2hvbWVMaW5rLCBhYm91dExpbmssIGNvbnRhY3RMaW5rXTtcblxuICAgIG5hdmlnYXRpb25MaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7IC8vIFJlbW92ZSB0aGUgXCIjXCJcbiAgICAgICAgICAgIGxvYWRQYWdlKHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n");

/***/ }),

/***/ "./src/images/download (1).jpeg":
/*!**************************************!*\
  !*** ./src/images/download (1).jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dac90eae5ff53fbbdb37.jpeg";

/***/ }),

/***/ "./src/images/download (2).jpeg":
/*!**************************************!*\
  !*** ./src/images/download (2).jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e611616e1e55459d69b2.jpeg";

/***/ }),

/***/ "./src/images/download (3).jpeg":
/*!**************************************!*\
  !*** ./src/images/download (3).jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4da80da9d4c4ce040792.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;