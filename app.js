let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writeArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");


// list of fontlist

let fontList = [
    "Arial", 
    "Verdana", 
    "Times New Roman", 
    "Garamond", "Georgia", 
    "Courier New",
    "cursive" 
];

// Intital Settings

const initializer = ()=>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButton, false);
    highlighter(scriptButtons, true);

    // create opition for fonr names

    fontList.map(value =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // fontsize
    for(let i = 1; i<=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    
    } 

    // defaul size
    fontSizeRef.value = 3;
};

const modifyText = (command,  defaultUi, value) =>{
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        modifyText(button.id, false, null);
    });
});

// highlighter click button

const highlighter = (className, needsRemoval) => {
    className.forEach((button)=>{
        button.addEventListener("click", ()=>{

            if(needsRemoval){
                let alreadyActive = false;

                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

            highlighterRemover(className);
            if(!alreadyActive){
                button.classList.add("active");
            }
           }  
           else{
            button.classList.toggle("active");
           }
        });
    });

    // option that require
    advancedOptionButton.forEach((button)=>{
        button.addEventListener("change", ()=>{
            modifyText(button.id, false, button.value);
        });
    });

    // linkB
    linkButton.addEventListener("click", () => {
        let userLink = prompt("Enter a URL");
        if(/http/i.test(userLink)){
            modifyText(linkButton.id, false, userLink);
        }
        else{
            userLink = "http://" + userLink;
            modifyText(linkButton.id, false, userLink);
        }
    });
};




const highlighterRemover = (className)=>{
    className.forEach((button)=>{
        button.classList.remove("active");
    });
}

window.onload = initializer();