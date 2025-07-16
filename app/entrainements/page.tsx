import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, Waves, Bike, Zap, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Entrainements() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
            Nos{" "}
            <span className="text-blue-600 relative">
              entraînements
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 opacity-30 transform -skew-x-12"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre planning d'entraînements adaptés à tous les niveaux dans les trois disciplines du triathlon.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Section Natation */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Natation</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-slate-600 mb-4">
                Le club d'Amiens Triathlon propose <strong>5 créneaux de natation au Coliseum</strong> :
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-800">Lundi</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        7h - 8h30
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        19h45 - 21h15
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-800">Mercredi</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        19h30 - 21h00
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-slate-800">Vendredi</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        7h - 8h30
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        19h45 - 21h15
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-slate-700">
                Des lignes de niveau sont établies afin de laisser la possibilité à chacun de trouver son rythme.
              </p>
            </div>
          </div>
        </section>

        {/* Section Vélo */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                <Bike className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Vélo</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-slate-800">Weekend</span>
                  </div>
                  <p className="text-slate-700">
                    Deux sorties vélos sont généralement proposées le week-end, une le samedi et le dimanche.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-slate-800">Informations</span>
                  </div>
                  <p className="text-slate-700">
                    Les sorties sont variables en fonction de la météo et des objectifs. Les points de rendez-vous ainsi que les horaires sont précisés en communication interne.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Course à pied */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-orange-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Course à pied</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-slate-600 mb-4">
                Les entraînements de course à pied alternent des séances de fond, de seuil et de fractionné.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-slate-800">Mardi</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        18h30 - 20h
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        Parc du grand marais ou à la Hotoie
                      </div>
                      <p className="text-xs text-slate-500 mt-2">Selon les saisons</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="font-semibold text-slate-800">Jeudi</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2" />
                        18h30 - 20h
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        Stade Urbain Wallet
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-orange-100 p-4 rounded-xl mb-4">
              <p className="text-slate-700">
                Les lieux précis des entraînements seront communiqués chaque semaine sur le groupe.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
              <p className="text-slate-700">
                Le Club s'entraîne avec l'entraîneur <strong>My Tribe</strong>, les séances étant disponibles sur l'application <strong>Ido</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section École de triathlon */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-800">L'école de triathlon</h3>
                <Link href="/ecole-triathlon" className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center mt-1">
                  Plus d'informations <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Jeunes (à partir de 6 ans)</h4>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Natation</h5>
                    <p className="text-sm text-slate-600">
                      Les jeunes passent un test de natation avec le club d'Amiens Natation qui déterminera leurs horaires.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Course à pied et vélo</h5>
                    <div className="text-sm text-slate-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Mercredi 14h - 15h30
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Parc du grand marais
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Les changements exceptionnels sont indiqués sur le groupe Facebook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">Adolescents</h4>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Natation</h5>
                    <p className="text-sm text-slate-600">
                      Les adolescents passent eux aussi un test de natation.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Course à pied</h5>
                    <div className="text-sm text-slate-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Mardi et jeudi 18h30
                      </div>
                      <p className="text-xs text-slate-500">En même temps que les adultes</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Enchaînement Vélo/Course</h5>
                    <div className="text-sm text-slate-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Samedi 10h
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Camon
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Ils peuvent aussi se joindre à la sortie vélo du dimanche avec les adultes (en fonction du niveau)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-3xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-6">Prêt à vous entraîner avec nous ?</h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Rejoignez nos entraînements et progressez dans une ambiance conviviale et professionnelle !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nous-rejoindre"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-slate-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Rejoindre le club
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Poser une question
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}