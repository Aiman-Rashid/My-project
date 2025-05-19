import { Link } from "react-router-dom";
import "../styles/Articulation.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const colors = [
  "#B0E0E6", "#87CEFA", "#A2DFF7",
  "#FFB6C1", "#FFD1DC", "#FAD0C9",
  "#E6E6FA", "#E0B0FF", "#D8B4E2",
  "#FFF9B1", "#FFFFE0", "#FFF3B0"
];

const consonantSections = [
  {
    ageRange: "2-3",
    minAge: 2,
    maxAge: 3,
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g"] }
    ]
  },
  {
    ageRange: "4",
    minAge: 4,
    maxAge: 4,
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f"]},
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    ageRange: "5-6",
    minAge: 5,
    maxAge: 6,
    sections: [
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["th"] }
    ]
  },
  {
    ageRange: "6-7",
    minAge: 6,
    maxAge: 7,
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];
const urduConsonantSections = [
  {
    ageRange: "2-3",
    minAge: 2,
    maxAge: 3,
    sections: [
      {
        label: "🟢 سبز روشنی (آسان ہونٹوں والے حروف)",
        sounds: ["پ", "ب", "م", "ف", "و"]  // Bilabials, easy fricatives
      },
      {
        label: "🟡 پیلی روشنی (زبان کی نوک والے حروف)",
        sounds: ["ت", "د", "ن", "ل", "ر"]  // Alveolars and dentals
      },
      {
        label: "🔴 سرخ روشنی (زبان کے پچھلے حصے والے حروف)",
        sounds: ["ک", "گ"]  // Velars
      }
    ]
  },
  {
    ageRange: "4",
    minAge: 4,
    maxAge: 4,
    sections: [
      {
        label: "🟢 سبز روشنی (آسان ہونٹوں والے حروف)",
        sounds: ["پھ", "بھ"]  // Aspirated bilabials
      },
      {
        label: "🟡 پیلی روشنی (زبان کی نوک والے درمیانے درجے کے حروف)",
        sounds: ["س", "ز", "ٹ", "ڈ", "ڑ"]  // Fricatives & retroflex
      },
      {
        label: "🔴 سرخ روشنی (مشکل زبان والے حروف)",
        sounds: ["چ", "ج", "ش"]  // Affricates, post-alveolars
      }
    ]
  },
  {
    ageRange: "5-6",
    minAge: 5,
    maxAge: 6,
    sections: [
      {
        label: "🔴 سرخ روشنی (اعلیٰ درجے کے مشکل حروف)",
        sounds: ["ژ", "گھ", "کھ", "ق", "غ", "جھ"]  // Advanced fricatives/affricates
      }
    ]
  },
  {
    ageRange: "6-7",
    minAge: 6,
    maxAge: 7,
    sections: [
      {
        label: "🔴 سرخ روشنی (گھریلو مشق کے لیے موزوں نہیں)",
        sounds: ["ڑھ", "ڈھ", "لھ", "رھ"]  // Very advanced/aspirated retroflex
      }
    ]
  }
];
const AgeSoundExercises = () => {
  const { i18n } = useTranslation();
  const [age, setAge] = useState(null);
  const [filteredSections, setFilteredSections] = useState([]);

  useEffect(() => {
    const storedAge = parseInt(localStorage.getItem("childAge")) ||
                     parseInt(new URLSearchParams(window.location.search).get("age"));

    const isUrdu = i18n.language === "ur";

    if (storedAge) {
      setAge(storedAge);
      const dataset = isUrdu ? urduConsonantSections : consonantSections;
      const filtered = dataset.filter(section =>
        storedAge >= section.minAge && storedAge <= section.maxAge
      );
      setFilteredSections(filtered);
    } else {
      setFilteredSections(isUrdu ? urduConsonantSections : consonantSections);
    }
  }, [i18n.language]);

  return (
    <main className="container-q" role="main">
      <h2 className="text-center mb-3">
        {i18n.language === "ur" ? "🎯 آوازوں کی مشق" : "🎯 Articulation Exercises"}
      </h2>

      {age ? (
        <div className="age-display mb-4"></div>
      ) : (
        <div className="alert alert-warning">
          {i18n.language === "ur" ? "عمر درج نہیں کی گئی۔ تمام مشقیں دکھائی جا رہی ہیں۔" : "Age not specified. Showing all exercises."}
        </div>
      )}

      <SectionGroup
        title={i18n.language === "ur" ? "🔤 آوازیں" : "🔤 Consonant Sounds"}
        groupedSections={filteredSections}
      />
    </main>
  );
};


const SectionGroup = ({ title, groupedSections }) => {
  const { i18n } = useTranslation();
  const direction = i18n.language === "ur" ? "rtl" : "ltr";

  if (groupedSections.length === 0) {
    return (
      <div className="alert alert-info" dir={direction}>
        {i18n.language === "ur"
          ? "اس عمر کے گروپ کے لیے کوئی مشق دستیاب نہیں۔"
          : "No exercises available for this age group."}
      </div>
    );
  }

  return (
    <section
      className="mb-5 Articulation"
      aria-label={title}
      dir={direction} // 👈 Set direction here
    >
      {groupedSections.map((group, index) => (
        <article key={index} className="mb-4">
          <h4 className="age-heading">{group.ageRange} {i18n.language === "ur" ? "سال" : "Years"}</h4>
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
                            {i18n.language === "ur" ? "ماہر سے رجوع کریں" : "See SLP"}
                          </button>
                        ) : (
                          <Link
                            to={`/ArticulationGame/${sound.toLowerCase()}`}
                            className="btn btn-sm btn-primary"
                            aria-label={`Practice the sound ${sound}`}
                          >
                            {i18n.language === "ur" ? "مشق کریں" : "Practice"}
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
};


export default AgeSoundExercises;
