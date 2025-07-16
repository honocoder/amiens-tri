import { Button } from "@/components/ui/button"
import { Users, Trophy, Calendar, MapPin, Waves, Star, Heart, Target } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EcoleTriathlonPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-25"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              👶 6-13 ans 🏊‍♀️ École Française de Triathlon 🏆
            </span>
          </div>

          <h2 className="text-6xl font-black text-slate-800 mb-6 leading-tight">
            L'École de{" "}
            <span className="text-blue-600 relative">
              Triathlon
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
          </h2>

          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Une formation adaptée pour les jeunes triathlètes de 6 à 13 ans, avec une pédagogie spécialisée et un encadrement de qualité.
          </p>
        </div>
      </section>

      {/* Section principale sur l'École de Triathlon */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              La pratique des jeunes
            </h3>
            
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed mb-12">
              <p className="text-xl mb-6">
                La Fédération Française de Triathlon a développé de nombreux dispositifs pour accompagner les jeunes 
                dans leur pratique et leur progression en club et en compétition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">Écoles de Triathlon</h4>
                <p className="text-slate-600 leading-relaxed">
                  Les Écoles de Triathlon sont des clubs labellisés de 1 à 3 étoiles proposant des dispositifs 
                  spécifiques à destination des jeunes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border-l-4 border-green-500">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">Pédagogie adaptée</h4>
                <p className="text-slate-600 leading-relaxed">
                  Une pédagogie adaptée à chaque âge et à chaque niveau, avec un encadrement spécialisé 
                  et des manifestations sportives dédiées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section École Française de Triathlon */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              École Française de Triathlon
            </h3>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg mb-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">6-13 ans</h4>
                  <p className="text-slate-600">Âge ciblé</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Progression</h4>
                  <p className="text-slate-600">En s'amusant</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Depuis 2014</h4>
                  <p className="text-slate-600">Lancée par la F.F.TRI</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p className="text-lg mb-6">
                  Inscrire ses enfants dans une école de triathlon c'est leur assurer une bonne structure 
                  et un certain niveau d'accueil pour l'entraînement.
                </p>
                
                <p className="text-lg mb-6">
                  Développée par la F.F.TRI., l'École Française de Triathlon (EFT) est une démarche d'enseignement 
                  destinée en priorité aux enfants âgés de 6 à 13 ans.
                </p>
                
                <p className="text-lg mb-6">
                  Cette démarche prend en compte les spécificités de la discipline et s'adapte à l'âge de l'enfant. 
                  Elle permet aux jeunes d'apprendre et de progresser en s'amusant.
                </p>
                
                <p className="text-lg">
                  Lancée en 2014, l'École Française de Triathlon est destinée à devenir la colonne vertébrale 
                  de la formation des jeunes triathlètes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Class Tri */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-slate-800 mb-8 text-center">
              Le Class Tri
            </h3>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border-l-4 border-orange-500 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">Outil d'animation et de détection</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Le Class Triathlon est un outil d'animation et de détection des jeunes triathlètes à potentiel 
                    mis en place par la F.F.TRI.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Il permet d'évaluer le niveau des jeunes (benjamins, minimes, cadets, juniors) à partir 
                    de performances chronométriques réalisées en natation et en course à pied.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">À Amiens</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Amiens Triathlon organise depuis plusieurs années un Class Tri grâce aux équipements 
                    de la ville d'Amiens comme le stade Urbain Wallet et le Nautilus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl text-center">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Participation</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                Tous les clubs affiliés à la F.F.TRI. ayant un effectif Jeune peuvent participer au Class Tri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Des questions sur notre école de triathlon ?</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            N'hésitez pas à nous contacter si vous voulez de plus amples renseignements sur nos programmes 
            pour les jeunes triathlètes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}