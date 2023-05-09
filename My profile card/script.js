const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//modal open function
const openModal = (e) => {
    e.preventDefault();
    modal.classList.add("open");
    overlay.classList.add("open");
}

//modal close function
const closeModal = (e) => {
    e.preventDefault();