// var btn = document.getElementById("myBtn");
// var classes = document.getElementById("myClasses")
const classes = 
[
    "English", 
    "Finite", 
    "Biology", 
    "Chemistry", 
    "Social Studies",
    "Photoshop",
    "Illustration",
    "Web Development",
    "App Design"
];

function generateListItems(arg){
    let classes = "";
    for(let i =0; i < arg.length; i++) {
        classes += `<li>${agr[i]}</li>`;
    }
    return items;
}

document.querySelector("main").innerHTML = `
    <ol>
    ${generateListItems(classes)}
    </ol>
`;