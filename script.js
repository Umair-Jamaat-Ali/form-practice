function userInput() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("mail").value;
    var userCountry = document.getElementById("country code").value;
    var userState = document.getElementById("state").value;
    var userBio = document.getElementById("bio").value;
    var userCnic = document.getElementById("cnic").value;

    userName = userName.split(" ");

    if (userName.length > 1) {
        console.log("name is valid");
    }else{
        console.log("name is invalid");
    }
    
    
    if (userEmail.includes("gmail") || userEmail.includes("yahoo")) {
        console.log("mail is valid");
    } else {
        console.log("mail is not valid");
    }

    if (userBio.length >= 50 ) {
        console.log("you are eligible");
    } else {
        console.log("you are not eligible");
    }

    if (userCnic.length == 13) {
        console.log("cinc is correct");
    } else {
        alert("entre corret cnic")
    }
}