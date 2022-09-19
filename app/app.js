var users = [];

function initListeners() {
    $( "#submit" ).click(function() {

        let allUsers = JSON.parse(localStorage.getItem("Person"));
        if (JSON.parse(localStorage.getItem("Person"))) {
        }
        let fn = $("#firstName").val();
        let ln = $("#lastName").val();

        let age = $("#age").val();
        let phoneNum = $("#age").val();
        let classes = $("#age").val();

        console.log(fn + " " + ln + age + phoneNum + classes);

        if (fn != "" && ln != "") {
            let userObj = {
                fName: fn,
                lName: ln,
                age: age,
                phoneNum: phoneNum,
                classes: classes,
            };
            allUsers.push(userObj);
            console.log(users);
            localStorage.setItem("Person", JSON.stringify(allUsers));

            $("#firstName").val("");
            $("#lastName").val("");
            $("#age").val("");
            $("#phoneNum").val("");
            $("#classes").val("");
        } else {
            alert("You must fill the entire form!");
        }
    }); 
}

function initSite() {
    if(localStorage) {
        let people = localStorage.getItem("Person");
        if (people) {
            console.log("yes");
            let persons = JSON.parse(localStorage.getItem("Person"));

            // console.log(persons);
            $('#names').html('')
            for(var x=0;x<persons.length;x++){
            $('#names').append(persons[x]['fName'] + " " + persons[x]['lName']  + " <br/> "   + " " + persons[x]['age'] + "<br/>")
}

        } else {
            localStorage.setItem("Person", "[]");
            alert("No peeps added yet");
        }
    } else {
        console.log("No Localstorage");
    }
}

$(document).ready(function () {
initListeners();
initSite();
});




// $("submit").click((e) => {
//     e.preventDefault();

//     let allUsers = JSON.parse(localStorage.getItem("Person"));
//     if (JSON.parse(localStorage.getItem("Person"))) {
//     }
//     let fn = $("#firstName").val();
//     let ln = $("#lastName").val();
//     console.log(fn + " " + ln);

//     if (fn != "" && ln != "") {
//         let userObj = {
//             fName: fn,
//             lName: ln,
//         };
//         allUsers.push(userObj);
//         console.log(users);
//         localStorage.setItem("Person", JSON.stringify(allUsers));

//         $("#firstName").val("");
//         $("#lastName").val("");
//     } else {
//         alert("This alerts something");
//     }
// });