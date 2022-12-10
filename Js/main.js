let elForm = document.querySelector("form");
let elInput = document.querySelector(".input");
let  elSearch = document.querySelector("#search");
let elMainCard = document.querySelector(".mainCard")
let mainDiv = document.querySelector(".mainDiv")
 
 for (let i = 0; i < data.length; i++) {
    let element = data[i];
         
        function render(data) {
             const mainDiv = document.createElement("div");
            mainDiv.style.width = "400px";
            mainDiv.style.flexDirection = "row";
            mainDiv.style.padding = "8px";
            mainDiv.style.gap = "15px";
            mainDiv.style.border = "2px solid green";
            mainDiv.style.borderRadius = "10px";
        
            mainDiv.innerHTML = `
            <h4> Name : ${element.name}</h4>
            <h4> E-mail: ${element.email}</h4>
            <p> Data : ${element.body}</p>   
            <p> Post Id : ${element.postId}</p>
            <p> Id : ${element.id}</p>  
            <button class="bg-danger data-id=${element.id} border-0 rounded-2 "> Delete </button> `
            elMainCard.appendChild(mainDiv) 
        }
        render(data) ;
    };




    //  POST QO'SHISH 
elForm.addEventListener("submit", function (e) {
    e.preventDefault();
  elInput.textContent = "";
 
    const addNewsHandler = () => {
        // let cards = document.createElement("div")
        mainDiv.style.width = "400px";
        mainDiv.style.flexDirection = "row";
        mainDiv.style.padding = "8px";
        mainDiv.style.gap = "15px";
        mainDiv.style.border = "2px solid green";
        mainDiv.style.borderRadius = "10px";
          
        const nameValue = elForm.querySelector("#userName").value;  
        const emailValue = elForm.querySelector("#email").value;
        const bodyTextValue = elForm.querySelector("#bodyText").value;
      
        const Name = document.createElement("h4");
        Name.textContent =  nameValue;
        mainDiv.appendChild(Name);

    const Email = document.createElement("h4");
    Email.textContent = emailValue ;
    mainDiv.appendChild(Email);

    const Body = document.createElement("p");
    Body.textContent = bodyTextValue ;
    mainDiv.appendChild(Body);
     
    const elemDel = document.createElement ("button");
        elemDel.className = "bg-danger border-0 rounded-2" ;
        elemDel.textContent = "Delate"
        mainDiv.appendChild(elemDel)
         
        nameValue = "";
        emailValue = "";
        bodyTextValue = "";
        elemDel.addEventListener("click", () => {
            // mainDiv.style.display = "none"
            

        })

   

   mainDiv.prepend(NewCard) ;
elMainCard.prepend(mainDiv)

 
     
 
  
    
                  


// elForm.textContent = "";



        // const newItem = {
        //      id: data.length,
        //     name: nameValue,
        //     email: emailValue,
        //     body: bodyTextValue,
        // };
        
         
    };
    addNewsHandler()
    
    
})
   
  // mainDiv.prepend(newItem)








    // Delate 
    elMainCard.addEventListener("click", function (e) {
   const element = e.target;

   if (element.matches(".bg-danger")) {
     console.log("delate");
     const id = element.dataset.id ;
     console.log(id);

    const filteredArray =  data.filter(function(element){
        if(element.id !== Number(id)) {
             return element
        }
    })
  console.log(filteredArray);
  render(filteredArray)

   }
    })

    
    












    




