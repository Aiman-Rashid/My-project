import { Link } from "react-router-dom";
import '../styles/Articulation.css';
import { useState, useEffect } from "react";

const colors = [
  "#B0E0E6", "#87CEFA", "#A2DFF7",
  "#FFB6C1", "#FFD1DC", "#FAD0C9",
  "#E6E6FA", "#E0B0FF", "#D8B4E2",
  "#FFF9B1", "#FFFFE0", "#FFF3B0"
];

const consonantSections = [
  {
    age: "2–3 Years",
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g"] }
    ]
  },
  {
    age: "4 Years",
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f", "v"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s", "z"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    age: "5–6 Years",
    sections: [
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["th"] }
    ]
  },
  {
    age: "6-7 Years",
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];

const AgeSoundExercises = () => {
  return (
    <main className="container-q" role="main">
      <h2 className="text-center mb-3">🎯 Articulation Exercises</h2>
      <SectionGroup title="🔤 Consonant Sounds" groupedSections={consonantSections} />
    </main>
  );
};

const SectionGroup = ({ title, groupedSections }) => (
  <section className="mb-5 Articulation" aria-label={title}>
    {groupedSections.map((group, index) => (
      <article key={index} className="mb-4">
        <h4 className="age-heading">{group.age}</h4>
        {group.sections.map((section, secIndex) => (
          <div key={secIndex} className="mb-3">
            <h5 className="section-title">{section.label}</h5>
            <div className="row">
              {section.sounds.map((sound, i) => (
                <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div
                    className="card sound-card text-center shadow-sm"
                    style={{
                      backgroundColor: colors[(index + secIndex + i) % colors.length],
                      borderRadius: "20px"
                    }}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 className="sound-title mb-2" aria-label={`Sound ${sound}`}>
                        🔤 {sound}
                      </h5>
                      {["R", "L"].includes(sound) ? (
                        <button 
                          className="btn btn-sm btn-secondary" 
                          disabled
                          aria-label={`Professional guidance recommended for ${sound} sound`}
                        >
                          See SLP
                        </button>
                      ) : (
                        <Link
                          to={`/ArticulationGame/${sound.toLowerCase()}`}
                          className="btn btn-sm btn-primary"
                          aria-label={`Practice the sound ${sound}`}
                        >
                          Practice
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </article>
    ))}
  </section>
);

export default AgeSoundExercises;
