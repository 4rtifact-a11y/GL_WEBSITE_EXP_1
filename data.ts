import { 
  Palette, 
  BookOpen, 
  Package, 
  MapPin, 
  Monitor, 
  Share2, 
  Megaphone, 
  PenTool, 
  Video, 
  Lightbulb, 
  Ruler 
} from 'lucide-react';

export const servicesData = [
  {
    id: 'identite',
    title: "Identité Visuelle",
    icon: Palette,
    description: "L'ADN de votre marque, sublimé et codifié.",
    items: [
      { title: "Logotypes", desc: "Création de logos vectoriels déclinables et intemporels." },
      { title: "Charte graphique", desc: "Définition des règles (couleurs, typographies) pour une cohérence totale." },
      { title: "Refonte (Rebranding)", desc: "Modernisation d'une identité existante sans perdre son héritage." },
      { title: "Systèmes iconographiques", desc: "Set d'icônes sur mesure propre à votre écosystème." }
    ]
  },
  {
    id: 'edition',
    title: "Édition",
    icon: BookOpen,
    description: "La mise en page au service de la lisibilité et de l'esthétique.",
    items: [
      { title: "Livres & Magazines", desc: "Gestion de grilles typographiques et hiérarchies complexes." },
      { title: "Rapports annuels", desc: "Mise en valeur de données financières et textuelles denses." },
      { title: "Catalogues produits", desc: "Organisation des références de manière lisible et structurée." },
      { title: "Supports promotionnels", desc: "Brochures, dépliants et flyers impactants." },
      { title: "Affiches", desc: "Création visuelle grand format pour événements." }
    ]
  },
  {
    id: 'packaging',
    title: "Packaging",
    icon: Package,
    description: "Habiller vos produits pour séduire au premier regard.",
    items: [
      { title: "Packaging produit", desc: "Design de boîtes, étiquettes et contenants (avec tracés de découpe)." },
      { title: "PLV 3D", desc: "Conception de présentoirs et totems publicitaires." },
      { title: "Étiquetage industriel", desc: "Gestion de gros volumes pour génération d'étiquettes." }
    ]
  },
  {
    id: 'signaletique',
    title: "Signalétique",
    icon: MapPin,
    description: "Guider et orienter dans l'espace physique.",
    items: [
      { title: "Orientation visuelle", desc: "Signalétique intérieure et extérieure pour bureaux et salons." }
    ]
  },
  {
    id: 'web',
    title: "Web Design",
    icon: Monitor,
    description: "Des interfaces digitales intuitives et performantes.",
    items: [
      { title: "Webdesign (UI)", desc: "Maquettage d'interfaces vitrines ou e-commerce." },
      { title: "Applications mobiles", desc: "Écrans adaptés aux usages tactiles (iOS/Android)." },
      { title: "Newsletters", desc: "Visuels optimisés pour l'emailing et la lecture sur écran." },
      { title: "Display Ads", desc: "Bannières variées pour Google Ads et réseaux sociaux." }
    ]
  },
  {
    id: 'social',
    title: "Réseaux Sociaux",
    icon: Share2,
    description: "Engager votre communauté avec des visuels forts.",
    items: [
      { title: "Templates Social Media", desc: "Modèles réutilisables pour Instagram, LinkedIn..." },
      { title: "Motion Social", desc: "Animations 2D courtes et percutantes pour le feed." }
    ]
  },
  {
    id: 'marketing',
    title: "Marketing",
    icon: Megaphone,
    description: "Supports de vente et de présentation haut de gamme.",
    items: [
      { title: "Campagnes 360°", desc: "Déclinaison de concept sur supports physiques et digitaux." },
      { title: "Présentations", desc: "Slides PowerPoint/Keynote haut de gamme pour pitchs." },
      { title: "Datavisualisation", desc: "Transformation de données complexes en infographies ergonomiques." }
    ]
  },
  {
    id: 'illustration',
    title: "Illustration",
    icon: PenTool,
    description: "L'art de raconter des histoires par l'image.",
    items: [
      { title: "Vectorielle & Artistique", desc: "Mascottes, décors, BD, ou créations assistées par IA." },
      { title: "Lettering", desc: "Typographie sur mesure pour titres uniques." },
      { title: "Storyboarding", desc: "Mise en images de scénarios avant production vidéo." }
    ]
  },
  {
    id: 'motion',
    title: "Motion Design",
    icon: Video,
    description: "Donner vie au graphisme par le mouvement.",
    items: [
      { title: "Logo animé", desc: "Signature de mail et identité en mouvement." },
      { title: "Vidéos explicatives", desc: "Pédagogie visuelle animée." },
      { title: "Habillage TV", desc: "Titres, bandeaux et transitions broadcast." }
    ]
  },
  {
    id: 'conseil',
    title: "Conseil & Technique",
    icon: Lightbulb,
    description: "Expertise stratégique pour votre communication.",
    items: [
      { title: "Audit de communication", desc: "Analyse de l'existant et préconisations stratégiques." }
    ]
  },
  {
    id: 'dessin',
    title: "Dessin Technique",
    icon: Ruler,
    description: "Précision architecturale et industrielle.",
    items: [
      { title: "Plan 2D", desc: "Spécialité architecture et sécurité." },
      { title: "Plan isométrique", desc: "Plans de masse et bâtiments industriels." },
      { title: "Plan 3D", desc: "Plans complets de projets immobiliers." }
    ]
  }
];