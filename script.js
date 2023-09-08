const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");


function updateStorage() {
    const notesHTML = notesContainer.innerHTML; // Get the HTML content as a string
    localStorage.setItem("notes", notesHTML); // Store it in localStorage
  }
  
function showNotes() {
     const storedNotes = localStorage.getItem("notes");
     if (storedNotes) {
       notesContainer.innerHTML = storedNotes; // Set the HTML content from localStorage
       notes = document.querySelectorAll(".input-box"); // Update the notes variable
     }
   }
  
showNotes();


createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.jpeg";
    notesContainer.appendChild(inputBox).appendChild(img);     
    updateStorage();
})


notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updateStorage();
    }  
    else if(e.target.tagName==="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=> {
            nt.onkeyup=function(){
                    updateStorage();
                }
            }
        )
        }  
}
)


document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
       document.execCommand("insertLineBreak");
      event.preventDefault(); // this line prevents the default behavior of the "Enter" key, 
                              //which is typically to submit a form or create a new paragraph in a text area. 
                              //By calling event.preventDefault(), the code prevents these default actions from occurring, 
                              //so the "Enter" key will only insert a line break without triggering any other default behaviors.
        }
 })

 