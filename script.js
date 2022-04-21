const mail = document.getElementById("email");
const error = document.getElementById("error");
const label = document.getElementById("label");


let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

let testEmails = ["notanemail.com", "workingexample@stackabuse.com", "example@yale.edu.com", "imino20033@hotmail.com"];

let Emails = "workingexample@stackabuse.com"
label.classList.add("visible");
error.classList.add("visible");


function test(){
    if (regex.test(mail.value)){
        label.classList.add("visible");
        error.classList.add("visible");
        mail.classList.remove("input");
    }else{
        console.log("non");
        label.classList.remove("visible");
        error.classList.remove("visible");
        mail.classList.add("input");
    }    
}

/*testEmails.forEach((address) => {
    console.log(regex.test(address))
});*/

 