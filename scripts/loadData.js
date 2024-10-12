
// loadPetCategory-button
const loadPetCategory = async () => {
    try {
        const fetching = ('https://openapi.programming-hero.com/api/peddy/categories');
        const response = await fetch(fetching);
        const data = await response.json();
        displayCategory(data.categories);
    }
    catch (error) {
        console.error('Error:', error);
    }

}


// load-All-pet
const loadPet = async () => {
    try {
        const fetching = ('https://openapi.programming-hero.com/api/peddy/pets');
        const response = await fetch(fetching);
        const data = await response.json();
        displayPet(data.pets);
    }
    catch (error) {
        console.error('Error:', error);
    }

}

// load-By-catergories
const loadPetByCategories = async (id) => {
    try {
        removeActiveButton();
        document.getElementById(`btn-${id}`).classList.add("bg-primary", "bg-opacity-20", "rounded-full", "border-green-900");
        const fetching = (`https://openapi.programming-hero.com/api/peddy/category/${id}`);
        const response = await fetch(fetching);
        const data = await response.json();
        displayPet(data.data);
    }
    catch (error) {
        console.error('Error:', error);
    }

}