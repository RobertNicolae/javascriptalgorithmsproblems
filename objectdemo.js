const angajatulOne = {
    nume: "Balanoiu Robert",
    varsta: 21,
    salariu: 2000,
    ocupatie: "Om de rand",
    afiseazaStadiuSocial: function () {
        if (this.salariu < 8000) {
            return "Sunt sarac ca nu sunt programator";
        } else {
            return "E greu sa fii ca mine, te pup de la inaltime.";
        }
    }
};

let mesajulLuiRobert = angajatulOne.afiseazaStadiuSocial();
console.log(mesajulLuiRobert);