// when form is submitted grasb user input and lock
user_input_form.addEventListener("submit", (e) => {
    // e is the event object
    e.preventDefault()

    const PLACEHOLDER_PHOTO_URL = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

    const destinationName = destination_name.value
    const locationName = Location_name.value
    //const photoUrl = photo_url.value == "" ? "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg" : photo_url.value
    const photo_url = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const descr = description.value

    // clear the form
    user_input_form.reset();

    const card = createCard({destinationName, locationName, photoUrl, descr});
    

});

// when edit or delete
cards_container.addEventListener("click", (e) => {
    const clickedElt = e.target

    if (clickedElt.getAttribute(btn_type) ==="delete") {
//<<<<<<< UBT-card-edit
        clickedElt.parentElement.parentElement.remove();
    } else IF (clickedElt.getAttribute("btn_type")=== "edit")
    handleEdit(clickedElt)
=======
        clickedElt.parentElement.parentElement
    }
//>>>>>>> main

})

function createCard({destinationName, locationName, photoUrl, descr}) {




    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("styles", "width; 18rem;");

    card.innerHTML = `
    <img scr=${photoUrl} class ="card-img-top" alt=${destinationName} at ${locationName}>
    <div class="card-body">
        <h5 class="card-title">${destinationName}</h5>
        <p class="card-text">${locationName}</p>
        ${descr && ` <p class="card-text">${descr}</p>`}
        <button type="button" btn_type="edit" class="btn "btn-info">Edit</button>
        <button type="button" btn_type="delete" class="btn btn-danger">Delete</button>

    </div> `;


    return card
}    
function handleEdit(editBtn){
    const cardbody = editBtn.parentElement
    const oldDestName = cardbody.children[0].textContent; 
    const oldLocName = cardbody.children[1].textContent;  
    const oldPhotUrl =cardbody.previousSiblingElement.getAttribute("src");


    const oldDesc = cardbody.children[2].tagName === "p" ? cardbody.children[2].textContent : "";

    
    const newDestName = prompt("Enter new destination name, oldDestName ")
    const newLocName = prompt("Enter new destination name, oldLocName  ")
    const newPhotoUrl = prompt("Enter new destination name, oldPhotoUrl ")
    const newDesc = prompt("Enter new destination name, oldDesc ")

    if (newDestName && newDestName ! == oldDestName){
        cardbody.children[0]. textContent = newDestName
    }
}



