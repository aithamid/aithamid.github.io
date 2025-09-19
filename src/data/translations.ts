export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      research: "Research",
      events: "Events"
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Software Engineer",
      description: "Versatile Software Engineer with experience in Front-end, Back-end, AI, and DevOps. I enjoy tackling diverse challenges and building efficient, scalable solutions across the full technology stack.",
      downloadCV: "Download CV",
      contactMe: "See more"
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My journey in software development",
      present: "Present",
      responsibilities: "Key Responsibilities:",
      achievements: "Achievements:",
      jobs: [
        {
          title: "Software Engineer",
          company: "Université Gustave Eiffel",
          location: "Bordeaux, France",
          period: "2022 - 2025",
          description: "During a 3-year work-study apprenticeship as a software engineer in ERENA’s team, I conducted research in 5G telecommunications and autonomous vehicles, developed APIs and simulations using Python and Flask, deployed and managed cloud-native platforms on Kubernetes with energy monitoring via Grafana, and built full-stack web applications with React.js (Next.js) for creating, visualizing, and managing taxonomy files through an intuitive user interface.",
          skills: ["Python", "Typescript", "Node.js", "Kubernetes", "Docker", "PostgreSQL", "Grafana", "React.js"]
        },
        {
          title: "5G / AI Research Assistant",
          company: "ÉTS Montréal",
          location: "Montréal, QC",
          period: "2024",
          description: "Sent on a research mission to Canada, I collaborated with professors and researchers at ETS Montréal, deploying a 5G platform with both physical and virtual users using Docker and srsRAN. I developed Python xApps and machine learning models to detect and mitigate DDoS attacks by managing resource allocation, contributing to research outcomes documented in a published paper.",
          skills: ["Python", "C++", "TensorFlow", "Wireshark", "Docker", "srsRAN", "Grafana", "Bash"]
        },
        {
          title: "IT Intern",
          company: "Event2Be",
          location: "Paris, France",
          period: "2021",
          description: "Developed a Python-based newsletter system, implemented SEO improvements on the company website, designed event cover images using Photoshop, and managed servers containing files and sensitive credentials, ensuring smooth operations and secure data handling.",
          skills: ["Python", "HTML/CSS", "SEO", "Photoshop", "Linux"]
        }
      ]
    },
    education: {
      title: "Education",
      subtitle: "My academic background and achievements",
      certificationsTitle: "Certifications",
      certificationsSubtitle: "Professional certifications and credentials",
      gpa: "GPA",
      relevant: "Relevant Coursework:",
      achievements: "Achievements:",
      degrees: [
        {
          degree: "Master of Engineering in Computer Science",
          school: "ESIEE Paris",
          description: "Academic coursework with professional experience, focusing on advanced software development, 3D engineering, and machine learning. The curriculum includes in-depth training in programming, system architecture, and project management.",
          achievements: ["Best 2024 Project"],
          period: "2022 - 2025",
          gpa: "3.3/4.0"
        },
        {
          degree: "International Academic Exchange",
          school: "Universidad Publica de Navarra",
          achievements: ["C1 English Level", "A2 Spanish Level"],
          period: "2024 - 2025",
          description: "Participated in the Erasmus program, focusing on advanced topics in computer science and gaining international exposure to new academic and cultural environments.",
          gpa: "3.2/4.0"
        },
        {
          degree: "BTS SNIR - Higher Technician Diploma in Computer and Network Systems", 
          school: "Lycée Jean Jaurès",
          description: "Specializing in Computer Science and Networks, covers programming, network administration, system design, and digital technologies.",
          achievements: ["Top of the class", "Class delegate"],
          period: "2020 - 2022",
          gpa: "4.0/4.0"
        }
      ],
      certifications: [
        {
          name: "Introduction to Software Engineering",
          issuer: "IBM",
          date: "2025",
          credentialId: "0HN3O2XIHK61",
          url: "https://coursera.org/share/3d0f63090b2e3a3ffd2a4e6b86ebfce3"
        },
        {
          name: "Python for Data Science, AI & Development",
          issuer: "IBM",
          date: "2025",
          credentialId: "TWVKBU62LD30",
          url: "https://www.coursera.org/account/accomplishments/records/TWVKBU62LD30"
        },
        {
          name: "Django Application Development with SQL and Databases",
          issuer: "IBM",
          date: "2025",
          credentialId: "13UEW66I4N2R3",
          url: "https://coursera.org/share/8c881872a216c0dd27ef745e53d9e81d"
        },
        {
          name: "Getting Started with Git and GitHub",
          issuer: "IBM",
          date: "2025",
          credentialId: "V417NJKCJAD5",
          url: "https://www.coursera.org/account/accomplishments/verify/V417NJKCJAD5"
        },
        {
          name: "Hands-on Introduction to Linux Commands and Shell Scripting",
          issuer: "IBM",
          date: "2025",
          credentialId: "5XFT1M123AGY",
          url: "https://www.coursera.org/account/accomplishments/verify/5XFT1M123AGY"
        },
        {
          name: "Developing AI Applications with Python and Flask",
          issuer: "IBM",
          date: "2025",
          credentialId: "MUQCH9GIG739",
          url: "https://www.coursera.org/account/accomplishments/records/MUQCH9GIG739"
        },
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing my technical expertise",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies:",
      list : [
      {
        title: "Green XG",
        description: "GreenXG is a Kubernetes-based multi-cluster O-RAN testbed deployable on Minikube that integrates three open-source stacks to support energy-aware, end-to-end 5G experiments.",
        technologies: ["Kubernetes", "Grafana", "Python", "5G+/6G", "xApps"],
        period: "2025",
        github: "https://github.com/aithamid/Green-xG",
        highlights: ["Kubernetes multi-cluster testbed", "Energy-aware 5G experiments", "Real-time power telemetry"]
      },
      {
        title: "ACCAM Taxonomy",
        description: "Accam Taxonomy is a web-based tool used by my team and partner universities abroad to create, modify, and visualize taxonomies related to autonomous vehicles.",
        technologies: ["React.js", "PostgreSQL", "Tailwind"],
        period: "2025",
        github: "https://github.com/aithamid/accam-taxonomy",
        demo: "https://accam-taxonomy.vercel.app",
        highlights: ["Web tool with local storage – lightweight, client-side taxonomy editing.", "Web tool with database – multi-user, persistent taxonomy management."]
      },
      {
        title: "Heurly — Student Web Platform",
        description: "Heurly is a student platform for schedules, document sharing, note taking, and collaborative Q&A.",
        technologies: ["React.js", "Docker", "PostgreSQL", "CI/CD", "Testing"],
        period: "2024",
        github: "https://github.com/Heurly",
        demo: "https://heurly.fr",
        highlights: ["Timetable viewer integrated", "Shared note editor", "Course-linked Q&A forum"]
      },
      {
        title: "DDoS Detection and Mitigation ML xApp",
        description: "An xApp for detecting and mitigating DDoS attacks in O-RAN using machine learning and dynamic resource management to improve network resilience.",
        technologies: ["Python", "TensorFlow", "Pandas", "Flask", "Docker", "Wireshark", "5G"],
        period: "2024",
        github: "https://github.com/aithamid/oran-sc-ric",
        demo: "https://www.researchgate.net/publication/386070364_xApps_for_DDoS_Attacks_Detection_and_Mitigation_in_5G-V2X_O-RAN_Networks",
        highlights: ["Real-time attack detection", "Intelligent resource management", "Network resilience improvement"]
      },
      {
        title: "Quizz App",
        description: "A full-stack quiz application featuring a Flask backend with SQLite database and a Vue.js frontend. It supports user authentication, quiz participation, and result tracking.",
        technologies: ["Python", "Vue.js", "Flask", "Unit testing"],
        period: "2024",
        github: "https://github.com/aithamid/quizz-app/tree/main",
        highlights: ["User authentication", "Result tracking"]
      },
      {
        title: "Numbers Deep Learning",
        description: "A web-based ML project for handwritten digit recognition using multiple trained models. Users draw a number on the frontend, and predictions from all models are displayed, highlighting the superior accuracy of the CNN-based deep learning model.",
        technologies: ["React.js", "Python", "Tensorflow", "FastAPI", "Docker", "CI/CD"],
        period: "2023",
        github: "https://github.com/aithamid/numbers-deeplearning/blob/main/api/main.py",
        highlights: ["Handwritten digit recognition", "Multiple model predictions", "FastAPI backend"]
      },
      {
        title: "Geometry Modeling",
        description: "A C++ project developed during my 4th year at ESIEE Paris to explore geometric modeling techniques. The project focuses on understanding and implementing the half-edge data structure through various geometric operations.",
        technologies: ["C++"],
        period: "2023",
        github: "https://github.com/aithamid/geometry-modeling",
        highlights: ["Mesh triangulation", "Surface simplification", "Catmull-Clark subdivision"]
      },
      {
        title: "SUMO-ADAM – Vehicle Telemetry API",
        description: "SUMO-ADAM is a Python-based REST API designed to collect and store telemetry data from autonomous vehicles simulated in the SUMO traffic simulator. It interfaces with InfluxDB to manage time-series data, enabling real-time analysis of vehicle metrics.",
        technologies: ["Python", "Flask", "InfluxDB", "REST API", "Docker", "Docker Compose"],
        period: "2023",
        github: "https://github.com/aithamid/sumo-adam",
        highlights: ["Real-time telemetry collection", "Supports autonomous vehicle research"]
      },
      {
        title: "Snake ARM",
        description: "Programmed a wheeled robot with three speed settings (high, medium, low) controlled via a central button. Left and right bumpers make the robot turn 90°, and pressing both bumpers stops the robot to prevent collisions.",
        technologies: ["Assembly", "Robot programming"],
        period: "2022",
        github: "https://github.com/DOMESDAY7/snake_arm",
        demo: null,
        highlights: ["Adjustable speed control", "Directional turning"]
      }
      ]
    },
    research: {
      title: "Research Publications",
      subtitle: "Contributing to the advancement of computer science",
      published: "Published in",
      citations: "citations",
      readPaper: "Read Paper",
      viewPaper: "View Paper",
      cite: "Cite",
      keywords: "Keywords:",
      totalCitations: "Total Citations",
      publications: "Publications",
      journalArticles: "Journal Articles",
      conferenceePapers: "Conference Papers",
      published_status: "Published",
      underReview: "Under Review",
      list : [
        {
          title: "xApps for DDoS Attacks Detection and Mitigation in 5G-V2X O-RAN Networks",
          authors: [
            "Mirna Awad",
            "Adam Ait Hamid",
            "Yeogeuch Ranganathan",
            "Nizar Choubik",
            "Rami Langar",
            "Wael Jaafar"
          ],
          venue: "7th Conference on Cloud and Internet of Things (CIoT)",
          year: 2024,
          type: "Conference Paper",
          status: "Published",
          abstract: "In this demo, we present a 5G prototype designed to secure V2X communications by leveraging the concept of distributed applications (xApps) in 5G O-RAN. Based on the open-source srsRAN, our framework protects against DDoS attacks by implementing a dual-xApp strategy. The first xApp, called attack detection (AD), detects and identifies DDoS attackers in real-time using deep learning. The second xApp, named resource control (RC), dynamically reduces the network resources of identified attackers. Our method neutralizes malicious users while maintaining stable operations for legitimate users.",
          keywords: [
            "xApps",
            "DDoS Detection",
            "5G-V2X",
            "O-RAN Networks",
            "Network Security"
          ],
          citations: 0,
          doi: "10.1109/CIoT63799.2024.10757133",
          url: "https://ieeexplore.ieee.org/document/10757133",
          publisher: "IEEE"
        }
      ]

    },
    events: {
      title: "Events & Competitions",
      subtitle: "Hackathons, competitions, and tech events where I've participated",
      position: "Position",
      prize: "Prize",
      participants: "participants",
      technologies: "Technologies Used:",
      eventsParticipated: "Events Participated",
      topFinishes: "Top 3 Finishes",
      firstPlaceWins: "First Place Wins",
      prizeMoneyWon: "Prize Money Won",
      teamOf: "Team of",
      eventDetails: "Event Details",
      list: [
        {
          name: "Game Jam",
          type: "Hackathon",
          date: "September 2023",
          location: "ESIEE Paris, France",
          result: "Top 6",
          project: "Third-Person Labyrinth Game",
          description: "Developed a third-person labyrinth game in 48 hours with multiple difficulty levels (Easy to Genius). Received recognition for creativity and design.",
          technologies: ["Unity", "C#"],
          teamSize: 4,
          prize: "Recognition",
          url: "https://www.esiee.fr/actualites/une-nouvelle-edition-de-la-game-jam-esiee-paris"
        },
        {
          name: "European Hackathon",
          type: "Hackathon",
          date: "March 2023",
          location: "Ministère de la Transition écologique",
          result: "Top 10",
          project: "Independent Public Transport Prototype",
          description: "Participated in a European hackathon with a team of four, developing a prototype device to encourage children to use public transportation independently. Ranked among the top 10 teams.",
          technologies: ["Prototyping", "Electronics", "UX Design", "Business model"],
          teamSize: 4,
          prize: "Trip",
          url: "https://www.univ-gustave-eiffel.fr/international/hackathon-europeen"
        }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      letsConnect : "Let's Connect",
      description : "I'm always interested in discussing new opportunities and exciting projects.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      backToTop: "Back to Top"
    },
    certifications: {
      title: "Certifications",
      issued: "Issued",
      expires: "Expires",
      credentialId: "Credential ID"
    }
  },
  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      research: "Recherche",
      events: "Événements"
    },
    hero: {
      greeting: "Salut, moi c’est",
      title: "Ingénieur Logiciel",
      description: "Ingénieur logiciel polyvalent avec de l'expérience en Front-end, Back-end, IA et DevOps. J'aime relever des défis variés et construire des solutions efficaces et évolutives sur l'ensemble de la pile technologique.",
      downloadCV: "Télécharger le CV",
      contactMe: "En savoir plus"
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours dans le développement logiciel",
      present: "Actuel",
      responsibilities: "Responsabilités clés :",
      achievements: "Réalisations :",
      jobs: [
        {
          title: "Ingénieur logiciel",
          company: "Université Gustave Eiffel",
          location: "Bordeaux, France",
          period: "2022 - 2025",
          description: "Au cours d'une alternance de 3 ans en tant qu'ingénieur logiciel au sein de l'équipe ERENA, j'ai mené des recherches en télécommunications 5G et sur les véhicules autonomes, développé des API et des simulations en utilisant Python et Flask, déployé et géré des plateformes cloud-native sur Kubernetes avec une surveillance énergétique via Grafana, et construit des applications web full-stack avec React.js (Next.js) pour la création, la visualisation et la gestion de fichiers de taxonomie à travers une interface utilisateur intuitive.",
          skills: ["Python", "Typescript", "Node.js", "Kubernetes", "Docker", "PostgreSQL", "Grafana", "React.js"]
        },
        {
          title: "Assistant de recherche 5G / IA",
          company: "ÉTS Montréal",
          location: "Montréal, QC",
          period: "2024",
          description: "Envoyé en mission de recherche au Canada, j'ai collaboré avec des professeurs et des chercheurs de l'ÉTS Montréal, déployant une plateforme 5G avec des utilisateurs physiques et virtuels à l'aide de Docker et srsRAN. J'ai développé des xApps Python et des modèles d'apprentissage automatique pour détecter et atténuer les attaques DDoS en gérant l'allocation des ressources, contribuant ainsi aux résultats de recherche documentés dans un article publié.",
          skills: ["Python", "C++", "TensorFlow", "Wireshark", "Docker", "srsRAN", "Grafana", "Bash"]
        },
        {
          title: "Stagiaire informatique",
          company: "Event2Be",
          location: "Paris, France",
          period: "2021",
          description: "J'ai développé un système de newsletter basé sur Python, mis en œuvre des améliorations SEO sur le site web de l'entreprise, conçu des images de couverture d'événements à l'aide de Photoshop et géré des serveurs contenant des fichiers et des informations sensibles, assurant des opérations fluides et une gestion sécurisée des données.",
          skills: ["Python", "HTML/CSS", "SEO", "Photoshop", "Linux"]
        }
      ]
    },
    education: {
      title: "Formation",
      subtitle: "Mon parcours académique et mes réalisations",
      certificationsTitle: "Certifications",
      certificationsSubtitle: "Certifications professionnelles et accréditations",
      gpa: "Moyenne",
      relevant: "Cours pertinents :",
      achievements: "Réalisations :",
      degrees: [
        {
          degree: "Diplôme d'ingénieur \"Informatique et Applications\"",
          school: "ESIEE Paris",
          description: "Formation académique avec expérience professionnelle, axée sur le développement logiciel avancé, l'ingénierie 3D et l'intelligence artificielle. Le cursus comprend une formation approfondie en programmation, architecture de systèmes et gestion de projet.",
          achievements: ["Meilleur Projet 2024"],
          period: "2022 - 2025",
          gpa: "16/20"
        },
        {
          degree: "Échange académique international",
          school: "Universidad Publica de Navarra",
          achievements: ["Niveau C1 en anglais", "Niveau A2 en espagnol"],
          period: "2024 - 2025",
          description: "Participation au programme Erasmus, axée sur des sujets avancés en informatique et l'acquisition d'une expérience internationale dans de nouveaux environnements académiques et culturels.",
          gpa: "7.5/10"
        },
        {
          degree: "BTS SNIR - Systèmes numériques Informatique et réseaux", 
          school: "Lycée Jean Jaurès",
          description: "Spécialisation en informatique et réseaux, couvrant la programmation, l'administration de réseaux, la conception de systèmes et les technologies numériques.",
          achievements: ["Major de promotion", "Délégué de classe"],
          period: "2020 - 2022",
          gpa: "18/20"
        }
      ],
      certifications: [
        {
          name: "Introduction to Software Engineering",
          issuer: "IBM",
          date: "2025",
          credentialId: "0HN3O2XIHK61",
          url: "https://coursera.org/share/3d0f63090b2e3a3ffd2a4e6b86ebfce3"
        },
        {
          name: "Python for Data Science, AI & Development",
          issuer: "IBM",
          date: "2025",
          credentialId: "TWVKBU62LD30",
          url: "https://www.coursera.org/account/accomplishments/records/TWVKBU62LD30"
        },
        {
          name: "Django Application Development with SQL and Databases",
          issuer: "IBM",
          date: "2025",
          credentialId: "13UEW66I4N2R3",
          url: "https://coursera.org/share/8c881872a216c0dd27ef745e53d9e81d"
        },
        {
          name: "Getting Started with Git and GitHub",
          issuer: "IBM",
          date: "2025",
          credentialId: "V417NJKCJAD5",
          url: "https://www.coursera.org/account/accomplishments/verify/V417NJKCJAD5"
        },
        {
          name: "Hands-on Introduction to Linux Commands and Shell Scripting",
          issuer: "IBM",
          date: "2025",
          credentialId: "5XFT1M123AGY",
          url: "https://www.coursera.org/account/accomplishments/verify/5XFT1M123AGY"
        },
        {
          name: "Developing AI Applications with Python and Flask",
          issuer: "IBM",
          date: "2025",
          credentialId: "MUQCH9GIG739",
          url: "https://www.coursera.org/account/accomplishments/records/MUQCH9GIG739"
        },
      ]
    },
    projects: {
      title: "Projets Principaux",
      subtitle: "Démonstration de mon expertise technique",
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      technologies: "Technologies :",
      list : [
      {
        title: "Green XG",
        description: "GreenXG est un banc d'essai multi-cluster O-RAN basé sur Kubernetes, déployable sur Minikube, qui intègre trois piles open-source pour prendre en charge des expériences 5G de bout en bout et économes en énergie.",
        technologies: ["Kubernetes", "Grafana", "Python", "5G+/6G", "xApps"],
        period: "2025",
        github: "https://github.com/aithamid/Green-xG",
        highlights: ["Banc d'essai multi-cluster Kubernetes", "Expériences 5G écoénergétiques", "Télémétrie de puissance en temps réel"]
      },
      {
        title: "ACCAM Taxonomy",
        description: "Accam Taxonomy est un outil web utilisé par mon équipe et des universités partenaires à l'étranger pour créer, modifier et visualiser des taxonomies liées aux véhicules autonomes.",
        technologies: ["React.js", "PostgreSQL", "Tailwind"],
        period: "2025",
        github: "https://github.com/aithamid/accam-taxonomy",
        demo: "https://accam-taxonomy.vercel.app",
        highlights: ["Outil web avec stockage local – édition de taxonomie légère, côté client.", "Outil web avec base de données – gestion de taxonomie multi-utilisateur, persistante."]
      },
      {
        title: "Heurly — Student Web Platform",
        description: "Heurly est une plateforme étudiante pour les emplois du temps, le partage de documents, la prise de notes et les questions/réponses collaboratives.",
        technologies: ["React.js", "Docker", "PostgreSQL", "CI/CD", "Testing"],
        period: "2024",
        github: "https://github.com/Heurly",
        demo: "https://heurly.fr",
        highlights: ["Visualiseur d'emploi du temps intégré", "Éditeur de notes partagé", "Forum Q&R lié aux cours"]
      },
      {
        title: "DDoS Detection and Mitigation ML xApp",
        description: "Une xApp pour la détection et l'atténuation des attaques DDoS dans les réseaux O-RAN utilisant l'apprentissage automatique et la gestion dynamique des ressources pour améliorer la résilience du réseau.",
        technologies: ["Python", "TensorFlow", "Pandas", "Flask", "Docker", "Wireshark", "5G"],
        period: "2024",
        github: "https://github.com/aithamid/oran-sc-ric",
        demo: "https://www.researchgate.net/publication/386070364_xApps_for_DDoS_Attacks_Detection_and_Mitigation_in_5G-V2X_O-RAN_Networks",
        highlights: ["Détection d'attaque en temps réel", "Gestion intelligente des ressources", "Amélioration de la résilience du réseau"]
      },
      {
        title: "Quizz App",
        description: "Une application de quiz full-stack avec un backend Flask, une base de données SQLite et un frontend Vue.js. Elle prend en charge l'authentification des utilisateurs, la participation aux quiz et le suivi des résultats.",
        technologies: ["Python", "Vue.js", "Flask", "Unit testing"],
        period: "2024",
        github: "https://github.com/aithamid/quizz-app/tree/main",
        highlights: ["Authentification des utilisateurs", "Suivi des résultats"]
      },
      {
        title: "Numbers Deep Learning",
        description: "Un projet de ML basé sur le web pour la reconnaissance de chiffres manuscrits utilisant plusieurs modèles entraînés. Les utilisateurs dessinent un chiffre sur le frontend, et les prédictions de tous les modèles sont affichées, soulignant la précision supérieure du modèle d'apprentissage profond basé sur les CNN.",
        technologies: ["React.js", "Python", "Tensorflow", "FastAPI", "Docker", "CI/CD"],
        period: "2023",
        github: "https://github.com/aithamid/numbers-deeplearning/blob/main/api/main.py",
        highlights: ["Reconnaissance de chiffres manuscrits", "Prédictions de plusieurs modèles", "Backend FastAPI"]
      },
      {
        title: "Geometry Modeling",
        description: "Un projet C++ développé au cours de ma 4ème année à l'ESIEE Paris pour explorer les techniques de modélisation géométrique. Le projet se concentre sur la compréhension et la mise en œuvre de la structure de données 'half-edge' à travers diverses opérations géométriques.",
        technologies: ["C++"],
        period: "2023",
        github: "https://github.com/aithamid/geometry-modeling",
        highlights: ["Triangulation de maillage", "Simplification de surface", "Subdivision de Catmull-Clark"]
      },
      {
        title: "SUMO-ADAM – Vehicle Telemetry API",
        description: "SUMO-ADAM est une API REST basée sur Python conçue pour collecter et stocker les données de télémétrie des véhicules autonomes simulés dans le simulateur de trafic SUMO. Elle s'interface avec InfluxDB pour gérer les données de séries temporelles, permettant une analyse en temps réel des métriques des véhicules.",
        technologies: ["Python", "Flask", "InfluxDB", "REST API", "Docker", "Docker Compose"],
        period: "2023",
        github: "https://github.com/aithamid/sumo-adam",
        highlights: ["Collecte de télémétrie en temps réel", "Soutient la recherche sur les véhicules autonomes"]
      },
      {
        title: "Snake ARM",
        description: "J'ai programmé un robot à roues avec trois réglages de vitesse (haute, moyenne, basse) contrôlés via un bouton central. Les pare-chocs gauche et droit font tourner le robot de 90°, et la pression simultanée des deux pare-chocs l'arrête pour éviter les collisions.",
        technologies: ["Assembly", "Robot programming"],
        period: "2022",
        github: "https://github.com/DOMESDAY7/snake_arm",
        demo: null,
        highlights: ["Contrôle de vitesse réglable", "Virage directionnel"]
      }
      ]
    },
    research: {
      title: "Publications de Recherche",
      subtitle: "Contribution à l'avancement de l'informatique",
      published: "Publié dans",
      citations: "citations",
      readPaper: "Lire l'article",
      viewPaper: "Voir l'article",
      cite: "Citer",
      keywords: "Mots-clés :",
      totalCitations: "Nombre total de citations",
      publications: "Publications",
      journalArticles: "Articles de revue",
      conferenceePapers: "Articles de conférence",
      published_status: "Publié",
      underReview: "En cours de révision",
      list : [
        {
          title: "xApps for DDoS Attacks Detection and Mitigation in 5G-V2X O-RAN Networks",
          authors: [
            "Mirna Awad",
            "Adam Ait Hamid",
            "Yeogeuch Ranganathan",
            "Nizar Choubik",
            "Rami Langar",
            "Wael Jaafar"
          ],
          venue: "7th Conference on Cloud and Internet of Things (CIoT)",
          year: 2024,
          type: "Conference Paper",
          status: "Published",
          abstract: "Dans cette démonstration, nous présentons un prototype 5G conçu pour sécuriser les communications V2X en tirant parti du concept d'applications distribuées (xApps) dans le réseau 5G O-RAN. Basé sur la stack open-source srsRAN, notre cadre protège contre les attaques DDoS en mettant en œuvre une stratégie à deux xApps. La première xApp, appelée 'attack detection' (AD), détecte et identifie les attaquants DDoS en temps réel à l'aide de l'apprentissage profond. La deuxième xApp, nommée 'resource control' (RC), réduit dynamiquement les ressources réseau des attaquants identifiés. Notre méthode neutralise les utilisateurs malveillants tout en maintenant des opérations stables pour les utilisateurs légitimes.",
          keywords: [
            "xApps",
            "DDoS Detection",
            "5G-V2X",
            "O-RAN Networks",
            "Network Security"
          ],
          citations: 0,
          doi: "10.1109/CIoT63799.2024.10757133",
          url: "https://ieeexplore.ieee.org/document/10757133",
          publisher: "IEEE"
        }
      ]

    },
    events: {
      title: "Événements et Compétitions",
      subtitle: "Hackathons, compétitions et événements tech auxquels j'ai participé",
      position: "Position",
      prize: "Prix",
      participants: "participants",
      technologies: "Technologies utilisées :",
      eventsParticipated: "Événements Participés",
      topFinishes: "Top 3",
      firstPlaceWins: "Premières places",
      prizeMoneyWon: "Prix en argent gagnés",
      teamOf: "Équipe de",
      eventDetails: "Détails de l'événement",
      list: [
        {
          name: "Game Jam",
          type: "Hackathon",
          date: "Septembre 2023",
          location: "ESIEE Paris, France",
          result: "Top 6",
          project: "Jeu de labyrinthe à la troisième personne",
          description: "J'ai développé un jeu de labyrinthe à la troisième personne en 48 heures avec plusieurs niveaux de difficulté (Facile à Génie). J'ai été récompensé pour ma créativité et mon design.",
          technologies: ["Unity", "C#"],
          teamSize: 4,
          prize: "Reconnaissance",
          url: "https://www.esiee.fr/actualites/une-nouvelle-edition-de-la-game-jam-esiee-paris"
        },
        {
          name: "European Hackathon",
          type: "Hackathon",
          date: "Mars 2023",
          location: "Ministère de la Transition écologique",
          result: "Top 10",
          project: "Prototype de transport public indépendant",
          description: "J'ai participé à un hackathon européen avec une équipe de quatre personnes, développant un prototype d'appareil pour encourager les enfants à utiliser les transports publics de manière autonome. Nous nous sommes classés parmi les 10 meilleures équipes.",
          technologies: ["Prototyping", "Electronics", "UX Design", "Business model"],
          teamSize: 4,
          prize: "Voyage",
          url: "https://www.univ-gustave-eiffel.fr/international/hackathon-europeen"
        }
      ]
    },
    footer: {
      rights: "Tous droits réservés.",
      letsConnect : "Entrons en contact",
      description : "Je suis toujours intéressé à discuter de nouvelles opportunités et de projets passionnants.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      backToTop: "Retour en haut"
    },
    certifications: {
      title: "Certifications",
      issued: "Délivré",
      expires: "Expire",
      credentialId: "ID de certification"
    }
  }
};