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
    'nav.member': 'Devenir membre',
    'nav.programs': 'Programmes',
    'nav.calendar': 'Calendrier et coûts',
    'nav.about': 'À propos',
    'nav.history': 'Notre histoire',
    'nav.team': 'Notre équipe',
    'nav.foundation': 'Fondation',
    'nav.jobs': 'Emplois',
    'nav.contact': 'Nous joindre',
    'nav.donate': 'Faire un don',
    'nav.info': 'Renseignements',
    'nav.reports': 'Rapports et documents',
    'nav.lang': 'EN',

    // Hero
    'hero.badge': '50 ans de répit — 1976-2026',
    'hero.title1': 'L\'autisme ne donne',
    'hero.title2': 'pas de répit...',
    'hero.title3': 'Emergo, oui!',
    'hero.lead': 'Depuis 1976, nous offrons des services de répit spécialisés aux familles vivant avec des personnes autistes. Un environnement sécuritaire, stimulant et adapté — pour que chaque famille puisse souffler.',
    'hero.cta1': 'Devenir membre',
    'hero.cta2': 'Découvrir nos programmes',

    // Picto Mode
    'picto.hero.title': 'Mon Aventure au Camp Emergo',
    'picto.hero.hello': 'Bonjour!',
    'picto.hero.camp': 'Camp',
    'picto.hero.adventure': 'Aventure',
    'picto.hero.happy': 'Content',
    'picto.hero.text': 'Je vais très bientôt au Camp Emergo à Otterburn Park. C\'est un endroit fait spécialement pour moi.',
    'picto.arrival.title': 'Mon arrivée',
    'picto.arrival.text': 'Quand j\'arrive, des gens sympathiques seront là pour me dire bonjour. Ils vont m\'aider à trouver ma place. C\'est rassurant!',
    'picto.arrival.arrive': 'J\'arrive',
    'picto.arrival.nice': 'Gens sympathiques',
    'picto.arrival.hello': 'Bonjour!',
    'picto.arrival.place': 'Ma place',
    'picto.support.title': 'Mon accompagnateur',
    'picto.support.text': 'Un accompagnateur sera toujours avec moi pour s\'assurer que je m\'amuse. Je vais rencontrer différents accompagnateurs au fil de la journée.',
    'picto.support.counselor': 'Accompagnateur',
    'picto.support.always': 'Toujours avec moi',
    'picto.support.fun': 'Je m\'amuse',
    'picto.activities.title': 'Mes Activités',
    'picto.activities.text': 'Au camp, je fais plein d\'activités amusantes avec mes amis et mon accompagnateur.',
    'picto.activities.pool': 'Piscine',
    'picto.activities.games': 'Jeux',
    'picto.activities.painting': 'Peinture',
    'picto.activities.drawing': 'Dessin',
    'picto.activities.music': 'Musique',
    'picto.activities.walk': 'Marche dans la forêt',
    'picto.activities.ball': 'Ballon',
    'picto.activities.campfire': 'Feu de camp',
    'picto.activities.fun': 'Je m\'amuse!',
    'picto.mySupport.title': 'Mon Soutien',
    'picto.mySupport.text': 'Si je ne me sens pas bien ou si j\'ai besoin de quelque chose, mon accompagnateur est là pour m\'aider.',
    'picto.mySupport.question': 'Question',
    'picto.mySupport.help': 'Aide',
    'picto.mySupport.counselor': 'Accompagnateur',
    'picto.mySupport.rest': 'Repos',
    'picto.mySupport.calm': 'Calme',
    'picto.mySupport.banner': 'Je peux toujours demander de l\'aide. Mon accompagnateur est toujours là pour moi.',
    'picto.friends.title': 'Mes Nouveaux Amis',
    'picto.friends.text': 'Au camp, je rencontre d\'autres enfants et adultes. On fait des activités ensemble et on s\'amuse. Tout le monde est gentil et accueillant.',
    'picto.friends.friends': 'Amis',
    'picto.friends.children': 'Enfants',
    'picto.friends.adults': 'Adultes',
    'picto.friends.play': 'Jouer ensemble',
    'picto.friends.happy': 'Content',
    'picto.departure.title': 'Mon Départ',
    'picto.departure.text': 'Le camp est terminé. Je dis au revoir à mes amis et à mon accompagnateur. Je retourne à la maison avec ma famille.',
    'picto.departure.goodbye': 'Au revoir',
    'picto.departure.friends': 'Amis',
    'picto.departure.car': 'Voiture',
    'picto.departure.home': 'Maison',
    'picto.departure.memories': 'Souvenirs',
    'picto.reflection.title': 'Réflexion',
    'picto.reflection.text': 'Le camp, c\'était une belle aventure! J\'ai appris des choses, je me suis fait des amis, et j\'ai eu du plaisir. J\'ai hâte de revenir!',
    'picto.reflection.friends': 'Mes amis',
    'picto.reflection.fun': 'Du plaisir',
    'picto.reflection.excited': 'J\'ai hâte!',
    'picto.reflection.comeback': 'Revenir',
    'picto.schedule.title': 'Ma journée au camp',
    'picto.schedule.wakeup': 'Réveil',
    'picto.schedule.breakfast': 'Déjeuner',
    'picto.schedule.gathering': 'Rassemblement',
    'picto.schedule.dance': 'Danses',
    'picto.schedule.costumes': 'Déguisements',
    'picto.schedule.activities1': 'Activités',
    'picto.schedule.hiking': 'Marche',
    'picto.schedule.pool': 'Piscine',
    'picto.schedule.lunch': 'Dîner',
    'picto.schedule.interest': 'Temps d\'intérêt',
    'picto.schedule.games1': 'Jeux',
    'picto.schedule.snack': 'Collation',
    'picto.schedule.activities2': 'Activités',
    'picto.schedule.games2': 'Jeux',
    'picto.schedule.drawing': 'Dessin',
    'picto.schedule.dinner': 'Souper',
    'picto.schedule.campfire': 'Feu de camp',
    'picto.schedule.evening': 'Soirée',
    'picto.schedule.movie': 'Film',
    'picto.schedule.bedtime': 'Routine du coucher',
    'picto.schedule.sleep': 'Dodo',
    'picto.rules.title': 'Les règles du camp',
    'picto.rules.group': 'Rester avec le groupe',
    'picto.rules.help': 'Demander de l\'aide si besoin',
    'picto.rules.kind': 'Être gentil avec les amis',
    'picto.rules.water': 'Boire de l\'eau',
    'picto.rules.listen': 'Écouter mon accompagnateur',
    'picto.feelings.title': 'Comment je me sens?',
    'picto.feelings.text': 'Je peux montrer comment je me sens à mon accompagnateur.',
    'picto.feelings.happy': 'Content',
    'picto.feelings.sad': 'Triste',
    'picto.feelings.needhelp': 'Besoin d\'aide',
    'picto.feelings.hungry': 'J\'ai faim',
    'picto.feelings.thirsty': 'J\'ai soif',
    'picto.feelings.tired': 'Fatigué',
    'picto.feelings.home': 'Maison',
    'picto.bag.title': 'Mon sac pour le camp',
    'picto.bag.pajamas': 'Pyjama',
    'picto.bag.tshirts': 'T-shirts',
    'picto.bag.pants': 'Pantalons',
    'picto.bag.shorts': 'Shorts',
    'picto.bag.socks': 'Chaussettes',
    'picto.bag.shoes': 'Chaussures',
    'picto.bag.rainboots': 'Bottes de pluie',
    'picto.bag.swimsuit': 'Maillot de bain',
    'picto.bag.towel': 'Serviette',
    'picto.bag.toothbrush': 'Brosse à dents et dentifrice',
    'picto.bag.hat': 'Chapeau',
    'picto.bag.sunscreen': 'Crème solaire',
    'picto.bag.raincoat': 'Manteau de pluie',
    'picto.bag.waterbottle': 'Bouteille d\'eau',
    'picto.bag.bugspray': 'Chasse-moustiques',

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
    'reve.video.label': 'À voir',
    'reve.video.title': 'Un rêve à réaliser à la télé',
    'reve.video.desc': 'Quelques scènes du programme <em>Un rêve à réaliser</em> à l\'été 2020, dans le reportage <strong>Autiste, amour et amitié</strong> de TVA. Le segment débute à 9 minutes 30.',
    'reve.video.watch': 'Regarder le reportage sur QUB',
    'reve.video.time': 'Débute à 9 min 30',
    'reve.video.text1': 'Ce programme permet aux personnes autistes autonomes d\'évoluer dans un milieu plus normalisant et de relever ainsi une foule de défis à leur mesure.',
    'reve.video.text2': 'Les participants vivent en petits groupes et participent, chacun à sa façon, aux différentes activités de la vie quotidienne. Le ratio est de trois animateurs pour neuf participants.',
    'reve.villa.label': 'Le lieu',
    'reve.villa.title': 'La Villa Marie-Rose',
    'reve.villa.text': 'Nichée en pleine nature dans les Laurentides, la Villa Marie-Rose offre un cadre paisible et moderne pour nos séjours. Les participants sont logés et nourris dans des installations confortables, entourés de lac, de forêt et d\'espaces pour les activités extérieures.',
    'reve.villa.photos': 'Voir les photos de la Villa →',
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
    'footer.about': 'Répit Emergo',
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
    'member.step1.more': 'Plus de détails →',
    'member.modal.title': 'Des parents aident des parents',
    'member.modal.intro': 'Emergo, c\'est essentiellement et depuis toujours « des parents qui aident des parents » à reprendre leur souffle et à recharger leur batterie.',
    'member.modal.privileges.title': 'Les privilèges du parent membre d\'Emergo',
    'member.modal.priv1': 'Faire partie d\'un organisme fondé et administré par des parents d\'enfants autistes afin d\'offrir du répit aux familles vivant avec une personne autiste ou ayant un autre trouble envahissant du développement (TED).',
    'member.modal.priv2': 'Avoir accès à des services de répit auxquels il peut faire confiance, où son enfant pourra s\'amuser et se faire des amis dans un environnement de plein air sécuritaire et stimulant.',
    'member.modal.priv3': 'Bénéficier pour son enfant d\'un ratio d\'encadrement de un à trois participants par accompagnateur bien formé et expérimenté.',
    'member.modal.priv4': 'Inscrire son enfant dans celui des quatre programmes d\'Emergo qui répond le mieux à ses besoins : Émergence (socialisation), iDÉFIx (encadrement personnalisé), Adaptatou (intégration) ou Un rêve à réaliser (autonomie).',
    'member.modal.priv5': 'Obtenir les formulaires d\'inscription en temps opportun afin de pouvoir planifier ses moments de liberté et des activités en couple ou en famille compliquées ou impossibles à faire avec son enfant autiste.',
    'member.modal.priv6': 'Recevoir l\'infolettre par courriel pour s\'assurer d\'avoir toujours toute l\'information pertinente rapidement.',
    'member.modal.priv7': 'Assister à l\'assemblée annuelle, exercer son droit de vote, poser des questions, soumettre des idées et échanger avec les membres du conseil d\'administration et de la direction, et les autres parents.',
    'member.modal.involvement.title': 'L\'implication du parent membre d\'Emergo',
    'member.modal.impl1': 'Payer régulièrement sa cotisation pour maintenir son adhésion aux services de répit.',
    'member.modal.impl2': 'Remplir soigneusement les formulaires d\'inscription, signer les formulaires de consentement requis afin que le dossier de son enfant soit complet et à jour, et payer les frais de séjour.',
    'member.modal.impl3': 'S\'assurer de fournir tous les articles nécessaires au bon déroulement du séjour de son enfant (ordonnances et médicaments, vêtements adaptés à la saison, nourriture en cas de diète spéciale, etc.)',
    'member.modal.impl4': 'Donner son adresse électronique pour réduire les frais postaux et l\'empreinte écologique d\'Emergo.',
    'member.modal.impl5': 'Participer dans la mesure du possible aux tâches de bénévolat, à la corvée annuelle, aux événements de promotion et aux activités de financement pour soutenir Emergo et ainsi créer des liens avec les autres parents et le personnel, et développer un sentiment d\'appartenance.',
    'member.modal.impl6': 'Contribuer au développement d\'Emergo en travaillant au sein d\'un comité ou en proposant sa candidature au conseil d\'administration lors de l\'assemblée annuelle.',
    'member.modal.impl7': 'Le parent membre d\'Emergo devient ainsi un aidé-aidant et renforce la chaîne de solidarité qui doit unir tous les parents d\'Emergo en vue d\'assurer la pérennité des services de répit.',
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
    'jobs.summer.salary': 'Salaire brut été complet : plus de 7 400 $',
    'jobs.summer.salary.detail': 'Formation (586$) + 5 séjours (6 381$) + veilles (20$) + jours fériés + bonus été complet (300$)',
    'jobs.summer.reve': 'Un Rêve à Réaliser — 9 postes',
    'jobs.summer.reve.desc': '4 séjours de 10 jours à la Villa Marie-Rose (Val-des-Lacs). Dont 1 séjour anglophone. Logé et nourri sur le site.',
    'jobs.school.title': 'Répits scolaires (sept. à mai)',
    'jobs.school.desc': 'Des fins de semaine de répit au Camp de Grandpré. Environ 20 participants et une trentaine de staff par répit. Transport fourni depuis nos bureaux à Montréal. Logé et nourri dans des chalets modernes.',
    'jobs.school.salary': 'Salaire total : jusqu\'à 9 409 $ pour toute l\'année',
    'jobs.school.salary.detail': '2 nuits (310$), 3 nuits (428$), Noël (725$). Bonus de 175$ pour 8 répits + 30$/répit supplémentaire.',
    'jobs.school.flexible': 'Horaire flexible : choisissez vos fins de semaine selon vos disponibilités. Conciliez facilement travail et études!',
    'jobs.positions.title': 'Postes disponibles en été',
    'jobs.perk1.title': 'Bourses d\'études',
    'jobs.perk1.text': 'La Fondation Emergo offre des bourses de 1 000 $ à 1 750 $ aux employés assidus dans leurs études et leurs fonctions. 20 000 $ distribués en 2024-2025!',
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

    // Job descriptions (postes)
    'postes.label': 'Postes disponibles',
    'postes.title': 'Descriptions de tâches',
    'postes.lead': 'Consultez les responsabilités et exigences de chaque poste.',
    'postes.section.description': 'Description',
    'postes.section.taches': 'Tâches principales',
    'postes.section.exigences': 'Exigences',
    'postes.accompagnateur.title': 'Accompagnateur',
    'postes.accompagnateur.description': 'Responsable du bien-être, santé et sécurité des participants. Accompagne dans toutes les activités de la vie quotidienne.',
    'postes.accompagnateur.programs': 'Tous les programmes',
    'postes.accompagnateur.offer': 'Année scolaire et été',
    'postes.accompagnateur.task1': 'Veiller au bien-être et à la sécurité',
    'postes.accompagnateur.task2': 'Accompagner les activités quotidiennes (soins, alimentation, hygiène)',
    'postes.accompagnateur.task3': 'Encourager la participation aux activités',
    'postes.accompagnateur.task4': 'Mettre en place des plans d\'intervention',
    'postes.accompagnateur.task5': 'Utiliser des outils de communication (pictogrammes, calendrier)',
    'postes.accompagnateur.task6': 'Rédiger des bilans',
    'postes.accompagnateur.task7': 'Participer aux réunions d\'équipe',
    'postes.accompagnateur.task8': 'Assurer les veilles de nuit',
    'postes.accompagnateur.req1': 'Statut étudiant',
    'postes.accompagnateur.req2': 'Sens des responsabilités',
    'postes.accompagnateur.req3': '18 ans ou plus',
    'postes.accompagnateur.req4': 'Présent au camp toute la durée',
    'postes.accompagnateur.req5': 'Expérience clientèle — un atout',
    'postes.accompagnateur.req6': 'Bilinguisme — un atout',
    'postes.coordonnateur-equipes.title': 'Coordonnateur aux équipes',
    'postes.coordonnateur-equipes.description': 'Former, encadrer et évaluer les accompagnateurs. S\'assurer des besoins des participants.',
    'postes.coordonnateur-equipes.program': 'Émergence / iDÉFIx',
    'postes.coordonnateur-equipes.offer': 'Année scolaire et été',
    'postes.coordonnateur-equipes.task1': 'Soutenir les accompagnateurs dans leurs interventions',
    'postes.coordonnateur-equipes.task2': 'Gérer les situations de crise',
    'postes.coordonnateur-equipes.task3': 'Recruter les accompagnateurs',
    'postes.coordonnateur-equipes.task4': 'Planifier les horaires',
    'postes.coordonnateur-equipes.task5': 'Former, superviser et évaluer les accompagnateurs',
    'postes.coordonnateur-equipes.task6': 'Participer aux réunions d\'équipe',
    'postes.coordonnateur-equipes.task7': 'Rédiger des rapports',
    'postes.coordonnateur-equipes.task8': 'Assurer une présence sur le terrain',
    'postes.coordonnateur-equipes.req1': 'Statut étudiant',
    'postes.coordonnateur-equipes.req2': 'Expérience clientèle',
    'postes.coordonnateur-equipes.req3': 'Expérience en gestion',
    'postes.coordonnateur-equipes.req4': 'Leadership',
    'postes.coordonnateur-equipes.req5': 'Disponible pour formation',
    'postes.coordonnateur-equipes.req6': '18 ans ou plus',
    'postes.coordonnateur-equipes.req7': 'Permis de conduire — un atout',
    'postes.coordonnateur-sante.title': 'Coordonnateur des soins de santé',
    'postes.coordonnateur-sante.description': 'Gère les aspects santé et sécurité. Vérifie les dossiers, administre la médication, applique les premiers soins et les mesures d\'urgence.',
    'postes.coordonnateur-sante.program': 'Émergence / iDÉFIx',
    'postes.coordonnateur-sante.offer': 'Année scolaire et été',
    'postes.coordonnateur-sante.task1': 'Vérifier les dossiers médicaux',
    'postes.coordonnateur-sante.task2': 'Accueillir les parents et documenter l\'information',
    'postes.coordonnateur-sante.task3': 'Administrer la médication',
    'postes.coordonnateur-sante.task4': 'Maintenir les tableaux synthèse',
    'postes.coordonnateur-sante.task5': 'Effectuer le bilan de santé quotidien',
    'postes.coordonnateur-sante.task6': 'Administrer les premiers soins',
    'postes.coordonnateur-sante.task7': 'Contacter Info-Santé si nécessaire',
    'postes.coordonnateur-sante.task8': 'Respecter les directives des parents',
    'postes.coordonnateur-sante.req1': 'Études en soins infirmiers ou domaine connexe',
    'postes.coordonnateur-sante.req2': 'Certification en premiers soins',
    'postes.coordonnateur-sante.req3': 'Certification en RCR',
    'postes.coordonnateur-sante.req4': 'Rigueur et attention au détail',
    'postes.coordonnateur-sante.req5': '18 ans ou plus',
    'postes.coordonnateur-activites.title': 'Coordonnateur aux activités',
    'postes.coordonnateur-activites.description': 'Élabore l\'horaire et le calendrier des activités. Forme, encadre et évalue les animateurs.',
    'postes.coordonnateur-activites.program': 'Programme Émergence',
    'postes.coordonnateur-activites.offer': 'Année scolaire et été',
    'postes.coordonnateur-activites.task1': 'Planifier les activités',
    'postes.coordonnateur-activites.task2': 'Créer une programmation diversifiée',
    'postes.coordonnateur-activites.task3': 'Développer la thématique',
    'postes.coordonnateur-activites.task4': 'Gérer l\'inventaire du matériel',
    'postes.coordonnateur-activites.task5': 'Recruter, former et évaluer les animateurs',
    'postes.coordonnateur-activites.task6': 'Gérer le budget des activités',
    'postes.coordonnateur-activites.req1': 'Statut étudiant',
    'postes.coordonnateur-activites.req2': 'Expérience clientèle',
    'postes.coordonnateur-activites.req3': 'Expérience en animation',
    'postes.coordonnateur-activites.req4': 'Leadership',
    'postes.coordonnateur-activites.req5': '18 ans ou plus',
    'postes.animateur.title': 'Animateur',
    'postes.animateur.description': 'Organise et anime les activités de loisir, thématique et rassemblements.',
    'postes.animateur.program': 'Programme Émergence',
    'postes.animateur.offer': 'Été seulement',
    'postes.animateur.task1': 'Connaître les caractéristiques des participants',
    'postes.animateur.task2': 'Organiser et animer les activités individuelles et de groupe',
    'postes.animateur.task3': 'Préparer des supports visuels',
    'postes.animateur.task4': 'Développer la thématique estivale',
    'postes.animateur.task5': 'Animer les rassemblements',
    'postes.animateur.task6': 'Participer aux réunions d\'équipe',
    'postes.animateur.task7': 'Assurer les veilles de nuit',
    'postes.animateur.req1': 'Statut étudiant',
    'postes.animateur.req2': 'Leadership',
    'postes.animateur.req3': 'Créativité',
    'postes.animateur.req4': '18 ans ou plus',
    'postes.animateur.req5': 'Expérience en animation — un atout',
    'postes.charge-programme.title': 'Chargé de programme',
    'postes.charge-programme.description': 'Réalise les démarches nécessaires à la prestation du programme. Recrute, embauche, forme et évalue le personnel.',
    'postes.charge-programme.program': 'Émergence / iDÉFIx / Rêve à Réaliser / Adaptatou',
    'postes.charge-programme.offer': 'Été seulement',
    'postes.charge-programme.task1': 'Veiller au bien-être des participants',
    'postes.charge-programme.task2': 'Contacter les parents',
    'postes.charge-programme.task3': 'Former et superviser le personnel',
    'postes.charge-programme.task4': 'Participer aux réunions d\'équipe',
    'postes.charge-programme.task5': 'Élaborer la programmation',
    'postes.charge-programme.task6': 'Gérer le budget',
    'postes.charge-programme.task7': 'Rédiger des rapports',
    'postes.charge-programme.task8': 'Mettre en place les procédures d\'urgence',
    'postes.charge-programme.req1': 'Expérience clientèle',
    'postes.charge-programme.req2': 'Expérience en gestion',
    'postes.charge-programme.req3': 'Leadership',
    'postes.charge-programme.req4': 'Disponible pour formation',
    'postes.charge-programme.req5': 'Permis de conduire — un atout',
    'postes.accompagnateur-nuit.title': 'Accompagnateur de nuit',
    'postes.accompagnateur-nuit.description': 'Responsable du bien-être des participants durant la nuit.',
    'postes.accompagnateur-nuit.program': 'Programme Émergence',
    'postes.accompagnateur-nuit.offer': 'Année scolaire et été',
    'postes.accompagnateur-nuit.rotation': 'Poste de nuit',
    'postes.accompagnateur-nuit.task1': 'Lire les dossiers comportementaux',
    'postes.accompagnateur-nuit.task2': 'Veiller au bien-être et à la sécurité',
    'postes.accompagnateur-nuit.task3': 'Identifier les besoins des participants',
    'postes.accompagnateur-nuit.task4': 'Utiliser les outils d\'intervention appropriés',
    'postes.accompagnateur-nuit.task5': 'Maintenir un milieu sain et sécuritaire',
    'postes.accompagnateur-nuit.task6': 'Remplir la feuille de sommeil',
    'postes.accompagnateur-nuit.task7': 'Informer le coordonnateur',

    // Emplois page — Summer Programs
    'ejobs.emergence.title': 'Programme Émergence — 50 postes',
    'ejobs.emergence.desc': 'Notre programme principal! Au Camp de Grandpré, Otterburn Park.',
    'ejobs.summer.training': 'Formation (obligatoire)',
    'ejobs.summer.stay1': 'Séjour 1',
    'ejobs.summer.stay2': 'Séjour 2',
    'ejobs.summer.stay3': 'Séjour 3',
    'ejobs.summer.stay4': 'Séjour 4',
    'ejobs.summer.stay5': 'Séjour 5',
    'ejobs.summer.training.date': '1 au 5 juin et 10-11 juin',
    'ejobs.summer.stay1.date': '12 au 21 juin',
    'ejobs.summer.stay2.date': '26 juin au 5 juillet',
    'ejobs.summer.stay3.date': '10 au 19 juillet',
    'ejobs.summer.stay4.date': '24 juillet au 2 août',
    'ejobs.summer.stay5.date': '7 au 16 août',
    'ejobs.summer.salary.perStay': 'Forfaitaire par séjour : 1 256,25 $',
    'ejobs.summer.salary.fullSummer': 'Salaire brut été complet :',
    'ejobs.summer.salary.label': 'Salaire brut',
    'ejobs.summer.salary.training': 'Formation',
    'ejobs.summer.salary.stays': '5 séjours',
    'ejobs.summer.salary.watches': 'Veilles',
    'ejobs.summer.salary.bonus': 'Bonus été complet',
    'ejobs.summer.salary.total': 'Total',
    'ejobs.summer.salary.totalAmount': 'Plus de 7 400 $',
    'ejobs.emergence.positions': 'Postes au programme Émergence',
    'ejobs.pos.manager': 'Chargé·e de programme',
    'ejobs.pos.teamCoord': 'Coordonnateur·rice·s d\'équipe',
    'ejobs.pos.healthCoord': 'Coordonnateur·rice·s aux soins de santé',
    'ejobs.pos.activityCoord': 'Coordonnateur·rice aux activités',
    'ejobs.pos.support': 'Accompagnateur·rice·s',
    'ejobs.pos.batWorkers': 'Chauve-Souris',
    'ejobs.pos.animators': 'Animateur·rice·s',
    'ejobs.idefix.title': 'Programmes iDÉFIx et Adaptatou — Camp de Grandpré',
    'ejobs.idefix.desc': 'Encadrement soutenu et intégration, au même site que le programme Émergence.',
    'ejobs.pos.coord': 'Coordonnateur·rice',
    'ejobs.reve.title': 'Programme Un Rêve à Réaliser — Villa Marie-Rose',
    'ejobs.reve.desc': '9 postes — Pour les personnes autistes autonomes de 16 ans et plus. Val-des-Lacs.',
    'ejobs.reve.dates.title': 'Dates des séjours 2026 (4 séjours de 10 jours)',
    'ejobs.reve.stay1': 'Séjour 1 (anglophone)',
    'ejobs.reve.stay2': 'Séjour 2',
    'ejobs.reve.stay3': 'Séjour 3',
    'ejobs.reve.stay4': 'Séjour 4',
    'ejobs.reve.stay1.date': '26 juin au 6 juillet',
    'ejobs.reve.stay2.date': '10 au 20 juillet',
    'ejobs.reve.stay3.date': '24 juillet au 3 août',
    'ejobs.reve.stay4.date': '7 au 17 août',
    'ejobs.reve.expenses': 'Les frais de repas et d\'hébergement sont inclus dans le coût du séjour.',
    'ejobs.pos.actSoins': 'Coord. activités et soins',

    // School Year Respite
    'ejobs.school.salary.title': 'Salaire accompagnateur — Répits scolaires',
    'ejobs.school.salary.2nights': 'Répit 2 nuits',
    'ejobs.school.salary.3nights': 'Répit 3 nuits',
    'ejobs.school.salary.christmas': 'Répit de Noël (5 nuits)',
    'ejobs.school.salary.totalDesc': 'Salaire total pour une personne qui fait tous les répits',
    'ejobs.school.salary.bonusDesc': 'Bonus de 175 $...',
    'ejobs.school.attendance': 'On prévoit accueillir <strong>20 participants</strong> et une <strong>trentaine de staff</strong> par répit!',
    'ejobs.school.transport': 'Transport : fourni depuis nos bureaux à Montréal',
    'ejobs.school.lodging': 'Logement : dans des chalets modernes, confortables et bien équipés',
    'ejobs.school.return': 'Retour : transport assuré pour le retour à Montréal en fin de répit',
    'ejobs.school.flexible': 'Horaire flexible : vous choisissez les répits auxquels vous participez selon vos disponibilités',

    // Daily Schedule
    'ejobs.sched.8h': 'Réveil des participant·e·s. Courte période d\'hygiène, puis direction cafétéria.',
    'ejobs.sched.8h30': 'Déjeuner. Suivi du temps d\'intérêt : activités stimulantes ou reposantes. Préparation pour le rassemblement (maquillage, costumes).',
    'ejobs.sched.9h45': 'Le rassemblement! Chansons, danses, déguisements et histoires!',
    'ejobs.sched.10h': 'Activités! Jeux de table, jeux extérieurs, jeux sensoriels, marche dans la forêt, etc. On favorise la participation et on adapte au besoin.',
    'ejobs.sched.12h': 'Dîner à la cafétéria.',
    'ejobs.sched.13h': 'Temps d\'intérêt — tranquille ou plein de mouvement! Écriture dans le journal du participant. Relais entre accompagnateurs.',
    'ejobs.sched.14h30': 'Collation sous le préau.',
    'ejobs.sched.15h': 'Encore plein d\'activités!',
    'ejobs.sched.17h': 'Souper à la cafétéria.',
    'ejobs.sched.18h30': 'Activité de groupe : feu de camp, soirée party, soirée film...',
    'ejobs.sched.19h15': 'Routine du coucher. Soins d\'hygiène, activités calmes (lecture, jeux de table).',
    'ejobs.sched.20h15': 'Les veilleurs de nuit prennent le relais. À 20h30, les accompagnateurs quittent vers leur chalet.',
    'ejobs.sched.time.8h': '8h',
    'ejobs.sched.time.8h30': '8h30',
    'ejobs.sched.time.9h45': '9h45',
    'ejobs.sched.time.10h': '10h',
    'ejobs.sched.time.12h': '12h',
    'ejobs.sched.time.13h': '13h',
    'ejobs.sched.time.14h30': '14h30',
    'ejobs.sched.time.15h': '15h',
    'ejobs.sched.time.17h': '17h',
    'ejobs.sched.time.18h30': '18h30',
    'ejobs.sched.time.19h15': '19h15',
    'ejobs.sched.time.20h15': '20h15',

    // Teams & Work
    'ejobs.teams.ratios': 'Nous formons des <strong>équipes de quatre accompagnateur·rice·s pour trois participants</strong>. Les ratios varient de 1:1 à 1:3 selon les programmes, avec des rotations toutes les trois heures.',
    'ejobs.teams.size': 'Vous ferez partie d\'une équipe allant <strong>jusqu\'à 30 accompagnateurs</strong>, épaulés par une équipe de gestion dynamique. Tous les employés sont des étudiants universitaires ou du CEGEP.',
    'ejobs.teams.role': 'En tant que membre de notre équipe, vous aurez l\'occasion de travailler avec des enfants, des adolescents et des adultes autistes. Vous serez responsable de :',
    'ejobs.teams.resp1': 'L\'aide aux personnes autistes dans leur quotidien',
    'ejobs.teams.resp2': 'L\'adaptation des activités de groupe',
    'ejobs.teams.resp3': 'Les soins personnels (ex. donner une douche)',
    'ejobs.teams.resp4': 'La sécurité et le bien-être des participants',
    'ejobs.teams.complex': 'Vous ferez face à des situations parfois complexes, où il faut composer avec les émotions fortes des participants. Vous serez soutenus dans tous ces moments grâce aux connaissances des coordonnateurs et de la multitude de conseils et d\'informations contenues dans les plans d\'intervention individualisés, qui sont lus en équipe avant l\'arrivée du participant.',
    'ejobs.teams.offer.title': 'Ce qu\'on offre :',
    'ejobs.teams.offer.lodging': 'Logé et nourri dans des bâtiments modernes, en pleine nature, avec des collègues qui sont là pour les bonnes raisons.',
    'ejobs.teams.offer.autism': 'La connaissance de l\'autisme n\'est pas un prérequis. C\'est important de se renseigner, mais on vous formera sur place!',

    // Perks
    'ejobs.perks.scholarships.title': 'Bourses d\'études',
    'ejobs.perks.scholarships.text': 'La Fondation Emergo offre des bourses de 1 000 $ à 1 750 $ aux employés assidus. 20 000 $ distribués en 2024-2025!',
    'ejobs.perks.hours.title': 'Heures reconnues',
    'ejobs.perks.hours.text': 'Possibilité de faire reconnaître vos heures pour monter d\'échelon dans les organismes publics (commissions scolaires, CSSS, CRDITED, etc.).',
    'ejobs.perks.referral.title': 'Récompense de recommandation',
    'ejobs.perks.referral.text': 'Chèque-cadeau pour chaque candidat recommandé qui rejoint l\'équipe!',
    'ejobs.perks.referral.more': 'En savoir plus →',
    'ejobs.referral.modal.title': 'Programme de récompense pour la recommandation de candidats',
    'ejobs.referral.modal.objectiveTitle': 'Objectif',
    'ejobs.referral.modal.objective': 'Le programme de récompense pour la recommandation de candidats vise à offrir une incitation financière aux employés qui recommandent des candidats chez Répit Emergo.',
    'ejobs.referral.modal.conditionsTitle': 'Conditions d\'éligibilité',
    'ejobs.referral.modal.conditionsLead': 'Pour être admissible à la récompense :',
    'ejobs.referral.modal.cond1': 'L\'employé doit envoyer un courriel à recrutement@repitemergo.com en mentionnant le nom et les coordonnées du candidat recommandé. L\'employé doit également fournir une brève explication de son lien avec le candidat.',
    'ejobs.referral.modal.cond2': 'L\'employé doit être en poste au moment où la récompense sera remise.',
    'ejobs.referral.modal.cond3': 'Le candidat recommandé doit envoyer son CV à recrutement@repitemergo.com en indiquant le nom de l\'employé qui l\'a recommandé.',
    'ejobs.referral.modal.cond4': 'Le candidat recommandé doit réussir le processus de recrutement et effectuer un minimum de 8 répits scolaires ou quatre séjours d\'été.',
    'ejobs.referral.modal.detailsTitle': 'Modalités',
    'ejobs.referral.modal.details1': 'Les membres de la famille des employés et les anciens employés de Répit Emergo ne sont pas éligibles à la récompense dans le cadre de ce programme.',
    'ejobs.referral.modal.details2': 'Tous les employés, sauf les membres de la direction, peuvent participer au programme de recommandation de candidats et recevoir une récompense financière.',
    'ejobs.referral.modal.details3': 'Pour chaque recommandation qui aboutit à l\'embauche d\'un candidat recommandé, l\'employé qui a fait la recommandation recevra un <strong>chèque-cadeau de 100 $</strong>, jusqu\'à concurrence de <strong>400 $ par année civile</strong>.',
    'ejobs.referral.modal.details4': 'Les récompenses seront versées en mai, septembre et janvier.',
    'ejobs.referral.modal.disclaimer': 'Le programme de récompense pour la recommandation de candidats est offert à la discrétion de Répit Emergo et l\'organisme se réserve le droit de modifier ou de mettre fin au programme avec ou sans préavis.',
    'ejobs.referral.modal.closing': 'Nous espérons que ce programme incitera nos employés à recommander des candidats de qualité pour les postes chez Répit Emergo et à contribuer ainsi à la croissance de notre organisation.',
    'ejobs.perks.cv.title': 'CV distinctif',
    'ejobs.perks.cv.text': 'As-tu Emergo dans ton CV? Une expérience valorisée par les employeurs du milieu social et éducatif.',

    // Testimonials
    'ejobs.testimonials.quote': '« C\'est un endroit où je peux faire une différence »',
    'ejobs.test.nelson.text': 'Emergo est bien plus qu\'un simple milieu de travail, mais un milieu de vie où chacun peut s\'épanouir. J\'y ai gagné et développé plusieurs qualités interpersonnelles : celle du sens de la responsabilité, du souci du détail, du travail d\'équipe, de la communication et du leadership. Emergo m\'a permis de devenir un meilleur individu sur le plan personnel et professionnel.',
    'ejobs.test.nelson.author': '— Nelson Coto (Neptune), Polytechnique Montréal — Génie biomédical',
    'ejobs.test.laurie.text': 'J\'avais le goût d\'en apprendre plus sur la relation d\'aide et l\'intervention. J\'ai décidé de changer de programme et je suis allée étudier en psychoéducation à l\'Université de Montréal. Je ne sais pas encore quelle carrière je veux, mais je sais que je m\'épanouis en ce moment, autant dans mon travail ici que dans mes études.',
    'ejobs.test.laurie.author': '— Laurie Dufour (Bambou), Université de Montréal — Psychoéducation',
    'ejobs.test.alexis.text': 'Sans ces révélations et sans la fascination pour l\'autisme que nos campeurs ont fait germer en moi, je n\'aurais peut-être jamais développé autant mon intérêt pour la psychiatrie, qui apparaît aujourd\'hui comme la spécialité que j\'aimerais le plus exercer. En espérant qu\'Emergo saura révéler vos passions à vous aussi!',
    'ejobs.test.alexis.author': '— Alexis Robidoux (Fuego), Université de Sherbrooke — Médecine',
    'ejobs.test.fatou.text': 'Je suis étudiante en sciences comptables et mon domaine d\'étude n\'a pas de lien avec mon travail de monitrice. Je quitte Gatineau chaque vendredi à 13h pour arriver à l\'heure pour les répits. Tout cela prouve à quel point je tiens à Emergo. Je ne peux parler de cet amour sans parler des campeurs — j\'ai toujours le sourire aux lèvres quand je les vois arriver au camp.',
    'ejobs.test.fatou.author': '— Fatou Diop (Question), Université du Québec en Outaouais — Sciences comptables',
    'ejobs.test.daphnee.text': 'Arrivée à Emergo, j\'ai tout de suite ressenti ce sentiment d\'appartenance qui se faisait ressentir autant des jeunes que des familles, tellement d\'empathie et de reconnaissance. J\'ai maintenant dans la tête et dans le cœur des amitiés sincères, des souvenirs inoubliables.',
    'ejobs.test.daphnee.author': '— Daphnée Martin (Pyjama), UQAM — Travail social',

    // Scholarships
    'ejobs.schol.lead': 'La Fondation Emergo est fière d\'annoncer qu\'une somme de <strong>20 000 $</strong> a été mise à disposition pour honorer le parcours académique et l\'engagement du personnel étudiant de Répit Emergo.',
    'ejobs.schol.criteria': 'Critères d\'admissibilité :',
    'ejobs.schol.crit1': 'Avoir complété au moins 3 séjours durant l\'été',
    'ejobs.schol.crit2': 'Être engagé·e à participer à des répits scolaires pour l\'année en cours',
    'ejobs.schol.crit3': 'Être inscrit·e à temps plein dans un programme collégial ou universitaire',
    'ejobs.schol.recipients': 'Boursiers 2024-2025',

    // Fields of Study
    'ejobs.fields.lead': 'Tous les domaines et les niveaux d\'études sont les bienvenus!',
    'ejobs.field.adaptScolaire': 'Adaptation scolaire',
    'ejobs.field.adminAffaires': 'Administration des affaires',
    'ejobs.field.artsVisuels': 'Arts visuels',
    'ejobs.field.criminologie': 'Criminologie',
    'ejobs.field.designMultimedia': 'Design / multimédia',
    'ejobs.field.education': 'Éducation',
    'ejobs.field.educSpecialisee': 'Éducation spécialisée',
    'ejobs.field.enseignement': 'Enseignement',
    'ejobs.field.ergotherapie': 'Ergothérapie',
    'ejobs.field.exerciseScience': 'Exercise Science',
    'ejobs.field.genie': 'Génie',
    'ejobs.field.genieAerospatial': 'Génie aérospatial',
    'ejobs.field.gestionCommerce': 'Gestion de commerce',
    'ejobs.field.medecine': 'Médecine',
    'ejobs.field.metiersArt': 'Métiers d\'art',
    'ejobs.field.musique': 'Musique',
    'ejobs.field.neuroscience': 'Neuroscience cognitive',
    'ejobs.field.physiotherapie': 'Physiothérapie',
    'ejobs.field.psychoeducation': 'Psychoéducation',
    'ejobs.field.psychologie': 'Psychologie',
    'ejobs.field.relationsHumaines': 'Relations humaines',
    'ejobs.field.sciencesBiomedicales': 'Sciences biomédicales',
    'ejobs.field.sciencesComptables': 'Sciences comptables',
    'ejobs.field.sciencesNature': 'Sciences de la nature',
    'ejobs.field.sciencesSante': 'Sciences de la santé',
    'ejobs.field.sciencesHumaines': 'Sciences humaines',
    'ejobs.field.sciencesPolitiques': 'Sciences politiques',
    'ejobs.field.sciencesSociales': 'Sciences sociales',
    'ejobs.field.soinsInfirmiers': 'Soins infirmiers',
    'ejobs.field.sociologie': 'Sociologie',
    'ejobs.field.travailSocial': 'Travail social',

    // Institutions
    'ejobs.institutions.title': 'Nos étudiants proviennent de...',
    'ejobs.institutions.subtitle': 'Plus de 25 établissements représentés',
    'ejobs.institutions.universities': 'Universités',
    'ejobs.institutions.cegeps': 'CEGEPs',

    // Photos
    'ejobs.photo.team2024': 'L\'équipe Emergo — Été 2024',
    'ejobs.camp.reviews': '(12 avis)',

    // How to Apply
    'ejobs.apply.email.title': 'Envoyez-nous un courriel',
    'ejobs.apply.email.text': 'Écrivez à <a href="mailto:recrutement@repitemergo.com" style="font-weight:700;">recrutement@repitemergo.com</a> en indiquant :',
    'ejobs.apply.info1': 'Vos coordonnées',
    'ejobs.apply.info2': 'Vos disponibilités',
    'ejobs.apply.info3': 'Les programmes et les postes qui vous intéressent (par exemple : accompagnateur au programme Émergence, les fins de semaine et l\'été)',
    'ejobs.apply.interview.title': 'Pour l\'entretien',
    'ejobs.apply.interview.text': 'On demande de consulter notre site internet pour avoir des bonnes questions à nous poser. On veut que vous soyez au courant et à l\'aise avec tous les détails concernant l\'emploi.',
    'ejobs.apply.note.title': 'Bon à savoir',
    'ejobs.apply.note.text': 'C\'est tout de même important de vous renseigner sur l\'autisme pour en apprendre un peu sur notre clientèle, mais <strong>la connaissance de l\'autisme n\'est pas un prérequis</strong> pour travailler à Emergo.',

    // CTA
    'ejobs.cta.title': 'Prêt·e à vivre l\'expérience Emergo?',
    'ejobs.cta.text': 'Rejoignez une équipe passionnée et faites une différence dans la vie des personnes autistes et de leurs familles.',
    'ejobs.cta.button': 'Postuler maintenant — recrutement@repitemergo.com',

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
    'cal.price.9nights': '9 nuits — 1 485 $',
    'cal.age.adaptatou': '7 à 17 ans',
    'cal.ratio.adaptatou': 'Ratio 1:2',
    'cal.age.reve': '16 ans et +',
    'cal.autonomous': 'Autonomes',
    'cal.price.10nights': '10 nuits — 1 640 $',
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

    // Reports page
    'reports.label': 'Transparence',
    'reports.title': 'Documents et rapports',
    'reports.subtitle': 'Accédez à nos rapports annuels et documents officiels.',
    'reports.back': 'Retour à l\'accueil',
    'reports.annual.label': 'Transparence',
    'reports.annual.title': 'Rapports annuels',
    'reports.annual.lead': 'Chaque année, nous rendons compte de nos activités, de notre gestion et de nos résultats. Consultez nos rapports annuels pour suivre l\'évolution d\'Emergo.',
    'reports.annual.older': 'Rapports antérieurs',
    'reports.coming': 'Bientôt disponible',
    'reports.download': 'Télécharger le PDF',
    'reports.docs.label': 'Gouvernance',
    'reports.docs.title': 'Documents officiels',
    'reports.docs.bylaws': 'Règlements généraux',
    'reports.docs.bylaws.desc': 'Juin 2022',
    'reports.docs.privacy': 'Politique de confidentialité',
    'reports.docs.privacy.desc': 'Nos engagements envers vos données personnelles',
    'reports.annual.2024-25': '2024-2025',
    'reports.annual.2023-24': '2023-2024',
    'reports.annual.2022-23': '2022-2023',
    'reports.annual.2021-22': '2021-2022',
    'reports.annual.2020-21': '2020-2021',
    'reports.annual.2019-20': '2019-2020',
    'reports.annual.2018-19': '2018-2019',
    'reports.annual.2017-18': '2017-2018',
    'reports.annual.2016-17': '2016-2017',
    'reports.annual.2015-16': '2015-2016',
    'reports.annual.2014-15': '2014-2015',
    'reports.annual.2013-14': '2013-2014',
    'reports.annual.2012-13': '2012-2013',
    'reports.annual.2011-12': '2011-2012',
    'reports.annual.2010-11': '2010-2011',
    'reports.annual.2009-10': '2009-2010',
    'reports.annual.2008-09': '2008-2009',
    'reports.annual.2007-08': '2007-2008',

    // Information booklet page (renseignements)
    'info.label': 'Pour les familles',
    'info.title': 'Informations importantes',
    'info.subtitle': 'Tout ce que vous devez savoir pour préparer le séjour de votre enfant avec Répit Emergo.',
    'info.back': 'Retour à l\'accueil',
    'info.summer.title': 'Informations — Répit estival',
    'info.summer.location.title': 'Lieu des séjours',
    'info.summer.location.label': 'Camp de Grandpré',
    'info.summer.location.map': 'Voir sur Google Maps →',
    'info.summer.location.reviews': '(12 avis sur Google)',
    'info.summer.hours.title': 'Heures d\'arrivée et de départ',
    'info.summer.hours.arrival': 'Arrivée :',
    'info.summer.hours.departure': 'Départ :',
    'info.summer.meds.title': 'Médicaments',
    'info.summer.meds.dispill': 'Utilisation obligatoire du système Dispill avec copie de l\'ordonnance valide',
    'info.summer.meds.asneeded': 'Médicaments au besoin dans contenant original',
    'info.summer.meds.coordinator': 'Remettre au coordonnateur des soins de santé',
    'info.summer.diet.title': 'Diète spéciale',
    'info.summer.diet.provide': 'Les repas sont fournis par le camp. Si votre enfant a une <strong>diète spéciale</strong> (allergies, intolérances, restrictions alimentaires), vous devez fournir ses repas et collations.',
    'info.summer.diet.strict': 'INTERDICTION STRICTE',
    'info.summer.diet.nuts': 'Nourriture contenant des traces de noix',
    'info.summer.health.title': 'Consignes santé',
    'info.summer.health.cardiac': 'Certificat médical requis si maladie cardiaque',
    'info.summer.health.contagious': 'Informer du staff si maladie contagieuse dans les 15 jours précédentes',
    'info.summer.health.diapers': 'Prévoir couches si nécessaire',
    'info.summer.supplies.title': 'Articles à apporter',
    'info.summer.supplies.sunscreen': 'Crème solaire FPS 30+',
    'info.summer.supplies.insect': 'Chasse-moustiques',
    'info.summer.supplies.waterbottle': 'Gourde d\'eau réutilisable',
    'info.summer.supplies.communication': 'Outil de communication (pictogrammes, cahier de communication, etc.)',
    'info.summer.supplies.healthcard': 'Copie de la carte d\'assurance-maladie',
    'info.summer.supplies.plan': 'Plan d\'intervention ou document d\'accommodation',
    'info.summer.clothes.title': 'Vêtements',
    'info.summer.clothes.underwear': '6 sous-vêtements',
    'info.summer.clothes.socks': '6 paires de bas',
    'info.summer.clothes.warmsocks': '2 paires de bas chauds',
    'info.summer.clothes.tshirts': '6 t-shirts',
    'info.summer.clothes.longsleeves': '2 chandails manches longues',
    'info.summer.clothes.shorts': '3 pantalons courts',
    'info.summer.clothes.pants': '2 pantalons longs',
    'info.summer.clothes.pajamas': '2 pyjamas',
    'info.summer.clothes.swimsuit': '1 maillot de bain',
    'info.summer.clothes.hat': '1 chapeau ou casquette',
    'info.summer.clothes.windbreaker': '1 coupe-vent',
    'info.summer.clothes.raincoat': '1 imperméable',
    'info.summer.clothes.rainpants': '1 pantalon imperméable',
    'info.summer.clothes.shoes': 'Chaussures fermées',
    'info.summer.clothes.sandals': 'Sandales ou tongs',
    'info.summer.clothes.slippers': 'Pantoufles',
    'info.summer.clothes.rainboots': 'Bottes de pluie',
    'info.summer.clothes.laundry': 'Sac pour linge sale',
    'info.summer.clothes.washcloths': '4 débarbouillettes',
    'info.summer.clothes.towels': '2 serviettes de bain',
    'info.summer.clothes.beachtowels': '2 serviettes de plage',
    'info.summer.clothes.shampoo': 'Shampooing personnel',
    'info.summer.clothes.soap': 'Savon',
    'info.summer.clothes.deodorant': 'Déodorant',
    'info.summer.clothes.toothbrush': 'Brosse à dents',
    'info.summer.clothes.toothpaste': 'Dentifrice',
    'info.summer.clothes.brush': 'Brosse ou peigne',
    'info.summer.clothes.shaving': 'Crème à raser ou rasoir si nécessaire',
    'info.summer.reminders.title': 'Rappels importants',
    'info.summer.reminders.label': 'Tous les effets personnels doivent être identifiés avec le nom',
    'info.summer.reminders.cancellation': 'Les annulations doivent être faites par courriel',
    'info.summer.reminders.receipt': 'Les reçus seront envoyés en septembre',
    'info.school.title': 'Informations — Répits scolaires',
    'info.school.subtitle': 'Fins de semaine de septembre à mai',
    'info.school.contact.title': 'Coordonnées',
    'info.school.contact.office': 'Bureau :',
    'info.school.contact.camp': 'Camp :',
    'info.school.contact.reviews': '(12 avis sur Google)',
    'info.school.contact.maplink': 'Voir sur Google Maps →',
    'info.school.contact.phone': 'Téléphone :',
    'info.school.times.title': 'Départ et retour',
    'info.school.times.departure': 'Départ :',
    'info.school.times.office': 'Accueil à 18h au bureau',
    'info.school.times.camp': 'Possibilité au camp vers 19h45',
    'info.school.times.return': 'Retour :',
    'info.school.times.returnoffice': '16h au bureau',
    'info.school.times.returncamp': 'Ou 14h15 au camp',
    'info.school.times.fee': 'Amende de 1$/minute après 16h15',
    'info.school.times.note1': 'Important :',
    'info.school.times.note2': 'Transport adapté non accepté — présence du parent obligatoire au départ et au retour',
    'info.school.meds.title': 'Médicaments',
    'info.school.meds.dispill': 'Utilisation obligatoire du système Dispill avec copie de l\'ordonnance valide',
    'info.school.meds.asneeded': 'Médicaments au besoin dans contenant original',
    'info.school.meds.coordinator': 'Remettre au coordonnateur des soins de santé',
    'info.school.diet.title': 'Diète spéciale',
    'info.school.diet.provide': 'Les repas sont fournis par le camp. Si votre enfant a une <strong>diète spéciale</strong> (allergies, intolérances, restrictions alimentaires), vous devez fournir ses repas et collations.',
    'info.school.diet.strict': 'INTERDICTION STRICTE',
    'info.school.diet.nuts': 'Nourriture contenant des traces de noix',
    'info.school.clothes.title': 'Vêtements',
    'info.school.clothes.note': 'Pour un séjour d\'une fin de semaine :',
    'info.school.clothes.underwear': '4 sous-vêtements',
    'info.school.clothes.socks': '4 paires de bas',
    'info.school.clothes.warmsocks': '2 paires de bas chauds',
    'info.school.clothes.tshirts': '2 t-shirts',
    'info.school.clothes.longsleeves': '2 chandails manches longues',
    'info.school.clothes.shorts': '1 pantalon court',
    'info.school.clothes.pants': '2 pantalons longs',
    'info.school.clothes.pajamas': '2 pyjamas',
    'info.school.clothes.hat': 'Chapeau ou casquette',
    'info.school.clothes.windbreaker': 'Coupe-vent',
    'info.school.clothes.raincoat': 'Imperméable',
    'info.school.clothes.rainpants': 'Pantalon imperméable',
    'info.school.clothes.shoes': 'Chaussures fermées',
    'info.school.clothes.slippers': 'Pantoufles',
    'info.school.clothes.laundry': 'Sac pour linge sale',
    'info.school.clothes.washcloths': '2 débarbouillettes',
    'info.school.clothes.towels': '1 serviette de bain',
    'info.school.clothes.shampoo': 'Shampooing personnel',
    'info.school.clothes.deodorant': 'Déodorant',
    'info.school.clothes.soap': 'Savon',
    'info.school.clothes.brush': 'Peigne ou brosse',
    'info.school.clothes.toothbrush': 'Brosse à dents',
    'info.school.clothes.toothpaste': 'Dentifrice',
    'info.school.clothes.seasonal': 'Selon la température :',
    'info.school.clothes.sunscreen': 'Crème solaire',
    'info.school.clothes.insect': 'Chasse-moustiques',
    'info.school.clothes.rainboots': 'Bottes de pluie',
    'info.school.clothes.wintersuit': 'Ensemble de neige',
    'info.school.clothes.tuque': 'Tuque',
    'info.school.clothes.mittens': 'Mitaines',
    'info.school.clothes.scarf': 'Foulard',
    'info.school.communication.title': 'Outils de communication',
    'info.school.communication.notebook': 'Apporter cahier de communication',
    'info.school.communication.pictograms': 'Pictogrammes ou autres outils de communication si nécessaire',
    'info.school.communication.plan': 'Transmettre le plan d\'intervention ou document d\'accommodation à <a href="mailto:info@repitemergo.com" style="color: var(--blue); text-decoration: none;">info@repitemergo.com</a>',
    'info.contact.title': 'Des questions?',
    'info.contact.text': 'N\'hésitez pas à nous contacter. Notre équipe est disponible pour vous aider.',
    'info.contact.phone': 'Téléphone :',
    'info.contact.email': 'Courriel :',
  },
  en: {
    // Nav
    'nav.services': 'Our Services',
    'nav.member': 'Become a member',
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
    'nav.info': 'Information',
    'nav.reports': 'Reports & Documents',
    'nav.lang': 'FR',

    // Hero
    'hero.badge': '50 Years of Respite — 1976-2026',
    'hero.title1': 'Autism gives',
    'hero.title2': 'no respite...',
    'hero.title3': 'Emergo does!',
    'hero.lead': 'Since 1976, we have been offering specialized respite services to families living with autistic individuals. A safe, stimulating and adapted environment — so that every family can breathe.',
    'hero.cta1': 'Become a Member',
    'hero.cta2': 'Discover Our Programs',

    // Picto Mode
    'picto.hero.title': 'My Adventure at Camp Emergo',
    'picto.hero.hello': 'Hello!',
    'picto.hero.camp': 'Camp',
    'picto.hero.adventure': 'Adventure',
    'picto.hero.happy': 'Happy',
    'picto.hero.text': 'I\'m going to Camp Emergo in Otterburn Park very soon. It\'s a place made just for me.',
    'picto.arrival.title': 'My arrival',
    'picto.arrival.text': 'When I arrive, friendly people will be there to say hello. They\'ll help me find my spot. It\'s reassuring!',
    'picto.arrival.arrive': 'I arrive',
    'picto.arrival.nice': 'Friendly people',
    'picto.arrival.hello': 'Hello!',
    'picto.arrival.place': 'My spot',
    'picto.support.title': 'My counselor',
    'picto.support.text': 'A counselor will always be with me to make sure I have fun. I\'ll meet different counselors throughout the day.',
    'picto.support.counselor': 'Counselor',
    'picto.support.always': 'Always with me',
    'picto.support.fun': 'I have fun',
    'picto.activities.title': 'My Activities',
    'picto.activities.text': 'At camp, I do lots of fun activities with my friends and my counselor.',
    'picto.activities.pool': 'Pool',
    'picto.activities.games': 'Games',
    'picto.activities.painting': 'Painting',
    'picto.activities.drawing': 'Drawing',
    'picto.activities.music': 'Music',
    'picto.activities.walk': 'Forest walk',
    'picto.activities.ball': 'Ball',
    'picto.activities.campfire': 'Campfire',
    'picto.activities.fun': 'I have fun!',
    'picto.mySupport.title': 'My Support',
    'picto.mySupport.text': 'If I don\'t feel well or if I need something, my counselor is there to help me.',
    'picto.mySupport.question': 'Question',
    'picto.mySupport.help': 'Help',
    'picto.mySupport.counselor': 'Counselor',
    'picto.mySupport.rest': 'Rest',
    'picto.mySupport.calm': 'Calm',
    'picto.mySupport.banner': 'I can always ask for help. My counselor is always there for me.',
    'picto.friends.title': 'My New Friends',
    'picto.friends.text': 'At camp, I meet other children and adults. We do activities together and have fun. Everyone is kind and welcoming.',
    'picto.friends.friends': 'Friends',
    'picto.friends.children': 'Children',
    'picto.friends.adults': 'Adults',
    'picto.friends.play': 'Play together',
    'picto.friends.happy': 'Happy',
    'picto.departure.title': 'My Departure',
    'picto.departure.text': 'Camp is over. I say goodbye to my friends and my counselor. I go back home with my family.',
    'picto.departure.goodbye': 'Goodbye',
    'picto.departure.friends': 'Friends',
    'picto.departure.car': 'Car',
    'picto.departure.home': 'Home',
    'picto.departure.memories': 'Memories',
    'picto.reflection.title': 'Reflection',
    'picto.reflection.text': 'Camp was a great adventure! I learned things, I made friends, and I had fun. I can\'t wait to come back!',
    'picto.reflection.friends': 'My friends',
    'picto.reflection.fun': 'Fun',
    'picto.reflection.excited': 'I can\'t wait!',
    'picto.reflection.comeback': 'Come back',
    'picto.schedule.title': 'My day at camp',
    'picto.schedule.wakeup': 'Wake up',
    'picto.schedule.breakfast': 'Breakfast',
    'picto.schedule.gathering': 'Gathering',
    'picto.schedule.dance': 'Dancing',
    'picto.schedule.costumes': 'Costumes',
    'picto.schedule.activities1': 'Activities',
    'picto.schedule.hiking': 'Hiking',
    'picto.schedule.pool': 'Pool',
    'picto.schedule.lunch': 'Lunch',
    'picto.schedule.interest': 'Free time',
    'picto.schedule.games1': 'Games',
    'picto.schedule.snack': 'Snack',
    'picto.schedule.activities2': 'Activities',
    'picto.schedule.games2': 'Games',
    'picto.schedule.drawing': 'Drawing',
    'picto.schedule.dinner': 'Dinner',
    'picto.schedule.campfire': 'Campfire',
    'picto.schedule.evening': 'Party',
    'picto.schedule.movie': 'Movie',
    'picto.schedule.bedtime': 'Bedtime routine',
    'picto.schedule.sleep': 'Sleep',
    'picto.rules.title': 'Camp rules',
    'picto.rules.group': 'Stay with the group',
    'picto.rules.help': 'Ask for help if needed',
    'picto.rules.kind': 'Be kind to friends',
    'picto.rules.water': 'Drink water',
    'picto.rules.listen': 'Listen to my counselor',
    'picto.feelings.title': 'How am I feeling?',
    'picto.feelings.text': 'I can show my counselor how I feel.',
    'picto.feelings.happy': 'Happy',
    'picto.feelings.sad': 'Sad',
    'picto.feelings.needhelp': 'Need help',
    'picto.feelings.hungry': 'I\'m hungry',
    'picto.feelings.thirsty': 'I\'m thirsty',
    'picto.feelings.tired': 'Tired',
    'picto.feelings.home': 'Home',
    'picto.bag.title': 'My bag for camp',
    'picto.bag.pajamas': 'Pajamas',
    'picto.bag.tshirts': 'T-shirts',
    'picto.bag.pants': 'Pants',
    'picto.bag.shorts': 'Shorts',
    'picto.bag.socks': 'Socks',
    'picto.bag.shoes': 'Shoes',
    'picto.bag.rainboots': 'Rain boots',
    'picto.bag.swimsuit': 'Swimsuit',
    'picto.bag.towel': 'Towel',
    'picto.bag.toothbrush': 'Toothbrush & toothpaste',
    'picto.bag.hat': 'Hat',
    'picto.bag.sunscreen': 'Sunscreen',
    'picto.bag.raincoat': 'Raincoat',
    'picto.bag.waterbottle': 'Water bottle',
    'picto.bag.bugspray': 'Bug spray',

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
    'reve.video.label': 'Watch',
    'reve.video.title': 'Un rêve à réaliser on TV',
    'reve.video.desc': 'A few scenes from the <em>Un rêve à réaliser</em> program in the summer of 2020, featured in the TVA report <strong>Autiste, amour et amitié</strong>. The segment starts at 9 minutes 30 seconds.',
    'reve.video.watch': 'Watch the report on QUB',
    'reve.video.time': 'Starts at 9 min 30',
    'reve.video.text1': 'This program allows independent autistic individuals to thrive in a more normalizing environment and take on a wide range of challenges suited to their abilities.',
    'reve.video.text2': 'Participants live in small groups and take part, each in their own way, in various activities of daily life. The ratio is three counselors for nine participants.',
    'reve.villa.label': 'The location',
    'reve.villa.title': 'Villa Marie-Rose',
    'reve.villa.text': 'Nestled in nature in the Laurentians, Villa Marie-Rose offers a peaceful and modern setting for our stays. Participants are lodged and fed in comfortable facilities, surrounded by lake, forest and outdoor activity spaces.',
    'reve.villa.photos': 'See photos of the Villa →',
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
    'footer.about': 'Répit Emergo',
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
    'member.step1.more': 'More details →',
    'member.modal.title': 'Parents helping parents',
    'member.modal.intro': 'Emergo has always been, at its core, "parents helping parents" catch their breath and recharge their batteries.',
    'member.modal.privileges.title': 'Privileges of an Emergo parent member',
    'member.modal.priv1': 'Being part of an organization founded and run by parents of autistic children to provide respite to families living with an autistic person or someone with another pervasive developmental disorder (PDD).',
    'member.modal.priv2': 'Having access to trustworthy respite services where your child can have fun and make friends in a safe and stimulating outdoor environment.',
    'member.modal.priv3': 'Benefiting from a supervision ratio of one to three participants per well-trained and experienced support worker for your child.',
    'member.modal.priv4': 'Enrolling your child in whichever of Emergo\'s four programs best meets their needs: Émergence (socialization), iDÉFIx (personalized support), Adaptatou (integration), or Un rêve à réaliser (autonomy).',
    'member.modal.priv5': 'Receiving registration forms in a timely manner to plan your free time and couple or family activities that are complicated or impossible with your autistic child.',
    'member.modal.priv6': 'Receiving the newsletter by email to ensure you always have all relevant information quickly.',
    'member.modal.priv7': 'Attending the annual meeting, exercising your right to vote, asking questions, submitting ideas, and interacting with board members, management, and other parents.',
    'member.modal.involvement.title': 'Involvement of an Emergo parent member',
    'member.modal.impl1': 'Regularly paying your membership fee to maintain access to respite services.',
    'member.modal.impl2': 'Carefully completing registration forms, signing required consent forms to keep your child\'s file complete and up to date, and paying stay fees.',
    'member.modal.impl3': 'Ensuring you provide all items necessary for your child\'s stay (prescriptions and medications, season-appropriate clothing, food for special diets, etc.)',
    'member.modal.impl4': 'Providing your email address to reduce postal costs and Emergo\'s ecological footprint.',
    'member.modal.impl5': 'Participating as much as possible in volunteer tasks, the annual work bee, promotional events, and fundraising activities to support Emergo, build connections with other parents and staff, and develop a sense of belonging.',
    'member.modal.impl6': 'Contributing to Emergo\'s development by working on a committee or running for the board of directors at the annual meeting.',
    'member.modal.impl7': 'The Emergo parent member thus becomes a supported-supporter and strengthens the chain of solidarity that must unite all Emergo parents to ensure the sustainability of respite services.',
    'member.step2.title': '2. Participant File',
    'member.step2.text': 'To open your child\'s file at Emergo, you must complete the participant file, which will be sent to you by email.',
    'member.step3.title': '3. Registration Form',
    'member.step3.text': 'The registration form will be sent by email upon receipt of the file and membership fees.',

    // Jobs
    'jobs.label': 'Student Jobs',
    'jobs.title': 'Join our team!',
    'jobs.lead': 'Are you a student looking for a high-impact social job? Our mission at Emergo is to offer autistic individuals an unforgettable camp experience. Come help us make it happen!',
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

    // Emplois page — Summer Programs
    'ejobs.emergence.title': 'Émergence Program — 50 positions',
    'ejobs.emergence.desc': 'Our main program! At Camp de Grandpré, Otterburn Park.',
    'ejobs.summer.training': 'Training (mandatory)',
    'ejobs.summer.stay1': 'Stay 1',
    'ejobs.summer.stay2': 'Stay 2',
    'ejobs.summer.stay3': 'Stay 3',
    'ejobs.summer.stay4': 'Stay 4',
    'ejobs.summer.stay5': 'Stay 5',
    'ejobs.summer.training.date': 'June 1–5 and June 10–11',
    'ejobs.summer.stay1.date': 'June 12–21',
    'ejobs.summer.stay2.date': 'June 26 – July 5',
    'ejobs.summer.stay3.date': 'July 10–19',
    'ejobs.summer.stay4.date': 'July 24 – August 2',
    'ejobs.summer.stay5.date': 'August 7–16',
    'ejobs.summer.salary.perStay': 'Flat rate per stay: $1,256.25',
    'ejobs.summer.salary.fullSummer': 'Total gross summer salary:',
    'ejobs.summer.salary.label': 'Gross salary',
    'ejobs.summer.salary.training': 'Training',
    'ejobs.summer.salary.stays': '5 stays',
    'ejobs.summer.salary.watches': 'Night watches',
    'ejobs.summer.salary.bonus': 'Full summer bonus',
    'ejobs.summer.salary.total': 'Total',
    'ejobs.summer.salary.totalAmount': 'Over $7,400',
    'ejobs.emergence.positions': 'Positions in Émergence Program',
    'ejobs.pos.manager': 'Program Manager',
    'ejobs.pos.teamCoord': 'Team Coordinators',
    'ejobs.pos.healthCoord': 'Health Care Coordinators',
    'ejobs.pos.activityCoord': 'Activity Coordinator',
    'ejobs.pos.support': 'Support Workers',
    'ejobs.pos.batWorkers': 'Night Watchers',
    'ejobs.pos.animators': 'Activity Leaders',
    'ejobs.idefix.title': 'iDÉFIx and Adaptatou Programs — Camp de Grandpré',
    'ejobs.idefix.desc': 'Intensive support and integration at the same site as Émergence.',
    'ejobs.pos.coord': 'Coordinator',
    'ejobs.reve.title': 'Un Rêve à Réaliser Program — Villa Marie-Rose',
    'ejobs.reve.desc': '9 positions — For autonomous autistic individuals 16 years and older. Val-des-Lacs.',
    'ejobs.reve.dates.title': '2026 session dates (4 stays of 10 days)',
    'ejobs.reve.stay1': 'Stay 1 (English-speaking)',
    'ejobs.reve.stay2': 'Stay 2',
    'ejobs.reve.stay3': 'Stay 3',
    'ejobs.reve.stay4': 'Stay 4',
    'ejobs.reve.stay1.date': 'June 26 – July 6',
    'ejobs.reve.stay2.date': 'July 10–20',
    'ejobs.reve.stay3.date': 'July 24 – August 3',
    'ejobs.reve.stay4.date': 'August 7–17',
    'ejobs.reve.expenses': 'Meals and accommodation are included in the session cost.',
    'ejobs.pos.actSoins': 'Activity & Care Coordinator',

    // School Year Respite
    'ejobs.school.salary.title': 'Support Worker Salary — School Year Respite',
    'ejobs.school.salary.2nights': '2-Night Respite',
    'ejobs.school.salary.3nights': '3-Night Respite',
    'ejobs.school.salary.christmas': 'Christmas Respite (5 nights)',
    'ejobs.school.salary.totalDesc': 'Total salary for someone participating in all respites',
    'ejobs.school.salary.bonusDesc': '$175 bonus...',
    'ejobs.school.attendance': 'We expect to welcome <strong>20 participants</strong> and around <strong>thirty staff members</strong> per respite!',
    'ejobs.school.transport': 'Transportation: provided from our Montreal office',
    'ejobs.school.lodging': 'Lodging: in modern, comfortable and well-equipped chalets',
    'ejobs.school.return': 'Return: transportation provided back to Montreal at end of respite',
    'ejobs.school.flexible': 'Flexible schedule: you choose which respites to participate in based on your availability',

    // Daily Schedule
    'ejobs.sched.8h': 'Wake-up. Brief hygiene period, then to the cafeteria.',
    'ejobs.sched.8h30': 'Breakfast. Followed by interest time: stimulating or relaxing activities. Preparation for the gathering (makeup, costumes).',
    'ejobs.sched.9h45': 'The gathering! Songs, dances, costumes and stories!',
    'ejobs.sched.10h': 'Activities! Board games, outdoor games, sensory games, forest walks, etc. We encourage participation and adapt as needed.',
    'ejobs.sched.12h': 'Lunch at the cafeteria.',
    'ejobs.sched.13h': 'Interest time — quiet or action-packed! Journal writing. Staff rotation.',
    'ejobs.sched.14h30': 'Snack under the covered pavilion.',
    'ejobs.sched.15h': 'More activities!',
    'ejobs.sched.17h': 'Dinner at the cafeteria.',
    'ejobs.sched.18h30': 'Group activity: campfire, party night, movie night...',
    'ejobs.sched.19h15': 'Bedtime routine. Hygiene care, quiet activities (reading, board games).',
    'ejobs.sched.20h15': 'Night watchers take over. At 8:30 PM, support workers head to their chalets.',
    'ejobs.sched.time.8h': '8 AM',
    'ejobs.sched.time.8h30': '8:30 AM',
    'ejobs.sched.time.9h45': '9:45 AM',
    'ejobs.sched.time.10h': '10 AM',
    'ejobs.sched.time.12h': '12 PM',
    'ejobs.sched.time.13h': '1 PM',
    'ejobs.sched.time.14h30': '2:30 PM',
    'ejobs.sched.time.15h': '3 PM',
    'ejobs.sched.time.17h': '5 PM',
    'ejobs.sched.time.18h30': '6:30 PM',
    'ejobs.sched.time.19h15': '7:15 PM',
    'ejobs.sched.time.20h15': '8:15 PM',

    // Teams & Work
    'ejobs.teams.ratios': 'We form <strong>teams of four support workers for three participants</strong>. Ratios range from 1:1 to 1:3 depending on programs, with rotations every three hours.',
    'ejobs.teams.size': 'You\'ll be part of a team with <strong>up to 30 support workers</strong>, supported by a dynamic management team. All employees are university or college students.',
    'ejobs.teams.role': 'As a team member, you\'ll have the opportunity to work with autistic children, adolescents and adults. You\'ll be responsible for:',
    'ejobs.teams.resp1': 'Supporting autistic individuals in their daily lives',
    'ejobs.teams.resp2': 'Adapting group activities',
    'ejobs.teams.resp3': 'Personal care (e.g., assisting with showers)',
    'ejobs.teams.resp4': 'Safety and well-being of participants',
    'ejobs.teams.complex': 'You may face complex situations where you need to manage participants\' strong emotions. You\'ll be supported through coordinators\' knowledge and the wealth of advice and information in individual intervention plans, which are reviewed by the team before participants arrive.',
    'ejobs.teams.offer.title': 'What we offer:',
    'ejobs.teams.offer.lodging': 'Room and board in modern buildings, in the heart of nature, with colleagues who are there for the right reasons.',
    'ejobs.teams.offer.autism': 'Knowledge of autism is not a prerequisite. It\'s important to educate yourself, but we\'ll train you on site!',

    // Perks
    'ejobs.perks.scholarships.title': 'Scholarships',
    'ejobs.perks.scholarships.text': 'The Emergo Foundation offers scholarships from $1,000 to $1,750 to dedicated employees. $20,000 distributed in 2024-2025!',
    'ejobs.perks.hours.title': 'Recognized Hours',
    'ejobs.perks.hours.text': 'Possibility to have your work hours recognized to advance salary scales in public organizations (school boards, health centers, etc.).',
    'ejobs.perks.referral.title': 'Referral Reward',
    'ejobs.perks.referral.text': 'Receive a gift card for each recommended candidate who joins the team!',
    'ejobs.perks.referral.more': 'Learn more →',
    'ejobs.referral.modal.title': 'Candidate Referral Reward Program',
    'ejobs.referral.modal.objectiveTitle': 'Objective',
    'ejobs.referral.modal.objective': 'The candidate referral reward program aims to provide a financial incentive to employees who refer candidates to Répit Emergo.',
    'ejobs.referral.modal.conditionsTitle': 'Eligibility Conditions',
    'ejobs.referral.modal.conditionsLead': 'To be eligible for the reward:',
    'ejobs.referral.modal.cond1': 'The employee must send an email to recrutement@repitemergo.com mentioning the name and contact information of the referred candidate. The employee must also provide a brief explanation of their relationship with the candidate.',
    'ejobs.referral.modal.cond2': 'The employee must be actively employed at the time the reward is issued.',
    'ejobs.referral.modal.cond3': 'The referred candidate must send their CV to recrutement@repitemergo.com indicating the name of the employee who referred them.',
    'ejobs.referral.modal.cond4': 'The referred candidate must successfully complete the recruitment process and work a minimum of 8 school respites or four summer stays.',
    'ejobs.referral.modal.detailsTitle': 'Terms',
    'ejobs.referral.modal.details1': 'Family members of employees and former Répit Emergo employees are not eligible for the reward under this program.',
    'ejobs.referral.modal.details2': 'All employees, except management, may participate in the candidate referral program and receive a financial reward.',
    'ejobs.referral.modal.details3': 'For each referral that results in the hiring of a recommended candidate, the referring employee will receive a <strong>$100 gift card</strong>, up to a maximum of <strong>$400 per calendar year</strong>.',
    'ejobs.referral.modal.details4': 'Rewards will be issued in May, September and January.',
    'ejobs.referral.modal.disclaimer': 'The candidate referral reward program is offered at the discretion of Répit Emergo and the organization reserves the right to modify or terminate the program with or without notice.',
    'ejobs.referral.modal.closing': 'We hope this program will encourage our employees to refer quality candidates for positions at Répit Emergo and contribute to the growth of our organization.',
    'ejobs.perks.cv.title': 'Distinctive CV',
    'ejobs.perks.cv.text': 'Do you have Emergo on your CV? An experience valued by employers in the social and educational sectors.',

    // Testimonials
    'ejobs.testimonials.quote': '« It\'s a place where I can make a difference »',
    'ejobs.test.nelson.text': 'Emergo is much more than a workplace — it\'s a living environment where everyone can thrive. I gained and developed many interpersonal skills: responsibility, attention to detail, teamwork, communication and leadership. Emergo helped me become a better person both personally and professionally.',
    'ejobs.test.nelson.author': '— Nelson Coto (Neptune), Polytechnique Montreal — Biomedical Engineering',
    'ejobs.test.laurie.text': 'I wanted to learn more about counseling and intervention. I decided to change programs and studied psychoeducation at Université de Montréal. I\'m not sure what career I want yet, but I know I\'m thriving right now, both in my work here and in my studies.',
    'ejobs.test.laurie.author': '— Laurie Dufour (Bambou), UdeM — Master\'s in Psychoeducation',
    'ejobs.test.alexis.text': 'Without these revelations and without the fascination for autism that our campers sparked in me, I might never have developed such a strong interest in psychiatry, which now appears as the specialty I\'d most like to practice. Hoping Emergo will reveal your passions too!',
    'ejobs.test.alexis.author': '— Alexis Robidoux (Fuego), Université de Sherbrooke — Medicine',
    'ejobs.test.fatou.text': 'I\'m a student in accounting sciences and my field of study has nothing to do with my monitor work. I leave Gatineau every Friday at 1 PM to get to respite on time. This proves how much I care about Emergo. I can\'t speak of this love without talking about the campers — I always have a smile on my face when I see them arrive at camp.',
    'ejobs.test.fatou.author': '— Fatou Diop (Question), Université du Québec en Outaouais — Accounting Sciences',
    'ejobs.test.daphnee.text': 'When I arrived at Emergo, I immediately felt this sense of belonging that was felt by both youth and families, so much empathy and recognition. I now have in my mind and heart sincere friendships and unforgettable memories.',
    'ejobs.test.daphnee.author': '— Daphnée Martin (Pyjama), UQAM — Social Work',

    // Scholarships
    'ejobs.schol.lead': 'The Emergo Foundation is proud to announce that <strong>$20,000</strong> has been made available to honor the academic journey and commitment of Répit Emergo student staff.',
    'ejobs.schol.criteria': 'Eligibility Criteria:',
    'ejobs.schol.crit1': 'Completed at least 3 stays during the summer',
    'ejobs.schol.crit2': 'Committed to participating in school year respites for the current year',
    'ejobs.schol.crit3': 'Enrolled full-time in a college or university program',
    'ejobs.schol.recipients': 'Scholarship Recipients 2024-2025',

    // Fields of Study
    'ejobs.fields.lead': 'All fields and levels of study are welcome!',
    'ejobs.field.adaptScolaire': 'School Adaptation',
    'ejobs.field.adminAffaires': 'Business Administration',
    'ejobs.field.artsVisuels': 'Visual Arts',
    'ejobs.field.criminologie': 'Criminology',
    'ejobs.field.designMultimedia': 'Design / Multimedia',
    'ejobs.field.education': 'Education',
    'ejobs.field.educSpecialisee': 'Special Education',
    'ejobs.field.enseignement': 'Teaching',
    'ejobs.field.ergotherapie': 'Occupational Therapy',
    'ejobs.field.exerciseScience': 'Exercise Science',
    'ejobs.field.genie': 'Engineering',
    'ejobs.field.genieAerospatial': 'Aerospace Engineering',
    'ejobs.field.gestionCommerce': 'Commerce Management',
    'ejobs.field.medecine': 'Medicine',
    'ejobs.field.metiersArt': 'Craft Trades',
    'ejobs.field.musique': 'Music',
    'ejobs.field.neuroscience': 'Cognitive Neuroscience',
    'ejobs.field.physiotherapie': 'Physiotherapy',
    'ejobs.field.psychoeducation': 'Psychoeducation',
    'ejobs.field.psychologie': 'Psychology',
    'ejobs.field.relationsHumaines': 'Human Relations',
    'ejobs.field.sciencesBiomedicales': 'Biomedical Sciences',
    'ejobs.field.sciencesComptables': 'Accounting Sciences',
    'ejobs.field.sciencesNature': 'Natural Sciences',
    'ejobs.field.sciencesSante': 'Health Sciences',
    'ejobs.field.sciencesHumaines': 'Human Sciences',
    'ejobs.field.sciencesPolitiques': 'Political Sciences',
    'ejobs.field.sciencesSociales': 'Social Sciences',
    'ejobs.field.soinsInfirmiers': 'Nursing',
    'ejobs.field.sociologie': 'Sociology',
    'ejobs.field.travailSocial': 'Social Work',

    // Institutions
    'ejobs.institutions.title': 'Our students come from...',
    'ejobs.institutions.subtitle': 'Over 25 institutions represented',
    'ejobs.institutions.universities': 'Universities',
    'ejobs.institutions.cegeps': 'CEGEPs',

    // Photos
    'ejobs.photo.team2024': 'The Emergo Team — Summer 2024',
    'ejobs.camp.reviews': '(12 reviews)',

    // How to Apply
    'ejobs.apply.email.title': 'Send us an email',
    'ejobs.apply.email.text': 'Write to <a href="mailto:recrutement@repitemergo.com" style="font-weight:700;">recrutement@repitemergo.com</a> and indicate:',
    'ejobs.apply.info1': 'Your contact details',
    'ejobs.apply.info2': 'Your availability',
    'ejobs.apply.info3': 'The programs and positions that interest you (e.g., support worker in Émergence program, weekends and summer)',
    'ejobs.apply.interview.title': 'For the interview',
    'ejobs.apply.interview.text': 'We ask that you consult our website to come up with good questions for us. We want you to be informed and comfortable with all the employment details.',
    'ejobs.apply.note.title': 'Good to know',
    'ejobs.apply.note.text': 'It\'s still important to learn about autism to understand our clientele, but <strong>knowledge of autism is not a prerequisite</strong> to work at Emergo.',

    // CTA
    'ejobs.cta.title': 'Ready to experience Emergo?',
    'ejobs.cta.text': 'Join a passionate team and make a difference in the lives of autistic individuals and their families.',
    'ejobs.cta.button': 'Apply now — recrutement@repitemergo.com',

    // Job descriptions (emplois page)
    'postes.label': 'Available positions',
    'postes.title': 'Job Descriptions',
    'postes.lead': 'View the responsibilities and requirements for each position.',
    'postes.section.description': 'Description',
    'postes.section.taches': 'Main Tasks',
    'postes.section.exigences': 'Requirements',
    'postes.accompagnateur.title': 'Support Worker',
    'postes.accompagnateur.description': 'Responsible for the well-being, health and safety of participants. Assists with all daily living activities.',
    'postes.accompagnateur.programs': 'All programs',
    'postes.accompagnateur.offer': 'School year and summer',
    'postes.accompagnateur.task1': 'Ensure well-being and safety',
    'postes.accompagnateur.task2': 'Assist with daily activities (care, meals, hygiene)',
    'postes.accompagnateur.task3': 'Encourage participation in activities',
    'postes.accompagnateur.task4': 'Implement intervention plans',
    'postes.accompagnateur.task5': 'Use communication tools (pictograms, calendar)',
    'postes.accompagnateur.task6': 'Write progress reports',
    'postes.accompagnateur.task7': 'Attend team meetings',
    'postes.accompagnateur.task8': 'Provide overnight supervision',
    'postes.accompagnateur.req1': 'Student status',
    'postes.accompagnateur.req2': 'Sense of responsibility',
    'postes.accompagnateur.req3': '18 years or older',
    'postes.accompagnateur.req4': 'Available for the full camp duration',
    'postes.accompagnateur.req5': 'Client experience — an asset',
    'postes.accompagnateur.req6': 'Bilingualism — an asset',
    'postes.coordonnateur-equipes.title': 'Team Coordinator',
    'postes.coordonnateur-equipes.description': 'Train, supervise and evaluate support workers. Ensure participant needs are met.',
    'postes.coordonnateur-equipes.program': 'Émergence / iDÉFIx',
    'postes.coordonnateur-equipes.offer': 'School year and summer',
    'postes.coordonnateur-equipes.task1': 'Support workers in their interventions',
    'postes.coordonnateur-equipes.task2': 'Manage crisis situations',
    'postes.coordonnateur-equipes.task3': 'Recruit support workers',
    'postes.coordonnateur-equipes.task4': 'Plan schedules',
    'postes.coordonnateur-equipes.task5': 'Train, supervise and evaluate support workers',
    'postes.coordonnateur-equipes.task6': 'Attend team meetings',
    'postes.coordonnateur-equipes.task7': 'Write reports',
    'postes.coordonnateur-equipes.task8': 'Maintain a field presence',
    'postes.coordonnateur-equipes.req1': 'Student status',
    'postes.coordonnateur-equipes.req2': 'Client experience',
    'postes.coordonnateur-equipes.req3': 'Management experience',
    'postes.coordonnateur-equipes.req4': 'Leadership',
    'postes.coordonnateur-equipes.req5': 'Available for training',
    'postes.coordonnateur-equipes.req6': '18 years or older',
    'postes.coordonnateur-equipes.req7': 'Driver\'s licence — an asset',
    'postes.coordonnateur-sante.title': 'Health Care Coordinator',
    'postes.coordonnateur-sante.description': 'Manages health and safety aspects. Reviews medical files, administers medication, provides first aid and emergency measures.',
    'postes.coordonnateur-sante.program': 'Émergence / iDÉFIx',
    'postes.coordonnateur-sante.offer': 'School year and summer',
    'postes.coordonnateur-sante.task1': 'Review medical files',
    'postes.coordonnateur-sante.task2': 'Welcome parents and document information',
    'postes.coordonnateur-sante.task3': 'Administer medication',
    'postes.coordonnateur-sante.task4': 'Maintain summary charts',
    'postes.coordonnateur-sante.task5': 'Perform daily health checks',
    'postes.coordonnateur-sante.task6': 'Administer first aid',
    'postes.coordonnateur-sante.task7': 'Contact Info-Santé if necessary',
    'postes.coordonnateur-sante.task8': 'Follow parent directives',
    'postes.coordonnateur-sante.req1': 'Nursing studies or related field',
    'postes.coordonnateur-sante.req2': 'First aid certification',
    'postes.coordonnateur-sante.req3': 'CPR certification',
    'postes.coordonnateur-sante.req4': 'Rigour and attention to detail',
    'postes.coordonnateur-sante.req5': '18 years or older',
    'postes.coordonnateur-activites.title': 'Activity Coordinator',
    'postes.coordonnateur-activites.description': 'Develops the activity schedule and calendar. Trains, supervises and evaluates activity leaders.',
    'postes.coordonnateur-activites.program': 'Émergence Program',
    'postes.coordonnateur-activites.offer': 'School year and summer',
    'postes.coordonnateur-activites.task1': 'Plan activities',
    'postes.coordonnateur-activites.task2': 'Create diverse programming',
    'postes.coordonnateur-activites.task3': 'Develop the theme',
    'postes.coordonnateur-activites.task4': 'Manage material inventory',
    'postes.coordonnateur-activites.task5': 'Recruit, train and evaluate activity leaders',
    'postes.coordonnateur-activites.task6': 'Manage the activity budget',
    'postes.coordonnateur-activites.req1': 'Student status',
    'postes.coordonnateur-activites.req2': 'Client experience',
    'postes.coordonnateur-activites.req3': 'Animation experience',
    'postes.coordonnateur-activites.req4': 'Leadership',
    'postes.coordonnateur-activites.req5': '18 years or older',
    'postes.animateur.title': 'Activity Leader',
    'postes.animateur.description': 'Organizes and leads leisure activities, themed events and gatherings.',
    'postes.animateur.program': 'Émergence Program',
    'postes.animateur.offer': 'Summer only',
    'postes.animateur.task1': 'Learn about participant characteristics',
    'postes.animateur.task2': 'Organize and lead individual and group activities',
    'postes.animateur.task3': 'Prepare visual supports',
    'postes.animateur.task4': 'Develop the summer theme',
    'postes.animateur.task5': 'Lead gatherings',
    'postes.animateur.task6': 'Attend team meetings',
    'postes.animateur.task7': 'Provide overnight supervision',
    'postes.animateur.req1': 'Student status',
    'postes.animateur.req2': 'Leadership',
    'postes.animateur.req3': 'Creativity',
    'postes.animateur.req4': '18 years or older',
    'postes.animateur.req5': 'Animation experience — an asset',
    'postes.charge-programme.title': 'Program Manager',
    'postes.charge-programme.description': 'Carries out the steps necessary for program delivery. Recruits, hires, trains and evaluates staff.',
    'postes.charge-programme.program': 'Émergence / iDÉFIx / Rêve à Réaliser / Adaptatou',
    'postes.charge-programme.offer': 'Summer only',
    'postes.charge-programme.task1': 'Ensure participant well-being',
    'postes.charge-programme.task2': 'Contact parents',
    'postes.charge-programme.task3': 'Train and supervise staff',
    'postes.charge-programme.task4': 'Attend team meetings',
    'postes.charge-programme.task5': 'Develop programming',
    'postes.charge-programme.task6': 'Manage the budget',
    'postes.charge-programme.task7': 'Write reports',
    'postes.charge-programme.task8': 'Implement emergency procedures',
    'postes.charge-programme.req1': 'Client experience',
    'postes.charge-programme.req2': 'Management experience',
    'postes.charge-programme.req3': 'Leadership',
    'postes.charge-programme.req4': 'Available for training',
    'postes.charge-programme.req5': 'Driver\'s licence — an asset',
    'postes.accompagnateur-nuit.title': 'Night Support Worker',
    'postes.accompagnateur-nuit.description': 'Responsible for participant well-being during the night.',
    'postes.accompagnateur-nuit.program': 'Émergence Program',
    'postes.accompagnateur-nuit.offer': 'School year and summer',
    'postes.accompagnateur-nuit.rotation': 'Night position',
    'postes.accompagnateur-nuit.task1': 'Read behavioural files',
    'postes.accompagnateur-nuit.task2': 'Ensure well-being and safety',
    'postes.accompagnateur-nuit.task3': 'Identify participant needs',
    'postes.accompagnateur-nuit.task4': 'Use appropriate intervention tools',
    'postes.accompagnateur-nuit.task5': 'Maintain a safe and healthy environment',
    'postes.accompagnateur-nuit.task6': 'Complete the sleep log',
    'postes.accompagnateur-nuit.task7': 'Inform the coordinator',

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

    // Reports page
    'reports.label': 'Transparency',
    'reports.title': 'Documents & Reports',
    'reports.subtitle': 'Access our annual reports and official documents.',
    'reports.back': 'Back to Home',
    'reports.annual.label': 'Transparency',
    'reports.annual.title': 'Annual Reports',
    'reports.annual.lead': 'Every year, we report on our activities, management and results. Browse our annual reports to follow Emergo\'s journey.',
    'reports.annual.older': 'Previous Reports',
    'reports.coming': 'Coming soon',
    'reports.download': 'Download PDF',
    'reports.docs.label': 'Governance',
    'reports.docs.title': 'Official Documents',
    'reports.docs.bylaws': 'General By-Laws',
    'reports.docs.bylaws.desc': 'June 2022',
    'reports.docs.privacy': 'Privacy Policy',
    'reports.docs.privacy.desc': 'Our commitments regarding your personal data',
    'reports.annual.2024-25': '2024-2025',
    'reports.annual.2023-24': '2023-2024',
    'reports.annual.2022-23': '2022-2023',
    'reports.annual.2021-22': '2021-2022',
    'reports.annual.2020-21': '2020-2021',
    'reports.annual.2019-20': '2019-2020',
    'reports.annual.2018-19': '2018-2019',
    'reports.annual.2017-18': '2017-2018',
    'reports.annual.2016-17': '2016-2017',
    'reports.annual.2015-16': '2015-2016',
    'reports.annual.2014-15': '2014-2015',
    'reports.annual.2013-14': '2013-2014',
    'reports.annual.2012-13': '2012-2013',
    'reports.annual.2011-12': '2011-2012',
    'reports.annual.2010-11': '2010-2011',
    'reports.annual.2009-10': '2009-2010',
    'reports.annual.2008-09': '2008-2009',
    'reports.annual.2007-08': '2007-2008',

    // Information booklet page (renseignements)
    'info.label': 'For Families',
    'info.title': 'Important Information',
    'info.subtitle': 'Everything you need to know to prepare your child\'s stay with Répit Emergo.',
    'info.back': 'Back to Home',
    'info.summer.title': 'Information — Summer Respite',
    'info.summer.location.title': 'Camp Location',
    'info.summer.location.label': 'Camp de Grandpré',
    'info.summer.location.map': 'View on Google Maps →',
    'info.summer.location.reviews': '(12 reviews on Google)',
    'info.summer.hours.title': 'Arrival & Departure Times',
    'info.summer.hours.arrival': 'Arrival:',
    'info.summer.hours.departure': 'Departure:',
    'info.summer.meds.title': 'Medications',
    'info.summer.meds.dispill': 'Mandatory use of the Dispill system with a valid prescription copy',
    'info.summer.meds.asneeded': 'As-needed medications in original container',
    'info.summer.meds.coordinator': 'Hand over to the health care coordinator',
    'info.summer.diet.title': 'Special Diet',
    'info.summer.diet.provide': 'Meals are provided by the camp. If your child has a <strong>special diet</strong> (allergies, intolerances, dietary restrictions), you must provide their meals and snacks.',
    'info.summer.diet.strict': 'STRICTLY PROHIBITED',
    'info.summer.diet.nuts': 'Any food containing traces of nuts',
    'info.summer.health.title': 'Health Guidelines',
    'info.summer.health.cardiac': 'Medical certificate required for cardiac conditions',
    'info.summer.health.contagious': 'Inform staff of any contagious illness within the previous 15 days',
    'info.summer.health.diapers': 'Bring diapers if needed',
    'info.summer.supplies.title': 'Items to Bring',
    'info.summer.supplies.sunscreen': 'Sunscreen SPF 30+',
    'info.summer.supplies.insect': 'Insect repellent',
    'info.summer.supplies.waterbottle': 'Reusable water bottle',
    'info.summer.supplies.communication': 'Communication tools (pictograms, communication binder, etc.)',
    'info.summer.supplies.healthcard': 'Copy of health insurance card',
    'info.summer.supplies.plan': 'Intervention plan or accommodation document',
    'info.summer.clothes.title': 'Clothing',
    'info.summer.clothes.underwear': '6 pairs of underwear',
    'info.summer.clothes.socks': '6 pairs of socks',
    'info.summer.clothes.warmsocks': '2 pairs of warm socks',
    'info.summer.clothes.tshirts': '6 t-shirts',
    'info.summer.clothes.longsleeves': '2 long-sleeve shirts',
    'info.summer.clothes.shorts': '3 pairs of shorts',
    'info.summer.clothes.pants': '2 pairs of long pants',
    'info.summer.clothes.pajamas': '2 pairs of pajamas',
    'info.summer.clothes.swimsuit': '1 swimsuit',
    'info.summer.clothes.hat': '1 hat or cap',
    'info.summer.clothes.windbreaker': '1 windbreaker',
    'info.summer.clothes.raincoat': '1 raincoat',
    'info.summer.clothes.rainpants': '1 pair of rain pants',
    'info.summer.clothes.shoes': 'Closed-toe shoes',
    'info.summer.clothes.sandals': 'Sandals or flip-flops',
    'info.summer.clothes.slippers': 'Slippers',
    'info.summer.clothes.rainboots': 'Rain boots',
    'info.summer.clothes.laundry': 'Bag for dirty laundry',
    'info.summer.clothes.washcloths': '4 washcloths',
    'info.summer.clothes.towels': '2 bath towels',
    'info.summer.clothes.beachtowels': '2 beach towels',
    'info.summer.clothes.shampoo': 'Personal shampoo',
    'info.summer.clothes.soap': 'Soap',
    'info.summer.clothes.deodorant': 'Deodorant',
    'info.summer.clothes.toothbrush': 'Toothbrush',
    'info.summer.clothes.toothpaste': 'Toothpaste',
    'info.summer.clothes.brush': 'Hairbrush or comb',
    'info.summer.clothes.shaving': 'Shaving cream or razor if needed',
    'info.summer.reminders.title': 'Important Reminders',
    'info.summer.reminders.label': 'All personal items must be labelled with the child\'s name',
    'info.summer.reminders.cancellation': 'Cancellations must be submitted by email',
    'info.summer.reminders.receipt': 'Receipts will be sent in September',
    'info.school.title': 'Information — School Year Respite',
    'info.school.subtitle': 'Weekends from September to May',
    'info.school.contact.title': 'Contact Information',
    'info.school.contact.office': 'Office:',
    'info.school.contact.camp': 'Camp:',
    'info.school.contact.reviews': '(12 reviews on Google)',
    'info.school.contact.maplink': 'View on Google Maps →',
    'info.school.contact.phone': 'Phone:',
    'info.school.times.title': 'Drop-off & Pick-up',
    'info.school.times.departure': 'Drop-off:',
    'info.school.times.office': 'Welcome at 6 PM at the office',
    'info.school.times.camp': 'Option at camp around 7:45 PM',
    'info.school.times.return': 'Pick-up:',
    'info.school.times.returnoffice': '4 PM at the office',
    'info.school.times.returncamp': 'Or 2:15 PM at camp',
    'info.school.times.fee': '$1/minute late fee after 4:15 PM',
    'info.school.times.note1': 'Important:',
    'info.school.times.note2': 'Adapted transit not accepted — parent must be present at drop-off and pick-up',
    'info.school.meds.title': 'Medications',
    'info.school.meds.dispill': 'Mandatory use of the Dispill system with a valid prescription copy',
    'info.school.meds.asneeded': 'As-needed medications in original container',
    'info.school.meds.coordinator': 'Hand over to the health care coordinator',
    'info.school.diet.title': 'Special Diet',
    'info.school.diet.provide': 'Meals are provided by the camp. If your child has a <strong>special diet</strong> (allergies, intolerances, dietary restrictions), you must provide their meals and snacks.',
    'info.school.diet.strict': 'STRICTLY PROHIBITED',
    'info.school.diet.nuts': 'Any food containing traces of nuts',
    'info.school.clothes.title': 'Clothing',
    'info.school.clothes.note': 'For a weekend stay:',
    'info.school.clothes.underwear': '4 pairs of underwear',
    'info.school.clothes.socks': '4 pairs of socks',
    'info.school.clothes.warmsocks': '2 pairs of warm socks',
    'info.school.clothes.tshirts': '2 t-shirts',
    'info.school.clothes.longsleeves': '2 long-sleeve shirts',
    'info.school.clothes.shorts': '1 pair of shorts',
    'info.school.clothes.pants': '2 pairs of long pants',
    'info.school.clothes.pajamas': '2 pairs of pajamas',
    'info.school.clothes.hat': 'Hat or cap',
    'info.school.clothes.windbreaker': 'Windbreaker',
    'info.school.clothes.raincoat': 'Raincoat',
    'info.school.clothes.rainpants': 'Rain pants',
    'info.school.clothes.shoes': 'Closed-toe shoes',
    'info.school.clothes.slippers': 'Slippers',
    'info.school.clothes.laundry': 'Bag for dirty laundry',
    'info.school.clothes.washcloths': '2 washcloths',
    'info.school.clothes.towels': '1 bath towel',
    'info.school.clothes.shampoo': 'Personal shampoo',
    'info.school.clothes.deodorant': 'Deodorant',
    'info.school.clothes.soap': 'Soap',
    'info.school.clothes.brush': 'Comb or hairbrush',
    'info.school.clothes.toothbrush': 'Toothbrush',
    'info.school.clothes.toothpaste': 'Toothpaste',
    'info.school.clothes.seasonal': 'Weather permitting:',
    'info.school.clothes.sunscreen': 'Sunscreen',
    'info.school.clothes.insect': 'Insect repellent',
    'info.school.clothes.rainboots': 'Rain boots',
    'info.school.clothes.wintersuit': 'Snowsuit',
    'info.school.clothes.tuque': 'Winter hat (tuque)',
    'info.school.clothes.mittens': 'Mittens',
    'info.school.clothes.scarf': 'Scarf',
    'info.school.communication.title': 'Communication Tools',
    'info.school.communication.notebook': 'Bring communication binder',
    'info.school.communication.pictograms': 'Pictograms or other communication tools if needed',
    'info.school.communication.plan': 'Send intervention plan or accommodation document to <a href="mailto:info@repitemergo.com" style="color: var(--blue); text-decoration: none;">info@repitemergo.com</a>',
    'info.contact.title': 'Questions?',
    'info.contact.text': 'Don\'t hesitate to reach out. Our team is available to help.',
    'info.contact.phone': 'Phone:',
    'info.contact.email': 'Email:',
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  // Handle data-i18n (textContent)
  document.querySelectorAll('[data-i18n]:not([data-i18n-html])').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  // Handle data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
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
    // These are just prices like "1 485 $" — no translation needed
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

// ═══ FIELD TAG EMOJI MAGIC ═══
(function() {
  const FIELD_EMOJIS = {
    'adaptScolaire':    ['📚','🎒','✏️','🧩','👨‍🏫'],
    'adminAffaires':    ['💼','📊','📈','💰','🏢'],
    'artsVisuels':      ['🎨','🖌️','🖼️','✨','🌈'],
    'criminologie':     ['🔍','⚖️','🕵️','📋','🧠'],
    'designMultimedia': ['🎬','💻','🖥️','🎨','✨'],
    'education':        ['📖','🍎','👩‍🏫','✏️','🎓'],
    'edSpecialisee':    ['🧩','💙','🤝','🌟','👐'],
    'enseignement':     ['👨‍🏫','📚','🍎','✨','🎓'],
    'ergotherapie':     ['🤲','🧠','💪','🏥','🌿'],
    'exerciseScience':  ['🏋️','💪','🏃','🔬','❤️'],
    'genie':            ['⚙️','🔧','🏗️','📐','💡'],
    'genieAero':        ['✈️','🚀','🛩️','⚙️','🌍'],
    'gestionCommerce':  ['🏪','📊','💳','📦','🤝'],
    'medecine':         ['🩺','💉','🏥','❤️','🧬'],
    'metiersArt':       ['🎭','🪡','🏺','🎨','✨'],
    'musique':          ['🎵','🎶','🎹','🎸','🎼'],
    'neuroscience':     ['🧠','🔬','⚡','💡','🧬'],
    'physiotherapie':   ['🦴','💪','🏃','🤸','🌿'],
    'psychoeducation':  ['🧠','💙','🤝','📖','🌟'],
    'psychologie':      ['🧠','💭','📖','🔍','💙'],
    'relationsHum':     ['🤝','👥','💬','❤️','🌍'],
    'sciencesBiomed':   ['🧬','🔬','🧫','💉','🔭'],
    'sciencesCompt':    ['🧮','📊','💰','📋','✅'],
    'sciencesNature':   ['🌿','🔬','🧪','🌍','🦋'],
    'sciencesSante':    ['🏥','❤️','🩺','🧬','💊'],
    'sciencesHum':      ['📚','🌍','💭','🗣️','📖'],
    'sciencesPol':      ['🏛️','⚖️','🗳️','📜','🌍'],
    'sciencesSoc':      ['👥','🌍','📊','🤝','📚'],
    'soinsInfirmiers':  ['💉','🩺','❤️','🏥','🩹'],
    'sociologie':       ['👥','🏙️','📊','🌍','🔍'],
    'travailSocial':    ['🤝','❤️','👐','🏠','💙']
  };

  const KEY_MAP = {
    'ejobs.field.adaptScolaire': 'adaptScolaire',
    'ejobs.field.adminAffaires': 'adminAffaires',
    'ejobs.field.artsVisuels': 'artsVisuels',
    'ejobs.field.criminologie': 'criminologie',
    'ejobs.field.designMultimedia': 'designMultimedia',
    'ejobs.field.education': 'education',
    'ejobs.field.edSpecialisee': 'edSpecialisee',
    'ejobs.field.enseignement': 'enseignement',
    'ejobs.field.ergotherapie': 'ergotherapie',
    'ejobs.field.exerciseScience': 'exerciseScience',
    'ejobs.field.genie': 'genie',
    'ejobs.field.genieAero': 'genieAero',
    'ejobs.field.gestionCommerce': 'gestionCommerce',
    'ejobs.field.medecine': 'medecine',
    'ejobs.field.metiersArt': 'metiersArt',
    'ejobs.field.musique': 'musique',
    'ejobs.field.neuroscience': 'neuroscience',
    'ejobs.field.physiotherapie': 'physiotherapie',
    'ejobs.field.psychoeducation': 'psychoeducation',
    'ejobs.field.psychologie': 'psychologie',
    'ejobs.field.relationsHum': 'relationsHum',
    'ejobs.field.sciencesBiomed': 'sciencesBiomed',
    'ejobs.field.sciencesCompt': 'sciencesCompt',
    'ejobs.field.sciencesNature': 'sciencesNature',
    'ejobs.field.sciencesSante': 'sciencesSante',
    'ejobs.field.sciencesHum': 'sciencesHum',
    'ejobs.field.sciencesPol': 'sciencesPol',
    'ejobs.field.sciencesSoc': 'sciencesSoc',
    'ejobs.field.soinsInfirmiers': 'soinsInfirmiers',
    'ejobs.field.sociologie': 'sociologie',
    'ejobs.field.travailSocial': 'travailSocial'
  };

  function createFieldEmoji(tag, emoji) {
    var rect = tag.getBoundingClientRect();
    var el = document.createElement('span');
    el.textContent = emoji;
    el.style.cssText =
      'position:fixed;pointer-events:none;z-index:99999;' +
      'font-size:' + (18 + Math.random() * 14) + 'px;' +
      'left:' + (rect.left + rect.width * (0.1 + Math.random() * 0.8)) + 'px;' +
      'top:' + (rect.top + rect.height * 0.3) + 'px;' +
      'opacity:1;will-change:transform,opacity;';
    document.body.appendChild(el);

    var angle = -40 - Math.random() * 100;
    var speed = 50 + Math.random() * 100;
    var vx = Math.cos(angle * Math.PI / 180) * speed;
    var vy = Math.sin(angle * Math.PI / 180) * speed;
    var spin = (Math.random() - 0.5) * 540;
    var life = 900 + Math.random() * 700;
    var start = performance.now();

    function tick(now) {
      var t = (now - start) / life;
      if (t > 1) { el.remove(); return; }
      var ease = 1 - (1 - t) * (1 - t);
      var gravity = t * t * 50;
      el.style.transform = 'translate(' + (vx * ease) + 'px,' + (vy * ease + gravity) + 'px) rotate(' + (spin * ease) + 'deg) scale(' + (1 - t * 0.2) + ')';
      el.style.opacity = t < 0.6 ? 1 : 1 - (t - 0.6) / 0.4;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function burstFieldEmojis(tag, emojis, count) {
    for (var i = 0; i < count; i++) {
      (function(idx) {
        setTimeout(function() {
          createFieldEmoji(tag, emojis[Math.floor(Math.random() * emojis.length)]);
        }, idx * 60);
      })(i);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent =
      '.field-tag-magic { cursor:pointer; transition:transform .2s ease,box-shadow .2s ease; user-select:none; }' +
      '.field-tag-magic:hover { transform:scale(1.12); box-shadow:0 4px 14px rgba(0,0,0,.15); z-index:2; position:relative; }' +
      '.field-tag-magic:active { transform:scale(0.95); }' +
      '.field-tag-magic.popping { animation:field-pop .4s ease; }' +
      '@keyframes field-pop { 0%{transform:scale(1)} 30%{transform:scale(1.25)} 60%{transform:scale(0.9)} 100%{transform:scale(1)} }';
    document.head.appendChild(style);

    document.querySelectorAll('.field-tag[data-i18n]').forEach(function(tag) {
      tag.classList.add('field-tag-magic');
      var i18nKey = tag.getAttribute('data-i18n');
      var emojiKey = KEY_MAP[i18nKey];
      var emojis = emojiKey ? FIELD_EMOJIS[emojiKey] : ['✨','🎓','📚','💡','🌟'];

      tag.addEventListener('click', function(e) {
        e.preventDefault();
        tag.classList.remove('popping');
        void tag.offsetWidth;
        tag.classList.add('popping');
        burstFieldEmojis(tag, emojis, 6 + Math.floor(Math.random() * 4));
      });

      tag.addEventListener('mouseenter', function() {
        burstFieldEmojis(tag, emojis, 2);
      });
    });
  });
})();

// ═══ INSTITUTION TAGS ═══
(function() {
  var UNIVERSITIES = [
    {name:'Université de Montréal', nameEN:'Université de Montréal'},
    {name:'UQAM', nameEN:'UQAM'},
    {name:'McGill', nameEN:'McGill University'},
    {name:'Concordia', nameEN:'Concordia University'},
    {name:'Université d\'Ottawa', nameEN:'University of Ottawa'},
    {name:'UQO', nameEN:'UQO'},
    {name:'UQTR', nameEN:'UQTR'},
    {name:'Polytechnique Montréal', nameEN:'Polytechnique Montréal'},
    {name:'Université de Sherbrooke', nameEN:'Université de Sherbrooke'},
    {name:'ENAP', nameEN:'ENAP'}
  ];

  var CEGEPS = [
    {name:'Cégep de Maisonneuve', nameEN:'Cégep de Maisonneuve'},
    {name:'Cégep du Vieux-Montréal', nameEN:'Cégep du Vieux-Montréal'},
    {name:'Cégep de Saint-Laurent', nameEN:'Cégep de Saint-Laurent'},
    {name:'Collège Ahuntsic', nameEN:'Collège Ahuntsic'},
    {name:'Cégep de Bois-de-Boulogne', nameEN:'Cégep de Bois-de-Boulogne'},
    {name:'Cégep André-Laurendeau', nameEN:'Cégep André-Laurendeau'},
    {name:'Cégep de Lanaudière', nameEN:'Cégep de Lanaudière'},
    {name:'Cégep de Saint-Jérôme', nameEN:'Cégep de Saint-Jérôme'},
    {name:'Collège André-Grasset', nameEN:'Collège André-Grasset'},
    {name:'Cégep Marie-Victorin', nameEN:'Cégep Marie-Victorin'},
    {name:'John Abbott College', nameEN:'John Abbott College'},
    {name:'Collège Marianopolis', nameEN:'Marianopolis College'},
    {name:'Cégep de Rosemont', nameEN:'Cégep de Rosemont'},
    {name:'Collège Montmorency', nameEN:'Collège Montmorency'},
    {name:'Cégep Édouard-Montpetit', nameEN:'Cégep Édouard-Montpetit'},
    {name:'Cégep Lionel-Groulx', nameEN:'Cégep Lionel-Groulx'}
  ];

  function createTags(container, items, cssClass) {
    if (!container) return;
    var lang = document.documentElement.lang || 'fr';
    items.forEach(function(inst, i) {
      var tag = document.createElement('span');
      tag.className = 'inst-tag ' + cssClass;
      tag.textContent = lang === 'en' ? inst.nameEN : inst.name;
      tag.setAttribute('data-inst-fr', inst.name);
      tag.setAttribute('data-inst-en', inst.nameEN);
      tag.style.transitionDelay = (i * 0.03) + 's';
      container.appendChild(tag);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var uniCloud = document.getElementById('inst-cloud-uni');
    var cegepCloud = document.getElementById('inst-cloud-cegep');
    if (!uniCloud && !cegepCloud) return;

    createTags(uniCloud, UNIVERSITIES, 'inst-tag-uni');
    createTags(cegepCloud, CEGEPS, 'inst-tag-cegep');

    // Scroll-triggered staggered animation
    var section = document.getElementById('institutions-section');
    if (section) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var tags = section.querySelectorAll('.inst-tag');
            tags.forEach(function(t, i) {
              setTimeout(function() { t.classList.add('visible'); }, i * 35);
            });
            observer.unobserve(section);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(section);
    }

    // Update labels on language switch
    var origSetLang = window.setLang;
    if (origSetLang) {
      window.setLang = function(lang) {
        origSetLang(lang);
        document.querySelectorAll('.inst-tag').forEach(function(tag) {
          tag.textContent = lang === 'en' ? tag.getAttribute('data-inst-en') : tag.getAttribute('data-inst-fr');
        });
      };
    }
  });
})();
