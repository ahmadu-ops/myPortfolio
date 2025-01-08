// Effet de survol des loisirs (agrandissement)
const loisirs  = document.querySelectorAll('.loisir-item');
loisirs.forEach(loisir => {
    loisir.addEventListener('mouseover', () => {
        loisir.style.transform = 'scale(1.05)';
        loisir.style.transition = 'transform 0.3s ease';
    });
    loisir.addEventListener('mouseout', () => {
        loisir.style.transform = 'scale(1)';
    });
});

// Effet de survol des competences (agrandissement)
const competences = document.querySelectorAll('.competence-item');
competences.forEach(competence => {
    competence.addEventListener('mouseover', () => {
        competence.style.transform = 'scale(1.05)';
        competence.style.transition = 'transform 0.3s ease';
    });
    competence.addEventListener('mouseout', () => {
        competence.style.transform = 'scale(1)';
    });
});


// Effet de survol des projets (agrandissement)
const projets = document.querySelectorAll('.projet-item');
projets.forEach(projet => {
    projet.addEventListener('mouseover', () => {
        projet.style.transform = 'scale(1.05)';
        projet.style.transition = 'transform 0.3s ease';
    });
    projet.addEventListener('mouseout', () => {
        projet.style.transform = 'scale(1)';
    });
});

// Validation du formulaire de contact
document.getElementById("formulaire-contact").addEventListener('submit', function(event) {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!nom || !email || !message) {
        event.preventDefault();
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Message envoyé avec succès !');
    }
});
