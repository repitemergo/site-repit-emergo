/* ═══════════════════════════════════════════════════
   RÉPIT EMERGO — Main JS
   ═══════════════════════════════════════════════════ */

// ═══ NAVBAR SCROLL EFFECT ═══
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
});

// ═══ MOBILE NAV TOGGLE ═══
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// ═══ BILINGUAL SYSTEM ═══
const translations = {
  fr: {
    // Nav
    'nav.services': 'Nos services',
    'nav.programs': 'Programmes',
    'nav.calendar': 'Calendrier et coûts',
    'nav.about': 'À propos',
    'nav.history': 'Notre histoire',
    'nav.team': 'Notre équipe',
    'nav.foundation': 'Fondation',
    'nav.jobs': 'Emplois',
    'nav.contact': 'Nous joindre',
    'nav.donate': 'Faire un don',
    'nav.member': 'Devenir membre',
    'nav.lang': 'EN',

    // Hero
    'hero.badge': '50 ans de répit — 1976-2026',
    'hero.title1': 'L\'autisme ne donne',
    'hero.title2': 'pas de répit...',
    'hero.title3': 'Emergo, oui!',
    'hero.lead': 'Depuis 1976, nous offrons des services de répit spécialisés aux familles vivant avec des personnes autistes. Un environnement sécuritaire, stimulant et adapté — pour que chaque famille puisse souffler.',
    'hero.cta1': 'Devenir membre',
    'hero.cta2': 'Découvrir nos programmes',

    // Stats
    'stat.families': 'familles membres',
    'stat.nights': 'nuitées de répit par an',
    'stat.years': 'années d\'expérience',
    'stat.ratio': 'ratio accompagnateur',

    // Mission
    'mission.label': 'Notre mission',
    'mission.title': 'Un répit essentiel pour les familles',
    'mission.text': 'Offrir des services de répit aux familles vivant avec des personnes ayant un trouble du spectre de l\'autisme en accueillant ces dernières dans un environnement de plein air sécuritaire, stimulant et adapté à leurs besoins, favorisant ainsi le maintien ou le développement de leurs capacités.',
    'mission.vision.title': 'Notre vision',
    'mission.vision.text': 'Chef de file dans son domaine, Répit Emergo est reconnu pour la qualité de ses services, son encadrement personnalisé et sa programmation adaptée.',
    'mission.values.title': 'Nos valeurs',
    'mission.values.text': 'Satisfaction de la clientèle, respect, recherche de l\'excellence, transparence, intégrité, loyauté et confidentialité.',
    'mission.engagement.title': 'Notre engagement',
    'mission.engagement.text': 'Une interaction permanente avec les familles, une gestion efficiente des ressources et une recherche active de financement.',

    // Programs
    'programs.label': 'Nos programmes',
    'programs.title': 'Des séjours adaptés à chaque besoin',
    'programs.lead': 'Quatre programmes spécialisés pour accueillir les personnes autistes de tous âges et de tous niveaux d\'autonomie.',
    'prog.emergence.name': 'Émergence',
    'prog.emergence.tag': 'Socialisation',
    'prog.emergence.ratio': 'Ratio 1:1 à 1:2',
    'prog.emergence.desc': 'Programme très individualisé pour les participants autistes de tous âges ayant un niveau d\'autonomie moins élevé. Activités variées et stimulantes en sous-groupes de quatre.',
    'prog.idefix.name': 'iDÉFIx',
    'prog.idefix.tag': 'Encadrement soutenu',
    'prog.idefix.ratio': 'Ratio 1:1',
    'prog.idefix.desc': 'Pour les personnes autistes nécessitant un encadrement serré en raison de problèmes de comportement importants.',
    'prog.adaptatou.name': 'Adaptatou',
    'prog.adaptatou.tag': 'Intégration',
    'prog.adaptatou.ratio': 'Ratio 1:2',
    'prog.adaptatou.desc': 'Axé sur l\'autonomie pour les enfants de 6 à 17 ans dont la capacité de socialisation est élevée. Activités ludiques, créatives et de découverte.',
    'prog.reve.name': 'Un rêve à réaliser',
    'prog.reve.tag': 'Autonomie',
    'prog.reve.ratio': 'Ratio 1:3',
    'prog.reve.desc': 'Pour les personnes autistes autonomes de 16 ans et plus. Vie en petits groupes et participation aux activités quotidiennes dans un milieu normalisant.',
    'prog.reve.link': 'En savoir plus →',

    // Testimonials
    'testimonials.label': 'Témoignages',
    'testimonials.title': 'Ce que les parents disent',
    'test.1': 'Le seul endroit fiable où j\'accepte de laisser mon enfant autiste. Comme ils sont spécialisés en autisme, ils peuvent mieux intervenir avec notre enfant.',
    'test.1.author': '— Parent membre',
    'test.2': 'Un moment dans l\'année où on laisse son rôle de mère à quelqu\'un d\'autre pour redevenir un parent régulier ou, juste une femme. Tout cela en toute sécurité.',
    'test.2.author': '— Mère d\'un campeur',
    'test.3': 'Un répit essentiel, une bulle d\'oxygène dans nos vies. C\'est le seul endroit où notre fils se sent aussi à l\'aise qu\'à la maison.',
    'test.3.author': '— Isabelle, mère de Louis-Philippe',

    // Calendar
    'calendar.label': 'Calendrier et coûts',
    'calendar.title': 'Tarifs 2025-2026',
    'calendar.lead': 'Grâce à la générosité des donateurs de la Fondation Emergo et aux subventions accordées, Répit Emergo offre chaque année aux familles des tarifs avantageux, représentant environ 20 % du coût réel, qui s\'élève à un minimum de 650 $ par nuitée. Cet appui financier, combiné au travail dévoué de notre équipe, permet à vos enfants de vivre une expérience enrichissante, sécuritaire et adaptée, sans que le coût ne devienne un obstacle à votre participation.',
    'calendar.summer': 'Camps d\'été 2026',
    'calendar.school': 'Répits scolaires 2025-2026',
    'calendar.discount': 'Il y a un rabais de 25 % pour un deuxième enfant et de 50 % pour un troisième enfant.<br><strong>N.B.</strong> Ce tarif s\'applique si le paiement provient directement des familles. Non applicable pour tous les paiements provenant d\'une autre source.',

    // History
    'history.label': 'Notre histoire',
    'history.title': '50 ans de dévouement',
    'history.lead': 'De la fondation du premier camp pour personnes autistes au Québec en 1976 à aujourd\'hui, Répit Emergo n\'a cessé de grandir pour mieux servir les familles.',

    // Team
    'team.label': 'Notre équipe',
    'team.title': 'Les personnes derrière la mission',
    'team.permanent': 'Équipe de la permanence',
    'team.ca': 'Conseil d\'administration 2025-2026',

    // Foundation
    'foundation.label': 'Fondation Emergo',
    'foundation.title': 'Soutenir la mission',
    'foundation.text': 'Créée en 2011, la Fondation Emergo assure la pérennité financière de Répit Emergo par la collecte de fonds et le développement de partenariats.',
    'foundation.cta': 'Faire un don',

    // Contact
    'contact.label': 'Nous joindre',
    'contact.title': 'Contactez-nous',
    'contact.address': '1862, rue Jolicoeur\nMontréal (Québec) H4E 1X2',
    'contact.phone': '514 931-2882',
    'contact.email': 'info@repitemergo.com',
    'contact.hours': 'Lundi au vendredi, 9h à 17h',

    // Mission ACQ + Fonctionnement
    'mission.acq.title': 'Camp certifié ACQ',
    'mission.acq.text': 'Répit Emergo est un camp certifié par l\'Association des camps du Québec (ACQ), un gage de qualité et de sécurité pour les familles.',
    'ops.label': 'Notre fonctionnement',
    'ops.title': 'Un encadrement sécuritaire et personnalisé',
    'ops.text': 'Nous formons des équipes de quatre accompagnateurs pour trois participants, avec des rotations toutes les trois heures. Logé et nourri dans des bâtiments modernes, en pleine nature, avec des accompagnateurs qui sont là pour les bonnes raisons.',
    'ops.ratio': 'Ratio 1:1 à 1:3',
    'ops.lodging': 'Logé et nourri',
    'ops.rotation': 'Rotations aux 3h',

    // Instagram
    'instagram.label': 'Suivez-nous',
    'instagram.title': 'Répit Emergo sur Instagram',
    'instagram.text': 'Découvrez notre quotidien, nos activités et les sourires de nos campeurs!',
    'instagram.btn': 'Suivre sur Instagram',

    // Un rêve à réaliser page
    'reve.label': 'Programme',
    'reve.title': 'Un rêve à réaliser',
    'reve.subtitle': 'Une expérience de vacances inclusive pour les adultes autistes!',
    'reve.chip.ratio': 'Ratio 1:3',
    'reve.chip.stay': 'Séjours de 10 nuits',
    'reve.chip.participants': '9 participants par séjour',
    'reve.chip.age': '18 ans et plus',
    'reve.prog.label': 'Le programme',
    'reve.prog.title': 'Des vacances adaptées, un milieu de vie enrichissant',
    'reve.prog.text1': 'Les participants profitent de séjours de 10 nuits dans un milieu chaleureux, de type vacances, où ils peuvent créer des amitiés, développer leur confiance et participer à la vie quotidienne à leur rythme.',
    'reve.prog.text2': 'Les défis du quotidien sont abordés dans le respect du rythme, des intérêts et des besoins de chaque personne.',
    'reve.prog.text3': 'Avec un encadrement attentif (3 accompagnateurs pour 9 participants), le programme offre une expérience sécuritaire et enrichissante où chacun peut s\'épanouir.',
    'reve.how.title': 'Comment ça fonctionne',
    'reve.how.stay': 'Séjours de 10 nuits (avec l\'option d\'un séjour de 5 nuits)',
    'reve.how.daily': 'Les journées combinent activités de groupe, temps libre et participation à la vie quotidienne',
    'reve.how.group': '9 participants par séjour',
    'reve.how.ratio': 'Encadrement 1:3 — 3 accompagnateurs pour 9 participants',
    'reve.act.label': 'Les activités',
    'reve.act.title': 'Un quotidien riche et stimulant',
    'reve.act.cooking': 'Ateliers de cuisine et préparation de repas',
    'reve.act.hiking': 'Randonnées et activités en plein air',
    'reve.act.games': 'Jeux de société',
    'reve.act.themes': 'Soirées thématiques',
    'reve.act.outings': 'Sorties dans la communauté',
    'reve.act.swimming': 'Baignade et activités aquatiques',
    'reve.act.special': 'Activités spéciales',
    'reve.act.more': 'Et bien plus encore!',
    'reve.why.label': 'Les bienfaits',
    'reve.why.title': 'Pourquoi choisir Emergo?',
    'reve.why.friendship': 'Amitié',
    'reve.why.friendship.desc': 'Se faire de nouveaux amis et partager des expériences mémorables.',
    'reve.why.communication': 'Communication',
    'reve.why.communication.desc': 'Pratiquer ses habiletés sociales et de communication dans un environnement bienveillant.',
    'reve.why.adventure': 'Aventure',
    'reve.why.adventure.desc': 'Profiter de la nature, de la baignade, des feux de camp et des activités en plein air.',
    'reve.why.independence': 'Autonomie',
    'reve.why.independence.desc': 'Développer sa confiance et son autonomie dans la vie quotidienne.',
    'reve.test.label': 'Témoignages',
    'reve.test.title': 'Ce qu\'ils en disent',
    'reve.test.1.text': 'Une merveilleuse opportunité pour notre fils autiste de socialiser et vivre quelque chose de différent de sa vie à la maison. Il a aussi la chance de passer du temps avec d\'autres personnes de son âge.',
    'reve.test.1.author': '— Un parent',
    'reve.test.2.text': 'Ça fait quatre ans que je vais au Camp Emergo. Je retrouve mes amis et les accompagnateurs que j\'aime [...]. Je me sens bien à Emergo!',
    'reve.test.2.author': '— Un participant',
    'reve.villa.label': 'Le lieu',
    'reve.villa.title': 'La Villa Marie-Rose',
    'reve.villa.text': 'Nichée en pleine nature dans les Laurentides, la Villa Marie-Rose offre un cadre paisible et moderne pour nos séjours. Les participants sont logés et nourris dans des installations confortables, entourés de lac, de forêt et d\'espaces pour les activités extérieures.',
    'reve.who.title': 'À qui s\'adresse le programme?',
    'reve.who.1': 'Personnes autistes autonomes ou semi-autonomes',
    'reve.who.2': '18 ans et plus',
    'reve.who.3': 'Motivées à vivre en groupe, participer aux activités et partager des expériences!',
    'reve.cta.title': 'Inscriptions ouvertes!',
    'reve.cta.text': 'Pour les détails complets, les dates et les tarifs, contactez-nous.',
    'reve.cta.btn': 'Nous joindre',
    'reve.cta.calendar': 'Voir le calendrier et les coûts →',
    'reve.50.badge': '50 ans d\'expérience',
    'reve.50.text': 'Répit Emergo soutient les personnes autistes et leurs familles depuis 1976. Nos programmes offrent des expériences de vacances sécuritaires et enrichissantes pour les personnes sur le spectre de l\'autisme.',

    // CTA
    'cta.title': 'Comment devenir membre?',
    'cta.text': 'Notre objectif est de fournir un répit de qualité aux familles, en proposant aux personnes autistes des expériences enrichissantes dans nos camps de vacances, que ce soit durant les fins de semaine ou l\'été.',
    'cta.contact.title': 'Écrivez-nous pour commencer!',
    'cta.contact.text': 'Envoyez un courriel à l\'adresse ci-dessous pour obtenir le formulaire d\'adhésion et toute l\'information nécessaire.',

    // Footer
    'footer.desc': 'Service de répit spécialisé en autisme depuis 1976. Un environnement sécuritaire, stimulant et adapté pour les personnes autistes de tous âges.',
    'footer.links': 'Liens rapides',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-nous',
    'footer.copyright': '© 2026 Répit Emergo. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.neq': 'NEQ : 891299398RR0001',

    // Membership steps
    'member.label': 'Devenir membre',
    'member.intro': 'En plus des familles qui vivent avec des personnes autistes ou ayant un autre trouble envahissant du développement, Emergo accueille parmi ses membres toutes les personnes et tous les parents, amis, professionnels, intervenants ou organismes intéressés par l\'autisme et ses répercussions sur la famille, l\'entourage et la société.',
    'member.steps.title': 'Trois étapes pour compléter l\'inscription',
    'member.step1.title': '1. Adhésion',
    'member.step1.text': 'Pour avoir accès à nos services, il faut être membre de Répit Emergo. La cotisation annuelle est de 35 $. Une fois membre, vous aurez accès à toutes nos communications et pourrez procéder à l\'inscription aux différentes sessions de répit.',
    'member.step2.title': '2. Dossier du participant',
    'member.step2.text': 'Pour procéder à l\'ouverture du dossier de votre enfant chez Emergo, vous devez remplir le dossier du participant, qui vous sera transmis par courriel.',
    'member.step3.title': '3. Formulaire d\'inscription',
    'member.step3.text': 'Le formulaire d\'inscription vous sera envoyé par courriel suite à la réception du dossier et des frais d\'adhésion.',

    // Jobs
    'jobs.label': 'Emplois étudiants',
    'jobs.title': 'Rejoignez notre équipe!',
    'jobs.lead': 'Vous êtes étudiant·e·s et cherchez un travail à fort impact social? Notre mission chez Emergo est d\'offrir aux personnes autistes une expérience de camp inoubliable. Venez nous aider à la réaliser!',
    'jobs.expertise.title': 'Expertise reconnue',
    'jobs.expertise.text': 'Rejoignez la référence en matière d\'accueil et d\'accompagnement des personnes autistes. Vous serez soutenu par une organisation qui transforme des vies depuis 50 ans.',
    'jobs.adventure.title': 'Sortir de sa zone de confort',
    'jobs.adventure.text': 'Chaque jour est une nouvelle aventure. Vous serez guidé par une équipe dévouée qui fera de chaque moment une expérience mémorable en pleine nature.',
    'jobs.environment.title': 'Un environnement unique',
    'jobs.environment.text': 'Contribuez à une cause importante. Découvrez la richesse de l\'entraide et évoluez dans un environnement où chacun compte!',
    'jobs.summer.title': 'Répits estivaux (juin à août)',
    'jobs.summer.emergence': 'Programme Émergence — 50 postes',
    'jobs.summer.emergence.desc': '5 séjours de 10 jours au Camp de Grandpré (Otterburn Park). Formation obligatoire du 1 au 5 juin et 10-11 juin. Logé et nourri sur le site. Minimum 4 jours de congé entre les séjours.',
    'jobs.summer.salary': 'Salaire brut été complet : plus de 7 400 $',
    'jobs.summer.salary.detail': 'Formation (586$) + 5 séjours (6 381$) + veilles (100$) + jours fériés + bonus été complet (300$)',
    'jobs.summer.reve': 'Un Rêve à Réaliser — 9 postes',
    'jobs.summer.reve.desc': '4 séjours de 10 jours à la Villa Marie-Rose (Val-des-Lacs). Dont 1 séjour anglophone. Logé et nourri sur le site.',
    'jobs.school.title': 'Répits scolaires (sept. à mai)',
    'jobs.school.desc': 'Des fins de semaine de répit au Camp de Grandpré. Environ 20 participants et une trentaine de staff par répit. Transport fourni depuis nos bureaux à Montréal. Logé et nourri dans des chalets modernes.',
    'jobs.school.salary': 'Salaire total : jusqu\'à 9 409 $ pour toute l\'année',
    'jobs.school.salary.detail': '2 nuits (310$), 3 nuits (428$), Noël (725$). Bonus de 175$ pour 8 répits + 30$/répit supplémentaire.',
    'jobs.school.flexible': 'Horaire flexible : choisissez vos fins de semaine selon vos disponibilités. Conciliez facilement travail et études!',
    'jobs.positions.title': 'Postes disponibles en été',
    'jobs.perk1.title': 'Bourses d\'études',
    'jobs.perk1.text': 'La Fondation Emergo offre des bourses de 1 000 $ à 1 750 $ aux employés assidus dans leurs études et leurs fonctions. 20 000 $ distribués en 2024-2025!',
    'jobs.perk2.title': 'Heures reconnues',
    'jobs.perk2.text': 'Possibilité de faire reconnaître vos heures travaillées pour monter d\'échelon salarial dans les organismes publics, ou pour un cours/stage.',
    'jobs.perk3.title': 'Programme de récompense',
    'jobs.perk3.text': 'Recevez un chèque-cadeau pour chaque candidat recommandé qui rejoint l\'équipe. Tous les domaines d\'études sont les bienvenus!',
    'jobs.testimonials.title': 'Ce que notre staff dit',
    'jobs.test1': 'Emergo est bien plus qu\'un simple milieu de travail, mais un milieu de vie où chacun peut s\'épanouir. J\'y ai gagné et développé plusieurs qualités interpersonnelles : le sens de la responsabilité, le souci du détail, le travail d\'équipe, la communication et le leadership.',
    'jobs.test2': 'J\'avais le goût d\'en apprendre plus sur la relation d\'aide et l\'intervention. J\'ai décidé de changer de programme et je suis allée étudier en psychoéducation à l\'Université de Montréal. Je m\'épanouis en ce moment, autant dans mon travail ici que dans mes études.',
    'jobs.apply.title': 'Emplois étudiants — Prêt·e à rejoindre l\'équipe?',
    'jobs.apply.text': 'Nous recrutons des accompagnateur·rice·s! Découvrez tous les postes disponibles, la journée type, les bourses d\'études et comment postuler.',
    'jobs.apply.btn': 'Postuler — recrutement@repitemergo.com',
    'jobs.apply.details': 'Voir tous les détails',

    // Emplois page (ejobs.*)
    'ejobs.label': 'Emplois étudiants',
    'ejobs.hero.title': 'Accompagnateur·rice·s de personnes autistes',
    'ejobs.hero.lead': 'Vous êtes étudiant·e·s et cherchez un travail à fort impact social? Notre mission chez Emergo est d\'offrir aux personnes autistes une expérience de camp inoubliable. Venez nous aider à la réaliser!',
    'ejobs.hero.sub': 'Répit Emergo est l\'endroit où votre énergie, votre passion et votre empathie seront pleinement valorisées. Nous accueillons des accompagnateur·rice·s de toutes les disciplines académiques!',
    'ejobs.hero.cta': 'Postuler maintenant',
    'ejobs.hero.cta2': 'Voir les postes',
    'ejobs.expertise.title': 'Expertise reconnue',
    'ejobs.expertise.text': 'Rejoignez la référence en matière d\'accueil et d\'accompagnement des personnes autistes. Vous serez soutenu par une organisation qui transforme des vies depuis 50 ans.',
    'ejobs.adventure.title': 'Sortir de sa zone de confort',
    'ejobs.adventure.text': 'Chaque jour est une nouvelle aventure. Vous serez guidé par une équipe dévouée qui fera de chaque moment une expérience mémorable en pleine nature.',
    'ejobs.environment.title': 'Un environnement unique',
    'ejobs.environment.text': 'Contribuez à une cause importante. Découvrez la richesse de l\'entraide et évoluez dans un environnement où chacun compte!',
    'ejobs.summer.label': 'Été 2026',
    'ejobs.summer.title': 'Les répits estivaux (juin à août)',
    'ejobs.summer.dates.title': 'Dates des séjours 2026 (5 séjours de 10 jours)',
    'ejobs.summer.conditions': 'Les accompagnateurs dorment sur le site et disposent d\'au moins 4 jours de congé entre les séjours, 3 heures de pause par jour et 2 soirées « off » par séjour.',
    'ejobs.school.label': 'Année scolaire',
    'ejobs.school.title': 'Répits scolaires (septembre à mai)',
    'ejobs.school.lead': 'Des fins de semaine de répit au Camp de Grandpré, en pleine nature. Horaire au choix — conciliez vos études!',
    'ejobs.school.logistics.title': 'Logistique',
    'ejobs.schedule.label': 'Journée type',
    'ejobs.schedule.title': 'Le samedi d\'un répit scolaire',
    'ejobs.teams.label': 'Le travail',
    'ejobs.teams.title': 'Les équipes et le fonctionnement',
    'ejobs.perks.label': 'Avantages',
    'ejobs.perks.title': 'Bien plus qu\'un emploi d\'été',
    'ejobs.testimonials.label': 'Témoignages',
    'ejobs.testimonials.title': 'Ce que notre staff dit',
    'ejobs.scholarships.label': 'Bourses d\'études',
    'ejobs.scholarships.title': 'Programme de bourses de la Fondation Emergo',
    'ejobs.fields.label': 'Tous les domaines',
    'ejobs.fields.title': 'Domaines d\'études de notre équipe',
    'ejobs.apply.label': 'Postuler',
    'ejobs.apply.title': 'Comment postuler?',

    // Contact labels
    'contact.address.label': 'Adresse',
    'contact.phone.label': 'Téléphone',
    'contact.email.label': 'Courriel',
    'contact.hours.label': 'Heures',
    'contact.team': 'Équipe de la permanence',

    // Team titles (contact section)
    'team.pierre.title': 'Directeur général',
    'team.eric.title': 'Directeur adjoint — Répits',
    'team.ameyo.title': 'Agente administrative',
    'team.mariealice.title': 'Coordonnatrice répits',

    // Team roles (team grid)
    'team.pierre.role': 'Directeur général',
    'team.eric.role': 'Directeur adjoint, Répits',
    'team.ameyo.role': 'Agente administrative',
    'team.mariealice.role': 'Coordonnatrice répits',

    // Board of directors
    'board.president': 'Président',
    'board.vicepresident': 'Vice-présidente',
    'board.secretary': 'Secrétaire',
    'board.treasurer': 'Trésorière',
    'board.directorf': 'Administratrice',
    'board.directorm': 'Administrateur',

    // Calendar chips
    'cal.allages': 'Tous âges',
    'cal.ratio.emergence': 'Ratio 1:1 ou 1:2',
    'cal.price.9nights': '9 nuits — 1 485 $',
    'cal.age.adaptatou': '7 à 17 ans',
    'cal.ratio.adaptatou': 'Ratio 1:2',
    'cal.age.reve': '16 ans et +',
    'cal.autonomous': 'Autonomes',
    'cal.price.10nights': '10 nuits — 1 640 $',
    'cal.demi.title': 'Demi-séjours disponibles :',

    // School calendar
    'cal.legend.2nights': '2 nuits — 315 $',
    'cal.legend.3nights': '3 nuits — 465 $',
    'cal.legend.christmas': 'Noël — 5 nuits — 815 $',
    'cal.school.footer': 'Vendredi 18h au dimanche 16h (lundi 16h pour les congés fériés)',

    // Foundation
    'foundation.detail': 'L\'autisme ne donne pas de répit... Emergo, oui! Grâce à votre générosité, les familles reçoivent le soutien essentiel dont elles ont besoin. Nos tarifs ne représentent que 20 % du coût réel — la différence provient de vos dons et des subventions.',
    'foundation.chart.sources': 'Sources',
    'foundation.chart.revenue': 'de revenus',
    'foundation.chart.gov': 'Subventions gouvernementales',
    'foundation.chart.donations': 'Collecte de fonds et dons',
    'foundation.chart.fees': 'Frais de séjour des familles',

    // Jobs salary cards
    'jobs.summer.period': 'Été (juin-août)',
    'jobs.summer.salaryline': 'Salaire brut été complet — 50+ postes',
    'jobs.summer.lodging': 'Logé et nourri au Camp de Grandpré',
    'jobs.school.period': 'Année scolaire (sept-mai)',
    'jobs.school.salaryline': 'Salaire total pour tous les répits',
    'jobs.school.flexline': 'Horaire flexible — conciliez études et travail',

    // Staff banner & photos
    'staff.banner.tag': 'Notre équipe',
    'staff.banner.text': 'Des centaines d\'accompagnateur·rice·s dévoué·e·s depuis 50 ans',
    'photos.album': 'Voir l\'album photo',
    'album.cta.title': '50 ans de souvenirs',
    'album.cta.text': 'Des milliers de sourires, d\'aventures et de moments magiques. Parcourez notre album photo!',

    // Timeline
    'history.1976': 'Fondation du Camp Emergo, premier camp d\'été pour personnes autistes au Québec, par des parents de l\'Association des enfants autistiques du Québec.',
    'history.1991': 'Début des répits scolaires — des fins de semaine de répit tout au long de l\'année scolaire.',
    'history.1994': 'Reconnaissance de Santé et Bien-être Canada dans le cadre du Programme d\'action communautaire pour les enfants (PACE).',
    'history.1997': 'Enregistrement comme organisme à but non lucratif autonome.',
    'history.2002': 'Lancement des programmes Émergence (socialisation), Adaptatou (intégration) et Un rêve à réaliser (autonomie) en partenariat avec le Camp Mariste.',
    'history.2006': 'Lancement du programme iDÉFIx pour l\'encadrement soutenu des personnes avec troubles graves du comportement.',
    'history.2011': 'Création de la Fondation Emergo pour assurer la pérennité financière de l\'organisme.',
    'history.2017': 'Mise en place des répits urbains rue Jolicoeur et des répits autonomes à la Villa de l\'Île-Perrot.',
    'history.2024': 'Nouvelle image de marque reflétant les deux visages d\'Emergo : le répit du proche aidant et la joie de la personne autiste en camp.',
    'history.2026': 'Répit Emergo célèbre 50 ans de dévouement envers les familles. Cinquante années rendues possibles grâce à vous toutes et tous.',
  },
  en: {
    // Nav
    'nav.services': 'Our Services',
    'nav.programs': 'Programs',
    'nav.calendar': 'Calendar & Costs',
    'nav.about': 'About',
    'nav.history': 'Our History',
    'nav.team': 'Our Team',
    'nav.foundation': 'Foundation',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Contact Us',
    'nav.donate': 'Donate',
    'nav.member': 'Become a Member',
    'nav.lang': 'FR',

    // Hero
    'hero.badge': '50 Years of Respite — 1976-2026',
    'hero.title1': 'Autism gives',
    'hero.title2': 'no respite...',
    'hero.title3': 'Emergo does!',
    'hero.lead': 'You carry a lot. The constant worry, the deep fatigue, the doubt that anyone else could truly understand your child. For 50 years, that\'s exactly the reality that drives us — so that you can, finally, breathe.',
    'hero.cta1': 'Become a Member',
    'hero.cta2': 'Discover Our Programs',

    // Stats
    'stat.families': 'member families',
    'stat.nights': 'respite nights per year',
    'stat.years': 'years of experience',
    'stat.ratio': 'support worker ratio',

    // Mission
    'mission.label': 'Our Mission',
    'mission.title': 'Essential respite for families',
    'mission.text': 'To offer respite services to families living with individuals with autism spectrum disorder by welcoming them in a safe, stimulating outdoor environment adapted to their needs, promoting the maintenance or development of their abilities.',
    'mission.vision.title': 'Our Vision',
    'mission.vision.text': 'A leader in its field, Répit Emergo is recognized for the quality of its services, its personalized supervision and its adapted programming.',
    'mission.values.title': 'Our Values',
    'mission.values.text': 'Client satisfaction, respect, pursuit of excellence, transparency, integrity, loyalty and confidentiality.',
    'mission.engagement.title': 'Our Commitment',
    'mission.engagement.text': 'Ongoing interaction with families, efficient resource management and active pursuit of funding.',

    // Programs
    'programs.label': 'Our Programs',
    'programs.title': 'Stays adapted to every need',
    'programs.lead': 'Quebec\'s first respite service in a vacation camp format in the heart of nature — four specialized programs welcoming autistic individuals of all ages and autonomy levels.',
    'prog.emergence.name': 'Émergence',
    'prog.emergence.tag': 'Socialization',
    'prog.emergence.ratio': 'Ratio 1:1 to 1:2',
    'prog.emergence.desc': 'Highly individualized program for autistic participants of all ages with lower autonomy levels. Varied and stimulating activities in sub-groups of four.',
    'prog.idefix.name': 'iDÉFIx',
    'prog.idefix.tag': 'Intensive support',
    'prog.idefix.ratio': 'Ratio 1:1',
    'prog.idefix.desc': 'For autistic individuals requiring close supervision due to significant behavioral challenges.',
    'prog.adaptatou.name': 'Adaptatou',
    'prog.adaptatou.tag': 'Integration',
    'prog.adaptatou.ratio': 'Ratio 1:2',
    'prog.adaptatou.desc': 'Focused on autonomy for children aged 6 to 17 with high socialization skills. Fun, creative and discovery activities.',
    'prog.reve.name': 'Un rêve à réaliser',
    'prog.reve.tag': 'Autonomy',
    'prog.reve.ratio': 'Ratio 1:3',
    'prog.reve.desc': 'For autonomous autistic individuals aged 16 and over. Living in small groups and participating in daily activities in a normalizing environment.',
    'prog.reve.link': 'Learn more →',

    // Trust
    'trust.label': 'We understand',
    'trust.title': 'You\'re asking yourself these questions. That\'s normal.',
    'trust.lead': 'Parents often reach out to us when exhaustion outweighs doubt. We know this, because we\'ve been walking alongside them for 50 years.',
    'trust.q1': '"Will my child be okay without me, with strangers?"',
    'trust.a1': 'Every person is welcomed as they are. Our counselors are trained to decode, understand and adapt to your child\'s unique needs — regardless of their level of autonomy.',
    'trust.q2': '"Will they be accepted, no matter their challenges?"',
    'trust.a2': 'Unconditionally. We welcome people of all ages, across the entire autism spectrum. It\'s been our specialization since 1976, and it\'s what makes us unique.',
    'trust.q3': '"Who are these people? What do they know about autism?"',
    'trust.a3': 'Quebec\'s first specialized autism respite service. 50 years of expertise, hundreds of trained counselors, a board of directors made up of parents who live this reality every day.',
    'trust.promise': 'Our promise is simple: to relieve families. Because autism doesn\'t give respite — but Emergo does.',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What parents say',
    'test.1': 'The only reliable place where I agree to leave my autistic child. Since they specialize in autism, they can better support our child.',
    'test.1.author': '— Member parent',
    'test.2': 'A moment in the year where I can set aside my role as mother and just be a regular parent, or simply a woman. All in complete safety.',
    'test.2.author': '— Mother of a camper',
    'test.3': 'An essential respite, a breath of fresh air in our lives. The only place where our son feels as comfortable as at home.',
    'test.3.author': '— Isabelle, mother of Louis-Philippe',

    // Calendar
    'calendar.label': 'Calendar & Costs',
    'calendar.title': '2025-2026 Rates',
    'calendar.lead': 'Thanks to the generosity of Emergo Foundation donors and the grants received, Répit Emergo offers families affordable rates each year, representing approximately 20% of the actual cost, which amounts to a minimum of $650 per night. This financial support, combined with the dedicated work of our team, allows your children to enjoy an enriching, safe and adapted experience, without cost becoming a barrier to your participation.',
    'calendar.summer': 'Summer Camps 2026',
    'calendar.school': 'School Year Respite 2025-2026',
    'calendar.discount': 'There is a 25% discount for a second child and 50% for a third child.<br><strong>N.B.</strong> This rate applies if payment comes directly from families. Not applicable for all payments from another source.',

    // History
    'history.label': 'Our History',
    'history.title': '50 years of dedication',
    'history.lead': 'From the founding of the first camp for autistic individuals in Quebec in 1976 to today, Répit Emergo has never stopped growing to better serve families.',

    // Team
    'team.label': 'Our Team',
    'team.title': 'The people behind the mission',
    'team.permanent': 'Permanent Staff',
    'team.ca': 'Board of Directors 2025-2026',

    // Foundation
    'foundation.label': 'Emergo Foundation',
    'foundation.title': 'Your donations relieve families',
    'foundation.text': 'Living with an autistic person means the weight of daily care, deep fatigue, sometimes isolation. To avoid burnout — or even psychological distress — these families need to be able to entrust all care to a specialized third party. That\'s exactly what you make possible.',
    'foundation.cta': 'Make a Donation',

    // Contact
    'contact.label': 'Contact Us',
    'contact.title': 'Get in Touch',
    'contact.address': '1862 Jolicoeur Street\nMontreal, Quebec H4E 1X2',
    'contact.phone': '514 931-2882',
    'contact.email': 'info@repitemergo.com',
    'contact.hours': 'Monday to Friday, 9 AM to 5 PM',

    // Mission ACQ + Operations
    'mission.acq.title': 'ACQ Certified Camp',
    'mission.acq.text': 'Répit Emergo is a camp certified by the Association des camps du Québec (ACQ), a mark of quality and safety for families.',
    'ops.label': 'How We Operate',
    'ops.title': 'Safe and personalized supervision',
    'ops.text': 'We form teams of four counselors for three participants, with rotations every three hours. Lodged and fed in modern buildings, in nature, with counselors who are there for the right reasons.',
    'ops.ratio': 'Ratio 1:1 to 1:3',
    'ops.lodging': 'Room and board',
    'ops.rotation': 'Rotations every 3h',

    // Instagram
    'instagram.label': 'Follow Us',
    'instagram.title': 'Répit Emergo on Instagram',
    'instagram.text': 'Discover our daily life, activities and the smiles of our campers!',
    'instagram.btn': 'Follow on Instagram',

    // Un rêve à réaliser page
    'reve.label': 'Program',
    'reve.title': 'A Dream to Achieve',
    'reve.subtitle': 'An inclusive vacation experience for autistic adults!',
    'reve.chip.ratio': 'Ratio 1:3',
    'reve.chip.stay': '10-night stays',
    'reve.chip.participants': '9 participants per stay',
    'reve.chip.age': '18 years and older',
    'reve.prog.label': 'The program',
    'reve.prog.title': 'Adapted vacations, an enriching living environment',
    'reve.prog.text1': 'Participants enjoy 10-night stays in a welcoming, holiday-like environment where they can build friendships, grow in confidence, and take part in daily life in their own way.',
    'reve.prog.text2': 'Everyday challenges are approached with respect for each person\'s rhythm, interests, and needs.',
    'reve.prog.text3': 'With attentive supervision (3 staff members for 9 participants), the program offers a safe and enriching experience where everyone can thrive.',
    'reve.how.title': 'How it works',
    'reve.how.stay': '10-night stays (with the option of a 5-night stay)',
    'reve.how.daily': 'Days combine group activities, free time, and participation in daily living',
    'reve.how.group': '9 participants per stay',
    'reve.how.ratio': '1:3 supervision — 3 counselors for 9 participants',
    'reve.act.label': 'Activities',
    'reve.act.title': 'A rich and stimulating daily life',
    'reve.act.cooking': 'Cooking workshops and meal preparation',
    'reve.act.hiking': 'Hiking and outdoor activities',
    'reve.act.games': 'Board games',
    'reve.act.themes': 'Theme nights',
    'reve.act.outings': 'Community outings',
    'reve.act.swimming': 'Swimming and water activities',
    'reve.act.special': 'Special activities',
    'reve.act.more': 'And much more!',
    'reve.why.label': 'Benefits',
    'reve.why.title': 'Why choose Emergo?',
    'reve.why.friendship': 'Friendship',
    'reve.why.friendship.desc': 'Make new friends and share memorable experiences.',
    'reve.why.communication': 'Communication',
    'reve.why.communication.desc': 'Practice social and communication skills in a supportive environment.',
    'reve.why.adventure': 'Adventure',
    'reve.why.adventure.desc': 'Enjoy nature, swimming, campfires, and outdoor activities.',
    'reve.why.independence': 'Independence',
    'reve.why.independence.desc': 'Develop confidence and autonomy in daily life.',
    'reve.test.label': 'Testimonials',
    'reve.test.title': 'What they say',
    'reve.test.1.text': 'A wonderful opportunity for our autistic son to socialize and experience something different from his life at home. He also has the chance to spend time with others in his age group.',
    'reve.test.1.author': '— A parent',
    'reve.test.2.text': 'I\'ve been going to Camp Emergo for four years. I get to see my friends again and staff members I like [...]. I feel good at Emergo!',
    'reve.test.2.author': '— A participant',
    'reve.villa.label': 'The location',
    'reve.villa.title': 'Villa Marie-Rose',
    'reve.villa.text': 'Nestled in nature in the Laurentians, Villa Marie-Rose offers a peaceful and modern setting for our stays. Participants are lodged and fed in comfortable facilities, surrounded by lake, forest and outdoor activity spaces.',
    'reve.who.title': 'Who is it for?',
    'reve.who.1': 'Independent or semi-independent autistic individuals',
    'reve.who.2': '18 years and older',
    'reve.who.3': 'Motivated to live in a group setting, participate in activities, and share experiences!',
    'reve.cta.title': 'Registration open!',
    'reve.cta.text': 'For full details, dates and pricing, contact us.',
    'reve.cta.btn': 'Contact us',
    'reve.cta.calendar': 'View calendar and costs →',
    'reve.50.badge': '50 years of experience',
    'reve.50.text': 'Répit Emergo has been supporting autistic individuals and their families since 1976. Our programs create safe, enriching vacation experiences for people on the autism spectrum.',

    // CTA
    'cta.title': 'How to become a member?',
    'cta.text': 'Our goal is to provide quality respite to families by offering autistic individuals enriching experiences at our vacation camps, whether during weekends or summer.',
    'cta.contact.title': 'Write to us to get started!',
    'cta.contact.text': 'Send an email to the address below to receive the membership form and all necessary information.',

    // Footer
    'footer.desc': 'Specialized autism respite service since 1976. A safe, stimulating and adapted environment for autistic individuals of all ages.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2026 Répit Emergo. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.neq': 'NEQ: 891299398RR0001',

    // Membership steps
    'member.label': 'Become a Member',
    'member.intro': 'In addition to families living with autistic individuals or those with other pervasive developmental disorders, Emergo welcomes among its members all people including parents, friends, professionals, caregivers or organizations interested in autism and its impact on families, loved ones and society.',
    'member.steps.title': 'Three steps to complete registration',
    'member.step1.title': '1. Membership',
    'member.step1.text': 'To access our services, you must be a member of Répit Emergo. The annual membership fee is $35. Once a member, you will have access to all our communications and can register for the various respite sessions.',
    'member.step2.title': '2. Participant File',
    'member.step2.text': 'To open your child\'s file at Emergo, you must complete the participant file, which will be sent to you by email.',
    'member.step3.title': '3. Registration Form',
    'member.step3.text': 'The registration form will be sent by email upon receipt of the file and membership fees.',

    // Jobs
    'jobs.label': 'Student Jobs',
    'jobs.title': 'A story where you could be the hero',
    'jobs.lead': 'Working at Emergo can be a shock. Because communicating with an autistic person is different, because it takes energy, creativity and heart. But it\'s also one of the most transformative experiences of a lifetime. No specialization needed — if it speaks to you, we\'ll teach you.',
    'jobs.expertise.title': 'Help relieve families',
    'jobs.expertise.text': 'You\'ll give families a well-deserved break. Your responsibilities: the well-being and safety of your participant, in a fun outdoor setting. You\'ll be supported by 50 years of expertise.',
    'jobs.adventure.title': 'Accept to grow',
    'jobs.adventure.text': 'You\'ll need to revisit your perceptions, show creativity and patience. But you\'ll never be alone — a team will always be there to help when you step outside your comfort zone.',
    'jobs.environment.title': 'A reciprocal commitment',
    'jobs.environment.text': 'We ask for reliability and kindness. In return, we commit to giving you a unique experience, connecting you with people who share your values, and building skills that will serve you for life.',
    'jobs.summer.title': 'Summer respite (June to August)',
    'jobs.summer.emergence': 'Émergence Program — 50 positions',
    'jobs.summer.emergence.desc': '5 stays of 10 days at Camp de Grandpré (Otterburn Park). Mandatory training June 1-5 and June 10-11. Room and board provided. Minimum 4 days off between stays.',
    'jobs.summer.salary': 'Total gross salary for full summer: over $7,400',
    'jobs.summer.salary.detail': 'Training ($586) + 5 stays ($6,381) + night shifts ($100) + holidays + full summer bonus ($300)',
    'jobs.summer.reve': 'Un Rêve à Réaliser — 9 positions',
    'jobs.summer.reve.desc': '4 stays of 10 days at Villa Marie-Rose (Val-des-Lacs). Including 1 English-speaking stay. Room and board provided.',
    'jobs.school.title': 'School year respite (Sept. to May)',
    'jobs.school.desc': 'Weekend respite stays at Camp de Grandpré. About 20 participants and thirty staff per respite. Transportation provided from our Montreal office. Room and board in modern chalets.',
    'jobs.school.salary': 'Total salary: up to $9,409 for the full year',
    'jobs.school.salary.detail': '2 nights ($310), 3 nights ($428), Christmas ($725). $175 bonus for 8 respites + $30/additional respite.',
    'jobs.school.flexible': 'Flexible schedule: choose your weekends based on your availability. Easily balance work and studies!',
    'jobs.positions.title': 'Available summer positions',
    'jobs.perk1.title': 'Scholarships',
    'jobs.perk1.text': 'The Emergo Foundation offers scholarships from $1,000 to $1,750 to employees dedicated to their studies and work. $20,000 distributed in 2024-2025!',
    'jobs.perk2.title': 'Recognized Hours',
    'jobs.perk2.text': 'Possibility to have your work hours recognized to advance salary scales in public organizations, or for a course/internship.',
    'jobs.perk3.title': 'Referral Program',
    'jobs.perk3.text': 'Receive a gift card for every recommended candidate who joins the team. All fields of study are welcome!',
    'jobs.testimonials.title': 'What our staff says',
    'jobs.test1': 'Emergo is much more than a workplace — it\'s a living environment where everyone can thrive. I gained and developed many interpersonal skills: responsibility, attention to detail, teamwork, communication and leadership.',
    'jobs.test2': 'I wanted to learn more about counseling and intervention. I decided to change programs and went to study psychoeducation at Université de Montréal. I\'m thriving right now, both in my work here and in my studies.',
    'jobs.apply.title': 'Student Jobs — Ready to join the team?',
    'jobs.apply.text': 'We\'re recruiting support workers! Discover all available positions, a typical day, scholarships and how to apply.',
    'jobs.apply.btn': 'Apply — recrutement@repitemergo.com',
    'jobs.apply.details': 'See all details',

    // Emplois page (ejobs.*)
    'ejobs.label': 'Student Jobs',
    'ejobs.hero.title': 'Support workers for autistic individuals',
    'ejobs.hero.lead': 'Are you a student looking for a high-impact social job? Our mission at Emergo is to offer autistic individuals an unforgettable camp experience. Come help us make it happen!',
    'ejobs.hero.sub': 'Répit Emergo is the place where your energy, passion and empathy will be fully valued. We welcome support workers from all academic disciplines!',
    'ejobs.hero.cta': 'Apply now',
    'ejobs.hero.cta2': 'See positions',
    'ejobs.expertise.title': 'Recognized Expertise',
    'ejobs.expertise.text': 'Join the reference in welcoming and supporting autistic individuals. You will be supported by an organization that has been transforming lives for 50 years.',
    'ejobs.adventure.title': 'Step out of your comfort zone',
    'ejobs.adventure.text': 'Every day is a new adventure. You will be guided by a dedicated team that will make every moment a memorable experience in nature.',
    'ejobs.environment.title': 'A unique environment',
    'ejobs.environment.text': 'Contribute to an important cause. Discover the richness of mutual aid and grow in an environment where everyone counts!',
    'ejobs.summer.label': 'Summer 2026',
    'ejobs.summer.title': 'Summer respite stays (June to August)',
    'ejobs.summer.dates.title': '2026 session dates (5 stays of 10 days)',
    'ejobs.summer.conditions': 'Support workers sleep on site and have at least 4 days off between sessions, 3 hours of break per day and 2 evenings off per session.',
    'ejobs.school.label': 'School Year',
    'ejobs.school.title': 'School year respite (September to May)',
    'ejobs.school.lead': 'Weekend respite stays at Camp de Grandpré, in the heart of nature. Flexible schedule — balance your studies!',
    'ejobs.school.logistics.title': 'Logistics',
    'ejobs.schedule.label': 'Typical Day',
    'ejobs.schedule.title': 'A Saturday during school respite',
    'ejobs.teams.label': 'The Work',
    'ejobs.teams.title': 'Teams and operations',
    'ejobs.perks.label': 'Benefits',
    'ejobs.perks.title': 'Much more than a summer job',
    'ejobs.testimonials.label': 'Testimonials',
    'ejobs.testimonials.title': 'What our staff says',
    'ejobs.scholarships.label': 'Scholarships',
    'ejobs.scholarships.title': 'Emergo Foundation Scholarship Program',
    'ejobs.fields.label': 'All Fields',
    'ejobs.fields.title': 'Fields of study in our team',
    'ejobs.apply.label': 'Apply',
    'ejobs.apply.title': 'How to apply?',

    // Contact labels
    'contact.address.label': 'Address',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    'contact.hours.label': 'Hours',
    'contact.team': 'Permanent Staff',

    // Team titles (contact section)
    'team.pierre.title': 'Executive Director',
    'team.eric.title': 'Deputy Director — Respite',
    'team.ameyo.title': 'Administrative Officer',
    'team.mariealice.title': 'Respite Coordinator',

    // Team roles (team grid)
    'team.pierre.role': 'Executive Director',
    'team.eric.role': 'Deputy Director, Respite',
    'team.ameyo.role': 'Administrative Officer',
    'team.mariealice.role': 'Respite Coordinator',

    // Board of directors
    'board.president': 'President',
    'board.vicepresident': 'Vice-President',
    'board.secretary': 'Secretary',
    'board.treasurer': 'Treasurer',
    'board.directorf': 'Director',
    'board.directorm': 'Director',

    // Calendar chips
    'cal.allages': 'All ages',
    'cal.ratio.emergence': 'Ratio 1:1 or 1:2',
    'cal.price.9nights': '9 nights — $1,485',
    'cal.age.adaptatou': '7 to 17 years',
    'cal.ratio.adaptatou': 'Ratio 1:2',
    'cal.age.reve': '16 years +',
    'cal.autonomous': 'Autonomous',
    'cal.price.10nights': '10 nights — $1,640',
    'cal.demi.title': 'Half-stays available:',

    // School calendar
    'cal.legend.2nights': '2 nights — $315',
    'cal.legend.3nights': '3 nights — $465',
    'cal.legend.christmas': 'Christmas — 5 nights — $815',
    'cal.school.footer': 'Friday 6 PM to Sunday 4 PM (Monday 4 PM for holiday weekends)',

    // Foundation
    'foundation.detail': 'Thanks to your generosity, families receive the essential support they need. Our fees represent only 20% of the actual cost — the difference comes from your donations and grants. You\'re not funding a camp: you\'re giving a parent the chance to breathe, and an autistic person the chance to grow.',
    'foundation.chart.sources': 'Revenue',
    'foundation.chart.revenue': 'sources',
    'foundation.chart.gov': 'Government grants',
    'foundation.chart.donations': 'Fundraising and donations',
    'foundation.chart.fees': 'Family stay fees',

    // Jobs salary cards
    'jobs.summer.period': 'Summer (June-Aug)',
    'jobs.summer.salaryline': 'Full summer gross salary — 50+ positions',
    'jobs.summer.lodging': 'Room and board at Camp de Grandpré',
    'jobs.school.period': 'School year (Sept-May)',
    'jobs.school.salaryline': 'Total salary for all respite stays',
    'jobs.school.flexline': 'Flexible schedule — balance studies and work',

    // Staff banner & photos
    'staff.banner.tag': 'Our Team',
    'staff.banner.text': 'Hundreds of dedicated support workers for 50 years',
    'photos.album': 'View photo album',
    'album.cta.title': '50 years of memories',
    'album.cta.text': 'Thousands of smiles, adventures and magical moments. Browse our photo album!',

    // Timeline
    'history.1976': 'Founding of Camp Emergo, the first summer camp for autistic individuals in Quebec, by parents from the Association des enfants autistiques du Québec.',
    'history.1991': 'Launch of school year respite — weekend respite stays throughout the school year.',
    'history.1994': 'Recognition from Health and Welfare Canada under the Community Action Program for Children (CAPC).',
    'history.1997': 'Registration as an independent non-profit organization.',
    'history.2002': 'Launch of the Émergence (socialization), Adaptatou (integration) and Un rêve à réaliser (autonomy) programs in partnership with Camp Mariste.',
    'history.2006': 'Launch of the iDÉFIx program for intensive support of individuals with severe behavioral challenges.',
    'history.2011': 'Creation of the Emergo Foundation to ensure the organization\'s long-term financial sustainability.',
    'history.2017': 'Establishment of urban respite on Jolicoeur Street and autonomous respite stays at Villa de l\'Île-Perrot.',
    'history.2024': 'New brand identity reflecting the two faces of Emergo: respite for caregivers and the joy of autistic individuals at camp.',
    'history.2026': 'Répit Emergo celebrates 50 years of dedication to families. Fifty years made possible thanks to all of you.',
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  // Update lang switch button
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  });

  // Bulk-translate calendar elements by class
  const calWhoMap = {
    fr: { 'adults': 'adultes', '16-25': '16-25 ans', '4-15': '4-15 ans', 'anglophone': 'anglophone', 'francophone': 'francophone', 'autonomous': 'autonomes' },
    en: { 'adults': 'adults', '16-25': '16-25 yrs', '4-15': '4-15 yrs', 'anglophone': 'English', 'francophone': 'French', 'autonomous': 'autonomous' }
  };
  const calWhoKeys = { 'adultes': 'adults', 'adults': 'adults', '16-25 ans': '16-25', '16-25 yrs': '16-25', '4-15 ans': '4-15', '4-15 yrs': '4-15', 'anglophone': 'anglophone', 'English': 'anglophone', 'francophone': 'francophone', 'French': 'francophone', 'autonomes': 'autonomous', 'autonomous': 'autonomous' };
  document.querySelectorAll('.cal-who').forEach(el => {
    const key = calWhoKeys[el.textContent.trim()];
    if (key && calWhoMap[lang]?.[key]) el.textContent = calWhoMap[lang][key];
  });

  // Translate demi-séjour prices (nuits → nights)
  const nightsMap = { fr: 'nuits', en: 'nights' };
  document.querySelectorAll('.cal-demi-price').forEach(el => {
    el.textContent = el.textContent.replace(/\bnuits\b/g, nightsMap[lang]).replace(/\bnights\b/g, nightsMap[lang]);
  });
  // Also translate cal-row-price
  document.querySelectorAll('.cal-row-price').forEach(el => {
    // These are just prices like "1 485 $" — no translation needed
  });

  // Translate school calendar type (nuits → nights)
  document.querySelectorAll('.cal-school-type').forEach(el => {
    el.textContent = el.textContent.replace(/\bnuits\b/g, nightsMap[lang]).replace(/\bnights\b/g, nightsMap[lang]);
  });

  // Translate French month names in calendar dates
  const monthsFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsFrom = lang === 'en' ? monthsFr : monthsEn;
  const monthsTo = lang === 'en' ? monthsEn : monthsFr;
  const translateMonths = (text) => {
    let result = text;
    monthsFrom.forEach((m, i) => {
      result = result.replace(new RegExp(m, 'gi'), monthsTo[i]);
    });
    // Also translate "au" ↔ "to" for date ranges
    if (lang === 'en') {
      result = result.replace(/\bau\b/g, 'to');
      result = result.replace(/\(Noël\)/g, '(Christmas)');
      result = result.replace(/\bnuits\b/g, 'nights');
    } else {
      result = result.replace(/\bto\b/g, 'au');
      result = result.replace(/\(Christmas\)/g, '(Noël)');
      result = result.replace(/\bnights\b/g, 'nuits');
    }
    return result;
  };
  document.querySelectorAll('.cal-dates, .cal-demi-dates, .cal-school-date').forEach(el => {
    // Only translate text nodes, preserve SVG icons
    if (el.childNodes.length > 1) {
      // Has SVG + text (Christmas row)
      el.childNodes.forEach(node => {
        if (node.nodeType === 3) node.textContent = translateMonths(node.textContent);
      });
    } else {
      el.textContent = translateMonths(el.textContent);
    }
  });

  // Translate meta tags
  if (lang === 'en') {
    document.title = 'Répit Emergo — Specialized autism respite service';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Since 1976, Répit Emergo offers specialized respite services to families living with autistic individuals in Quebec. Summer camps and school year respite.');
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Répit Emergo — 50 years of specialized autism respite');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Respite services for families living with autistic individuals. Summer camps and school year respite since 1976.');
  } else {
    document.title = 'Répit Emergo — Service de répit spécialisé en autisme';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Depuis 1976, Répit Emergo offre des services de répit spécialisés aux familles vivant avec des personnes autistes au Québec. Camps d\'été et répits scolaires.');
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Répit Emergo — 50 ans de répit spécialisé en autisme');
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Services de répit pour les familles vivant avec des personnes autistes. Camps d\'été et répits scolaires depuis 1976.');
  }

  // Save preference
  localStorage?.setItem?.('emergo-lang', lang);
}

function toggleLang() {
  setLang(currentLang === 'fr' ? 'en' : 'fr');
}

// Init language from saved preference or browser
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage?.getItem?.('emergo-lang');
  const browserLang = navigator.language?.startsWith('fr') ? 'fr' : null;
  setLang(saved || browserLang || 'fr');
});

// ═══ SMOOTH SCROLL FOR ANCHOR LINKS ═══
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  }
});

// ═══ INTERSECTION OBSERVER FOR ANIMATIONS ═══
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
  document.querySelectorAll('.circle-deco').forEach(el => fadeObserver.observe(el));
});

// ═══ DARK MODE / NIGHT MODE — SPHERE TRANSITION ═══
function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Returns true between 18h and 8h, heure de Montréal
function isNightInMontreal() {
  const hour = parseInt(new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    hour: 'numeric',
    hour12: false
  }).format(new Date()), 10) % 24;
  return hour >= 18 || hour < 8;
}

function applyTheme(theme) {
  // Apply without saving (for automatic/time-based theme)
  document.documentElement.setAttribute('data-theme', theme);
}

function setTheme(theme) {
  // Apply and save (for manual toggles)
  document.documentElement.setAttribute('data-theme', theme);
  localStorage?.setItem?.('emergo-theme', theme);
}

let themeTransitioning = false;

function toggleTheme() {
  if (themeTransitioning) return;
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';

  // Get button position for the circle origin
  const btn = document.querySelector('.dark-toggle');
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  // Calculate the max radius needed to cover the entire viewport
  const maxX = Math.max(cx, window.innerWidth - cx);
  const maxY = Math.max(cy, window.innerHeight - cy);
  const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY);

  // Check if the browser supports View Transitions API
  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    themeTransitioning = true;

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    // Apply the clip-path animation via CSS custom properties
    document.documentElement.style.setProperty('--theme-cx', cx + 'px');
    document.documentElement.style.setProperty('--theme-cy', cy + 'px');
    document.documentElement.style.setProperty('--theme-radius', maxRadius + 'px');

    transition.ready.then(() => {
      // Animate the new view from circle(0) to circle(full)
      document.documentElement.animate(
        [
          { clipPath: `circle(0px at ${cx}px ${cy}px)` },
          { clipPath: `circle(${maxRadius}px at ${cx}px ${cy}px)` }
        ],
        {
          duration: 800,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });

    transition.finished.then(() => {
      themeTransitioning = false;
    });

  } else {
    // Fallback for browsers without View Transitions or reduced motion
    // Use a manual overlay approach
    themeTransitioning = true;

    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';

    // Set overlay color to the TARGET theme's background
    if (next === 'dark') {
      overlay.style.background = '#0E1726';
    } else {
      overlay.style.background = '#FFFFFF';
    }

    overlay.style.cssText += `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      z-index: 99999; pointer-events: none;
      clip-path: circle(0px at ${cx}px ${cy}px);
    `;

    document.body.appendChild(overlay);

    // Animate the circle expanding
    const anim = overlay.animate(
      [
        { clipPath: `circle(0px at ${cx}px ${cy}px)` },
        { clipPath: `circle(${maxRadius}px at ${cx}px ${cy}px)` }
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      }
    );

    // Switch theme at ~40% of animation (the circle covers the main area)
    setTimeout(() => {
      setTheme(next);
    }, 320);

    anim.onfinish = () => {
      // Fade out the overlay
      overlay.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 300, fill: 'forwards' }
      ).onfinish = () => {
        overlay.remove();
        themeTransitioning = false;
      };
    };
  }
}

// Init theme: nuit montréal → sombre forcé / jour → sauvegardé ou système
(function() {
  if (isNightInMontreal()) {
    // Nuit (18h–8h) : mode sombre pour tout le monde, sans sauvegarder
    applyTheme('dark');
  } else {
    // Jour : préférence sauvegardée ou préférence système
    const saved = localStorage?.getItem?.('emergo-theme');
    applyTheme(saved || getSystemTheme());
  }
  // Réagir aux changements système (seulement le jour, sans préférence sauvegardée)
  window.matchMedia?.('(prefers-color-scheme: dark)')?.addEventListener?.('change', (e) => {
    if (!isNightInMontreal() && !localStorage?.getItem?.('emergo-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

// ═══ FLOATING SPHERES — ALWAYS VISIBLE, PARALLAX ON SCROLL ═══
(function() {
  // Show spheres immediately
  document.querySelectorAll('.sphere-deco').forEach(s => s.classList.add('visible'));
  // Subtle parallax: spheres move slightly with scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    document.querySelectorAll('.sphere-deco').forEach((s, i) => {
      const speed = 0.02 + i * 0.01;
      s.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
})();

// ═══ MOUSE SPARKLE TRAIL ═══
(function() {
  const colors = ['#D4A843', '#5B9BD5', '#E8C060', '#7BB8E8', '#4A9A5B', '#B8D4EE'];
  let lastSparkle = 0;
  let sparkleCount = 0;
  const MAX_SPARKLES = 30; // limit active sparkles

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSparkle < 60) return; // throttle: max ~16 sparkles/sec
    if (sparkleCount >= MAX_SPARKLES) return;
    lastSparkle = now;
    sparkleCount++;

    const spark = document.createElement('div');
    spark.className = 'mouse-sparkle';
    // Random size between 3px and 7px
    const size = 3 + Math.random() * 4;
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';
    spark.style.left = (e.clientX - size / 2 + (Math.random() - 0.5) * 16) + 'px';
    spark.style.top = (e.clientY - size / 2 + (Math.random() - 0.5) * 16) + 'px';
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(spark);

    // Remove after animation
    spark.addEventListener('animationend', () => {
      spark.remove();
      sparkleCount--;
    });
  });
})();

// ═══ FIELDS CLOUD — RE-ANIMATE ON SCROLL INTO VIEW ═══
(function() {
  const fieldsCloud = document.querySelector('.fields-cloud-animated');
  if (!fieldsCloud) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Re-trigger animation
        fieldsCloud.querySelectorAll('.field-tag').forEach(tag => {
          tag.style.animation = 'none';
          tag.offsetHeight; // force reflow
          tag.style.animation = '';
        });
        obs.unobserve(fieldsCloud);
      }
    });
  }, { threshold: 0.2 });
  obs.observe(fieldsCloud);
})();

// ═══ PHYSICS BALLOONS — HISTORY SECTION ═══
(function() {
  const canvas = document.getElementById('balloons-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const section = canvas.closest('section');

  // Brand colors with transparency
  const palette = [
    'rgba(91,155,213,.18)',   // blue
    'rgba(212,168,67,.16)',   // gold
    'rgba(74,154,91,.15)',    // green
    'rgba(91,155,213,.12)',   // blue lighter
    'rgba(212,168,67,.10)',   // gold lighter
    'rgba(0,30,85,.08)',      // navy very faint
  ];

  const BALLOON_COUNT = 22;
  const MOUSE_RADIUS = 130;
  const MOUSE_FORCE = 0.9;
  const FRICTION = 0.988;
  const BOUNCE = 0.55;
  const ATTRACT_FORCE = 0.003; // gentle pull toward 2026

  let balloons = [];
  let mouseX = -9999, mouseY = -9999;
  let mouseInSection = false;
  let W = 0, H = 0;
  let animId = null;
  let isVisible = false;
  let attractX = 0, attractY = 0; // 2026 element position

  function resize() {
    const rect = section.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width;
    H = rect.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Find the 2026 timeline dot as attractor
    const dot2026 = section.querySelector('.timeline-item:last-child .timeline-dot');
    if (dot2026) {
      const dotRect = dot2026.getBoundingClientRect();
      attractX = dotRect.left + dotRect.width / 2 - rect.left;
      attractY = dotRect.top + dotRect.height / 2 - rect.top;
    } else {
      attractX = W * 0.5;
      attractY = H * 0.92;
    }
  }

  function createBalloons() {
    balloons = [];
    for (let i = 0; i < BALLOON_COUNT; i++) {
      const r = 16 + Math.random() * 34;
      balloons.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: r,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: palette[Math.floor(Math.random() * palette.length)],
        mass: r * r * 0.001,
        ringOnly: Math.random() > 0.55, // ~45% are rings
      });
    }
  }

  function updatePhysics() {
    for (let i = 0; i < balloons.length; i++) {
      const b = balloons[i];

      // Gentle floating drift (sinusoidal wobble)
      const t = Date.now() * 0.001;
      b.vx += Math.sin(t + i * 1.7) * 0.004;
      b.vy += Math.cos(t + i * 2.3) * 0.004;

      // Subtle attraction toward the 2026 dot
      if (attractX > 0 && attractY > 0) {
        const adx = attractX - b.x;
        const ady = attractY - b.y;
        const aDist = Math.sqrt(adx * adx + ady * ady);
        if (aDist > 1) {
          b.vx += (adx / aDist) * ATTRACT_FORCE;
          b.vy += (ady / aDist) * ATTRACT_FORCE;
        }
      }

      // Mouse interaction
      if (mouseInSection) {
        const dx = b.x - mouseX;
        const dy = b.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS + b.r && dist > 0) {
          const force = MOUSE_FORCE * (1 - dist / (MOUSE_RADIUS + b.r));
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force;
        }
      }

      // Balloon-to-balloon collision
      for (let j = i + 1; j < balloons.length; j++) {
        const b2 = balloons[j];
        const dx = b2.x - b.x;
        const dy = b2.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = b.r + b2.r;
        if (dist < minDist && dist > 0) {
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = (minDist - dist) * 0.5;
          // Separate
          b.x -= nx * overlap;
          b.y -= ny * overlap;
          b2.x += nx * overlap;
          b2.y += ny * overlap;
          // Elastic-ish bounce
          const relVx = b.vx - b2.vx;
          const relVy = b.vy - b2.vy;
          const impactSpeed = relVx * nx + relVy * ny;
          if (impactSpeed > 0) {
            const totalMass = b.mass + b2.mass;
            b.vx -= (2 * b2.mass / totalMass) * impactSpeed * nx * BOUNCE;
            b.vy -= (2 * b2.mass / totalMass) * impactSpeed * ny * BOUNCE;
            b2.vx += (2 * b.mass / totalMass) * impactSpeed * nx * BOUNCE;
            b2.vy += (2 * b.mass / totalMass) * impactSpeed * ny * BOUNCE;
          }
        }
      }

      // Friction
      b.vx *= FRICTION;
      b.vy *= FRICTION;

      // Move
      b.x += b.vx;
      b.y += b.vy;

      // Wall bounce
      if (b.x - b.r < 0) { b.x = b.r; b.vx = Math.abs(b.vx) * BOUNCE; }
      if (b.x + b.r > W) { b.x = W - b.r; b.vx = -Math.abs(b.vx) * BOUNCE; }
      if (b.y - b.r < 0) { b.y = b.r; b.vy = Math.abs(b.vy) * BOUNCE; }
      if (b.y + b.r > H) { b.y = H - b.r; b.vy = -Math.abs(b.vy) * BOUNCE; }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const b of balloons) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      if (b.ringOnly) {
        ctx.strokeStyle = b.color.replace(/[\d.]+\)$/, (m) => (parseFloat(m) * 1.8) + ')');
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = b.color;
        ctx.fill();
      }
    }
  }

  function animate() {
    if (!isVisible) return;
    updatePhysics();
    draw();
    animId = requestAnimationFrame(animate);
  }

  // Mouse tracking relative to section
  section.style.pointerEvents = 'auto';
  canvas.style.pointerEvents = 'none';

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    mouseInSection = true;
  });
  section.addEventListener('mouseleave', () => { mouseInSection = false; });

  // Touch support
  section.addEventListener('touchmove', (e) => {
    const rect = section.getBoundingClientRect();
    const t = e.touches[0];
    mouseX = t.clientX - rect.left;
    mouseY = t.clientY - rect.top;
    mouseInSection = true;
  }, { passive: true });
  section.addEventListener('touchend', () => { mouseInSection = false; });

  // Only animate when section is visible
  const visObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible = true;
        resize();
        if (!balloons.length) createBalloons();
        animate();
      } else {
        isVisible = false;
        if (animId) { cancelAnimationFrame(animId); animId = null; }
      }
    });
  }, { threshold: 0.05 });
  visObs.observe(section);

  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      // Redistribute balloons that ended up outside
      for (const b of balloons) {
        b.x = Math.min(b.x, W - b.r);
        b.y = Math.min(b.y, H - b.r);
      }
    }, 200);
  });
})();

// ═══ DONATE BUTTON MAGIC ═══
(function() {
  const PARTICLES = ['✨','⭐','💛','🌟','😊','💫','🎉','❤️','🙏','Merci!','💝'];
  const COLORS = ['#FFD700','#FFA500','#FF6B6B','#FF85A2','#9B59B6','#3498DB','#2ECC71','#F39C12'];

  function createParticle(btn) {
    const rect = btn.getBoundingClientRect();
    const el = document.createElement('span');
    const isEmoji = Math.random() > 0.25;

    if (isEmoji) {
      el.textContent = PARTICLES[Math.floor(Math.random() * PARTICLES.length)];
      el.style.fontSize = (14 + Math.random() * 18) + 'px';
    } else {
      // Tiny glowing dot
      const size = 4 + Math.random() * 6;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.borderRadius = '50%';
      el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.boxShadow = '0 0 6px currentColor';
    }

    el.style.cssText += `
      position:fixed;
      pointer-events:none;
      z-index:99999;
      left:${rect.left + rect.width * (0.1 + Math.random() * 0.8)}px;
      top:${rect.top + rect.height / 2}px;
      opacity:1;
      transition:none;
      will-change:transform,opacity;
    `;
    document.body.appendChild(el);

    const angle = -30 - Math.random() * 120; // upward arc (-30 to -150 deg)
    const speed = 60 + Math.random() * 120;
    const vx = Math.cos(angle * Math.PI / 180) * speed;
    const vy = Math.sin(angle * Math.PI / 180) * speed;
    const spin = (Math.random() - 0.5) * 720;
    const life = 800 + Math.random() * 800;
    const start = performance.now();

    function tick(now) {
      const t = (now - start) / life;
      if (t > 1) { el.remove(); return; }
      const ease = 1 - (1 - t) * (1 - t); // ease out quad
      const gravity = t * t * 60;
      el.style.transform = `translate(${vx * ease}px, ${vy * ease + gravity}px) rotate(${spin * ease}deg) scale(${1 - t * 0.3})`;
      el.style.opacity = t < 0.7 ? 1 : 1 - (t - 0.7) / 0.3;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function burstParticles(btn, count) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => createParticle(btn), i * 40);
    }
  }

  // Add glow + particles to all "Faire un don" buttons
  document.addEventListener('DOMContentLoaded', () => {
    // Style injection for glow effect
    const style = document.createElement('style');
    style.textContent = `
      .donate-magic { position:relative; overflow:visible; transition: transform .3s ease, box-shadow .3s ease; }
      .donate-magic:hover {
        transform: scale(1.08);
        box-shadow: 0 0 20px rgba(255,215,0,.5), 0 0 40px rgba(255,215,0,.25), 0 4px 16px rgba(0,0,0,.15);
      }
      .donate-magic::after {
        content:'';
        position:absolute;
        inset:-4px;
        border-radius:inherit;
        background: linear-gradient(45deg, #FFD700, #FF6B6B, #9B59B6, #3498DB, #FFD700);
        background-size:300% 300%;
        opacity:0;
        z-index:-1;
        transition: opacity .3s ease;
        filter:blur(8px);
      }
      .donate-magic:hover::after {
        opacity:.6;
        animation: donate-rainbow 2s ease infinite;
      }
      @keyframes donate-rainbow {
        0%,100% { background-position:0% 50%; }
        50% { background-position:100% 50%; }
      }
    `;
    document.head.appendChild(style);

    // Target donate links (fondationemergo.com) + nav-cta donate
    const donateLinks = document.querySelectorAll('a[href*="fondationemergo"], .nav-cta[data-i18n="nav.donate"]');
    donateLinks.forEach(btn => {
      btn.classList.add('donate-magic');
      let interval = null;

      btn.addEventListener('mouseenter', () => {
        burstParticles(btn, 8); // initial burst
        interval = setInterval(() => burstParticles(btn, 3), 400); // continuous stream
      });

      btn.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = null;
      });
    });
  });
})();
