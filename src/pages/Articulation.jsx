import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Articulation.css';

const colors = [
  "#B0E0E6", "#87CEFA", "#A2DFF7",
  "#FFB6C1", "#FFD1DC", "#FAD0C9",
  "#E6E6FA", "#E0B0FF", "#D8B4E2",
  "#FFF9B1", "#FFFFE0", "#FFF3B0"
];

const consonantSections = [
  {
    age: "2–3 Years",
    minAge: 2,
    maxAge: 3,
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g"] }
    ]
  },
  {
    age: "4 Years",
    minAge: 4,
    maxAge: 4,
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f", "v"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s", "z"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    age: "5–6 Years",
    minAge: 5,
    maxAge: 6,
    sections: [
  
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["th"] }
    ]
  },
  {
    age: "6-7 Years",
    minAge: 6,
    maxAge: 7,
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];

const AgeSoundExercises = () => {
  const [age, setAge] = useState(null);
  const [filteredSections, setFilteredSections] = useState([]);

  useEffect(() => {
    const storedAge = parseInt(localStorage.getItem("childAge"));
    if (storedAge) {
      setAge(storedAge);
      
      // Filter sections based on age
      const filtered = consonantSections.filter(section => 
        storedAge >= section.minAge && storedAge <= section.maxAge
      );
      
      setFilteredSections(filtered);
    }
  }, []);

  return (
    <main className="container-q" role="main">


      <h2 className="text-center mb-3">🎯 Articulation Excercises</h2>

      {age && (
        <div className="practice-intro mb-4">
          <p className="P">
            Showing exercises for age {age}. Practice speech sounds organized by age and difficulty.
          </p>
        </div>
      )}

      {filteredSections.length > 0 ? (
        <SectionGroup title="🔤 Consonant Sounds" groupedSections={filteredSections} />
      ) : (
        <div className="alert alert-info">
          {age ? "No exercises available for this age group." : "Loading age information..."}
        </div>
      )}
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
                      {/* Only show Practice button for sounds that have exercises */}
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