let utilizatori = [
    {
        email: "robertnicolae20",
        pass: "robert",
    },
    {
        email: "ionescucristian",
        pass: "cristian",
    },
    {
        email: "balanoiunicolae",
        pass: "nicolae",
    }
];




function login(username, parola) {
    utilizatori.forEach(function (utilizator) {
        if(username === utilizator.email) {
            return parola === utilizator.pass;
        }


    });

}

login("robertnicolae20", "cristi");

function User(email, pas) {
    this.email = email;
    this.pass = pas;
}

function register(email, password) {
    let newUser = new User(email, password);
    utilizatori.push(newUser);
}

register("robert123", "robertnicolae");


function changePassword(email, oldPassword, newPassword) {
    utilizatori.forEach(function (utilizator){
        if(email === utilizator.email) {
            if(oldPassword === utilizator.pass) {
                oldPassword = newPassword;
            }
        } else {
            return false;
        }
    })
}

changePassword("robertnicolae20", "robert", "roberto");
console.log(utilizatori);