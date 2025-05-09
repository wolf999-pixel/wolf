// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Données des projets (peuvent aussi venir d'une API)
    const IMAGE_BASE = 'assets/images';
    const projects = {
        'project1': {
            title: "Graphisme",
            category: "Creation  de visuels",
            year: "2024",
            description: "Conception de visuels attrayants pour les entreprises et les particuliers.",
            Compétences: ["Adobe Photoshop", "Adobe illustrator", "Adobe Premiere pro", "Adobe After effect", "Adobe Animate","Davinci Resolve"],
            client: "Client Privé",
            previewLink: "#",
            githubLink: "#",
            fullDescription: `
                <p>Ce projet consistait à créer des concepts et visuels attrayants et captivant pour les entreprise et les particuliers>
                <p>Fonctionnalités clés :</p>
                <ul>
                    <li>Conception de Logos</li>
                    <li>Conception d'affiches</li>
                    <li>Retouche photos</li>
                    <li>Conception de cartes de vistes</li>
                    <li>Concetion des programmes d'obseques ou de mariages</li>
                </ul>
                <p>La casi totalité des projets sont livrés dans les temps impartis, sauf demande de modication du client.</p>
            `,
            images: [ 
                "assets/images/projets/Graphisme/kuanbyb1.jpg",
                "assets/images/projets/Graphisme/kuanby2.jpg"
            ],
            
        },
        'project2': {
            title: "Application Mobile",
            category: "Développement Mobile",
            year: "2022",
            description: "Application de suivi de fitness avec tableau de bord personnalisé et synchronisation avec wearables.",
            technologies: ["React Native", "Firebase", "Redux"],
            client: "Startup FitTrack",
            previewLink: "#",
            githubLink: "#",
            fullDescription: `
                <p>Application mobile cross-platform développée pour une startup dans le domaine du fitness.</p>
                <p>Fonctionnalités principales :</p>
                <ul>
                    <li>Suivi des activités sportives</li>
                    <li>Syncronisation avec Apple Watch et Fitbit</li>
                    <li>Tableau de bord personnalisé</li>
                    <li>Programmes d'entraînement adaptatifs</li>
                </ul>
                <p>L'application compte actuellement plus de 50,000 utilisateurs actifs.</p>
            `,
            images: [
                "project2-1.jpg",
                "project2-2.jpg"
            ]
        }
    };
    projects.forEach(project1=> {
        const galleryHTML = project.images.map(img=>'<img src="${img}" alt="${project.title}">'
        ).join('');
        document.querySelector('.projects-container').innerHTML += galleryHTML;
    });

    // Gestion de la modal
    const modal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Ajouter les écouteurs d'événements pour tous les boutons "Détails"
    document.querySelectorAll('.btn-small').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = 'project' + (index + 1);
            loadProjectData(projects[projectId]);
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Empêche le défilement
        });
    });

    // Fermer la modal
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Fermer quand on clique en dehors
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Fonction pour charger les données du projet
    function loadProjectData(project) {
        modalBody.innerHTML = `
            <div class="project-header">
                <h2>${project.title}</h2>
                <div class="project-meta">
                    <span class="gold">${project.category}</span>
                    <span> • ${project.year}</span>
                    ${project.client ? <span> • ${project.client}</span> : ''}
                </div>
            </div>
            
            <div class="project-gallery">
                ${project.images.map(img => `
                    <div class="gallery-item">
                        <img src="${img}" alt="${project.title}">
                    </div>
                `).join('')}
            </div>
            
            <div class="project-details">
                <div class="details-main">
                    <h3>Description du Projet</h3>
                    ${project.fullDescription}
                </div>
                
                <div class="details-sidebar">
                    <div class="detail-box">
                        <h4>Technologies</h4>
                        <ul class="tech-list">
                            ${project.technologies.map(tech => `
                                <li>${tech}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-box">
                        <h4>Liens</h4>
                        <div class="project-links">
                            ${project.previewLink ? <a href="${project.previewLink}" class="btn-small" target="_blank"><i class="fas fa-external-link-alt"></i> Voir le projet</a> : ''}
                            ${project.githubLink ? <a href="${project.githubLink}" class="btn-small" target="_blank"><i class="fab fa-github"></i> Code source</a> : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
});