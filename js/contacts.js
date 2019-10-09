class Contacts {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
};

const add = (nom, prenom) => {
    const a = new Contacts(nom, prenom)
    return a
};

const d = () => {
    console.log("1 - Pour afficher le répertoire");
    console.log("2 - Pour ajouter un contact");
    console.log("0 - Pour quitter le modal");
    choix = prompt("Choisissez une commande");
    return choix;
};

const Melanie = new Contacts("Moret", "Melanie");
tabs = [];
tabs.push(Melanie);
const loop = () => {
    const x = d();

    if (x === "1") {
        for (tab of tabs) { console.log(`Nom : ${tab.nom}, Prenom : ${tab.prenom}`); };
        console.log("Voici la liste des contacts créés");
        console.log(" ");
        loop();
    }
    else if (x === "2") {
        console.log("Saisissez un nom puis un prénom");
        console.log(" ");
        const nom = prompt("Nom");
        const prenom = prompt("Prénom");
        const result = add(nom, prenom);
        tabs.push(result);
        console.log(" ");
        console.log("Contact ajouté");
        console.log(" ");
        loop();
    }
    else if (x === "0") {
        console.log("A bientôt !");
    }

};
console.log("Bienvenue dans le gestionnaire de contact");

loop();



