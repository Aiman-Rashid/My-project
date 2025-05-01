const faqs = [
    {
      question: "What is articulation?",
      answer: (
        <>
          <p>Articulation means how we move our lips, tongue, teeth, and mouth to make speech sounds.</p>
          <p className="fw-semibold mt-3">Example:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Make a /s/ sound by blowing air through our teeth</li>
            <li className="list-group-item">Use a short /ʌ/ sound (like “uh”)</li>
            <li className="list-group-item">End with a /n/ sound using the nose</li>
          </ul>
        </>
      )
    },
    {
      question: "What is an articulation disorder?",
      answer: (
        <>
          <p>Articulation disorder is a common condition when your child can’t make specific sounds. For example, they may always replace “r” with “w” or “th” with “s.” The disorder isn’t related to any issues with their brain, mouth or hearing.</p>
        </>
      )
    },
    {
      question: "When do most children learn to make all speech sounds?",
      answer: <p>Most children learn to make all speech sounds by age 4 or 5.</p>
    },
    {
      question: "What are the types of sound issues in articulation?",
      answer: (
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Substitution</h5>
                <p className="card-text">One sound replaces another ("tat" for "cat")</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Omission</h5>
                <p className="card-text">Sound is left out ("ca" for "cat")</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Distortion</h5>
                <p className="card-text">Unclear or lisped sound (slushy “s” sound)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Addition</h5>
                <p className="card-text">Extra sound added (“puh-lay” for “play”)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "What are the speech sounds by age?",
      answer: (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Age of Mastery</th>
                <th>Sounds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2–3 years</td>
                <td>p, b, m, n, h, w, t, d, k, g, f, y, ng (as in "sitting")</td>
              </tr>
              <tr>
                <td>4 years</td>
                <td>v, l, s, z, sh, j (as in "jump"), ch (as in "cheese"), sh (as in "sheep")</td>
              </tr>
              <tr>
                <td>5–6 years</td>
                <td>r, sh, zh (as in "cashmere"), th (unvoiced as in "thanks"), th (voiced as in "they")</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      question: "What causes articulation disorder?",
      answer: (
        <p>
          Articulation disorder has no known cause. It doesn’t mean something is wrong with your child’s brain, nerves, lips, tongue, teeth, jaw, lungs or hearing.
        </p>
      )
    },
    {
      question: "How do you fix articulation disorder?",
      answer: (
        <p>
          Articulation disorders can be improved with speech and language therapy. We suggest you go to a Speech Therapist and you can explore programs and tools for recovery at SpeechBuddy.
        </p>
      )
    }
  ];
  
  export default faqs;  // ✅ Very important!
  