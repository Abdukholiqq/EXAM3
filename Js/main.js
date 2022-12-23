let elForm = document.querySelector("form");
let elInput = document.querySelector(".input");
let elSearch = document.querySelector("#search");
const elSelected = document.querySelector("#select");
let elMainCard = document.querySelector(".mainCard")
let mainDiv = document.querySelector(".mainDiv")


// RENDER

function render(data) {
    elMainCard.textContent = "";
    for (let i = 0; i < data.length; i++) {
        let element = data[i];

        const mainDiv = document.createElement("div");
        mainDiv.style.width = "400px";
        mainDiv.style.flexDirection = "row";
        mainDiv.style.padding = "8px";
        mainDiv.style.gap = "15px";
        mainDiv.style.border = "3px solid green";
        mainDiv.style.borderRadius = "25px";
        mainDiv.style.backgroundColor = "rgb(35, 88, 188)"

        mainDiv.innerHTML = `
            <h4 class="mb-3"> Name : ${element.name}</h4>
            <h4 class="mb-3"> E-mail: ${element.email}</h4>
            <p class="mb-3"> Data : ${element.body}</p>   
            <p class="mb-3"> Post Id : ${element.postId}</p>
            <p class="mb-3"> Id : ${element.id}</p>  
            <button  data-id="${element.id}" class="bg-danger w-75 mb-2 border-0 rounded-2 "> Delete </button> `
        elMainCard.appendChild(mainDiv)
    }
};
render(data);


// SEARCH

elSearch.addEventListener("input", () => {
    const elSearchValue = elSearch.value.trim();
    console.log(elSearchValue);
    const elReg = new RegExp(elSearchValue, "gi");
    const filterItem = data.filter(
        (element) => element.name.match(elReg)
    );
    if (filterItem.length > 0) {
        render(filterItem);
    }
});

//  DELATE

elMainCard.addEventListener("click", function (e) {
    const targetT = e.target;
    const id = e.target.dataset.id;
    if (targetT.matches(".bg-danger")) {
        const filteredItems = data.filter((element) => {
            if (element.id != id) {
                return element;
            }
        });
        data = filteredItems;
        render(filteredItems);
    }
});


// SELECT

const optionSelect = (data) => {
    const postIds = [];
    const selectFragment = document.createDocumentFragment();
    const Option = document.createElement('option');
    Option.textContent = "All";
    Option.value = "All";
    selectFragment.appendChild(Option);

    data.forEach((element) => {
        if (!postIds.includes(element.postId)) {
            postIds.push(element.postId);

            const Option = document.createElement('option');
            Option.textContent = element.postId;
            Option.value = element.postId;
            selectFragment.appendChild(Option);
        }
    });
    elSelected.appendChild(selectFragment);
}
optionSelect(data);

elSelected.addEventListener("change", (e) => {
    const postid = e.target.value;

    const result = data.filter((post) => {
        if (post.postId === Number(postid)) {
            return post;
        };
    });

    if (postid === "All") {
        render(data);
    } else {
        render(result);
    };
})