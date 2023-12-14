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

function createCard({destinationName, locationName, photoUrl, descr}) {



    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("styles", "width; 18rem;");

    card.innerHTML = `
    <img scr = ${photoUrl} class ="card-img-top" alt=${destinationName} at ${locationName}>
    <div class="card-body">
        <h5 class="card-title">${destinationName}</h5>
        <p class="card-text">${locationName}</p>

        ${descr && ' <p class="card-text">${descr}</p>'}
        <button type="button class="btn "btn-info">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>

    </div> `


    return card

}