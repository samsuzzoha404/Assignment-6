## Peddy - Pet Adoption Platform
Welcome to Peddy, a pet adoption platform where users can browse, like, and adopt pets. This project has been developed as part of Assignment 6, and provides an intuitive interface for finding pets in various categories, sorting them by price, and viewing detailed pet information.

# Live Link
https://rad-liger-d6e8ee.netlify.app/

# Key Features
1. Dynamic Pet Categories: Users can view pets by different categories (dogs, cats, rabbits, etc.) fetched dynamically from the API.
2. Pet Liking and Adoption: Users can like pets to save them for later viewing or adopt pets by starting a countdown that changes the "Adopt" button into "Adopted".
3. Sort by Price: Users can sort the available pets by price in descending order for easier decision-making.
Modal for Pet Details: A modal opens with detailed information (vaccination history, description, etc.) about the selected pet when the "Details" button is clicked.
4. Responsive Design: The platform is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.

# ES6 Features Used
1. Arrow Functions: Utilized for concise syntax in handling API responses and UI actions.
2. Template Literals: Used for dynamic HTML rendering, especially for displaying fetched pet data.
3. Async/Await: Applied for fetching API data asynchronously, improving readability and error handling.
4. Destructuring: Implemented to extract data from the API responses more efficiently.
5. Modules: Organized JavaScript files into reusable modules, ensuring maintainable and clean code.

# APIs Used
1. Fetch All Pets: Retrieves a list of all pets available for adoption.
GET https://openapi.programming-hero.com/api/peddy/pets

2. Fetch Pet Details by ID: Fetches detailed information for a specific pet.
GET https://openapi.programming-hero.com/api/peddy/pet/:pet-id

3. Fetch All Pet Categories: Fetches a list of all pet categories available (e.g., dogs, cats, etc.).
GET https://openapi.programming-hero.com/api/peddy/categories

4. Fetch Pets by Category: Fetches pets from a specific category (e.g., dogs, cats).
GET https://openapi.programming-hero.com/api/peddy/category/:categoryName 

# How to Use

**Navbar:** Navigate through the platform and access pet adoption categories.

**Adopt Your Best Friend Section:**
1. View pets in a grid layout by category.
2. Sort pets by price.
3. Like pets to save them in a separate section.
4. View pet details via a modal window.

**Adopt a Pet:** Click on the "Adopt" button to initiate the adoption countdown, and the pet will be marked as "Adopted".

# Challenges Addressed
1. Loading Spinner: A loading spinner is displayed for at least 2 seconds when fetching data from the API.
2. Sort by Price: Sort pets by price in descending order, either for the active category or all pets.
Handle Null Values: If any pet details (like breed or birthdate) are missing, placeholder text is shown instead.
3. Modal for Pet Details: Display all available information about pets, including vaccination history and description.