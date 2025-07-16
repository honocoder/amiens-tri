import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Trophy, Heart, Waves, Star, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HistoirePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header avec style cohérent */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center transform rotate-12">
                  <Waves className="w-7 h-7 text-white transform -rotate-12" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Amiens Triathlon</h1>
                <p className="text-xs text-slate-500 font-medium">Nager • Pédaler • Courir</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all">
                Accueil
              </Link>
              <Link
                href="/nous-rejoindre"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Nous rejoindre
              </Link>
              <Link
                href="/resultats"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Nos résultats
              </Link>
              <Link
                href="/entrainements"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Nos entraînements
              </Link>
              <Link
                href="/ecole-triathlon"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                L'école de triathlon
              </Link>
              <Link
                href="/histoire"
                className="text-slate-700 hover:text-blue-600 font-medium border-b-2 border-blue-500"
              >
                Histoire du club
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 font-medium hover:border-b-2 hover:border-blue-500 transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-25"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              📚 Depuis 1985 🏆 Plus de 40 ans d'histoire 🌟
            </span>
          </div>

          <h2 className="text-6xl font-black text-slate-800 mb-6 leading-tight">
            L'histoire d'{" "}
            <span className="text-blue-600 relative">
              Amiens Triathlon
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
          </h2>

          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'histoire de notre club, de ses débuts en 1985 à aujourd'hui, et les moments qui ont marqué notre développement.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Section Le commencement */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Le commencement</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  1985 - Les débuts
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  En 1985, des Amiénois s'initient au triathlon, licenciés au CONADET. Les premières compétitions « distance olympique », 
                  avec 1000 mètres de natation, 40 km de vélo, 10 km de Course à pied sont dominées par le Belge VOLKERT ou DALLENBACH « père ». 
                  Sur le circuit, figurent quelques locaux : Philippe MONNOT, Jacques BELGUIS, Pierre STYCZEN, Fabrice MAISSE, Bruno ROBERT, 
                  Bernard FEVRE, présents à Berck, Reims, Evreux, Rambouillet…
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <Calendar className="w-5 h-5 text-orange-600 mr-2" />
                    1997 - Une année difficile
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    En 1997, la section triathlon fait l'impasse sur l'organisation du triathlon d'Amiens car cela demande beaucoup 
                    d'énergie au club et quelques 120 bénévoles. Cette année marque le départ de quelques athlètes comme Christophe SANNIER, 
                    David ROBART. Amiens ne bénéficie pas d'une structure suffisante pour garder les meilleurs régionaux : pas de participation 
                    aux championnats de France ni au championnat du monde de duathlon pour David…
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                    <Users className="w-5 h-5 text-red-600 mr-2" />
                    1998 - Restructuration
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    En 1998 : 18 licenciés. La section organise un triathlon des jeunes et découverte à St Sauveur. 
                    Cette organisation répond mieux à la dimension de la section. Mais en fin d'année suite au coût de la licence 
                    au sein du club AMIENS NATATION les triathlètes décident de quitter l'AMIENS NATATION, quelques triathlètes 
                    partent sur le club de Beauvais pour un an d'attente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section La création */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">La création</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Calendar className="w-5 h-5 text-green-600 mr-2" />
                  1999 - L'association du CHU
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  En 1999, l'association de Triathlon du CHU d'AMIENS s'affilie à la FFTRI afin de garder quelques triathlètes 
                  sur la capitale régionale et de laisser une année aux triathlètes amiénois pour reconstruire un club autonome.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Trophy className="w-5 h-5 text-green-600 mr-2" />
                  Juin 1999 - Continuité
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  En Juin 99, organisation du triathlon d'Amiens afin de garder la continuité dans les épreuves.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl border-2 border-green-300">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-green-600 mr-2" />
                  21 octobre 1999 - Naissance officielle
                </h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  Le <strong>21 octobre 1999</strong> : une réunion se déroule salle DEWAILLY avec près de 40 athlètes intéressés 
                  par un club sur AMIENS. Un bureau est élu et les statuts sont déposés. 
                  <span className="text-green-700 font-bold"> Le club AMIENS TRIATHLON existe.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Le développement */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Le développement</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  Saison 2000 - Les premiers pas
                </h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>35 Adhérents.</strong> Les entraînements en natation se déroulent soit de manière indépendante soit avec 
                  le partenariat d'Amiens Natation. Pour le vélo, le club se joint le dimanche matin au club dirigé par Christophe VOITIER. 
                  Les entraînements de course à pied se déroulent au stade du campus universitaire.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Trophy className="w-5 h-5 text-purple-600 mr-2" />
                  Saison 2002 - Croissance remarquable
                </h4>
                <div className="text-slate-700 leading-relaxed">
                  <p className="mb-3"><strong>86 licenciés au club, dont 16 féminines.</strong></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>2ème TRIATHLON D'AMIENS, toujours en formule par équipe et découverte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Mise en route d'une équipe fille en D2</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-purple-600 mr-2" />
                  Saison 2003 - Excellence sportive
                </h4>
                <div className="text-slate-700 leading-relaxed">
                  <p className="mb-3"><strong>73 licenciés dont 18 féminines.</strong></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Ouverture d'une section jeunes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>L'équipe fille en Championnat de France des Clubs de division 1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>L'équipe homme en Championnat de France des Clubs de division 2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>3ème TRIATHLON D'AMIENS, toujours en formule par équipe et découverte</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-purple-600 mr-2" />
                  Saison 2004 - Innovation et développement
                </h4>
                <div className="text-slate-700 leading-relaxed">
                  <p className="mb-3"><strong>65 licenciés dont 16 féminines.</strong></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>L'équipe fille est toujours en division 1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>L'équipe homme est vice-championne de Picardie pour la 3ème fois</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>4ème TRIATHLON D'AMIENS, formules découverte, relais, et changement de course : triple super sprint !</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Organisation, à la demande de la FFTri et de la Direction de la Jeunesse et des Sports d'un triathlon exclusivement féminin à la piscine Vallerey, avec l'intervention de Christine HOCQ (marraine du club et finaliste aux J.O. de Sydney)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Organisation d'un relais famille en formule duathlon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Présence du club au salon AGORA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frise chronologique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Frise chronologique</h2>
          <div className="relative">
            {/* Ligne temporelle */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Points de la frise */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1985
                </div>
                <div className="ml-6 bg-blue-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Premiers pas</h4>
                  <p className="text-slate-600 text-sm">Des Amiénois s'initient au triathlon, licenciés au CONADET</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1997
                </div>
                <div className="ml-6 bg-orange-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Période difficile</h4>
                  <p className="text-slate-600 text-sm">Impasse sur l'organisation du triathlon d'Amiens</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1998
                </div>
                <div className="ml-6 bg-red-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Restructuration</h4>
                  <p className="text-slate-600 text-sm">18 licenciés - Départ d'Amiens Natation</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1999
                </div>
                <div className="ml-6 bg-green-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Naissance officielle</h4>
                  <p className="text-slate-600 text-sm">21 octobre - Création d'Amiens Triathlon</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2004
                </div>
                <div className="ml-6 bg-purple-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Développement</h4>
                  <p className="text-slate-600 text-sm">65 licenciés - Équipes en championnats de France</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2024
                </div>
                <div className="ml-6 bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl flex-1">
                  <h4 className="font-semibold text-slate-800">Aujourd'hui</h4>
                  <p className="text-slate-600 text-sm">150+ membres - Plus qu'un club, une famille !</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-6">Vous aussi, écrivez l'histoire du club !</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Plus de 25 ans d'histoire nous ont menés jusqu'ici. Rejoignez-nous pour continuer cette belle aventure !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Link href="/nous-rejoindre" className="inline-flex items-center">
                Rejoindre l'aventure <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Waves className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Amiens Triathlon</h4>
                  <p className="text-slate-400 text-sm">Nager • Pédaler • Courir</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Plus qu'un club, une famille ! Depuis 2009, nous accompagnons les passionnés de triathlon dans la Somme
                avec bonne humeur et expertise.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">IG</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-yellow-400">Navigation</h5>
              <div className="space-y-3">
                <Link href="/nous-rejoindre" className="block text-slate-300 hover:text-white transition-colors">
                  → Nous rejoindre
                </Link>
                <Link href="/entrainements" className="block text-slate-300 hover:text-white transition-colors">
                  → Entraînements
                </Link>
                <Link href="/ecole-triathlon" className="block text-slate-300 hover:text-white transition-colors">
                  → École de triathlon
                </Link>
                <Link href="/histoire" className="block text-slate-300 hover:text-white transition-colors">
                  → Histoire du club
                </Link>
                <Link href="/resultats" className="block text-slate-300 hover:text-white transition-colors">
                  → Résultats
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors">
                  → Contact
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-yellow-400">On vous attend !</h5>
              <div className="space-y-3 text-slate-300 text-sm">
                <p className="flex items-center">
                  <span className="mr-2">📧</span> contact@amiens-triathlon.fr
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span> 06 11 73 21 11
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span> 26 rue Marcel Pagnol, 80480 DURY
                </p>
                <p className="flex items-center">
                  <span className="mr-2">⏰</span> Lun-Sam : 18h-20h30
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Amiens Triathlon - Fait avec ❤️ pour les passionnés de tri !
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}