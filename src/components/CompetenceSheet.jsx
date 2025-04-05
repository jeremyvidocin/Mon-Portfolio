import { useState } from 'react';
import { ButtonPrimary } from "./Button";

const CompetenceSheet = () => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  return (
    <section className="section bg-zinc-900/50" id="competences">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 text-center mb-16 reveal-up">Référentiel de compétences BTS</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Affichage du PDF */}
          <div className="bg-zinc-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            {isPdfVisible ? (
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-4">Fiche de compétences BTS SIO</h3>
                <div className="relative min-h-[600px] mb-4">
                  <iframe
                    src="/resume/tableau-de-synthese.pdf"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    title="Fiche de compétences BTS"
                  />
                </div>
                <div className="flex justify-between">
                  <button 
                    className="btn btn-outline"
                    onClick={() => setIsPdfVisible(false)}
                  >
                    Fermer
                  </button>
                  <ButtonPrimary
                    href="/resume/tableau-de-synthese.pdf"
                    target="_blank"
                    label="Ouvrir en plein écran"
                    icon="open_in_new"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10">
                <img 
                  src="/images/skill.svg" 
                  alt="Fiche de compétences" 
                  className="w-120 h-120 mb-6 opacity-75 rounded-xl"
                />
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Tableau de synthèse des compétences</h3>
                <p className="text-center text-zinc-400 mb-6 max-w-lg">
                  Cette fiche présente l'ensemble des compétences acquises durant ma formation BTS SIO option SLAM, 
                  conformément au référentiel officiel de la formation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {/* <ButtonPrimary
                    label="Consulter la fiche"
                    icon="visibility"
                    onClick={() => setIsPdfVisible(true)}
                  /> */}
                  <ButtonPrimary
                    href="/resume/tableau-de-synthese.pdf"
                    target="_blank"
                    label="Télécharger la fiche"
                    icon="download"
                    download="tableau-de-synthese-jeremy-vidocin.pdf"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetenceSheet;