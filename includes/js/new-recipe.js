// https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/

// Create span elements to be used as custom tagged inputs 
// similar to bootstraps tag Input, for more info check out the link
const taggedInputCreator = (text) => {
    // create basic tag structure
    let taggedText = document.createElement('span');
    taggedText.classList.add('custom-tags');
    taggedText.innerHTML = `${text.value.slice(0,text.value.length -1)}<i class="close icon"></i>`;
    
    return taggedText;
}

// This adds tagged inputs to the list tagged items that have alread been tagged
// check out the bootstrap link for a similar example to want has been built here
function tagAdder(event) {  
    // make sure that the tag has content   
    if (this.value.length > 1){
        if(event.keyCode === 188){            
            this.nextElementSibling.insertAdjacentElement("beforeend",taggedInputCreator(this));
            // clear placeholder text and the content ready for the next tagged input to be entered
            this.placeholder = "";
            this.value = "";
        }   
    }
}

// When the close icon is clicked delete the tag
const tagDeleter = (event) => {
    if(event.target.classList.contains('close')){
        event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    }      
}

function modifyFormSubmission(event) {
    event.preventDefault();
    // Grab the tagged ingredients list and put it into an array then stringify
    // assign stringified list to hidden input value for submission to server
    function stringifier(tagSelector, inputSelector){
        const arrayOfTags = [];
        const hiddenInput = document.getElementById(inputSelector);
        const Tags = document.getElementById(tagSelector).querySelectorAll("span");
        for(tag of Tags){
            arrayOfTags.push(tag.innerText);
        }
        hiddenInput.value = JSON.stringify(arrayOfTags);
    }
    // Ingredient Stringifier
    stringifier('add-ingredient-div','add-ingredient-hidden');
    // Categories Stringifier
    stringifier('add-category-div','add-category-hidden');
    // Method Stringifer
    stringifier('add-method-div','add-method-hidden');
    // Finally submit form to server
    document.querySelector('form').submit(); 
}

/**************** EVENT LISTENERS **************/
// listen for comma key press
document.querySelector('#add-ingredient-input').addEventListener('keyup', tagAdder);
document.querySelector('#add-category-input').addEventListener('keyup', tagAdder);
document.querySelector('#add-method-input').addEventListener('keyup', tagAdder);

// listen for mouse click
document.querySelector("#add-category-div").addEventListener('click', tagDeleter);
document.querySelector("#add-ingredient-div").addEventListener('click', tagDeleter);
document.querySelector("#add-method-div").addEventListener('click', tagDeleter);

// Modify default form submission
document.querySelector("#new-recipe-form-button").addEventListener('click', modifyFormSubmission);