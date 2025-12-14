import { createContext, useState, ReactNode } from "react";

export type Language = "ro" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    booking: string;
    contact: string;
    language: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      bookBtn: string;
      learnBtn: string;
    };
    features: {
      title: string;
      subtitle: string;
      empathy: {
        title: string;
        desc: string;
      };
      evidence: {
        title: string;
        desc: string;
      };
      holistic: {
        title: string;
        desc: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      btn: string;
    };
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    credentials: {
      title: string;
      phd: {
        title: string;
        desc: string;
      };
      licensed: {
        title: string;
        desc: string;
      };
      certified: {
        title: string;
        desc: string;
      };
    };
    resources: {
      title: string;
      cv: {
        title: string;
        desc: string;
      };
      videoCv: {
        title: string;
        desc: string;
      };
    };
    connectTitle: string;
    philosophy: {
      title: string;
      quote: string;
      author: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    individual: {
      title: string;
      desc: string;
      duration: string;
    };
    couples: {
      title: string;
      desc: string;
      duration: string;
    };
    anxiety: {
      title: string;
      desc: string;
      duration: string;
    };
    trauma: {
      title: string;
      desc: string;
      duration: string;
    };
    specializations: {
      title: string;
      depression: {
        title: string;
        desc: string;
      };
      transitions: {
        title: string;
        desc: string;
      };
      mindfulness: {
        title: string;
        desc: string;
      };
      women: {
        title: string;
        desc: string;
      };
      grief: {
        title: string;
        desc: string;
      };
      selfEsteem: {
        title: string;
        desc: string;
      };
    };
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    connectTitle: string;
    email: string;
    phone: string;
    address: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
  };
  booking: {
    title: string;
    subtitle: string;
    sessionTypes: {
      title: string;
      individual: string;
      couples: string;
      minutes: string;
    };
    schedule: {
      title: string;
      weekdays: string;
      friday: string;
      weekend: string;
      onRequest: string;
    };
    info: {
      title: string;
      confirmation: string;
      cancellation: string;
      firstSession: string;
    };
    timeModal: {
      title: string;
      description: string;
    };
    bookingModal: {
      titleBook: string;
      titleSuccess: string;
      descBook: string;
      descSuccess: string;
      date: string;
      time: string;
      fullName: string;
      email: string;
      phone: string;
      sessionType: string;
      selectType: string;
      notes: string;
      notesPlaceholder: string;
      cancel: string;
      reserve: string;
      confirmationEmail: string;
      knowYouBetter: string;
      questionnaireDesc: string;
      completeQuestionnaire: string;
      maybeLater: string;
    };
    weekendError: {
      title: string;
      desc: string;
    };
  };
  notFound: {
    title: string;
    subtitle: string;
    btn: string;
  };
  footer: {
    role: string;
    tagline: string;
    contact: string;
    schedule: string;
    weekdays: string;
    friday: string;
    weekend: string;
    onRequest: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  ro: {
    nav: {
      home: "Acasă",
      about: "Despre",
      services: "Servicii",
      booking: "Programare",
      contact: "Contact",
      language: "Limbă",
    },
    home: {
      hero: {
        title: "Îndrumare Blândă pentru Călătoria Ta de Bunăstare Mentală",
        subtitle:
          "Servicii profesionale de psihologie într-un mediu cald și natural, concepute pentru a te ajuta să te redescoperi și să îți orchestrezi viața ca pe o capodoperă.",
        bookBtn: "Programează Consultație",
        learnBtn: "Află Mai Multe",
      },
      features: {
        title: "O Abordare Naturală a Sănătății Mentale",
        subtitle:
          "Experimentează terapia într-un mediu liniștit care promovează vindecarea și creșterea personală",
        empathy: {
          title: "Îngrijire Empatică",
          desc: "Un spațiu cald și necritic unde poți explora gândurile și sentimentele tale în siguranță.",
        },
        evidence: {
          title: "Metode Bazate pe Dovezi",
          desc: "Utilizăm abordări terapeutice dovedite, adaptate nevoilor și obiectivelor tale unice.",
        },
        holistic: {
          title: "Bunăstare Holistică",
          desc: "Abordarea minții, corpului și spiritului pentru sănătate mentală și bunăstare cuprinzătoare.",
        },
      },
      cta: {
        title: "Pregătit să Începi Călătoria Ta?",
        subtitle:
          "Primul pas către bunăstarea mentală începe cu o conversație. Să discutăm despre cum te pot ajuta.",
        btn: "Programează-te Acum",
      },
    },
    about: {
      title: "Despre mine,",
      p1: "Cu peste 10 ani de experiență în psihologie clinică, sunt dedicată să ofer servicii de înaltă calitate bazate pe empatie și pe dovezi științifice pentru sănătatea mentală, într-un mediu liniștit și primitor.",
      p2: "Abordarea mea combină metodele terapeutice tradiționale cu practicile de mindfulness și tehnicile de vindecare inspirate de natură. Cred că adevărata bunăstare vine din înțelegerea interconexiunii dintre bunăstarea noastră mentală, emotională și fizică.",
      p3: "Mă specializez în tulburări de anxietate, depresie, recuperarea după traume și tranziții de viață, ajutând indivizii să își găsească calea către echilibrul emoțional și creșterea personală.",
      credentials: {
        title: "Acreditări & Educație",
        phd: {
          title: "Ph.D. în Psihologie Clinică",
          desc: "Universitatea Babeș-Bolyai, 2028",
        },
        licensed: {
          title: "Psiholog Clinician Licențiat",
          desc: "Colegiul Psihologilor din România",
        },
        certified: {
          title: "Terapeut Certificat în Mindfulness",
          desc: "Centrul pentru Studii de Mindfulness",
        },
      },
      resources: {
        title: "Resurse & Prezentare",
        cv: {
          title: "Curriculum Vitae (CV)",
          desc: "Vizualizează experiența profesională, educația și publicațiile mele.",
        },
        videoCv: {
          title: "Video CV",
          desc: "O scurtă prezentare video despre mine și abordarea mea terapeutică.",
        },
      },
      connectTitle: "Haide să povestim",
      philosophy: {
        title: "Filosofia Mea Terapeutică",
        quote:
          "Vindecarea are loc între relații și conexiune. Cred că fiecare persoană are o capacitate înnăscută de creștere și reziliență. Rolul meu este să ofer un spațiu sigur și îngrijitor unde poți să te reconectezi cu interiorul și să îți găsești calea înainte.",
        author: "— Georgiana Balea",
      },
    },
    services: {
      title: "Servicii Profesionale",
      subtitle:
        "Servicii cuprinzătoare de sănătate mentală adaptate pentru a sprijini călătoria ta unică către bunăstare și creștere personală",
      individual: {
        title: "Terapie Individuală",
        desc: "Sesiuni unu-la-unu concentrate pe obiectivele, provocările și creșterea ta personală. Folosim abordări bazate pe dovezi, inclusiv TCC, mindfulness și terapie somatică.",
        duration: "Sesiuni de 50 de minute",
      },
      couples: {
        title: "Terapie de Cuplu",
        desc: "Îmbunătățește-ți relația prin comunicare îmbunătățită, rezolvarea conflictelor și conexiune emotională mai profundă, folosind metodele Gottman și EFT.",
        duration: "Sesiuni de 75 de minute",
      },
      anxiety: {
        title: "Management Anxietate & Stres",
        desc: "Tratament specializat pentru tulburările de anxietate, atacurile de panică și stresul cronic, folosind intervenții bazate pe mindfulness și tehnici cognitive-comportamentale.",
        duration: "Sesiuni individuale sau de grup disponibile",
      },
      trauma: {
        title: "Recuperare după Traume",
        desc: "Terapie blândă și informată despre traume, folosind EMDR și abordări somatice pentru a te ajuta să te vindeci de experiențele din trecut și să îți recapeți siguranța și puterea.",
        duration: "Sesiuni intensive specializate disponibile",
      },
      specializations: {
        title: "Arii de Specializare",
        depression: {
          title: "Depresie & Tulburări de Dispoziție",
          desc: "Tratament cuprinzător pentru depresie, tulburare bipolară și tulburare afectivă sezonieră",
        },
        transitions: {
          title: "Tranziții de Viață",
          desc: "Sprijin prin schimbări majore de viață, tranziții de carieră și schimbări în relații",
        },
        mindfulness: {
          title: "Mindfulness & Meditație",
          desc: "Predarea practicilor de mindfulness pentru reducerea stresului și reglarea emoțională",
        },
        women: {
          title: "Sănătatea Mentală a Femeilor",
          desc: "Îngrijire specializată pentru sănătatea mentală perinatală, schimbări hormonale și probleme ale femeilor",
        },
        grief: {
          title: "Doliu & Pierdere",
          desc: "Sprijin compassionate prin doliu și pierderi semnificative",
        },
        selfEsteem: {
          title: "Stimă de Sine & Identitate",
          desc: "Construirea încrederii, valorii de sine și exprimării de sine autentice",
        },
      },
      cta: "Programează o Consultație",
    },
    contact: {
      title: "Contactează-mă",
      subtitle:
        "Pentru întrebări, programări sau a începe călătoria ta, completează formularul de mai jos.",
      infoTitle: "Informații de Contact",
      connectTitle: "Urmărește-mă pe Rețelele Sociale",
      email: "Email",
      phone: "Telefon",
      address: "Adresă",
      formTitle: "Trimite un Mesaj",
      formName: "Nume Complet",
      formEmail: "Email",
      formSubject: "Subiect (Opțional)",
      formMessage: "Mesajul tău...",
      formSubmit: "Trimite Mesajul",
    },
    booking: {
      title: "Programează Sesiunea Ta",
      subtitle:
        "Alege un moment convenabil pentru sesiunea ta de terapie. Aștept cu nerăbdare să te sprijin în călătoria ta de bunăstare.",
      sessionTypes: {
        title: "Tipuri de Sesiuni",
        individual: "Terapie Individuală",
        couples: "Terapie de Cuplu",
        minutes: "minute",
      },
      schedule: {
        title: "Program",
        weekdays: "Luni - Joi:",
        friday: "Vineri:",
        weekend: "Weekend:",
        onRequest: "La cerere",
      },
      info: {
        title: "Informații Importante",
        confirmation: "Confirmarea se face cu 24h înainte",
        cancellation: "Anularea gratuită până cu 48h înainte",
        firstSession: "Prima sesiune include evaluarea inițială",
      },
      timeModal: {
        title: "Selectează Ora",
        description: "Alege un interval disponibil pentru",
      },
      bookingModal: {
        titleBook: "Rezervă Sesiunea",
        titleSuccess: "Programare Confirmată!",
        descBook: "Completează formularul pentru a confirma programarea",
        descSuccess: "Sesiunea ta a fost programată cu succes",
        date: "Data:",
        time: "Ora:",
        fullName: "Nume Complet",
        email: "Email",
        phone: "Telefon",
        sessionType: "Tipul Sesiunii",
        selectType: "Selectează tipul sesiunii",
        notes: "Observații (opțional)",
        notesPlaceholder:
          "Orice informații suplimentare pe care dorești să le împărtășești...",
        cancel: "Anulează",
        reserve: "Rezervă Sesiunea",
        confirmationEmail:
          "Vei primi un email de confirmare în scurt timp cu toate detaliile sesiunii.",
        knowYouBetter: "Îți doresc să te cunosc mai bine",
        questionnaireDesc:
          "Pentru a putea să îți ofer cea mai bună experiență terapeutică, te invit să completezi un scurt chestionar. Acest pas este complet opțional, dar mă va ajuta să te înțeleg mai bine înainte de prima noastră întâlnire.",
        completeQuestionnaire: "Da, completez chestionarul",
        maybeLater: "Poate mai târziu",
      },
      weekendError: {
        title: "Weekend indisponibil",
        desc: "Programările în weekend sunt disponibile doar la cerere. Te rugăm să ne contactezi.",
      },
    },
    notFound: {
      title: "Pagina nu a fost găsită",
      subtitle: "Ne pare rău, dar pagina pe care o cauți nu există.",
      btn: "Înapoi la Pagina Principală",
    },
    footer: {
      role: "Psiholog Clinician",
      tagline: "Îndrumare profesională pentru bunăstarea ta mentală",
      contact: "Contact",
      schedule: "Program",
      weekdays: "Luni - Joi:",
      friday: "Vineri:",
      weekend: "Weekend:",
      onRequest: "La cerere",
      rights: "Toate drepturile rezervate.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      booking: "Booking",
      contact: "Contact",
      language: "Language",
    },
    home: {
      hero: {
        title: "Gentle Guidance for Your Mental Wellness Journey",
        subtitle:
          "Professional psychology services in a warm and natural environment, designed to help you rediscover yourself and orchestrate your life as a masterpiece.",
        bookBtn: "Book Consultation",
        learnBtn: "Learn More",
      },
      features: {
        title: "A Natural Approach to Mental Health",
        subtitle:
          "Experience therapy in a peaceful environment that promotes healing and personal growth",
        empathy: {
          title: "Empathetic Care",
          desc: "A warm, non-judgmental space where you can safely explore your thoughts and feelings.",
        },
        evidence: {
          title: "Evidence-Based Methods",
          desc: "We use proven therapeutic approaches, tailored to your unique needs and goals.",
        },
        holistic: {
          title: "Holistic Wellness",
          desc: "Addressing mind, body, and spirit for comprehensive mental health and well-being.",
        },
      },
      cta: {
        title: "Ready to Begin Your Journey?",
        subtitle:
          "The first step towards mental wellness begins with a conversation. Let's discuss how I can help you.",
        btn: "Book Now",
      },
    },
    about: {
      title: "About Georgiana Balea",
      p1: "With over 15 years of experience in clinical psychology, I'm dedicated to providing empathetic and evidence-based mental health care in a peaceful and welcoming environment.",
      p2: "My approach combines traditional therapeutic methods with mindfulness practices and nature-inspired healing techniques. I believe true wellness comes from understanding the interconnection between our mental, emotional, and physical well-being.",
      p3: "I specialize in anxiety disorders, depression, trauma recovery, and life transitions, helping individuals find their path to emotional balance and personal growth.",
      credentials: {
        title: "Credentials & Education",
        phd: {
          title: "Ph.D. in Clinical Psychology",
          desc: "University of Bucharest, 2010",
        },
        licensed: {
          title: "Licensed Clinical Psychologist",
          desc: "Romanian Psychologists Association",
        },
        certified: {
          title: "Certified Mindfulness Therapist",
          desc: "Center for Mindfulness Studies",
        },
      },
      resources: {
        title: "Resources & Introduction",
        cv: {
          title: "Curriculum Vitae (CV)",
          desc: "View my professional experience, education, and publications.",
        },
        videoCv: {
          title: "Video CV",
          desc: "A short video introduction about me and my therapeutic approach.",
        },
      },
      connectTitle: "Let's Connect",
      philosophy: {
        title: "My Therapeutic Philosophy",
        quote:
          "Healing happens between relationships and connections. I believe every person has an innate capacity for growth and resilience. My role is to provide a safe and nurturing space where you can reconnect with your inner self and find your path forward.",
        author: "— Georgiana Balea",
      },
    },
    services: {
      title: "Professional Services",
      subtitle:
        "Comprehensive mental health services tailored to support your unique journey towards wellness and personal growth",
      individual: {
        title: "Individual Therapy",
        desc: "One-on-one sessions focused on your personal goals, challenges, and growth. We use evidence-based approaches including CBT, mindfulness, and somatic therapy.",
        duration: "50-minute sessions",
      },
      couples: {
        title: "Couples Therapy",
        desc: "Enhance your relationship through improved communication, conflict resolution, and deeper emotional connection, using Gottman and EFT methods.",
        duration: "75-minute sessions",
      },
      anxiety: {
        title: "Anxiety & Stress Management",
        desc: "Specialized treatment for anxiety disorders, panic attacks, and chronic stress, using mindfulness-based interventions and cognitive-behavioral techniques.",
        duration: "Individual or group sessions available",
      },
      trauma: {
        title: "Trauma Recovery",
        desc: "Gentle, trauma-informed therapy using EMDR and somatic approaches to help you heal from past experiences and regain your sense of safety and empowerment.",
        duration: "Specialized intensive sessions available",
      },
      specializations: {
        title: "Areas of Specialization",
        depression: {
          title: "Depression & Mood Disorders",
          desc: "Comprehensive treatment for depression, bipolar disorder, and seasonal affective disorder",
        },
        transitions: {
          title: "Life Transitions",
          desc: "Support through major life changes, career transitions, and relationship shifts",
        },
        mindfulness: {
          title: "Mindfulness & Meditation",
          desc: "Teaching mindfulness practices for stress reduction and emotional regulation",
        },
        women: {
          title: "Women's Mental Health",
          desc: "Specialized care for perinatal mental health, hormonal changes, and women's issues",
        },
        grief: {
          title: "Grief & Loss",
          desc: "Compassionate support through bereavement and significant losses",
        },
        selfEsteem: {
          title: "Self-Esteem & Identity",
          desc: "Building confidence, self-worth, and authentic self-expression",
        },
      },
      cta: "Book a Consultation",
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "For inquiries, scheduling, or to begin your journey, please complete the form below.",
      infoTitle: "Contact Information",
      connectTitle: "Let's Connect on Social Media",
      email: "Email",
      phone: "Phone",
      address: "Address",
      formTitle: "Send a Message",
      formName: "Full Name",
      formEmail: "Email",
      formSubject: "Subject (Optional)",
      formMessage: "Your message...",
      formSubmit: "Send Message",
    },
    booking: {
      title: "Book Your Session",
      subtitle:
        "Choose a convenient time for your therapy session. I look forward to supporting you on your wellness journey.",
      sessionTypes: {
        title: "Session Types",
        individual: "Individual Therapy",
        couples: "Couples Therapy",
        minutes: "minutes",
      },
      schedule: {
        title: "Schedule",
        weekdays: "Monday - Thursday:",
        friday: "Friday:",
        weekend: "Weekend:",
        onRequest: "By appointment",
      },
      info: {
        title: "Important Information",
        confirmation: "Confirmation is made 24 hours in advance",
        cancellation: "Free cancellation up to 48 hours in advance",
        firstSession: "First session includes initial assessment",
      },
      timeModal: {
        title: "Select Time",
        description: "Choose an available slot for",
      },
      bookingModal: {
        titleBook: "Book Session",
        titleSuccess: "Booking Confirmed!",
        descBook: "Complete the form to confirm your booking",
        descSuccess: "Your session has been successfully scheduled",
        date: "Date:",
        time: "Time:",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        sessionType: "Session Type",
        selectType: "Select session type",
        notes: "Notes (optional)",
        notesPlaceholder: "Any additional information you'd like to share...",
        cancel: "Cancel",
        reserve: "Book Session",
        confirmationEmail:
          "You will receive a confirmation email shortly with all session details.",
        knowYouBetter: "I'd like to get to know you better",
        questionnaireDesc:
          "To provide you with the best therapeutic experience, I invite you to complete a short questionnaire. This step is completely optional, but it will help me understand you better before our first meeting.",
        completeQuestionnaire: "Yes, I'll complete the questionnaire",
        maybeLater: "Maybe later",
      },
      weekendError: {
        title: "Weekend unavailable",
        desc: "Weekend appointments are available by request only. Please contact us.",
      },
    },
    notFound: {
      title: "Page Not Found",
      subtitle: "Sorry, but the page you're looking for doesn't exist.",
      btn: "Back to Home",
    },
    footer: {
      role: "Clinical Psychologist",
      tagline: "Professional guidance for your mental wellness",
      contact: "Contact",
      schedule: "Schedule",
      weekdays: "Monday - Thursday:",
      friday: "Friday:",
      weekend: "Weekend:",
      onRequest: "By appointment",
      rights: "All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ro");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
