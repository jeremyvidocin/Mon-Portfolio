import React from 'react';
import { ButtonPrimary } from './Button';

const Certifications = () => {
  const certifications = [
    // Certifications complétées
    {
      title: "PIX - Compétences numériques",
      issuer: "Ministère de l'Éducation Nationale",
      date: "Janvier 2024",
      imgSrc: "/images/pix.png",
      category: "Digital",
      certificateUrl: "/certifications/pix-certification.pdf",
      badges: ["Officiel", "National"],
      status: "completed"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "Mars 2024",
      imgSrc: "/images/free_code_camp_logo.jpeg",
      category: "Web",
      certificateUrl: "https://www.freecodecamp.org/certification/JeremyVidocin/responsive-web-design",
      status: "completed"
    },
    {
      title: "Apprenez à créer votre site web avec HTML5 et CSS3",
      issuer: "OpenClassrooms",
      date: "Février 2024",
      imgSrc: "/images/openclassrooms-logo.png",
      category: "Web",
      certificateUrl: "/certifications/oc-html-css.pdf",
      status: "completed"
    },
    {
      title: "Apprenez à programmer avec JavaScript",
      issuer: "OpenClassrooms",
      date: "Mars 2024",
      imgSrc: "/images/openclassrooms-logo.png",
      category: "Web",
      certificateUrl: "/certifications/oc-javascript.pdf",
      status: "completed"
    },
    {
      title: "Débutez avec C#",
      issuer: "OpenClassrooms",
      date: "Avril 2024",
      imgSrc: "/images/openclassrooms-logo.png",
      category: "Programmation",
      certificateUrl: "/certifications/oc-csharp.pdf",
      status: "completed"
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "Novembre 2024",
      imgSrc: "/images/data-analitycs.png",
      category: "Data",
      certificateUrl: "/certifications/cisco-data-analytics.pdf",
      status: "completed"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco",
      date: "November 2024",
      imgSrc: "/images/introduction-data.png",
      category: "Cloud",
      certificateUrl: "/certifications/cisco-data-science.pdf",
      status: "completed"
    },
    
    // Certifications en cours
    {
      title: "TOEIC - Test of English for International Communication",
      issuer: "ETS Global",
      date: "Examen prévu le 21 mai 2025",
      imgSrc: "/images/toeic-logo.png",
      category: "Langues",
      progress: 85, // pourcentage d'avancement
      status: "in-progress",
      infoUrl: "https://www.etsglobal.org/fr/fr/test-de-anglais-toeic"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "En cours - Fin prévue Juin 2025",
      imgSrc: "/images/free_code_camp_logo.jpeg",
      category: "Web",
      progress: 65, // pourcentage d'avancement
      status: "in-progress"
    },
    {
      title: "CCNA - Cisco Certified Network Associate",
      issuer: "Cisco",
      date: "En cours - Examen prévu Septembre 2025",
      imgSrc: "/images/cisco-logo.jpg",
      category: "Réseau",
      progress: 40,
      status: "in-progress" 
    },

    {
      title: "IBM Cybersecurity Analyst Professional Certificate",
      issuer: "IBM via Coursera",
      date: "En cours - Fin prévue Août 2025",
      imgSrc: "/images/ibm-logo.png",
      category: "Cybersécurité",
      progress: 35,
      status: "in-progress",
      infoUrl: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst"
    },
    {
      title: "Back End Development and APIs",
      issuer: "FreeCodeCamp",
      date: "En cours - Fin prévue Juillet 2025",
      imgSrc: "/images/free_code_camp_logo.jpeg",
      category: "Web",
      progress: 25,
      status: "in-progress",
      infoUrl: "https://www.freecodecamp.org/learn/back-end-development-and-apis/"
    },
    {
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "En cours - Fin prévue Août 2025",
      imgSrc: "/images/free_code_camp_logo.jpeg",
      category: "Data",
      progress: 20,
      status: "in-progress",
      infoUrl: "https://www.freecodecamp.org/learn/data-analysis-with-python/"
    },
    
    // Certifications envisagées
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Prévu pour Octobre 2025",
      imgSrc: "/images/aws-logo.png",
      category: "Cloud",
      status: "planned"
    },
    {
      title: "Machine Learning with Python",
      issuer: "FreeCodeCamp",
      date: "Prévu pour Novembre 2025",
      imgSrc: "/images/free_code_camp_logo.jpeg",
      category: "Data",
      status: "planned",
      infoUrl: "https://www.freecodecamp.org/learn/machine-learning-with-python/"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Cisco",
      date: "Prévu pour Septembre 2025",
      imgSrc: "/images/cisco-logo.jpg",
      category: "IA",
      status: "planned",
      infoUrl: "https://www.netacad.com/courses/ai"
    },
    {
      title: "Junior Cybersecurity Analyst",
      issuer: "Cisco",
      date: "Prévu pour Août 2025",
      imgSrc: "/images/cisco-logo.jpg",
      category: "Cybersécurité",
      status: "planned",
      infoUrl: "https://www.netacad.com/courses/cybersecurity"
    },
    {
      title: "Angular - The Complete Guide",
      issuer: "Udemy",
      date: "Prévu pour Décembre 2025",
      imgSrc: "/images/udemy-logo.png",
      category: "Web",
      status: "planned",
      infoUrl: "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
      title: "C++ Programming - From Beginner to Beyond",
      issuer: "Udemy",
      date: "Prévu pour Janvier 2026",
      imgSrc: "/images/udemy-logo.png", 
      category: "Programmation",
      status: "planned",
      infoUrl: "https://www.udemy.com/course/beginning-c-plus-plus-programming/"
    }
    // {
    //   title: "React Advanced",
    //   issuer: "Meta",
    //   date: "Avril 2023",
    //   imgSrc: "/images/meta.png",
    //   category: "Web",
    //   certificateUrl: "/certifications/meta-react-advanced.pdf",
    //   status: "completed"
    // },
    // {
    //   title: "MOOC Sécurité Numérique",
    //   issuer: "ANSSI",
    //   date: "Mai 2024",
    //   imgSrc: "/images/anssi-logo.png",
    //   category: "Cybersécurité",
    //   certificateUrl: "/certifications/anssi-securite-numerique.pdf",
    //   badges: ["Recommandé"],
    //   status: "completed"
    // }
  ];

  // Regrouper les certifications par statut
  const completedCertifications = certifications.filter(cert => cert.status === "completed");
  const inProgressCertifications = certifications.filter(cert => cert.status === "in-progress");
  const plannedCertifications = certifications.filter(cert => cert.status === "planned");

  // Fonction pour générer l'icône et la couleur en fonction du statut
  const getStatusInfo = (status) => {
    switch (status) {
      case "completed":
        return { icon: "check_circle", color: "text-green-400", label: "Obtenue" };
      case "in-progress":
        return { icon: "pending", color: "text-amber-400", label: "En cours" };
      case "planned":
        return { icon: "schedule", color: "text-blue-400", label: "Planifiée" };
      default:
        return { icon: "help", color: "text-gray-400", label: "Inconnu" };
    }
  };

  return (
    <section className="section bg-zinc-900/50" id="certifications">
      <div className="container mx-auto px-4 py-16">
        <h2 className="headline-2 text-center mb-4 reveal-up">Mes Certifications</h2>
        
        <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12 reveal-up">
          Les certifications que j'ai obtenues et celles que je prépare attestent de mes compétences 
          et de mon engagement à maintenir un haut niveau de qualification technique.
        </p>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal-up">
          <a href="#completed" className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium">
            Obtenues ({completedCertifications.length})
          </a>
          <a href="#in-progress" className="px-4 py-2 bg-amber-500/20 text-amber-300 rounded-lg text-sm font-medium">
            En cours ({inProgressCertifications.length})
          </a>
          <a href="#planned" className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
            Planifiées ({plannedCertifications.length})
          </a>
        </div>
        
        {/* Section: Certifications obtenues */}
        {completedCertifications.length > 0 && (
          <div id="completed" className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6 text-green-400 reveal-up">
              <span className="material-symbols-rounded align-middle mr-2">check_circle</span>
              Certifications Obtenues
            </h3>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-7xl">
              {completedCertifications.map((certification, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-6 transition-transform hover:-translate-y-1 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition-all relative">
                    {/* Indicateur de statut */}
                    <div className="absolute top-3 right-3">
                      <span className={`material-symbols-rounded ${getStatusInfo(certification.status).color}`}>
                        {getStatusInfo(certification.status).icon}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <figure className="flex-shrink-0">
                        <img
                          src={certification.imgSrc}
                          width={48}
                          height={48}
                          alt={certification.issuer}
                          className="rounded-lg object-contain transition-transform hover:scale-110"
                        />
                      </figure>

                      {/* Content */}
                      <div className="flex-grow pr-6">
                        {/* Category and Badges */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
                            ${certification.category === 'Web' ? 'bg-blue-500/10 text-blue-300' :
                              certification.category === 'Data' ? 'bg-green-500/10 text-green-300' :
                              certification.category === 'Cloud' ? 'bg-purple-500/10 text-purple-300' :
                              certification.category === 'Cybersécurité' ? 'bg-red-500/10 text-red-300' :
                              certification.category === 'Digital' ? 'bg-yellow-500/10 text-yellow-300' :
                              certification.category === 'Réseau' ? 'bg-cyan-500/10 text-cyan-300' :
                              'bg-blue-500/10 text-blue-300'}`}>
                            {certification.category}
                          </span>
                          
                          {certification.badges && certification.badges.map((badge, idx) => (
                            <span key={idx} className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-zinc-700 text-zinc-300">
                              {badge}
                            </span>
                          ))}
                        </div>
                        
                        {/* Title & Details */}
                        <h3 className="text-lg font-semibold leading-tight mb-2">
                          {certification.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-1">
                          {certification.issuer}
                        </p>
                        <p className="text-zinc-500 text-sm mb-3">
                          {certification.date}
                        </p>
                        
                        {/* Lien vers le certificat */}
                        {certification.certificateUrl && (
                          <div className="mt-2">
                            <ButtonPrimary
                              href={certification.certificateUrl}
                              target="_blank"
                              label="Voir le certificat"
                              icon="visibility"
                              classes="text-xs py-1 px-2"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Section: Certifications en cours */}
        {inProgressCertifications.length > 0 && (
          <div id="in-progress" className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6 text-amber-400 reveal-up">
              <span className="material-symbols-rounded align-middle mr-2">pending</span>
              Certifications en Cours
            </h3>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-7xl">
              {inProgressCertifications.map((certification, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-6 transition-transform hover:-translate-y-1 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all relative">
                    {/* Indicateur de statut */}
                    <div className="absolute top-3 right-3">
                      <span className={`material-symbols-rounded ${getStatusInfo(certification.status).color}`}>
                        {getStatusInfo(certification.status).icon}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <figure className="flex-shrink-0">
                        <img
                          src={certification.imgSrc}
                          width={48}
                          height={48}
                          alt={certification.issuer}
                          className="rounded-lg object-contain transition-transform hover:scale-110"
                        />
                      </figure>

                      {/* Content */}
                      <div className="flex-grow pr-6">
                        {/* Category */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
                            ${certification.category === 'Web' ? 'bg-blue-500/10 text-blue-300' :
                              certification.category === 'Data' ? 'bg-green-500/10 text-green-300' :
                              certification.category === 'Cloud' ? 'bg-purple-500/10 text-purple-300' :
                              certification.category === 'Cybersécurité' ? 'bg-red-500/10 text-red-300' :
                              certification.category === 'Digital' ? 'bg-yellow-500/10 text-yellow-300' :
                              certification.category === 'Réseau' ? 'bg-cyan-500/10 text-cyan-300' :
                              'bg-blue-500/10 text-blue-300'}`}>
                            {certification.category}
                          </span>
                        </div>
                        
                        {/* Title & Details */}
                        <h3 className="text-lg font-semibold leading-tight mb-2">
                          {certification.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-1">
                          {certification.issuer}
                        </p>
                        <p className="text-zinc-500 text-sm mb-3">
                          {certification.date}
                        </p>
                        
                        {/* Barre de progression */}
                        {certification.progress && (
                          <div className="mt-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progression</span>
                              <span>{certification.progress}%</span>
                            </div>
                            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-amber-500 rounded-full"
                                style={{ width: `${certification.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Section: Certifications planifiées */}
        {plannedCertifications.length > 0 && (
          <div id="planned" className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6 text-blue-400 reveal-up">
              <span className="material-symbols-rounded align-middle mr-2">schedule</span>
              Certifications Planifiées
            </h3>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-7xl">
              {plannedCertifications.map((certification, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-6 transition-transform hover:-translate-y-1 reveal-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all relative">
                    {/* Indicateur de statut */}
                    <div className="absolute top-3 right-3">
                      <span className={`material-symbols-rounded ${getStatusInfo(certification.status).color}`}>
                        {getStatusInfo(certification.status).icon}
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      {/* Image */}
                      <figure className="flex-shrink-0">
                        <img
                          src={certification.imgSrc}
                          width={48}
                          height={48}
                          alt={certification.issuer}
                          className="rounded-lg object-contain transition-transform hover:scale-110"
                        />
                      </figure>

                      {/* Content */}
                      <div className="flex-grow pr-6">
                        {/* Category */}
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium 
                            ${certification.category === 'Web' ? 'bg-blue-500/10 text-blue-300' :
                              certification.category === 'Data' ? 'bg-green-500/10 text-green-300' :
                              certification.category === 'Cloud' ? 'bg-purple-500/10 text-purple-300' :
                              certification.category === 'Cybersécurité' ? 'bg-red-500/10 text-red-300' :
                              certification.category === 'Digital' ? 'bg-yellow-500/10 text-yellow-300' :
                              certification.category === 'Réseau' ? 'bg-cyan-500/10 text-cyan-300' :
                              'bg-blue-500/10 text-blue-300'}`}>
                            {certification.category}
                          </span>
                        </div>
                        
                        {/* Title & Details */}
                        <h3 className="text-lg font-semibold leading-tight mb-2">
                          {certification.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-1">
                          {certification.issuer}
                        </p>
                        <p className="text-zinc-500 text-sm mb-3">
                          {certification.date}
                        </p>
                        
                        {/* Lien vers plus d'informations */}
                        {certification.infoUrl && (
                          <div className="mt-2">
                            <ButtonPrimary
                              href={certification.infoUrl}
                              target="_blank"
                              label="Plus d'informations"
                              icon="info"
                              classes="text-xs py-1 px-2"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;