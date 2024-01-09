let pitanje1 = {
    tekst: "Ivo Andrić dobio je Nobelovu nagradu za delo?",
    odgovori: ["Most na Žepi", "Na Drini Ćuprija", "Prokleta avlija", "Znakovi pored puta"],
    indeks: 1
};
let pitanje2 = {
    tekst: "Roman 'Stranac' napisao je?",
    odgovori: ["Fjodor Dostojevski", "Mark Tven", "Čarls Dikens", "Alber Kami"],
    indeks: 3
};
let pitanje3 = {
    tekst: "Najmnogoljudnija zemlja na svetu je?",
    odgovori: ["Kina", "Rusija", "Indija", "Bangladeš"],
    indeks: 2
};
let pitanje4 = {
    tekst: "Koji element je najviše zastupljen u vazduhu?",
    odgovori: ["Helijum", "Azot", "Vodonik", "Ugljen-dioksid"],
    indeks: 1
};
let pitanje5 = {
    tekst: "Koji kompozitor je pred kraj života postao gluv?",
    odgovori: ["Ludvig van Betoven", "Franc List", "Johan Sebastijan Bah", "Stevan Mokranjac"],
    indeks: 0
};
let pitanje6 = {
    tekst: "Period od hiljadu godina zove se?",
    odgovori: ["Vek", "Decenija", "Milenijum", "Era"],
    indeks: 2
};
let pitanje7 = {
    tekst: "Najveći ljudski organ je?",
    odgovori: ["Srce", "Koža", "Digestivni organi", "Jetra"],
    indeks: 1
};
let pitanje8 = {
    tekst: "Katalonija je deo koje države?",
    odgovori: ["Maroka", "Portugala", "Španije", "Francuske"],
    indeks: 2
};
let pitanje9 = {
    tekst: "Stoti deo metra je?",
    odgovori: ["Milimetar", "Centrimetar", "Nanometar", "Decimetar"],
    indeks: 1
};
let pitanje10 = {
    tekst: "Koji je prirodni satelit planete Zemlje?",
    odgovori: ["Mesec", "Ganimed", "Titan", "Tiitanija"],
    indeks: 0
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];
let brojPrikazanihPitanja = 5;
let divSvaPitanja = document.getElementById("svaPitanja");
let divSviOdgovori = document.getElementById("sviOdgovori");


// Funkcija za random pitanja
function izaberiNovaPitanja() {
let izabranaPitanja = [];
    for(let i = 0; i < brojPrikazanihPitanja; i++) {
        let p = Math.floor(Math.random() * 10);
            if (!izabranaPitanja.includes(pitanja[p])) {
                izabranaPitanja.push(pitanja[p]);
            } else {
                i--;
            }
    };
    return izabranaPitanja;
}
let pocetnaPitanja = izaberiNovaPitanja();



//Ispis pitanja i odgovora
function ispisiPitanja(divSvaPitanja, izabranaPitanja) {
    izabranaPitanja.forEach((pitanje, index) => {
        let divZaPitanja = document.createElement('div');
        divZaPitanja.innerHTML = `<b>${index + 1 + "."}</b> ${pitanje.tekst} <br>`;
        divZaPitanja.style.border = `3px solid blue`;
        divZaPitanja.style.borderRadius = `25px`
        divZaPitanja.style.backgroundColor = `aquamarine`;
        divZaPitanja.style.fontFamily = `Arial`;
        divZaPitanja.style.padding = `50px`;
        document.body.appendChild(divZaPitanja);
    
        let sviOdgovori = pitanje.odgovori;
        sviOdgovori.forEach((odgovor, indexOdgovora) => {
            let radioInput = document.createElement(`input`);
            radioInput.type = `radio`;
            radioInput.value = `${indexOdgovora}`;
            radioInput.id = `${odgovor}`;
            radioInput.name = `pitanje${index}`;
            radioInput.style.margin = `10px`;
    
            if(indexOdgovora == 0) {
                radioInput.checked = true;
            }
            divZaPitanja.append(radioInput);
    
            let radioLabel = document.createElement(`label`);
            radioLabel.htmlFor = `${odgovor}`;
            radioLabel.innerHTML = `${odgovor}`;
            radioInput.margin = `50px`;
            divZaPitanja.append(radioLabel);
            divZaPitanja.appendChild(document.createElement(`br`));
        });
        divSvaPitanja.appendChild(divZaPitanja);
    });
};

ispisiPitanja(divSvaPitanja, pocetnaPitanja);



let divZaBtn = document.createElement("div");
document.body.appendChild(divZaBtn);

let btnPosaljiOdgovore = document.createElement("button");
btnPosaljiOdgovore.textContent = `Pošalji odgovore!`;
btnPosaljiOdgovore.style.border = `2px solid blue`;
btnPosaljiOdgovore.style.borderRadius = `10px`;
divZaBtn.append(btnPosaljiOdgovore);

let btnNovaPitanja = document.createElement("button");
btnNovaPitanja.innerText = `Nova pitanja!`;
btnNovaPitanja.style.border = `2px solid blue`;
btnNovaPitanja.style.borderRadius = `10px`;
divZaBtn.append(btnNovaPitanja);



btnPosaljiOdgovore.addEventListener("click", () => {
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
        radioButton.disabled = true;
    });
    if(divSviOdgovori.innerHTML) {
        divSviOdgovori.innerHTML = '';
    };
    pocetnaPitanja.forEach((p, ind) => {
        let sviTacniOdgovori = [p.indeks];
        sviTacniOdgovori.forEach(pitanje => {
            let userOdgovor = document.querySelector(`input[name='pitanje${ind}']:checked`);
            if(pitanje == userOdgovor.value) {
                let paragrafTacno = document.createElement("p");
                paragrafTacno.innerHTML = `Tačno ste odgovorili na ${ind + 1 + "."} pitanje.`
                paragrafTacno.style.color = `green`;
                divSviOdgovori.append(paragrafTacno);
            } else {
                let paragrafNetacno = document.createElement("p");
                paragrafNetacno.innerHTML = `Niste tačno odgovorili na ${ind + 1 + "."} pitanje.`
                paragrafNetacno.style.color = `red`;
                divSviOdgovori.append(paragrafNetacno);
            };
         });
    });
});


btnNovaPitanja.addEventListener("click", () => {
    if(divSviOdgovori.innerHTML) {
        divSviOdgovori.innerHTML = '';
    }
    if (divSvaPitanja.innerHTML) {
        divSvaPitanja.innerHTML = '';
    }
    let novaPitanja = izaberiNovaPitanja();
    pocetnaPitanja = novaPitanja;
    ispisiPitanja(divSvaPitanja, novaPitanja);
});