//Boutons
const tab1 = document.getElementById("onglet-1");
const tab2 = document.getElementById("onglet-2");
const tab3 = document.getElementById("onglet-3");

//Text Area
const textarea = document.getElementById("textarea");

function tabChange1() {
    //Couleur de chaque onglet lorsque l'un d'entre eux est sélectionné
    tab1.style.borderColor = "white";
    tab2.style.borderColor = "rgb(110, 82, 233)";
    tab3.style.borderColor = "rgb(110, 82, 233)";

    //Texte sous les onglets
    textarea.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum libero consectetur lacus dictum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non vestibulum risus. Quisque nec hendrerit lectus. Pellentesque quis sollicitudin odio. Vestibulum mattis, sem eu dictum vulputate, dolor nisl tincidunt diam, id tempor turpis nisl vitae odio. Nunc non euismod urna, sit amet vulputate sem. Vivamus scelerisque iaculis velit eu malesuada. Sed sed enim scelerisque purus placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum libero consectetur lacus dictum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non vestibulum risus. Quisque nec hendrerit lectus. Pellentesque quis sollicitudin odio. Vestibulum mattis, sem eu dictum vulputate, dolor nisl tincidunt diam, id tempor turpis nisl vitae odio. Nunc non euismod urna, sit amet vulputate sem. Vivamus scelerisque iaculis velit eu malesuada. Sed sed enim scelerisque purus placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum libero consectetur lacus dictum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non vestibulum risus. Quisque nec hendrerit lectus. Pellentesque quis sollicitudin odio. Vestibulum mattis, sem eu dictum vulputate, dolor nisl tincidunt diam, id tempor turpis nisl vitae odio. Nunc non euismod urna, sit amet vulputate sem. Vivamus scelerisque iaculis velit eu malesuada. Sed sed enim scelerisque purus placerat.";
}

function tabChange2() {
    //Couleur de chaque onglet lorsque l'un d'entre eux est sélectionné
    tab1.style.borderColor = "rgb(110, 82, 233)";
    tab2.style.borderColor = "white";
    tab3.style.borderColor = "rgb(110, 82, 233)";

    //Texte sous les onglets
    textarea.textContent = "Ecrire un texte commence avant son écriture. La première chose que vous devez faire est vous demander: Pourquoi dois-je écrire ce texte? Pour qui? Quels son mes objectifs? Que voudrais-je que fassent les lecteurs une fois qu’ils l’ont lu? Voulez-vous convaincre? Informer? En fonction de vos objectifs et de votre publique, vous devez choisir l’objectif de chaque mot. De chaque phrase. De chaque paragraphe. Du texte dans sa totalité. N’oubliez pas les composants de la rhétorique classique.";
}

function tabChange3() {
    //Couleur de chaque onglet lorsque l'un d'entre eux est sélectionné
    tab1.style.borderColor = "rgb(110, 82, 233)";
    tab2.style.borderColor = "rgb(110, 82, 233)";
    tab3.style.borderColor = "white";

    //Texte sous les onglets
    textarea.textContent = "Avant de se lancer avec le concept de What The Cut !? sur YouTube, Antoine Daniel était déjà très attaché au web, qu'il découvre à l'âge de 11 ans chez un ami. Il passe une grande partie de son adolescence à être actif sur FFWorld, un forum centré sur la série de jeux Final Fantasy. Il réalise avec des amis beaucoup de contenus très différents, comme des fictions audios ou écrites, des vidéos, de l'animation, qu'ils dispersent sur différents sites internet. Il a tenu avec des amis un site internet Le paon qui gueule durant les années 2007 et 2008, qui répertoriait principalement des vidéos aléatoires. Étant un grand fan de jeux vidéo de rôle (RPG), il a tenté de développer un jeu sur RPG Maker mais qui n'a pas abouti.";
}

//Event listeners
tab1.addEventListener("click", tabChange1);
tab2.addEventListener("click", tabChange2);
tab3.addEventListener("click", tabChange3);