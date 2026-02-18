import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FileText,
  Users,
  TrendingUp,
  Package,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée ! Nous vous contacterons sous 24h.");
    setFormData({ name: "", company: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5CIWctkc6ggc6Tw3V74tug/sandbox/Z4vSHggKORr25ty9I3CBe9-img-1_1771382899000_na1fn_aGVyby1jaGFudGllci1zYWd1ZW5heQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUNJV2N0a2M2Z2djNlR3M1Y3NHR1Zy9zYW5kYm94L1o0dlNIZ2dLT1JyMjV0eTlJM0NCZTktaW1nLTFfMTc3MTM4Mjg5OTAwMF9uYTFmbl9hR1Z5YnkxamFHRnVkR2xsY2kxellXZDFaVzVoZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eHrULHdWNofdUxeLb2mrztmV5gPKFrP~kb09XWoVXHimf9WXLs8KFup5mSEGw~wgL4QxGXylnugBwIi8t971FEKeIFNpSVMcI0Z86ir3o6tSsdE0ydLcYu5xKM6Q8gd-VUoux1GImyxRtfTZYG-szyTIFTE6Q8U6XT9wmmZ5EccHXj6MayUd0WjRj-Y17WsX2sY5yTO5N6QF9nGXRzDzD22IVHWawJeI1cyloYjlCkHZRHmpHWl5mHA88pgnLyiZ8AbHpBQ9V~w1iCCFB73M6FI0l2YhwE~4tiZM~YiEiVodjFY~xIjYYxfCnLEbG7D1nG7uIYMt3RClB5DqtHiXvQ__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="container relative z-10 text-white py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              Vous perdez de l'argent sur vos chantiers.
              <br />
              <span className="text-primary">On vous montre où.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-8 text-gray-200">
              Audit opérationnel 500$ pour entrepreneurs en construction au
              Saguenay
              <br />
              <span className="text-accent font-bold">
                Garanti 5 000$ d'économies ou remboursé
              </span>
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-2xl hover:scale-105 transition-transform"
                >
                  Réserver mon audit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Réserver votre audit 500$
                  </DialogTitle>
                  <DialogDescription>
                    Remplissez ce formulaire et nous vous contacterons sous 24
                    heures.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Envoyer ma demande
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <p className="mt-6 text-lg text-gray-300">
              <strong className="text-accent">914 entrepreneurs</strong> au
              Saguenay. Vous êtes le prochain ?
            </p>
          </div>
        </div>
        {/* Diagonal cut at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-secondary"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Le Problème Section */}
      <section className="bg-secondary text-white py-24 relative -mt-16">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            Votre carnet de commandes est plein,
            <br />
            <span className="text-primary">
              mais vous perdez du temps et de l'argent
            </span>
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-16 max-w-4xl mx-auto">
            Entre <span className="text-accent font-bold">10 000$</span> et{" "}
            <span className="text-accent font-bold">50 000$</span> perdus par
            projet à cause de ces inefficacités
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((problem, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 p-8 hover:bg-white/15 transition-colors"
              >
                <problem.icon className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-300 text-lg">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
        {/* Diagonal cut at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-background"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* La Solution Section */}
      <section className="py-24 relative -mt-16">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            <span className="text-primary">Pilote de Chantier IA</span>
            <br />
            Votre système de pilotage centralisé en 1 à 2 semaines
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/5CIWctkc6ggc6Tw3V74tug/sandbox/Z4vSHggKORr25ty9I3CBe9-img-2_1771382906000_na1fn_ZGFzaGJvYXJkLW1vY2t1cA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUNJV2N0a2M2Z2djNlR3M1Y3NHR1Zy9zYW5kYm94L1o0dlNIZ2dLT1JyMjV0eTlJM0NCZTktaW1nLTJfMTc3MTM4MjkwNjAwMF9uYTFmbl9aR0Z6YUdKdllYSmtMVzF2WTJ0MWNBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vy1NfbN3uM1Et8YJr9XZ8v7x~utzm80hHCGItQy6O~FMV0lOfiUtDBH3F-b5sJCRg4KDi8YJkgY4oFtb1tjBX9zh7nxeG-dV3sr1oi~PvsJldz140qo6cooHohkK3sWtYounC26AN~ItO7elLX1M5LKz~UTpmuJvQQLvWFoi1nKnubfFDez2G57lahM3GMGZSKmtnOQAojdByqwFpZWolTchef5xnJ~uOhaN~sQl9j5VvkhAA9XgX5jwbdLo-FHbsZcynol0sc7g5TO65ZZcBK0xlI3-mX4wIaAWQ3EayTb~O4tVSw8JCLaqMD92cc~4~Nm7lg1U5EUhfZD0leNRlQ__"
                alt="Dashboard mockup"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Tableau de bord central",
                  description:
                    "Tous vos projets, coûts, échéanciers et tâches en un coup d'œil. Sur mobile et ordinateur.",
                },
                {
                  icon: Users,
                  title: "Communication unifiée",
                  description:
                    "Notifications automatiques aux sous-traitants, documents centralisés, plus de courriels perdus.",
                },
                {
                  icon: CheckCircle2,
                  title: "Rentabilité en temps réel",
                  description:
                    "Alertes instantanées en cas de dépassement. Vous savez toujours où vous en êtes.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Comment <span className="text-primary">ça marche</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/5CIWctkc6ggc6Tw3V74tug/sandbox/Z4vSHggKORr25ty9I3CBe9-img-3_1771382904000_na1fn_dGltZWxpbmUtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUNJV2N0a2M2Z2djNlR3M1Y3NHR1Zy9zYW5kYm94L1o0dlNIZ2dLT1JyMjV0eTlJM0NCZTktaW1nLTNfMTc3MTM4MjkwNDAwMF9uYTFmbl9kR2x0Wld4cGJtVXRhV3hzZFhOMGNtRjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KqtHPTrPW2eIJujd3fBt6oew8gGeivzs7sZ3TlAlPUDtkMNjpiNKexPkZAWViF3Y12IJsKes9klZ2jSf2ZaRWQ33--4Ja5dpNWwNMpTjoXyVkdPLNnzI2nr6iNsH05~GmOJ477hR2ttHNhHewwBBu8PHZNinqpw~WazJuctHzRWt285DvaFfQzvlvoaSWwYnHKLjvjaL4klKhqBBXLl1oI3QqClqi3Vie2QCapJHKDEpu~9fh~476nui6RMtIGNBuMgXnr9erZXoJdXh5KLugtHRuAl~GZpFmcQZFMGnrr~Z3bIna~hWt5Wfg9w45nY6HrFlnnO8LOV4UE8wxwLBXw__"
              alt="Timeline"
              className="w-full mb-12"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Audit 500$",
                  description:
                    "2 heures pour identifier les 3 points de friction qui vous coûtent le plus cher. Plan d'action détaillé.",
                  price: "500$",
                },
                {
                  step: "2",
                  title: "Implémentation 3 500$",
                  description:
                    "Système clé en main en 1-2 semaines. Formation de votre équipe incluse.",
                  price: "3 500$",
                },
                {
                  step: "3",
                  title: "Support 1 500$/mois",
                  description:
                    "Optimisation continue, nouvelles automatisations chaque mois, support illimité.",
                  price: "1 500$/mois",
                },
              ].map((step) => (
                <Card key={step.step} className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <p className="text-3xl font-black text-primary">
                    {step.price}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-white font-bold"
                  >
                    Commencer par l'audit
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      Réserver votre audit 500$
                    </DialogTitle>
                    <DialogDescription>
                      Remplissez ce formulaire et nous vous contacterons sous 24
                      heures.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name2">Nom complet</Label>
                      <Input
                        id="name2"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company2">Entreprise</Label>
                      <Input
                        id="company2"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone2">Téléphone</Label>
                      <Input
                        id="phone2"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email2">Email</Label>
                      <Input
                        id="email2"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Envoyer ma demande
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats garantis Section */}
      <section
        className="py-24 relative text-white"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/5CIWctkc6ggc6Tw3V74tug/sandbox/Z4vSHggKORr25ty9I3CBe9-img-4_1771382902000_na1fn_c3RhdHMtYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNUNJV2N0a2M2Z2djNlR3M1Y3NHR1Zy9zYW5kYm94L1o0dlNIZ2dLT1JyMjV0eTlJM0NCZTktaW1nLTRfMTc3MTM4MjkwMjAwMF9uYTFmbl9jM1JoZEhNdFltRmphMmR5YjNWdVpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GQVWfAH26E26l~fFQAsYtUCaCgPPYeCS8lD58rDR7HTDrC2iGMqUuP2JOvLJ16meFZ424dGgJhxABN6GvNdScuMvFM6hNhkwMvkbnixj7W88Eor00EM0vFODHKLHpoaBYW7CRbzO8fZKYuglqZzhRQmtyW8mpZ2aWob-HFX9MK6~6aMdcLZCuN8TkWJ8Y~S2oj7XSrv6gMVHSL~YO3cCXr2fdIOd5htrJICCfzCgkkVAGwmmshxY-n6ayv06XSUMNWzb0BtZxaCEOxCZI5473hNlzgISHnZsQsI~KxBQk-Tzz7Hv-yZ6b1HtNaKOqmcmWYZk8O~qoN3oCfbePqByJg__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="container relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Résultats <span className="text-accent">garantis</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "10h",
                label: "par semaine gagnées",
                description:
                  "Moins de paperasse, plus de temps pour vos projets.",
              },
              {
                number: "+20%",
                label: "de marge bénéficiaire",
                description:
                  "Éliminez les erreurs et les dépassements imprévus.",
              },
              {
                number: "100%",
                label: "de visibilité",
                description:
                  "Vous savez exactement où vous en êtes, à tout moment.",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-7xl md:text-8xl font-black text-accent mb-4">
                  {stat.number}
                </div>
                <div className="text-2xl font-bold mb-2">{stat.label}</div>
                <p className="text-lg text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-accent/20 border-2 border-accent rounded-lg p-8 text-center">
            <Zap className="w-16 h-16 text-accent mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-bold">
              Si on ne trouve pas au moins 5 000$ d'économies potentielles lors
              de l'audit,{" "}
              <span className="text-accent">c'est gratuit.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi maintenant Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
            <span className="text-primary">2025 : Année record.</span>
            <br />
            2026 : Baisse de 7%.
            <br />
            <span className="text-foreground">
              Le moment d'optimiser, c'est maintenant.
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                number: "914",
                label: "employeurs de construction",
                sublabel: "au Saguenay–Lac-Saint-Jean",
              },
              {
                number: "3,1%",
                label: "taux de chômage",
                sublabel: "La main-d'œuvre est rare et chère",
              },
              {
                number: "8,4%",
                label: "du PIB régional",
                sublabel: "Secteur économique majeur",
              },
              {
                number: "-7%",
                label: "baisse prévue en 2026",
                sublabel: "Optimisez avant le ralentissement",
              },
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="text-5xl font-black text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-2xl text-center mt-12 max-w-4xl mx-auto">
            Profitez de l'année record pour optimiser vos opérations et vous
            préparer au ralentissement.{" "}
            <span className="font-bold text-primary">
              Ne laissez pas passer cette opportunité.
            </span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            Questions <span className="text-primary">fréquentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question:
                  "Mes gars ne sont pas techno, est-ce que ça va marcher ?",
                answer:
                  "Oui. Si vos gars savent utiliser Facebook ou envoyer un SMS, ils sauront utiliser ce système. On forme votre équipe en 1-2 heures.",
              },
              {
                question: "Combien de temps ça prend ?",
                answer:
                  "L'audit : 2 heures. L'implémentation : 1 à 2 semaines. Vous voyez les résultats immédiatement.",
              },
              {
                question: "Est-ce que ça remplace mes outils actuels ?",
                answer:
                  "Non, on connecte vos outils existants (comptabilité, courriels) et on ajoute une couche de coordination et d'automatisation.",
              },
              {
                question: "Qu'est-ce qui se passe si ça ne fonctionne pas ?",
                answer:
                  "Si on ne trouve pas au moins 5 000$ d'économies lors de l'audit, c'est gratuit. Après l'implémentation, si vous n'êtes pas satisfait, on vous rembourse.",
              },
              {
                question: "Pourquoi je devrais vous faire confiance ?",
                answer:
                  "On est basé au Saguenay, on connaît les défis locaux. On utilise des outils éprouvés (pas de développement risqué). Et on garantit les résultats.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-bold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Prêt à reprendre le contrôle de vos chantiers ?
          </h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-white text-primary hover:bg-gray-100 font-bold shadow-2xl hover:scale-105 transition-transform mb-6"
              >
                Réserver mon audit 500$
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Réserver votre audit 500$
                </DialogTitle>
                <DialogDescription>
                  Remplissez ce formulaire et nous vous contacterons sous 24
                  heures.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name3">Nom complet</Label>
                  <Input
                    id="name3"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company3">Entreprise</Label>
                  <Input
                    id="company3"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone3">Téléphone</Label>
                  <Input
                    id="phone3"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email3">Email</Label>
                  <Input
                    id="email3"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Envoyer ma demande
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <p className="text-xl">Réponse garantie sous 24 heures</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4">
                Pilote de Chantier IA
              </h3>
              <p className="text-gray-300">
                Optimisation des opérations pour entrepreneurs en construction
                au Saguenay–Lac-Saint-Jean
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>À venir</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>À venir</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Localisation</h4>
              <p className="text-gray-300">
                Saguenay–Lac-Saint-Jean, Québec
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Pilote de Chantier IA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
