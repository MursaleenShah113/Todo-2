var item = document.getElementById("item");
var  todobox = document.getElementById("to-do-box");
var button = document.getElementById("btn");


button.addEventListener("click", function(event) {
    var inputValue = item.value; // Get the value of the input element
      addtodo(inputValue);
      item.value ="";
      //console.log(item.value);
      
});


const addtodo = function(item)

{

    //here
    fetch('http://localhost:4000/todos', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: item }),
    }
    )
    .then(response => response.json())
    .then(data => {
        console.log('Response from backend:', data);
        // Handle response from backend if needed
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add todo. Please try again.');
    });






    //backend


    if (item.trim() === "") {
        alert("Empty text can't be added");
        return; // Exit the function if the item is empty
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = ` <span class="editable-text">${item}</span>
        <input type="checkbox">
        <button>Edit</button>
        <i class="fa-solid fa-xmark"></i>`
   
    todobox.appendChild(listItem);
    const textElement = listItem.querySelector(".editable-text");

      
    listItem.querySelector("button").addEventListener("click", function() {
        if (this.innerHTML === "Edit") {
            // Change button text to "Save"
            this.innerHTML = "Save";

            // Make the text content editable
            textElement.contentEditable = true;

            // Focus on the editable text
            textElement.focus();
        } else if (this.innerHTML === "Save") {
            // Change button text back to "Edit"
            this.innerHTML = "Edit";

            // Make the text content non-editable
            textElement.contentEditable = false;

            // Update the text content with the edited value
            textElement.textContent = textElement.textContent.trim();
        }
    });  


    listItem.querySelector("input").addEventListener("click",function()
    {
        this.parentElement.classList.toggle("done");
        
    })

    
    listItem.querySelector("i").addEventListener("click",function()
    {
        todobox.removeChild(listItem);
    });
}

    
    