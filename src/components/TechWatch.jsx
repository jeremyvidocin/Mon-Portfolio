import { useState } from 'react';
import { ButtonOutline } from "./Button";

const TechWatch = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Catégories de veille technologique
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'websites', label: 'Sites Web' },
    { id: 'youtube', label: 'Chaînes YouTube' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'newsletters', label: 'Newsletters' },
  ];

  // Sources de veille technologique
  const sources = [
    {
      name: "Korben",
      category: "websites",
      link: "https://korben.info/",
      description: "Blog français sur les nouvelles technologies, la sécurité informatique et des astuces tech.",
      logo: "/images/korben.png",
      tags: ["Tech", "Sécurité", "Astuces"]
    },
    {
      name: "Dev.to",
      category: "websites",
      link: "https://dev.to/",
      description: "Communauté internationale de développeurs partageant des articles, tutoriels et discussions sur la programmation.",
      logo: "/images/devto.png",
      tags: ["Programmation", "Communauté", "Développement"]
    },
    {
      name: "TheCodingSloth",
      category: "youtube",
      link: "https://www.youtube.com/@TheCodingSloth",
      description: "Tutoriels de programmation avec une approche détendue et accessible pour les débutants comme les avancés.",
      logo: "/images/thecodingsloth.jpg",
      tags: ["Programmation", "Tutoriels", "Code"]
    },
    {
      name: "V2F",
      category: "youtube",
      link: "https://www.youtube.com/@V2F",
      description: "Chaîne française dédiée à la vulgarisation de la cybersécurité et des technologies liées à la sécurité informatique.",
      logo: "/images/v2f.jpg",
      tags: ["Cybersécurité", "Hacking éthique", "Français"]
    },
    {
        name: "Sloth Bytes",
        category: "newsletters",
        link: "https://thecodingsloth.com/newsletter/",
        description: "Newsletter parfaite pour les programmeurs paresseux, offrant des astuces concises et efficaces de programmation.",
        logo: "/images/slothbytes.avif",
        tags: ["Programmation", "Astuces", "Efficacité"]
    },
    {
      name: "Underscore_",
      category: "youtube",
      link: "https://www.youtube.com/@Underscore_",
      description: "Chaîne française spécialisée dans la programmation et le développement web avec des tutoriels de qualité.",
      logo: "/images/underscore.jpg",
      tags: ["Programmation", "Web", "Français"]
    }
  ];

  // Filtrer les sources en fonction de la catégorie active
  const filteredSources = activeCategory === 'all' 
    ? sources 
    : sources.filter(source => source.category === activeCategory);

  return (
    <section className="section bg-zinc-900/50" id="techwatch">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 text-center mb-6 reveal-up">Ma Veille Technologique</h2>
        
        <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12 reveal-up">
          Pour rester à jour avec les dernières technologies et tendances, j'utilise plusieurs sources d'information.
          Voici les ressources que je consulte régulièrement pour enrichir mes connaissances et compétences.
        </p>
        
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal-up">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Grille des sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredSources.map((source, index) => (
            <div 
              key={index} 
              className="bg-zinc-800 rounded-xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition-all reveal-up"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-700 p-1">
                  <img 
                    src={source.logo || `/images/${source.category}-default.png`}
                    alt={`${source.name} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Contenu */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{source.name}</h3>
                  
                  {/* Badge de catégorie */}
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                    source.category === 'websites' ? 'bg-green-500/20 text-green-400' :
                    source.category === 'youtube' ? 'bg-red-500/20 text-red-400' :
                    source.category === 'podcasts' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {categories.find(cat => cat.id === source.category)?.label}
                  </span>
                  
                  <p className="text-zinc-400 text-sm mb-3">
                    {source.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {source.tags?.map((tag, idx) => (
                      <span key={idx} className="bg-zinc-700/50 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={source.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  >
                    Consulter
                    <span className="material-symbols-rounded text-[16px] ml-1">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Appel à l'action */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 mb-6 reveal-up">
            La veille technologique est essentielle pour rester compétitif dans le domaine de l'informatique.
            Je consacre régulièrement du temps pour me tenir informé des dernières innovations et bonnes pratiques.
          </p>
          
          <ButtonOutline
            label="Voir mes projets"
            icon="code"
            href="#work"
            classes="mx-auto reveal-up"
          />
        </div>
      </div>
    </section>
  );
};

export default TechWatch;