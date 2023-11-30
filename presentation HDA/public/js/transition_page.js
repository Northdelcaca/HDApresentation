content_page1 = [
    `<h3><strong>Presentation HDA </strong></h3>`,
    `
    <h3><strong>Rencontre</strong></h3>
        <p>Lors de la rencontre avec l'artiste denomé Lou Rat Fischer nous avons eu l'occasion de decouvrir sont style artistique,d'où elle venait et quelle etudes à-t-elle faite afin d'en arrivé la </p> 
    <h3><strong>Presentation de l'Artiste </strong></h3>
        <p>Lou rat est une Artiste plasticienne d'origine franco-allemande.Né à Strasbourg en 1990 ,est passionée par le monde animal et végétal, aimant allier la technicité plastique a la poesie sans mots,la nevrosité du trait a l'expression d'un regard sur le monde </p>
        <img src="public/img/Apparence.png" style="width: auto;height: 40%;" alt=""> 
        <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,
    `
    <h3><strong>Decouverte du lieux d'exposition</strong></h3>
    <p>Le cour d'apres nous sommes allez sur le lieux d'exposition,la poudriere!Cette derniere est situé dans la citadelle d'ajaccio elle servait avant comme son nom l'indique la poudre a canon et armes...</p>
    <h3><strong>Decouverte du lieux de travail de l'artiste</strong></h3>
    <p>La seances d'apres mes camarades et ma personne sommes allez sur le lieux de travail de l'artiste.l'apartement est situé au derniere etage du centre culturel du Borgu
    <button onclick="PageSuivante(2)">Page Précedente</button></div>
    `,

];
content_page2 = [
    `<h3><strong>Explication de la presentation</strong></h3><br><p>Avant tout j'aimerais expliquer le choix de mon ilustration j'ai decidé de reprendre l'idé de lou qui etait de prendre ds note sur un petit carnet en papier et l'ai reporter sur un format informatique,cela me permet d'allier ma specialité Histoire des Arts et celle de Numérique science de l'informatique. </p><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <h3><strong>Expositions et Residences</strong></h3>
    <p>Été 2020 : Création du spectacle M la Maudite, épisode III avec la Cie Procédé Zèbre, Châtel-Montagne</p><p>Hiver 2019 : Ateliers créatifs adultes & enfants Maison des Loisirs, Châtel-Montagne</p><p>Été 2019 : Création du spectacle M la Maudite, épisode II</p><p>Et bien d'autre encore</p>
    <img src="public/img/tableau1.png" style="width: auto;height: 40%;" alt="">
    <button onclick="PageSuivante(3)">Page Suivante</button></div>
    `,
    `
    <h3><strong>Place a la Pratique !!</strong></h3>
    <p>
    lors de la troisieme seance avec lou-rat nous avons fait un atelier pratique lou porteras son exposition sur la mere et plus particuilierement les meroux!De notre coter nous,etudiants allons nous occupé du decors et quoi de mieux pour commencer que des galets en patte a sel ? Alors nous avons mit la main a la patte et avont commencé !
    </p>
    <h3><strong>Conclusion</strong></h3>
    Voici pour l'instant le compte rendu ! C'est une super experience de vivre cela avec un ariste !</p>
    `,
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
