function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;      //+'1'(string) => 1(number)
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.innerText = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);           //creating a blueprint object that takes a form and automatically extracts the input value if that form 
    const enteredPlayername = formData.get('playername').trim();  //accessing the input value in the form using the "name" attribute value defined in input HTML element
    //trim => '  max   ' = 'max' trim removes the empty spaces(it works on any string)

    if(!enteredPlayername) {       //enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.innerText = 'Please enter a valid name!';
        return;  // to stop the further execution of this function
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');  //constructing the ID dynamically based on edited player ID
    updatedPlayerDataElement.children[1].innerText = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}