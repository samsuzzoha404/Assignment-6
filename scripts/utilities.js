// count down  function
const countDown = () => {
    const countDisplay = document.getElementById("count-down-display");
    let count = 3;
    let timer = setInterval(() => {
        countDisplay.innerText = count;
        if (count === 0) {
            document.getElementById('cancel-button').click();
            clearInterval(timer);
        }
        count--;
    }, 1000);
}


//loading indicator and functionality
const loading = () => {
    const loader = document.getElementById('loader');
    const diaplayPet = document.getElementById('display-pet');
    loader.classList.remove('hidden');
    diaplayPet.classList.add('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
        diaplayPet.classList.remove('hidden');
    }, 2000);
}

//Remove all active button
const removeActiveButton = () => {
    const buttons = document.getElementsByClassName('category-btn');
    for (btn of buttons) {
        btn.classList.remove("bg-primary", "bg-opacity-20", "rounded-full", "border-green-900");
    }
}

//For sorting purposes
let allPet = [];
document.getElementById('sort-btn').addEventListener('click', () => {
    allPet.sort((a, b) => b.price - a.price);
    displayPet(allPet);
})
