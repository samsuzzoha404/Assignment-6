// displayPetCategory-button
const displayCategory = (data) => {
    const categoryContainer = document.getElementById('category-list');
    data.forEach(items => {
        const div = document.createElement('div');
        div.innerHTML = `
    <button class="btn btn-lg flex gap-2 w-full items-center justify-center border border-stone-300 h-[80px] category-btn" id="btn-${items.category.toLowerCase()}" onclick="loadPetByCategories('${items.category.toLowerCase()}')"><img  src=${items.category_icon} class="w-10"/> <p class="text-xl">${items.category}</p> </button>
    `
        categoryContainer.appendChild(div);
    })

}


//Display-liked-pet
const likedPet = (id) => {
    const noLiked = document.getElementById('no-pet').classList.add('hidden');
    const likedPetContainer = document.getElementById('liked-pet');
    div = document.createElement('div');
    div.innerHTML = `
            <img src="${id}" alt = "Pet image" class="rounded-lg"/>
                `
    likedPetContainer.appendChild(div);

}

//Show details about pet
const showDetails = async (id) => {
    try {
        const customModal = document.getElementById('custom-modal');
        const modalContainer = document.getElementById('modal-container');
        const cancelButton = document.getElementById('cancel-button');
        cancelButton.classList.remove('hidden');
        const fetching = (`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
        const response = await fetch(fetching);
        const data = await response.json();
        modalContainer.innerHTML = `
        <img
            src=${data.petData.image}
            alt="Pet image"
            class="rounded-lg w-full"/>
    <div class="card-body px-0">
        <h2 class="text-xl font-bold">${data.petData.pet_name}</h2>
        <div class="grid grid-cols-2 gap-2">
            <p><i class="fa-solid fa-border-all"></i> Breed: ${data.petData?.breed ?? 'Not Found'}</p>
            <p><i class="fa-solid fa-calendar-days"></i> Birth: ${data.petData?.date_of_birth ?? 'Not Available'}</p>
            <p><i class="fa-solid fa-venus"></i> Gender: ${data.petData?.gender ?? 'Not Found'}</p>
            <p><i class="fa-solid fa-dollar-sign"></i>  Price: ${data.petData?.price ?? 'Not Found'}$</p>
            <p><i class="fa-solid fa-venus"></i> Vaccinated status: ${data.petData?.vaccinated_status ?? 'Not Define'}</p>

        </div>
        <hr>
        <h2 class="text-xl font-bold">Details Information:</h2>
        <p>${data.petData.pet_details}</p>
        </div>
        `
        customModal.showModal();
    }
    catch (error) {
        console.error('Error:', error);
    }
}

//Adoption-process
const adoptionProcess = () => {
    const modalContainer = document.getElementById('modal-container');
    const customModal = document.getElementById('custom-modal');
    const cancelButton = document.getElementById('cancel-button');
    const adoptButton = document.getElementById('adopt-button');
    cancelButton.classList.add('hidden');
    // adoptButton.classList.add('btn-disabled');
    modalContainer.innerHTML = `
    <div class="flex flex-col justify-center items-center gap-3">
    <img src="./images/hand.png"/>
        <h2 class="text-center text-3xl font-bold">Congrates</h2>
        <p class="font-semibold text-l text-centerg">Adoption process is start for your pet</p>
    <h2 id="count-down-display" class="text-6xl font-bold">3</h2>   
    </div> 
    `
    customModal.showModal();
    countDown();


}

// displayPetCategory-All pet
const displayPet = (data) => {
    loading();
    allPet = data; //Keeping track of pet
    const petContainer = document.getElementById('display-pet');
    petContainer.innerHTML = ''; // Clear previous content before adding new one
    if (data.length === 0) {
        petContainer.classList.add("bg-base-200", "rounded-lg", "p-5", "md:p-24");
        petContainer.innerHTML = `
                <div class="flex flex-col justify-center items-center gap-5 col-span-3 text-center">
        <img src="./images/error.webp" />
        <h2 class="text-5xl font-bold">No Information Available</h2>
        <p class="text-secondary text-opacity-70">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `;
    }
    else {
        petContainer.classList.remove("bg-base-200", "rounded-lg", "p-5", "md:p-24");
        data.forEach(items => {
            const div = document.createElement('div');
            div.classList.add("card", "border", "shadow-sm");
            div.innerHTML = `
    <figure class="px-5 pt-5">
        <img
            src=${items.image}
            alt="Pet image"
            class="rounded-lg h-[200px] lg:h-[160px] w-full object-cover"/>
  </figure >
    <div class="card-body px-5">
        <h2 class="text-xl font-bold">${items.pet_name}</h2>
        <div class="flex flex-col gap-2">
            <p><i class="fa-solid fa-border-all"></i> Breed: ${items?.breed ?? 'Not Found'}</p>
            <p><i class="fa-solid fa-calendar-days"></i> Birth: ${items?.date_of_birth ?? 'Not Available'}</p>
            <p><i class="fa-solid fa-venus"></i> Gender: ${items?.gender ?? 'Not Found'}</p>
            <p><i class="fa-solid fa-dollar-sign"></i> Price: ${items?.price ?? 'Not Define'}$</p>

        </div>
        <div class="flex justify-between">
            <button class="btn text-primary text-lg" onclick="likedPet('${items.image}')"><i class="fa-solid fa-thumbs-up"></i></button>
            <button class="btn text-primary text-lg" onclick="adoptionProcess()" id="adopt-button">Adopt</button>
            <button class="btn text-primary text-lg" onclick="showDetails('${items.petId}')">Details</button>
        </div>
    </div>
`
            petContainer.appendChild(div);
        })



    }
}


loadPetCategory();
loadPet();