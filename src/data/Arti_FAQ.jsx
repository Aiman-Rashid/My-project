export const faqs = [
    {
      question: "What is articulation?",
      answer: (
        <>
          <p>Articulation means how we move our lips, tongue, teeth, and mouth to make speech sounds.</p>
          <p className="fw-semibold mt-3">Example:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Make a /s/ sound by blowing air through our teeth</li>
         
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




 export const urduFaq = [
  {
    question: "تلفظ (آرٹیکولیشن) کیا ہے؟",
    answer: (
      <>
        <p>تلفظ سے مراد ہے کہ ہم بولتے وقت اپنے ہونٹوں، زبان، دانتوں اور منہ کو کیسے حرکت دیتے ہیں تاکہ آوازیں بن سکیں۔</p>
        <p className="fw-semibold mt-3">مثالیں:</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">/س/ کی آواز بنانے کے لیے دانتوں کے درمیان سے ہوا نکالیں.</li>
        </ul>
      </>
    )
  },
  {
    question: "تلفظ کے  مسئلہ (آرٹیکولیشن ڈس آرڈر) کیا ہے؟",
    answer: (
      <>
        <p>یہ ایک عام حالت ہے جب بچہ کچھ مخصوص آوازیں صحیح طرح نہیں بنا پاتا۔ مثلاً وہ "ر" کی جگہ "و" یا "تھ" کی جگہ "س" بولتا ہو۔ یہ خرابی دماغ، منہ یا سماعت کے مسائل سے متعلق نہیں رکتی۔</p>
      </>
    )
  },
  {
    question: "بچے تمام آوازیں کس عمر تک سیکھ لیتے ہیں؟",
    answer: <p>زیادہ تر بچے 4 سے 5 سال کی عمر تک تمام آوازیں بنا لیتے ہیں۔</p>
  },
  {
    question: "تلفظ میں آوازوں کی کیا قسم کی خرابیاں ہو سکتی ہیں؟",
    answer: (
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">تبدیلی</h5>
           <p className="card-text">ایک آواز کو دوسری سے بدل دینا، جیسے "پانی" کو "تانی" کہنا</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">حذف کرنا</h5>
              <p className="card-text">آواز کو چھوڑ دینا، جیسے "کتاب" بولنے کی بجائے صرف "تاب"</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">مسخ شدہ آواز</h5>
<p className="card-text">غیر واضح یا بگڑی ہوئی آواز، جیسے "س" کو سیٹی جیسی آواز میں ادا کرنا</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
         <h5 className="card-title">اضافہ کرنا</h5>
<p className="card-text">لفظ میں اضافی آواز شامل کرنا، مثلاً "کتاب" کو "کتابی" کہنا۔</p>

            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "آوازوں کی عمر کے لحاظ سے ترتیب کیا ہے؟",
    answer: (
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>آوازوں پر عبور کی عمر</th>
              <th>آوازیں</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2-3 سال</td>
              <td>پ، ب، م، ن، ہ، و، ت، د، ک، گ، ف، ی، نگ (جیسے "بیٹھنا")</td>
            </tr>
            <tr>
              <td>4 سال</td>
              <td>و، ل، س، ز، ش، ج (جیسے "جَمپ")، چ (جیسے "چِیز")، ش (جیسے "بھیڑ")</td>
            </tr>
            <tr>
              <td>5-6 سال</td>
              <td>ر، ش، ژ (جیسے "کشمیر")، تھ (بے آواز جیسے "تھینک یو")، تھ (آواز والا جیسے "وے")</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    question: "تلفظ کی خرابی کی کیا وجہ ہے؟",
    answer: (
      <p>
        تلفظ کی خرابی کی کوئی خاص وجہ نہیں ہوتی۔ اس کا مطلب یہ نہیں کہ آپ کے بچے کے دماغ، اعصاب، ہونٹوں، زبان، دانتوں، جبڑے، پھیپھڑوں یا سماعت میں کوئی مسئلہ ہے۔
      </p>
    )
  },
  {
    question: "تلفظ کی خرابی کو کیسے ٹھیک کیا جاتا ہے؟",
    answer: (
      <p>
        تلفظ کی خرابی کو تقریر اور زبان کی تھراپی سے بہتر بنایا جا سکتا ہے۔ ہم تجویز کرتے ہیں کہ آپ کسی اسپیچ تھراپسٹ سے رجوع کریں۔
      </p>
    )
  }
];
   