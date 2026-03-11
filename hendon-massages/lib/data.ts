export const areas = [
  {
    slug: "hendon",
    name: "Hendon",
    postcode: "NW4",
    description:
      "Hendon is our home base. Jayne is based in Hendon NW4 and provides expert women-only massage therapy right on your doorstep. Whether you're a local resident or commuting through, convenient, high-quality treatments are always available.",
    nearby: ["Colindale", "Brent Cross", "Golders Green"],
  },
  {
    slug: "colindale",
    name: "Colindale",
    postcode: "NW9",
    description:
      "Colindale clients are just minutes from Jayne's Hendon studio. With easy transport links via the Northern line, booking a massage has never been easier. We regularly treat clients from Colindale NW9 seeking relaxation and sports recovery.",
    nearby: ["Hendon", "Edgware", "Mill Hill"],
  },
  {
    slug: "brent-cross",
    name: "Brent Cross",
    postcode: "NW4",
    description:
      "Brent Cross is on our doorstep. Located between Hendon and Golders Green, Brent Cross clients enjoy quick access to our studio. Treat yourself after a shopping trip or schedule a regular wellness session with Jayne.",
    nearby: ["Hendon", "Golders Green", "Cricklewood"],
  },
  {
    slug: "golders-green",
    name: "Golders Green",
    postcode: "NW11",
    description:
      "Golders Green is a vibrant North London community just minutes from our Hendon studio. Jayne warmly welcomes clients from NW11 for all treatments — from deep tissue work to pregnancy massage.",
    nearby: ["Hendon", "Brent Cross", "Finchley"],
  },
  {
    slug: "mill-hill",
    name: "Mill Hill",
    postcode: "NW7",
    description:
      "Mill Hill clients can reach us quickly via the A1 or Northern line. We regularly see clients from Mill Hill NW7 for sports recovery, relaxation, and therapeutic treatments. Book your session today.",
    nearby: ["Hendon", "Edgware", "Colindale"],
  },
  {
    slug: "edgware",
    name: "Edgware",
    postcode: "HA8",
    description:
      "Edgware is well connected to Hendon, making it easy for HA8 clients to access our women-only massage studio. Jayne has a loyal client base in Edgware and surrounding areas.",
    nearby: ["Mill Hill", "Colindale", "Hendon"],
  },
];

export const services = [
  {
    slug: "swedish-relaxation",
    name: "Swedish Relaxation Massage",
    price: 65,
    duration: "60 min",
    shortDesc:
      "Gentle, flowing strokes to melt away tension and restore calm.",
    fullDesc:
      "Our Swedish Relaxation Massage uses classic effleurage and petrissage techniques to ease muscle tension, improve circulation, and calm the nervous system. Perfect for first-timers or anyone who simply needs to unwind, this is the definitive feel-good treatment. You'll leave feeling lighter, calmer, and completely renewed.",
    benefits: [
      "Reduces stress and anxiety",
      "Improves circulation",
      "Relieves muscle tension",
      "Promotes better sleep",
    ],
    icon: "🌿",
  },
  {
    slug: "sports-deep-tissue",
    name: "Sports & Deep Tissue Massage",
    price: 75,
    duration: "60 min",
    shortDesc:
      "Targeted deep-muscle work to release chronic tightness and aid recovery.",
    fullDesc:
      "Designed for active women and those with persistent muscular pain, our Sports & Deep Tissue Massage uses firm, focused pressure to reach deeper muscle layers. Ideal for runners, gym-goers, or anyone dealing with chronic tightness, sports injuries, or postural issues. Jayne is experienced in treating common conditions including IT band syndrome, shoulder tension, and lower back pain.",
    benefits: [
      "Speeds up injury recovery",
      "Releases chronic muscle knots",
      "Improves range of motion",
      "Reduces exercise-related soreness",
    ],
    icon: "💪",
  },
  {
    slug: "pregnancy-massage",
    name: "Pregnancy Massage",
    price: 70,
    duration: "60 min",
    shortDesc:
      "A nurturing, safe treatment designed for expectant mothers.",
    fullDesc:
      "Pregnancy brings beautiful changes — and some uncomfortable ones too. Our specialist Pregnancy Massage uses gentle, safe techniques adapted for each trimester to ease back pain, reduce swelling, and provide emotional support. Jayne uses supportive positioning and pregnancy-safe oils throughout. Available from 12 weeks onwards.",
    benefits: [
      "Relieves pregnancy back pain",
      "Reduces swelling in legs and feet",
      "Lowers stress hormones",
      "Improves sleep quality",
    ],
    icon: "🤰",
  },
  {
    slug: "hot-stone-therapy",
    name: "Hot Stone Therapy",
    price: 85,
    duration: "75 min",
    shortDesc:
      "Warmed volcanic stones glide over tired muscles for profound release.",
    fullDesc:
      "Our Hot Stone Therapy uses smooth, heated basalt stones placed on key energy points and glided over muscles to penetrate deep into tissue — something hands alone cannot achieve. The warmth melts away tension at a deeper level, leaving you in a state of blissful calm. A truly indulgent, results-driven treatment.",
    benefits: [
      "Deep muscle relaxation",
      "Improves blood flow",
      "Eases chronic pain",
      "Deeply grounding and calming",
    ],
    icon: "🪨",
  },
  {
    slug: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    price: 70,
    duration: "60 min",
    shortDesc:
      "Personalised essential oil blends combined with relaxing massage.",
    fullDesc:
      "Every Aromatherapy Massage begins with a short consultation to select the perfect blend of therapeutic essential oils for your mood and needs. Whether you need uplifting citrus oils for low energy, calming lavender for anxiety, or grounding frankincense for stress — Jayne crafts a bespoke blend just for you. Combined with gentle massage, this is a truly holistic mind-body treatment.",
    benefits: [
      "Mood enhancement",
      "Reduces anxiety and tension",
      "Skin-nourishing botanical oils",
      "Personalised to your needs",
    ],
    icon: "🌸",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    area: "Hendon",
    text: "Jayne has magic hands. After months of back pain I finally have relief. Highly recommend to any woman looking for real results.",
    rating: 5,
  },
  {
    name: "Priya K.",
    area: "Colindale",
    text: "So professional and calming. I felt safe and completely relaxed. The aromatherapy massage was absolutely heavenly.",
    rating: 5,
  },
  {
    name: "Rachel T.",
    area: "Golders Green",
    text: "As a runner I needed someone who understood sports injuries. Jayne sorted my IT band in two sessions. Amazing.",
    rating: 5,
  },
  {
    name: "Leila S.",
    area: "Mill Hill",
    text: "Had a pregnancy massage at 28 weeks. Jayne was so knowledgeable, gentle and reassuring. I'll be back every month!",
    rating: 5,
  },
  {
    name: "Emma B.",
    area: "Edgware",
    text: "The hot stone therapy was unlike anything I've experienced. Pure luxury. I was asleep in minutes!",
    rating: 5,
  },
];
