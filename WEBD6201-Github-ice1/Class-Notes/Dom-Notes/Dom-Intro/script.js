//Use JS to put red border around our paragraph
//Select the <p> element and store it inside a variable
//Execute a method to modify that <p> element and change its border to red

//console.dir(document);

//console.log(paragraphElement);

//const paragraphElement = document.querySelector("p");
//paragraphElement.style.border = "2px solid red";

// let car = {
//     color: "red",
//     make: "A",
//     year: 2024
// }


// - As a user, I want to click on 'Add' button and add the todo that I typed from text box onto my todo list.
//const let var
//const addBtn = document.getElementById('submit_btn');
//const addBtn = document.querySelector('button'); //-select all button
const addBtn = document.querySelector("#submit_btn");
const inputEl = document.querySelector("#to_do_input");
const unOderedListEl = document.querySelector("#to_do_list");
// addBtn.addEventListener("click", (eventObject) => {})

addBtn.addEventListener("click", function (event) {
    // Stop the refreshing, because refreshing is default setting, so event.preventDefault
    event.preventDefault();

    // console.log("this is the browser captured event object.");
    // console.log(event);

    //print out the input value
    //console.dir(inputEl.value);

    const newListItem = document.createElement("INPUT");
    newListItem.setAttribute("type", "checkbox")
    newListItem.value = inputEl.value;
    //To generate a new list on website: newListItem --> <LI>'input'</LI>
    unOderedListEl.append(newListItem);
})