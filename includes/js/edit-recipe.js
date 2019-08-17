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
            this.parentElement.insertAdjacentElement("afterbegin",taggedInputCreator(this));
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

/**************** EVENT LISTENERS **************/
// listen for comma key press
document.querySelector('#edit-ingredient-input').addEventListener('keyup', tagAdder);
document.querySelector('#edit-category-input').addEventListener('keyup', tagAdder);

// listen for mouse click
document.querySelector("#edit-category-div").addEventListener('click', tagDeleter);
document.querySelector("#edit-ingredient-div").addEventListener('click', tagDeleter);
