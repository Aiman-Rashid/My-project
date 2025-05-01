import { Link } from "react-router-dom";
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
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g", "ng"] }
    ]
  },
  {
    age: "4 Years",
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f", "v"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s", "z", "l"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    age: "5–6 Years",
    sections: [
      { label: "🟡 Yellow Light (Emerging Sounds)", sounds: ["r"] },
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["zh", "th (thanks)", "th (they)"] }
    ]
  },
  {
    age: "6+ Years",
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];

const vowelSections = [
  {
    label: "🟢 Green Light Vowels",
    sounds: ["ah", "aah", "oo", "oh", "ee"]
  },
  {
    label: "🟡 Yellow Light Vowels",
    sounds: ["i", "uh", "eh", "i*", "a**"]
  },
  {
    label: "🔴 Red Light Vowels (Not for home)",
    sounds: ["R", "L", "RL"]
  }
];

const SectionGroup = ({ title, groupedSections }) => (
  <section className="mb-5" aria-label={title}>
    <h3 className="main-section-title">{title}</h3>
    {groupedSections.map((group, index) => (
      <article key={index} className="mb-4">
        {group.age && <h4 className="age-heading">{group.age}</h4>}
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
                      <Link
                        to={`/ArticulationGame/${sound.replace(/[^a-zA-Z0-9]/g, '')}`}
                        className="btn btn-sm btn-primary"
                        aria-label={`Practice the sound ${sound}`}
                      >
                        Practice
                      </Link>
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

const AgeSoundExercises = () => {
  return (
    <main className="container-q" role="main">
      <div className="mb-4">
        <Link to="/Articulation" className="btn btn-outline-secondary">
          ← Back to Introduction
        </Link>
      </div>

      <h2 className="text-center mb-3">🎯 Articulation Practice by Sound & Age</h2>

      <div className="practice-intro mb-4">
        <p>
          Practice speech sounds organized by age and difficulty. Start with sounds appropriate for your age group and gradually move to more challenging ones.
          Click "Practice" to begin exercises focused on each sound.
        </p>
      </div>

      <SectionGroup title="🔤 Consonant Sounds" groupedSections={consonantSections} />

      <hr className="my-5" />

      <SectionGroup title="🗣️ Vowel Sounds" groupedSections={[{ sections: vowelSections }]} />
    </main>
  );
};

export default AgeSoundExercises;
