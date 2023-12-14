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

    console.log(destinationName, locationName, photoUrl, descr);

})