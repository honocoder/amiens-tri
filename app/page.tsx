import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Users, Waves, Bike, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section avec plus de caractère */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-25"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              🏊‍♀️ Club fondé en 2009 🚴‍♂️ Plus de 150 membres 🏃‍♂️
            </span>
          </div>

          <h2 className="text-6xl font-black text-slate-800 mb-6 leading-tight">
            L'aventure{" "}
            <span className="text-blue-600 relative">
              triathlon
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
            <br />
            commence ici !
          </h2>

          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Rejoignez notre famille de passionnés à Amiens ! Que vous soyez débutant ou confirmé, nous vous accompagnons
            dans votre progression avec bonne humeur et expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Link href="/nous-rejoindre">
                Rejoindre l'aventure <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-slate-50 bg-transparent"
            >
              <Link href="/entrainements">Découvrir nos entraînements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section disciplines avec style plus organique */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-50 to-white"></div>

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Trois disciplines, une passion</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Waves className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4 text-center">Natation</h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  De la piscine à l'eau libre, perfectionnez votre technique avec nos coachs passionnés. Chaque longueur
                  vous rapproche de vos objectifs !
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    3 séances/semaine
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Bike className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4 text-center">Cyclisme</h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  Routes picardes, home-trainer ou piste cyclable : développez puissance et endurance dans la bonne
                  humeur !
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    2 séances/semaine
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4 text-center">Course à pied</h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  Piste, route ou trail : améliorez votre foulée et votre mental. Chaque pas compte vers la ligne
                  d'arrivée !
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    2 séances/semaine
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section stats avec style plus fun */}
      <section className="py-20 px-4 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Nos chiffres parlent d'eux-mêmes</h3>
            <p className="text-slate-300 text-lg">Une communauté qui grandit et qui performe !</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black mb-2 text-yellow-400">150+</div>
              <div className="text-slate-300 font-medium">Membres actifs</div>
              <div className="text-sm text-slate-400 mt-1">et ça continue !</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black mb-2 text-yellow-400">25</div>
              <div className="text-slate-300 font-medium">Podiums 2024</div>
              <div className="text-sm text-slate-400 mt-1">on vise plus !</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black mb-2 text-yellow-400">6</div>
              <div className="text-slate-300 font-medium">Entraînements/semaine</div>
              <div className="text-sm text-slate-400 mt-1">pour tous les goûts</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black mb-2 text-yellow-400">15</div>
              <div className="text-slate-300 font-medium">Années d'expérience</div>
              <div className="text-sm text-slate-400 mt-1">et toujours motivés !</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section témoignage */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-blue-200 mb-6">"</div>
            <blockquote className="text-2xl text-slate-700 font-medium leading-relaxed mb-8 italic">
              Rejoindre Amiens Triathlon a changé ma vie ! L'ambiance est fantastique, les entraîneurs sont top et j'ai
              découvert des disciplines que je n'aurais jamais osé essayer seule. Maintenant, je ne peux plus m'en
              passer !
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800">Marie, 32 ans</div>
                <div className="text-slate-600">Membre depuis 2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final avec plus de punch */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-5xl font-black text-slate-800 mb-6">Alors, on se lance ?</h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              L'eau vous appelle, le vélo vous tend les bras, vos chaussures de running s'impatientent... Il ne manque
              plus que vous !
            </p>
            <div className="relative inline-block">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all"
              >
                <Link href="/nous-rejoindre">🏊‍♀️ Commencer l'aventure ! 🚴‍♂️</Link>
              </Button>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
