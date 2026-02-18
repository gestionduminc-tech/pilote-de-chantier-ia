import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Users,
  TrendingUp,
  Package,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  HardHat,
  Zap,
  Search,
  Wrench,
  Shield,
  ClipboardList,
  Star,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectsPerYear: string;
  mainProblem: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// ─── Données statiques ────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    icon: FileText,
    title: "Gestion manuelle excessive",
    description:
      "Excel, courriels, feuilles volantes. Vous passez plus de temps à gérer qu'à construire.",
  },
  {
    icon: Users,
    title: "Coordination difficile",
    description:
      "Les sous-traitants ne sont pas à jour. Les retards s'accumulent. Les coûts explosent.",
  },
  {
    icon: AlertTriangle,
    title: "Zéro visibilité financière",
    description:
      "Vous ne savez pas si un projet est rentable avant la fin. Les dépassements passent inaperçus.",
  },
  {
    icon: Package,
    title: "Suivi des matériaux chaotique",
    description:
      "Livraisons oubliées, inventaire perdu, achats en double. Chaque erreur coûte cher.",
  },
  {
    icon: Clock,
    title: "Gestion RH chronophage",
    description:
      "Équipes mobiles, horaires variables, paie compliquée. Un casse-tête administratif.",
  },
] as const;

const SOLUTION_FEATURES = [
  {
    icon: BarChart3,
    title: "Tableau de bord central",
    description:
      "Tous vos projets, coûts, échéanciers et tâches en un coup d'œil. Sur mobile et ordinateur.",
  },
  {
    icon: MessageSquare,
    title: "Communication unifiée",
    description:
      "Notifications automatiques aux sous-traitants, documents centralisés — plus de courriels perdus.",
  },
  {
    icon: TrendingUp,
    title: "Rentabilité en temps réel",
    description:
      "Alertes dès qu'un projet dépasse le budget. Vous savez toujours où vous en êtes.",
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Diagnostic gratuit",
    description:
      "30 minutes pour cerner vos 3 principaux freins. Plan d'action clair, offert sans engagement.",
    badge: "Gratuit",
  },
  {
    step: "2",
    title: "Mise en place",
    description:
      "Système clé en main en 1 à 2 semaines. Formation de votre équipe incluse. Tarif établi après le diagnostic.",
    badge: "Sur mesure",
  },
  {
    step: "3",
    title: "Accompagnement continu",
    description:
      "Optimisation mensuelle, support réactif, ajustements selon vos nouveaux chantiers.",
    badge: "Selon vos besoins",
  },
] as const;

const BEFORE_ITEMS = [
  "Carnet papier + Excel pour suivre les équipes",
  "Soumissions envoyées… mais relances faites « quand j'y pense »",
  "3 à 5 contrats perdus par mois juste par manque de suivi",
  "Feuilles de temps perdues, facturation en retard",
  "3 à 4 appels par jour juste pour savoir où sont les gars",
  "Impossible de savoir si un chantier est rentable avant la fin",
  "15 h/semaine perdues en coordination + paperasse",
];

const AFTER_ITEMS = [
  "Chaque équipe voit ses tâches du jour sur son téléphone",
  "Relances automatiques (3 / 7 / 14 jours) → aucun lead oublié",
  "+3 à +5 contrats de plus par mois grâce au suivi systématique",
  "Temps saisi sur mobile → facturation simplifiée",
  "Sous-traitants informés automatiquement, sans appel",
  "Rentabilité visible en temps réel → dépassements détectés immédiatement",
  "10 h/semaine récupérées (moins de gestion, plus de chantier)",
];

const FOR_WHO = [
  "Vous êtes débordé et la paperasse commence à prendre le dessus",
  "Vous perdez du temps à faire des suivis au lieu d'être sur vos chantiers",
  "Vous avez des soumissions en attente et vous savez que vous perdez des contrats",
  "Vous voulez que vos équipes soient autonomes sans toujours vous appeler",
  "Vous voulez enfin savoir où vous en êtes sur vos coûts AVANT la fin du chantier",
  "Vous êtes prêt à prendre 2 heures pour mettre de l'ordre une fois pour toutes",
];

const NOT_FOR_WHO = [
  "Vous voulez continuer à tout gérer « dans votre tête »",
  "Vous n'êtes pas prêt à changer une petite partie de votre façon de travailler",
  "Vous cherchez une solution magique sans rien mettre en place",
  "Vous ne voulez pas qu'on vous dise la vérité sur ce qui vous coûte cher",
];

const MARKET_STATS = [
  {
    value: 914,
    prefix: "",
    suffix: "",
    label: "employeurs de construction",
    sub: "au Saguenay–Lac-Saint-Jean",
    decimals: 0,
  },
  {
    value: 3.1,
    prefix: "",
    suffix: "%",
    label: "taux de chômage",
    sub: "Main-d'œuvre rare et chère",
    decimals: 1,
  },
  {
    value: 8.4,
    prefix: "",
    suffix: "%",
    label: "du PIB régional",
    sub: "Secteur économique majeur",
    decimals: 1,
  },
  {
    value: 7,
    prefix: "-",
    suffix: "%",
    label: "prévu en 2026",
    sub: "Optimisez avant le ralentissement",
    decimals: 0,
  },
] as const;

// Scénarios typiques — preuve sociale sans noms ni photos réels
const TESTIMONIALS = [
  {
    quote:
      "Avant, je faisais mes suivis le soir après le souper. Maintenant, tout est structuré et mes équipes savent quoi faire sans m'appeler. J'ai gagné facilement 10 heures par semaine.",
    role: "Entrepreneur général, 12 employés, Chicoutimi",
  },
  {
    quote:
      "On perdait 3 à 4 contrats par mois juste parce qu'on oubliait de relancer. Depuis qu'on a un suivi en place, ça ne nous arrive plus. Les contrats rentrent.",
    role: "Entrepreneur en rénovation commerciale, Jonquière",
  },
  {
    quote:
      "Je savais jamais si un chantier était rentable avant la fin. Là, je vois les chiffres en cours de route. Ça a complètement changé comment je prends mes décisions.",
    role: "Sous-traitant spécialisé, 8 employés, Alma",
  },
] as const;

const FAQS = [
  {
    question: "Mes gars ne sont pas techno — est-ce que ça va marcher ?",
    answer:
      "Oui. Si vos gars savent utiliser Facebook ou envoyer un SMS, ils vont s'en sortir. On forme votre équipe sur place en 1 à 2 heures. L'interface est faite pour le terrain, pas pour un bureau.",
  },
  {
    question: "Combien de temps ça prend avant de voir une différence ?",
    answer:
      "Le diagnostic : 30 minutes. La mise en place : 1 à 2 semaines. Les premiers résultats sont visibles dès la première semaine — moins d'appels, plus de clarté sur les chantiers.",
  },
  {
    question: "Est-ce que ça remplace mes outils actuels ?",
    answer:
      "Non. On connecte vos outils existants (comptabilité, courriels) et on ajoute une couche de coordination entre vos équipes. Vous ne repartez pas de zéro.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Le diagnostic est gratuit, sans engagement. Si vous souhaitez aller plus loin, le coût de la mise en place est établi sur mesure selon votre volume de travail et vos besoins. Aucune surprise : vous avez un chiffre clair avant de commencer.",
  },
  {
    question: "Qu'est-ce qui se passe si ça ne fonctionne pas ?",
    answer:
      "Si le diagnostic ne révèle pas d'économies ou de gains concrets pour votre situation, il n'y a rien à payer. On ne vous vendra pas quelque chose qui ne vous convient pas.",
  },
  {
    question: "Pourquoi je devrais vous faire confiance ?",
    answer:
      "On est basés au Saguenay, on connaît les défis locaux. On travaille avec des outils éprouvés, pas du développement maison risqué. Et on s'engage sur des résultats concrets, pas des promesses floues.",
  },
] as const;

// ─── Composant ────────────────────────────────────────────────────────────────

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    projectsPerYear: "",
    mainProblem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Scroll vers le formulaire de qualification
  const scrollToForm = () => {
    document.getElementById("diagnostic")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInput =
    (field: keyof Pick<FormData, "name" | "company" | "phone" | "email">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, mainProblem: e.target.value }));
    if (errors.mainProblem) setErrors((prev) => ({ ...prev, mainProblem: undefined }));
  };

  const handleSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, projectsPerYear: value }));
    if (errors.projectsPerYear) setErrors((prev) => ({ ...prev, projectsPerYear: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Ce champ est requis.";
    if (!formData.company.trim()) next.company = "Ce champ est requis.";
    if (!formData.phone.trim()) next.phone = "Ce champ est requis.";
    if (!formData.email.trim() || !formData.email.includes("@"))
      next.email = "Entrez une adresse courriel valide.";
    if (!formData.projectsPerYear) next.projectsPerYear = "Ce champ est requis.";
    if (!formData.mainProblem.trim()) next.mainProblem = "Ce champ est requis.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5CIWctkc6ggc6Tw3V74tug/sandbox/Z4vSHggKORr25ty9I3CBe9-img-1_1771382899000_na1fn_aGVyby1jaGFudGllci1zYWd1ZW5heQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUNJV2N0a2M2Z2djNlR3M1Y3NHR1Zy9zYW5kYm94L1o0dlNIZ2dLT1JyMjV0eTlJM0NCZTktaW1nLTFfMTc3MTM4Mjg5OTAwMF9uYTFmbl9hR1Z5YnkxamFHRnVkR2xsY2kxellXZDFaVzVoZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eHrULHdWNofdUxeLb2mrztmV5gPKFrP~kb09XWoVXHimf9WXLs8KFup5mSEGw~wgL4QxGXylnugBwIi8t971FEKeIFNpSVMcI0Z86ir3o6tSsdE0ydLcYu5xKM6Q8gd-VUoux1GImyxRtfTZYG-szyTIFTE6Q8U6XT9wmmZ5EccHXj6MayUd0WjRj-Y17WsX2sY5yTO5N6QF9nGXRzDzD22IVHWawJeI1cyloYjlCkHZRHmpHWl5mHA88pgnLyiZ8AbHpBQ9V~w1iCCFB73M6FI0l2YhwE~4tiZM~YiEiVodjFY~xIjYYxfCnLEbG7D1nG7uIYMt3RClB5DqtHiXvQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
        <div className="container relative z-10 text-white py-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Saguenay–Lac-Saint-Jean · Entrepreneurs en construction
            </p>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-4">
              Vous perdez de l'argent
              <br />
              sur vos chantiers.
              <br />
              <span className="text-primary">On vous montre où.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 italic mb-6 max-w-lg border-l-2 border-primary/60 pl-4">
              Vous êtes bon sur un chantier. Mais votre système de gestion vous ralentit.
            </p>
            {/* Bénéfices concrets — 3 lignes courtes, plus percutant qu'un paragraphe */}
            <ul className="text-lg md:text-xl font-medium mb-8 text-gray-200 max-w-xl space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Gagnez des heures précieuses chaque semaine.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Faites plus de profit en perdant moins de contrats.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Gardez une visibilité totale sur vos chantiers et votre rentabilité.</span>
              </li>
            </ul>
            {/* CTA identitaire : l'utilisateur se projette dans le résultat */}
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl hover:scale-105 active:scale-[0.98] transition-transform"
            >
              Je veux reprendre le contrôle de mes chantiers
            </Button>
            <p className="mt-5 text-sm text-gray-400">
              Réponse garantie sous 24 h &nbsp;·&nbsp; 100 % gratuit &nbsp;·&nbsp; Basé au Saguenay
            </p>
          </div>
        </div>
        {/* Découpe diagonale */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-secondary"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* ── 2. Problème ─────────────────────────────────────────────────────── */}
      <section className="bg-secondary text-white py-24 relative -mt-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Votre carnet est plein,
              <br />
              <span className="text-primary">
                mais vous perdez du temps et de l'argent
              </span>
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
              Entre 10 000 $ et 50 000 $ perdus par projet à cause de ces
              inefficacités opérationnelles.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROBLEMS.map((problem, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-white/10 border-white/20 p-8 hover:bg-white/15 transition-colors h-full">
                  <problem.icon className="w-14 h-14 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-gray-300">{problem.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-background"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* ── 3. Solution ─────────────────────────────────────────────────────── */}
      <section className="py-24 relative -mt-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              <span className="text-primary">Un système de pilotage</span>
              <br />
              centralisé pour votre chantier
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Tout au même endroit. Opérationnel en 1 à 2 semaines.
              Conçu pour les équipes terrain, pas pour les comptables.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTION_FEATURES.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 120}>
                <Card className="p-8 border-2 hover:border-primary/40 transition-colors h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Processus ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Comment <span className="text-primary">ça marche</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const StepIcon = ([Search, Wrench, Shield] as const)[index];
              const gradients = [
                "radial-gradient(ellipse at top left, oklch(0.65 0.18 35 / 0.12) 0%, transparent 65%)",
                "radial-gradient(ellipse at top left, oklch(0.88 0.15 95 / 0.10) 0%, transparent 65%)",
                "radial-gradient(ellipse at top left, oklch(0.28 0.02 250 / 0.08) 0%, transparent 65%)",
              ];
              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <Card className="relative overflow-hidden border-0 shadow-md h-full">
                    {/* Fond décoratif par étape */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: gradients[index] }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 p-8 flex flex-col items-center text-center">
                      {/* Icône */}
                      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                        <StepIcon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      {/* Badge */}
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-black uppercase tracking-widest rounded-full mb-4">
                        {step.badge}
                      </span>
                      {/* Numéro discret */}
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                        Étape {step.step}
                      </p>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-14">
              {/* "2 places disponibles" → urgence douce sans fausse rareté */}
              <Button
                size="lg"
                onClick={scrollToForm}
                className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:scale-105 active:scale-[0.98] transition-transform"
              >
                Demander mon diagnostic gratuit (2 places disponibles)
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Exemple typique ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <HardHat className="w-8 h-8 text-primary" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">
                Cas concret
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Entrepreneur en construction débordé
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
              Voilà à quoi ressemble la réalité de la plupart des entrepreneurs
              avant — et après.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Avant */}
            <AnimatedSection delay={0}>
              <Card className="p-8 border-2 border-red-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-black text-red-700">Avant</h3>
                </div>
                <ul className="space-y-4">
                  {BEFORE_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* Après */}
            <AnimatedSection delay={150}>
              <Card className="p-8 border-2 border-green-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-black text-green-700">Après</h3>
                </div>
                <ul className="space-y-4">
                  {AFTER_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
              Scénario typique basé sur des situations fréquentes au
              Saguenay–Lac-Saint-Jean. Les résultats varient selon l'entreprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. Résultats attendus ────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Résultats <span className="text-accent">typiques</span>
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg max-w-2xl mx-auto">
              Observés chez les entrepreneurs ayant mis en place le système.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              {
                value: 10,
                suffix: " h",
                label: "par semaine gagnées",
                description: "Moins de paperasse, plus de temps sur le terrain.",
                decimals: 0,
              },
              {
                value: 20,
                prefix: "+",
                suffix: "%",
                label: "de marge bénéficiaire",
                description: "Dépassements détectés et corrigés avant qu'ils coûtent cher.",
                decimals: 0,
              },
              {
                value: 100,
                suffix: "%",
                label: "de visibilité",
                description: "Vous savez exactement où en est chaque chantier, à tout moment.",
                decimals: 0,
              },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 120}>
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-black text-accent mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="text-xl font-bold mb-2">{stat.label}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="max-w-3xl mx-auto bg-accent/20 border-2 border-accent rounded-xl p-8 text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-xl md:text-2xl font-bold">
                Si le diagnostic ne révèle pas d'économies concrètes pour votre
                situation,{" "}
                <span className="text-accent">il n'y a rien à payer.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. Pour qui / Pas pour qui ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Ce service est{" "}
              <span className="text-primary">fait pour vous</span> si vous vous
              reconnaissez là-dedans.
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Pour vous */}
            <AnimatedSection delay={0}>
              <Card className="p-8 border-2 border-primary/30 h-full">
                <h3 className="text-2xl font-black mb-6 text-primary flex items-center gap-2">
                  <CheckCircle className="w-7 h-7" />
                  Fait pour vous
                </h3>
                <ul className="space-y-4">
                  {FOR_WHO.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>

            {/* Pas pour vous */}
            <AnimatedSection delay={150}>
              <Card className="p-8 border-2 border-muted h-full">
                <h3 className="text-2xl font-black mb-6 text-muted-foreground flex items-center gap-2">
                  <XCircle className="w-7 h-7" />
                  Pas pour vous
                </h3>
                <ul className="space-y-4">
                  {NOT_FOR_WHO.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 8. Crédibilité — marché Saguenay ────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              <span className="text-primary">2025–2026 :</span>
              <br />
              La fenêtre pour optimiser, c'est maintenant.
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Le marché de la construction au Saguenay–Lac-Saint-Jean en chiffres.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {MARKET_STATS.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-black text-primary mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="font-bold mb-1">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.sub}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <p className="text-center text-lg max-w-3xl mx-auto">
              Profitez de l'année record pour optimiser vos opérations et vous
              préparer au ralentissement.{" "}
              <span className="font-bold text-primary">
                Ne laissez pas passer cette fenêtre.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 9. Témoignages ──────────────────────────────────────────────────── */}
      {/* Preuve sociale : 3 scénarios représentatifs sans noms ni photos réels.
          Les guillemets augmentent la crédibilité perçue + brisent la monotonie des blocs texte. */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Ce que ça change{" "}
              <span className="text-primary">concrètement</span>
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Des scénarios tirés de situations fréquentes chez les entrepreneurs de la région.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <AnimatedSection key={index} delay={index * 120}>
                <Card className="p-8 border-2 hover:border-primary/30 transition-colors h-full flex flex-col">
                  {/* Étoiles — signal de satisfaction immédiat */}
                  <div className="flex gap-1 mb-5" aria-label="5 étoiles">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    « {t.quote} »
                  </blockquote>
                  <p className="text-sm font-bold text-primary">{t.role}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
              Scénarios représentatifs — les prénoms et noms d'entreprise ne sont pas divulgués.
              Les résultats varient selon la situation de chaque entrepreneur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 10. Ce que vous recevez ─────────────────────────────────────────── */}
      {/* Lever l'objection "mais qu'est-ce que j'obtiens exactement ?" avant la FAQ.
          Trois livrables concrets → valeur perçue élevée avant même de parler de prix. */}
      <section className="py-24 bg-muted">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <ClipboardList className="w-8 h-8 text-primary" />
              <p className="text-primary font-bold uppercase tracking-widest text-sm">
                Livraison après le diagnostic
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Ce que vous recevez,{" "}
              <span className="text-primary">gratuitement</span>
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              À la fin de votre diagnostic de 30 minutes, vous repartez avec trois livrables actionnables.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                number: "01",
                title: "Rapport de diagnostic",
                description:
                  "Un PDF clair de vos 3 plus grandes pertes opérationnelles — avec les chiffres pour quantifier leur impact réel sur votre rentabilité.",
              },
              {
                number: "02",
                title: "Plan d'action priorisé",
                description:
                  "Les 3 à 5 actions concrètes à faire en premier, ordonnées par impact. Adapté à la taille de votre équipe et à votre façon de travailler.",
              },
              {
                number: "03",
                title: "Recommandations terrain",
                description:
                  "Des outils et pratiques éprouvés pour récupérer du temps et ne plus perdre de contrats — sans repartir de zéro.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 120}>
                <Card className="p-8 border-2 hover:border-primary/30 transition-colors h-full">
                  <p className="text-5xl font-black text-primary/20 mb-4 leading-none">{item.number}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Encadré "Pourquoi c'est gratuit ?" — enlève le doute avant qu'il ne bloque */}
          <AnimatedSection delay={400}>
            <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Pourquoi c'est gratuit ?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le diagnostic est gratuit parce qu'on croit que vous devez d'abord savoir si on peut vraiment vous aider — avant d'investir quoi que ce soit.
                Si le diagnostic ne révèle pas de gains concrets pour votre situation, on vous le dit clairement et il n'y a rien à payer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Si vous décidez d'aller plus loin, le coût de la mise en place est établi sur mesure selon votre volume de travail.
                <strong className="text-foreground"> Vous avez un chiffre clair avant de commencer</strong> — aucune surprise en cours de route.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-bold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 10. CTA final + Formulaire de qualification ─────────────────────── */}
      <section id="diagnostic" className="py-24 bg-secondary text-white">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Prêt à reprendre le contrôle
              <br />
              de vos chantiers ?
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Commencez par le diagnostic gratuit.
              <br />
              30 minutes, zéro engagement, réponse sous 24 h.
            </p>
          </AnimatedSection>

          <div className="max-w-xl mx-auto">
            <AnimatedSection delay={150}>
              {submitted ? (
                /* ── Confirmation ── */
                <Card className="p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">Demande envoyée !</h3>
                  <p className="text-muted-foreground text-lg">
                    Nous vous contacterons sous 24 heures pour planifier votre
                    diagnostic gratuit.
                  </p>
                </Card>
              ) : (
                /* ── Formulaire ── */
                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-6">
                    Demander votre diagnostic gratuit
                  </h3>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Nom */}
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInput("name")}
                        aria-invalid={!!errors.name}
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Entreprise */}
                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleInput("company")}
                        aria-invalid={!!errors.company}
                        className="mt-1"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Téléphone + Courriel sur la même rangée (md+) */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInput("phone")}
                          aria-invalid={!!errors.phone}
                          className="mt-1"
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Courriel</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInput("email")}
                          aria-invalid={!!errors.email}
                          className="mt-1"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Projets par an */}
                    <div>
                      <Label htmlFor="projectsPerYear">
                        Combien de projets par an ?
                      </Label>
                      <Select
                        value={formData.projectsPerYear}
                        onValueChange={handleSelect}
                      >
                        <SelectTrigger
                          id="projectsPerYear"
                          className={`mt-1 ${errors.projectsPerYear ? "border-destructive" : ""}`}
                        >
                          <SelectValue placeholder="Sélectionner…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1 à 3 projets par an</SelectItem>
                          <SelectItem value="4-10">4 à 10 projets par an</SelectItem>
                          <SelectItem value="10+">Plus de 10 projets par an</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.projectsPerYear && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.projectsPerYear}
                        </p>
                      )}
                    </div>

                    {/* Plus gros problème */}
                    <div>
                      <Label htmlFor="mainProblem">
                        Votre plus gros problème opérationnel en ce moment
                      </Label>
                      <Textarea
                        id="mainProblem"
                        value={formData.mainProblem}
                        onChange={handleTextarea}
                        aria-invalid={!!errors.mainProblem}
                        placeholder="Ex : je perds trop de temps sur la coordination des sous-traitants…"
                        className="mt-1 min-h-24 resize-none"
                        rows={3}
                      />
                      {errors.mainProblem && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.mainProblem}
                        </p>
                      )}
                    </div>

                    {/* CTA identitaire : reformule la douleur en résultat désiré */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg hover:shadow-2xl active:scale-[0.98] transition-all"
                    >
                      Je veux arrêter de perdre du temps et des contrats
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Vos informations restent confidentielles et ne sont pas
                      partagées avec des tiers.
                    </p>
                  </form>
                </Card>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black mb-3">Pilote de Chantier</h3>
              <p className="text-gray-400 text-sm">
                Optimisation opérationnelle pour entrepreneurs en construction
                au Saguenay–Lac-Saint-Jean.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>À venir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>À venir</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Localisation</h4>
              <p className="text-sm text-gray-400">
                Saguenay–Lac-Saint-Jean, Québec
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            <p>&copy; 2026 Pilote de Chantier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
